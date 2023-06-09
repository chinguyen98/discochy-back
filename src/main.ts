import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';
import { ResponseInterceptor } from './shared/interceptors/response.interceptor';

const corsWhiteList = ['http://localhost:3000', 'https://coliamai.uk', 'http://127.0.0.1:3000'];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.enableCors({
    origin: (origin, callback) => {
      console.log({ origin, callback });
      if (!origin || corsWhiteList.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS!!!!'));
      }
    },
  });

  await app.listen(3000);
}
bootstrap();
