import {AxiosResponse} from 'axios';
import makeRequest from '../request';
import Catalog from '../../types/api/catalog';

export async function getCatalog(): Promise<AxiosResponse<Catalog[]>> {
  return await makeRequest('GET', '/api/catalog');
}

