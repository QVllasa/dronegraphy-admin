import {ApproveShopInput, Attachment, QueryOptions, Shop, ShopInput, ShopPaginator, ShopQueryOptions,} from '@/types';
import {API_ENDPOINTS} from './api-endpoints';
import {HttpClient} from './http-client';
import {crudFactory} from './crud-factory';

export const shopClient = {
    ...crudFactory<Shop, QueryOptions, ShopInput>(API_ENDPOINTS.SHOPS),
    get({id}: { id?: string }) {
        console.log("get shop: ", id)
        return HttpClient.get<Shop>(`${API_ENDPOINTS.SHOPS}/${id}`);
    },
    paginated: ({name, ...params}: Partial<ShopQueryOptions>) => {
        return HttpClient.get<ShopPaginator>(API_ENDPOINTS.SHOPS, {
            searchJoin: 'and',
            ...params,
            search: HttpClient.formatSearchParams({name}),
        });
    },
    approve: (variables: ApproveShopInput) => {
        return HttpClient.post<any>(API_ENDPOINTS.APPROVE_SHOP, variables);
  },
  disapprove: (variables: { id: string }) => {
    return HttpClient.post<{ id: string }>(
        API_ENDPOINTS.DISAPPROVE_SHOP,
        variables
    );
  },
  logo: (input: File) => {
    let formData = new FormData();
    console.log("input: ", input)
    formData.append('attachment', input);
    console.log("formdata: ", formData)
    return HttpClient.post<Attachment>(API_ENDPOINTS.SHOP_LOGO, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  cover: (input: File) => {
    let formData = new FormData();
    console.log("input: ", input)
    formData.append('attachment', input);
    console.log("formdata: ", formData)
    return HttpClient.post<Attachment>(API_ENDPOINTS.SHOP_LOGO, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
