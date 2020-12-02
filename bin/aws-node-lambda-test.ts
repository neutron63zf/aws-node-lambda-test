#!/usr/bin/env node
import * as cdk from "@aws-cdk/core";
import { AwsNodeLambdaTestStack } from "~/lib/aws-node-lambda-test-stack";

const app = new cdk.App();
new AwsNodeLambdaTestStack(app, "AwsNodeLambdaTestStack");
