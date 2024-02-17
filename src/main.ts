import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: "http://localhost:3000/" });
  app.setGlobalPrefix("api");
  await app.listen(3000);
}
bootstrap();
