import * as ec2 from "@aws-cdk/aws-ec2";
import { NodejsFunction } from "@aws-cdk/aws-lambda-nodejs";
import * as cdk from "@aws-cdk/core";
import { resolve } from "path";

export class AwsNodeLambdaTestStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "test");

    // vpcを指定すると必ずRangeError: Maximum call stack size exceededになる
    // 1.76.0時点のバグ?
    new NodejsFunction(this, "NodejsFunction", {
      entry: resolve("./src/lambda.ts"),
      handler: "handler",
      minify: true,
      vpc,
    });
  }
}
