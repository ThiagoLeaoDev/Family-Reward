import backendRequest from "./";

import { User } from "../interfaces/user";

export const createUser = (data: User): Promise<User> => {
  return backendRequest({
    endpoint: "/users",
    method: "post",
    data,
  });
};
