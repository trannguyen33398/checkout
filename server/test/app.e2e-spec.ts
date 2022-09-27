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

