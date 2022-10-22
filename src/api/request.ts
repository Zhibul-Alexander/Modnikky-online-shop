import axios, {AxiosResponse, Method} from 'axios';
import config from './config';

export default async function makeRequest(
  method: Method,
  path: string,
  data?: any,
  headers?: any,
): Promise<AxiosResponse> {
  try {
    return await axios({
      url: `${config.SERVER_PROTO}://${config.SERVER_URL}${path}`,
      method,
      data,
      headers,
    });
  } catch (err: any) {
    if (err.status === 401 || err.message.includes('401')) {
      window.location.href = '/';
    }
    throw err;
  }
}
