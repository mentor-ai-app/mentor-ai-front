import { LocalStorageKey } from "@/shared/local-storage";
import { AuthJWT } from "../model";

export const getAuthJWT = (): AuthJWT | null => {
  return JSON.parse(localStorage.getItem(LocalStorageKey.AUTH_TOKEN) || "null");
};

export const setAuthJWT = (token: AuthJWT) => {
  localStorage.setItem(LocalStorageKey.AUTH_TOKEN, JSON.stringify(token));
};
