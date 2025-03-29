import { LocalStorageKey } from "@/shared/local-storage";
import { toLogin } from "@/shared/navigation";
import ky from "ky";

const AUTH_TOKEN = LocalStorageKey.AUTH_TOKEN;

export const http = ky;

export const httpAuth = ky.extend({
  hooks: {
    beforeRequest: [
      async (request) => {
        const token = localStorage.getItem(AUTH_TOKEN);
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
    afterResponse: [
      async (_, __, response) => {
        if (response.status === 401) {
          localStorage.removeItem(AUTH_TOKEN);
          window.location.href = toLogin();
        }
      },
    ],
  },
});
