export const LocalStorageKey = {
  AUTH_TOKEN: "token",
};

export const setAuthToken = (token: string) => {
  localStorage.setItem(LocalStorageKey.AUTH_TOKEN, token);
};

export const getAuthToken = () => {
  return localStorage.getItem(LocalStorageKey.AUTH_TOKEN);
};
