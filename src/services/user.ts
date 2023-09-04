import backendRequest from "./";

import { User } from "../interfaces/user";

type SignInRequestData = {
  email: string;
  password: string;
}

export const createUser = (data: User): Promise<User> => {
  return backendRequest({
    endpoint: "/users",
    method: "post",
    data,
  });
};

export const loginUser = (data: SignInRequestData): Promise<{ token: string, user: User }> => {
  return backendRequest({
    endpoint: "/users/login",
    method: "post",
    data,
  });
};

export const readUser = (): Promise<User> => {
  return backendRequest({
    endpoint: "/users",
    method: "get",
  });
};
