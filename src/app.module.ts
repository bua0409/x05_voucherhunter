import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VouchersModule } from './vouchers/vouchers.module';
import { MongooseModule } from "@nestjs/mongoose";
@Module({
  imports: [VouchersModule,MongooseModule.forRoot('mongodb+srv://hung:W1RrDqdFnSINsW6b@cluster0.duga8j2.mongodb.net/nestjs-demo?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
