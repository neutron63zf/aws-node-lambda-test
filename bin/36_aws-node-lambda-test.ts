#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { 36AwsNodeLambdaTestStack } from '../lib/36_aws-node-lambda-test-stack';

const app = new cdk.App();
new 36AwsNodeLambdaTestStack(app, '36AwsNodeLambdaTestStack');
