import { Injectable } from "@nestjs/common";
import { UserType } from "src/types";

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

  create(user: UserType) {
    const id = this.users.length + 2;
    const newUser = { id: id, ...user };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updatedUser: UserType) {
    const user = this.findOne(id);
    if (user) {
      const updateUser = { ...user, ...updatedUser };
      this.users.push(updateUser);
      return updateUser;
    } else {
      return { error: "not found" };
    }
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
