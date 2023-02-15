import type {QueryOptions, Question, QuestionPaginator, ReplyQuestion,} from '@/types';
import {QuestionQueryOptions} from '@/types';
import {API_ENDPOINTS} from './api-endpoints';
import {crudFactory} from './crud-factory';
import {HttpClient} from './http-client';

export const questionClient = {
  ...crudFactory<Question, QueryOptions, ReplyQuestion>(
    API_ENDPOINTS.QUESTIONS
  ),
  get({ id }: { id: string }) {
    return HttpClient.get<Question>(`${API_ENDPOINTS.QUESTIONS}/${id}`);
  },
  paginated: ({ type, shop_id, ...params }: Partial<QuestionQueryOptions>) => {
    return HttpClient.get<QuestionPaginator>(API_ENDPOINTS.QUESTIONS, {
      searchJoin: 'and',
      with: 'product;user',
      ...params,
      search: HttpClient.formatSearchParams({ type, shop_id }),
    });
  },
};
