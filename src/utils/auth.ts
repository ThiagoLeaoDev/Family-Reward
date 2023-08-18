import { User } from "../interfaces/user";

export function setUserLocalStorage(user: User | null) {
  localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage(): User | null {
  const user = localStorage.getItem("u");
  return user ? JSON.parse(user) : null;
}
