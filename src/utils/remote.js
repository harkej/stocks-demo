import { stringify } from "query-string";

export const get = async ({ url = "", headers = {}, queryParams = {} }) => {
  const stringifiedQueryParams = stringify(queryParams, {
    arrayFormat: "bracket"
  });
  const API_URL = `${url}${stringifiedQueryParams &&
    `?${stringifiedQueryParams}`}`;
  return fetch(API_URL, {
    method: "GET",
    headers
  });
};
