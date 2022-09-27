import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckoutModule } from './modules/checkout/checkout.module';

@Module({
  imports: [CheckoutModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
