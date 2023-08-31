import { v4 as uuid } from "uuid";
import { User } from "../interfaces/user";

type SignInRequestData = {
  email: string;
  password: string;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount));

export async function signInRequest(data: SignInRequestData): Promise<{ token: string, user: User }> {
  console.log(data);
  await delay();
  return {
    token: uuid(),
    user: {
      name: "Thiago",
      email: "thiago.leao@gmail.com",
      image: "https://github.com/ThiagoLeaoDev.png",
      role: "user",
      balance: 0
    }
  };
}

export async function recoverUserInformation() {
  await delay();
  return {
    user: {
      name: "Thiago",
      email: "thiago.leao@gmail.com",
      image: "https://github.com/ThiagoLeaoDev.png",
      role: "user",
      balance: 0
    }
  };
}
