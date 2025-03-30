import { httpAuth, loginApi, registerApi } from "@/shared/http";
import { AuthJWT, LoginSchema } from "../model";

export const refreshTokenPost = async () => {};

export const registerPost = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  return httpAuth
    .post(registerApi(), {
      body: JSON.stringify(data),
    })
    .json();
};

export const loginPost = async (data: LoginSchema) => {
  return httpAuth
    .post<AuthJWT>(loginApi(), {
      body: JSON.stringify(data),
    })
    .json();
};
