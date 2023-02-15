import {
    Attachment,
    AuthResponse,
    BlockUserInput,
    ChangePasswordInput,
    ForgetPasswordInput,
    LoginInput,
    MakeAdminInput,
    RegisterInput,
    ResetPasswordInput,
    UpdateUser,
    User,
    UserPaginator,
    UserQueryOptions,
    VerifyForgetPasswordTokenInput,
    WalletPointsInput,
} from '@/types';
import {API_ENDPOINTS} from './api-endpoints';
import {HttpClient} from './http-client';

export const userClient = {
  me: () => {
    return HttpClient.get<User>(API_ENDPOINTS.ME);
  },
  login: (variables: LoginInput) => {
    return HttpClient.post<AuthResponse>(API_ENDPOINTS.LOGIN, variables);
  },
  logout: () => {
    return HttpClient.post<any>(API_ENDPOINTS.LOGOUT, {});
  },
  register: (variables: RegisterInput) => {
    return HttpClient.post<AuthResponse>(API_ENDPOINTS.REGISTER, variables);
  },
  update: ({ id, input }: { id: string; input: UpdateUser }) => {
    return HttpClient.put<User>(`${API_ENDPOINTS.USERS}/${id}`, input);
  },
  changePassword: (variables: ChangePasswordInput) => {
    return HttpClient.post<any>(API_ENDPOINTS.CHANGE_PASSWORD, variables);
  },
  forgetPassword: (variables: ForgetPasswordInput) => {
    return HttpClient.post<any>(API_ENDPOINTS.FORGET_PASSWORD, variables);
  },
  verifyForgetPasswordToken: (variables: VerifyForgetPasswordTokenInput) => {
    return HttpClient.post<any>(
      API_ENDPOINTS.VERIFY_FORGET_PASSWORD_TOKEN,
      variables
    );
  },
  resetPassword: (variables: ResetPasswordInput) => {
    return HttpClient.post<any>(API_ENDPOINTS.RESET_PASSWORD, variables);
  },
  makeAdmin: (variables: MakeAdminInput) => {
    return HttpClient.post<any>(API_ENDPOINTS.MAKE_ADMIN, variables);
  },
  block: (variables: BlockUserInput) => {
    return HttpClient.post<any>(API_ENDPOINTS.BLOCK_USER, variables);
  },
  unblock: (variables: BlockUserInput) => {
    return HttpClient.post<any>(API_ENDPOINTS.UNBLOCK_USER, variables);
  },
  addWalletPoints: (variables: WalletPointsInput) => {
    return HttpClient.post<any>(API_ENDPOINTS.ADD_WALLET_POINTS, variables);
  },
  fetchUsers: ({ name, ...params }: Partial<UserQueryOptions>) => {
      return HttpClient.get<UserPaginator>(API_ENDPOINTS.USERS, {
          searchJoin: 'and',
          with: 'wallet',
          ...params,
          search: HttpClient.formatSearchParams({name}),
      });
  },
    fetchUser: ({id}: { id: string }) => {
        return HttpClient.get<User>(`${API_ENDPOINTS.USERS}/${id}`);
    },
    avatar: (input: File) => {
        let formData = new FormData();
        console.log("input: ", input)
        formData.append('attachment', input);
        console.log("formdata: ", formData)
        return HttpClient.post<Attachment>(API_ENDPOINTS.AVATAR, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
};
