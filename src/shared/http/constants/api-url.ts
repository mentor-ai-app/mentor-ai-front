import { API_URL } from "@/shared/environment";

export const loginApi = () => `${API_URL}/users/login`;
export const registerApi = () => `${API_URL}/users/register`;
