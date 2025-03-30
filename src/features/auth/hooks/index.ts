import { loginPost, registerPost } from "@/shared/auth/api";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation({
    mutationFn: loginPost,
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: registerPost,
  });
};
