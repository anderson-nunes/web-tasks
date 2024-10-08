import Cookies from "js-cookie";
import fetchApi from "./customFetch";

export const login = async (body: any) => {
  const response = await fetchApi("users/login", {
    body,
    method: "POST",
  });

  Cookies.set("user_id", response.id);
  Cookies.set("user_name", response.name);
  Cookies.set("user_email", response.email);
  Cookies.set("user_token", response.token);

  return response;
};

export const signup = async (body: any) => {
  const response = await fetchApi("users/signup", {
    body,
    method: "POST",
  });

  return response;
};
