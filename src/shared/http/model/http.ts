import { getAuthJWT } from "@/shared/auth";
import { refreshTokenPost } from "@/shared/auth/api";
import { LocalStorageKey } from "@/shared/local-storage";
import { toLogin } from "@/shared/navigation";
import ky from "ky";

const AUTH_TOKEN = LocalStorageKey.AUTH_TOKEN;

export const http = ky;

export const httpAuth = ky.extend({
  hooks: {
    beforeRequest: [
      async (request) => {
        const jwt = getAuthJWT();
        if (jwt?.accessToken) {
          request.headers.set("Authorization", `Bearer ${jwt.accessToken}`);
        }
      },
    ],
    afterResponse: [
      async (request, __, response) => {
        if (response.status === 401) {
          const jwt = getAuthJWT();
          if (jwt?.refreshToken) {
            try {
              await refreshTokenPost();
              return httpAuth(request);
            } catch {
              console.error("refresh token failed");
            }
          }
          localStorage.removeItem(AUTH_TOKEN);
          window.location.href = toLogin();
        }
      },
    ],
  },
});
