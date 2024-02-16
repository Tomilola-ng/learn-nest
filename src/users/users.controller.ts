import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserType } from "src/types";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // GET /users or /users?role=value
  findAll(@Query("role") role?: "INTERN" | "ADMIN" | "ENGINEER") {
    return this.usersService.findAll(role);
  }

  @Get(":id") // GET /users/:id
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Post() //  POST /users
  create(@Body() user: UserType) {
    return this.usersService.create(user);
  }

  @Patch(":id") // PATCH /users/:id
  update(@Param("id") id: string, @Body() userUpdate: UserType) {
    return this.usersService.update(+id, userUpdate);
  }

  @Delete(":id") // DELETE /users/:id
  delete(@Param("id") id: string) {
    return this.usersService.delete(+id);
  }
}
