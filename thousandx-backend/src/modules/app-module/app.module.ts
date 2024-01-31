import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { DateInterceptor } from '../common/DateInterceptor';
// import { FileUrlInterceptor } from '../common/FileUrlInterceptor';
// import { AuthModule } from '../auth/auth.module';
// import { MongooseModule } from '@nestjs/mongoose';
// import CommonConfig from '../common/CommonConfig';
// import { UserModule } from '../user/user.module';
// import { FoodModule } from '../food/food.module';
// import { MealModule } from '../meal/meal.module';
// import { AdminModule } from '../admin/admin.module';
// import { MasterDataModule } from '../admin/masterdata/master-data.module';
// import { MasterDataModule as MdModule } from '../masterdata/masterdata.module';
// import { FileModule } from '../files-module/file.module';
// import { SyncModule } from '../sync/sync.module';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import * as path from 'path';

@Module({
  imports: [
    // MongooseModule.forRoot(CommonConfig.dbUrl, { dbName: CommonConfig.dbName }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      viewEngine: 'none' as any,
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [{ use: QueryResolver, options: ['lang'] }, AcceptLanguageResolver],
    }),
    // AuthModule,
    // UserModule,
    // FoodModule,
    // MealModule,
    // AdminModule,
    // MasterDataModule,
    // MdModule,
    // FileModule,
    // SyncModule,
  ],
  controllers: [AppController],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: FileUrlInterceptor,
    // },
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: DateInterceptor,
    // },
    AppService,
  ],
})
export class AppModule {}
