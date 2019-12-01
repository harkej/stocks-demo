import { get } from '../utils/remote';

export function searchStocks(queryParams) {
  console.log(process.env)
  const param = {
    url: process.env.REACT_APP_API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    queryParams,
  };

  return get(param);
}
