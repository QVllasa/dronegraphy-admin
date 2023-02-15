import {STORE_OWNER, SUPER_ADMIN} from '@/utils/constants';
import dynamic from 'next/dynamic';
import ShopLayout from "@/components/layouts/shop";
import AccessDeniedPage from "@/components/common/access-denied";

const AdminLayout = dynamic(() => import('@/components/layouts/admin'));

export default function AppLayout({userPermissions, ...props}: { userPermissions: string[]; }) {
  if (userPermissions?.includes(SUPER_ADMIN)) {
    return <AdminLayout {...props} />;
  }

  if (userPermissions?.includes(STORE_OWNER)) {
    return <ShopLayout {...props} />;
  }

  return <AccessDeniedPage/>
}
