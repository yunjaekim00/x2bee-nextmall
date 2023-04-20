import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export const axiosConfig = (): { api: AxiosInstance } => {
  const api = axios.create({
    headers: {
      "Content-Type": "application/json",
    },
  });

  return { api };
};

export const useAxios = <T>(
  url: string,
  method: AxiosRequestConfig["method"] = "get",
  params?: any,
  body?: any
): Promise<T> => {
  const { api } = axiosConfig();

  return new Promise((resolve, reject) => {
    api({
      url,
      method,
      params,
      data: body,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
