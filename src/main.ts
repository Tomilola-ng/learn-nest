import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";
import { MyLoggerService } from "./my-logger/my-logger.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.useLogger(app.get(MyLoggerService));
  app.enableCors({ origin: "*" });
  app.setGlobalPrefix("api");
  await app.listen(3000);
}
bootstrap();
