import type { AWS } from '@serverless/typescript';

import api from '@functions/api';

const serverlessConfiguration: AWS = {
  service: 'thousandx-backend',
  frameworkVersion: '3',
  plugins: ['serverless-dotenv-plugin', 'serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs20.x',
    region: 'ap-southeast-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: ['sqs:*', 'ses:*', 's3:*'],
        Resource: '*',
      },
    ],
  },
  // import the function via paths
  functions: { api },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: [
        'aws-sdk',
        'cache-manager',
        '@nestjs/websockets',
        '@nestjs/microservices',
        'class-transformer/storage',
        'pnpapi',
      ],
      target: 'node20',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
      plugins: 'plugins.js',
    },
  },
};

module.exports = serverlessConfiguration;
