import {Author, AuthorPaginator, AuthorQueryOptions, CreateAuthorInput, QueryOptions,} from '@/types';
import {API_ENDPOINTS} from './api-endpoints';
import {crudFactory} from './crud-factory';
import {HttpClient} from './http-client';

export const AuthorClient = {
  ...crudFactory<Author, QueryOptions, CreateAuthorInput>(
    API_ENDPOINTS.AUTHORS
  ),
  paginated: ({
    type,
    name,
    is_approved,
    ...params
  }: Partial<AuthorQueryOptions>) => {
    return HttpClient.get<AuthorPaginator>(API_ENDPOINTS.AUTHORS, {
      searchJoin: 'and',
      ...params,
      search: HttpClient.formatSearchParams({ type, name, is_approved }),
    });
  },
};
