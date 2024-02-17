import { AppModule } from "./app.module";
import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AllExceptionsFilter } from "./all-exceptions-filters";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  app.enableCors({ origin: "*" });
  app.setGlobalPrefix("api");
  await app.listen(3000);
}
bootstrap();
