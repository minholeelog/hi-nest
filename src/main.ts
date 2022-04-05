import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 3030 || process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () =>
    console.log(`Server listenting on http://localhost:${PORT}`),
  );
}
bootstrap();
