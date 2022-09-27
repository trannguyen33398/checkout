import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import  request from 'supertest';
import { AppModule } from './../src/app.module';
import { CheckoutService } from './../src/modules/checkout/checkout.service';
import { CheckoutModule } from '../src/modules/checkout/checkout.module';
import { item } from '../src/interface';
describe('AppController (e2e)', () => {
  let app: INestApplication;
  
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CheckoutModule],
    })  
    .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });


  it('/ (POST)', () => {
    const body = {
      customer:10003,
      items: [{"cakeType":1,"amount":3},{"cakeType":3,"amount":1}]
    }
    return request(app.getHttpServer())
      .post('/checkout/calc')
      .send({
        "customer":10003,
        "items": [{"cakeType":1,"amount":3},{"cakeType":3,"amount":1}]
    })
      .expect(201)
     
  });
});
// import { Test, TestingModule } from '@nestjs/testing';
// import { INestApplication } from '@nestjs/common';
// import { CheckoutController } from './../src/modules/checkout/checkout.controller';
// import { CheckoutService } from './../src/modules/checkout/checkout.service';
// import request from 'supertest';
// import { AppModule } from './../src/app.module';
// import { AppController } from './../src/app.controller';
// import { AppService } from './../src/app.service';

// describe('CheckoutController', () => {
//   let checkoutController: CheckoutController;
//   let spyService: CheckoutService;
//   beforeEach(async () => {
//     const ApiServiceProvider = {
//       provide: CheckoutService,
//       useFactory: () => ({
//         calc: jest.fn(() => 45.97),
//       }),
//     };
//     const app: TestingModule = await Test.createTestingModule({
//       controllers: [CheckoutController],
//       providers: [ ApiServiceProvider],
//     }).compile();
//     checkoutController = app.get<CheckoutController>(CheckoutController);
//     spyService = app.get<CheckoutService>(CheckoutService);
//   });
  
//   // describe('calc', () => {
//   //   it('should calculate the total bill', async () => {
//   //     const body = {
//   //       "customer":"MiCROSOFT",
//   //       "items": [{"cakeType":1,"amount":3},{"cakeType":3,"amount":1}]
//   //   }
//   //     checkoutController.check(body);
//   //     expect(spyService.sum(body['items'],parseInt(body['customer']))).toHaveBeenCalled();
//   //   });
//   // });

//   describe('calc', () => {
//     it('should calculate the total bill', async () => {
//       const body = {
//         "customer":"MiCROSOFT",
//         "items": [{"cakeType":1,"amount":3},{"cakeType":3,"amount":1}]
//     }
//       checkoutController.check(body);
//       expect(spyService.sum(body['items'],parseInt(body['customer']))).toBe(45.97);
//     });
//   });
  
// });
