import {Coupon, CouponInput, CouponPaginator, CouponQueryOptions, VerifyCouponInputType,} from '@/types';
import {API_ENDPOINTS} from './api-endpoints';
import {crudFactory} from './crud-factory';
import {HttpClient} from './http-client';

export const couponClient = {
  ...crudFactory<Coupon, any, CouponInput>(API_ENDPOINTS.COUPONS),
  get({ code, language }: { code: string; language: string }) {
    return HttpClient.get<Coupon>(`${API_ENDPOINTS.COUPONS}/${code}`, {
      language,
    });
  },
  paginated: ({ code, ...params }: Partial<CouponQueryOptions>) => {
    return HttpClient.get<CouponPaginator>(API_ENDPOINTS.COUPONS, {
      searchJoin: 'and',
      ...params,
      search: HttpClient.formatSearchParams({ code }),
    });
  },

  verify: (input: VerifyCouponInputType) => {
    {
      return HttpClient.post<VerifyCouponInputType>(
        API_ENDPOINTS.VERIFY_COUPONS,
        input
      );
    }
  },
};
