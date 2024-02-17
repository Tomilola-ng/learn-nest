import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hey there, I am Tomi. visit `/employees` route to get started.";
  }
}
