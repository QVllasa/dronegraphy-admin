import {adminAndOwnerOnly, adminOnly, adminOwnerAndStaffOnly} from '@/utils/auth-utils';
import {Routes} from '@/config/routes';

export const siteSettings = {
  name: 'Pixer',
  description: '',
  logo: {
    url: '/dronegraphy_Logo_V2.5.svg',
    alt: 'Pixer',
    href: '/',
    width: 128,
    height: 40,
  },
  defaultLanguage: 'en',
  author: {
    name: 'RedQ, Inc.',
    websiteUrl: 'https://redq.io',
    address: '',
  },
  headerLinks: [],
  authorizedLinks: [
    {
      href: Routes.profileUpdate,
      labelTransKey: 'authorized-nav-item-profile',
    },
    {
      href: Routes.logout,
      labelTransKey: 'authorized-nav-item-logout',
    },
  ],
  currencyCode: 'USD',
  sidebarLinks: {
    admin: [
      {
        href: Routes.dashboard,
        label: 'sidebar-nav-item-dashboard',
        icon: 'DashboardIcon',
        permissions: adminOnly,
      },
      {
        href: Routes.shop.list,
        label: 'sidebar-nav-item-shops',
        icon: 'ShopIcon',
        permissions: adminOnly,
      },
      {
        href: Routes.adminMyShops,
        label: 'sidebar-nav-item-my-shops',
        icon: 'MyShopIcon',
        permissions: adminOnly,
      },
      {
        href: Routes.product.list,
        label: 'sidebar-nav-item-products',
        icon: 'ProductsIcon',
        permissions: adminOnly,
      },
      {
        href: Routes.type.list,
        label: 'sidebar-nav-item-groups',
        icon: 'TypesIcon',
        permissions: adminOnly,
      },
      {
        href: Routes.category.list,
        label: 'sidebar-nav-item-categories',
        icon: 'CategoriesIcon',
        permissions: adminOnly,
      },
      {
        href: Routes.tag.list,
        label: 'sidebar-nav-item-tags',
        icon: 'TagIcon',
        permissions: adminOnly,
      },
      {
        href: Routes.order.list,
        label: 'sidebar-nav-item-orders',
        icon: 'OrdersIcon',
        permissions: adminOnly,
      },
      {
        href: Routes.orderStatus.list,
        label: 'sidebar-nav-item-order-status',
        icon: 'OrdersStatusIcon',
        permissions: adminOnly,
      },
      {
        href: Routes.order.create,
        label: 'sidebar-nav-item-create-order',
        icon: 'CalendarScheduleIcon',
        permissions: adminOnly,
      },
      {
        href: Routes.user.list,
        label: 'sidebar-nav-item-users',
        icon: 'UsersIcon',
        permissions: adminOnly,
      },
      {
        href: Routes.tax.list,
        label: 'sidebar-nav-item-taxes',
        icon: 'TaxesIcon',
        permissions: adminOnly,
      },
      {
        href: Routes.withdraw.list,
        label: 'sidebar-nav-item-withdraws',
        icon: 'WithdrawIcon',
        permissions: adminOnly,
      },
      {
        href: Routes.question.list,
        label: 'sidebar-nav-item-questions',
        icon: 'QuestionIcon',
        permissions: adminOnly,
      },
      {
        href: Routes.reviews.list,
        label: 'sidebar-nav-item-reviews',
        icon: 'ReviewIcon',
        permissions: adminOnly,
      },
      {
        href: Routes.settings,
        label: 'sidebar-nav-item-settings',
        icon: 'SettingsIcon',
        permissions: adminOnly,
      },
    ],
    shop: [
      {
        href: (shop: string) => `${Routes.dashboard}${shop}`,
        label: 'Dashboard',
        icon: 'DashboardIcon',
        permissions: adminOwnerAndStaffOnly,
      },
      {
        href: (shop: string) => `/${shop}${Routes.product.list}`,
        label: 'Products',
        icon: 'ProductsIcon',
        permissions: adminOwnerAndStaffOnly,
      },
      {
        href: (shop: string) => `/${shop}${Routes.order.list}`,
        label: 'Orders',
        icon: 'OrdersIcon',
        permissions: adminOwnerAndStaffOnly,
      },
      {
        href: (shop: string) => `/${shop}${Routes.staff.list}`,
        label: 'Staff',
        icon: 'UsersIcon',
        permissions: adminAndOwnerOnly,
      },
      {
        href: (shop: string) => `/${shop}${Routes.withdraw.list}`,
        label: 'Withdraws',
        icon: 'AttributeIcon',
        permissions: adminAndOwnerOnly,
      },
      {
        href: (shop: string) => `/${shop}${Routes.reviews.list}`,
        label: 'Reviews',
        icon: 'ReviewIcon',
        permissions: adminAndOwnerOnly,
      },
      {
        href: (shop: string) => `/${shop}${Routes.question.list}`,
        label: 'Questions',
        icon: 'QuestionIcon',
        permissions: adminAndOwnerOnly,
      },
    ],
  },
  product: {
    placeholder: '/product-placeholder.svg',
  },
  avatar: {
    placeholder: '/avatar-placeholder.svg',
  },
};
