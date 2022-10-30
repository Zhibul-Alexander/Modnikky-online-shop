import {AxiosResponse} from 'axios';
import makeRequest from '../request';
import Subscribe from '../../types/api/subscribe';

export async function subscribe(email: string): Promise<AxiosResponse<Subscribe>> {
  return await makeRequest('POST', '/api/subscription', {email: email});
}

