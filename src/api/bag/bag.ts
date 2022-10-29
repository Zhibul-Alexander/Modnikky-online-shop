import {AxiosResponse} from 'axios';
import makeRequest from '../request';
import Bag from '../../types/api/bag';

export async function checkoutCart(products: string[]): Promise<AxiosResponse<Bag[]>> {
  return await makeRequest('POST', '/api/cart', {products: products});
}

