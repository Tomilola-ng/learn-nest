import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: "Tomilola Oluwafemi",
      email: "Sincere@april.biz",
      role: "ENGINEER",
    },
    {
      id: 2,
      name: "Muyiwa Obaremi",
      email: "Shanna@melissa.tv",
      role: "INTERN",
    },
    {
      id: 3,
      name: "Ismyil Muhammed",
      email: "Nathan@yesenia.net",
      role: "ENGINEER",
    },
    {
      id: 4,
      name: "Aishat Adedare",
      email: "Julianne.OConner@kory.org",
      role: "INTERN",
    },
    {
      id: 5,
      name: "Saheed Balogun",
      email: "Lucio_Hettinger@annie.ca",
      role: "ADMIN",
    },
  ];

  findAll(role?: "INTERN" | "ADMIN" | "ENGINEER") {
    if (role) return this.users.filter((user) => user.role === role);
    else return this.users;
  }

  findOne(id: number) {
    return this.users.filter((user) => user.id === id);
  }

  create(user: CreateUserDto) {
    const id = this.users.length + 2;
    const newUser = { id: id, ...user };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updatedUser: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
