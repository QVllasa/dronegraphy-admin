import ShopLayout from '@/components/layouts/shop';
import {adminOwnerAndStaffOnly, getAuthCredentials,} from '@/utils/auth-utils';
import {useTranslation} from 'next-i18next';
import {useQuery} from "react-query";
import {shopClient} from "@/data/client/shop";
import {useState} from "react";
import {Shop} from "@/types";
import {useRouter} from "next/router";

export default function ShopPage() {
    const {t} = useTranslation();
    const {permissions} = getAuthCredentials();
    const [shop, setShop] = useState<Shop>()
    const {query: {shopId}} = useRouter();
    // const {data, isLoading: isLoadingUser, error: errorUser} = useMeQuery()

    const {data, isLoading: loading, error,} = useQuery(['shop', shopId], async () => shopClient.get, {
        onSuccess: (shop) => {
            console.log("shop on success: ", shop)
            setShop(shop)
        },
        onError: (err) => {
            console.log("err", err)
        },
    });

    if (shopId) {
        console.log("me: ", shopId, data);
    } else {

    }

    // if (loading) return <Loader text={t('common:text-loading')}/>;


    return (
        <div className="grid grid-cols-12 gap-6">

        </div>
    );
}
ShopPage.Layout = ShopLayout;
ShopPage.authenticate = {
    permissions: adminOwnerAndStaffOnly,
};

