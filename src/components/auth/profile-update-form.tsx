import Input from '@/components/ui/input';
import {Controller, useForm} from 'react-hook-form';
import Button from '@/components/ui/button';
import Description from '@/components/ui/description';
import Card from '@/components/common/card';
import {useUpdateUserMutation} from '@/data/user';
import TextArea from '@/components/ui/text-area';
import {useTranslation} from 'next-i18next';
import pick from 'lodash/pick';
import {UpdateUser} from "@/types";
import AvatarUploader from "@/components/common/avatar-uploader";


export default function ProfileUpdate({me}: any) {
    const {t} = useTranslation();
    const {mutate: updateUser, isLoading: loading} = useUpdateUserMutation();
    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<UpdateUser>({
        defaultValues: {
            ...(me &&
                pick(me, ['name', 'profile.bio', 'profile.contact', 'profile.avatar'])),
        },
    });

    async function onSubmit(values: UpdateUser) {
        const {name, profile} = values;
        console.log("on submit: ", name, profile)
        updateUser({
            id: me?._id,
            input: {
                name: name,
                profile: {
                    bio: profile?.bio,
                    contact: profile?.contact,
                    avatar: {
                        thumbnail: profile?.avatar?.thumbnail ?? '',
                        original: profile?.avatar?.original ?? '',
                        filename: profile?.avatar?.filename ?? '',
                        path: profile?.avatar?.path ?? '',
                        __typename: profile?.avatar?.__typename,
                    },
                },
            },
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
                <Description
                    title={t('form:input-label-avatar')}
                    details={t('form:avatar-help-text')}
                    className="sm:pe-4 md:pe-5 w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3"
                />

                <Card className="w-full sm:w-8/12 md:w-2/3">
                    <Controller
                        name="profile.avatar"
                        control={control}
                        render={({field: {ref, ...rest}}) => (
                            <div className="sm:col-span-2">
                                <span
                                    className="block cursor-pointer pb-2.5 font-normal text-dark/70 dark:text-light/70">
                                    {t('text-profile-avatar')}
                                </span>
                                <div className="text-xs">
                                    <AvatarUploader {...rest} />
                                </div>
                            </div>
                        )}
                    />
                </Card>
            </div>

            <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
                <Description
                    title={t('form:form-title-information')}
                    details={t('form:profile-info-help-text')}
                    className="sm:pe-4 md:pe-5 w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3"
                />

                <Card className="mb-5 w-full sm:w-8/12 md:w-2/3">
                    <Input
                        label={t('form:input-label-name')}
                        {...register('name')}
                        error={t(errors.name?.message!)}
                        variant="outline"
                        className="mb-5"
                    />
                    <TextArea
                        label={t('form:input-label-bio')}
                        {...register('profile.bio')}
                        error={t(errors.profile?.bio?.message!)}
                        variant="outline"
                        className="mb-6"
                    />
                    <Input
                        label={t('form:input-label-contact')}
                        {...register('profile.contact')}
                        error={t(errors.profile?.contact?.message!)}
                        variant="outline"
                        className="mb-5"
                    />
                </Card>

                <div className="text-end w-full">
                    <Button loading={loading} disabled={loading}>
                        {t('form:button-label-save')}
                    </Button>
                </div>
            </div>
        </form>
    );
}
