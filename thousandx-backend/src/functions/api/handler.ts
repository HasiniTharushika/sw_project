import serverlessExpress from '@vendia/serverless-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../modules/app-module/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import bodyParser from 'body-parser';
import cors from 'cors';

let cachedServer;

export const main = async (event, context) => {
  if (event.path === '/api') {
    event.path = '/api/';
  }

  if (event.path === '/api/handler.js') {
    return {
      isBase64Encoded: false,
      statusCode: 404,
    };
  }

  if (!cachedServer) {
    console.log('No Cache server');
    const expressApp = express();
    const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
    nestApp.use(
      bodyParser.urlencoded({
        extended: true,
      }),
    );
    nestApp.use(bodyParser.json());
    nestApp.use(cors({ origin: '*' }));
    nestApp.setGlobalPrefix('api/v1');
    nestApp.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    // nestApp.use(eventContext());
    const config = new DocumentBuilder()
      .setTitle('ThousandX')
      .setDescription('ThousandX API')
      .setVersion('1.0')
      .addServer('http://localhost:4000/dev', 'Development')
      // .addServer(CommonConfig.apiBaseUrl, CommonConfig.apiEnvironmentName)
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(nestApp, config);
    SwaggerModule.setup('api', nestApp, document);
    nestApp.enableVersioning({
      type: VersioningType.URI,
    });
    await nestApp.init();
    cachedServer = serverlessExpress({ app: expressApp });
  } else {
    console.log('Cache server exist');
  }
  return cachedServer(event, context);
};
