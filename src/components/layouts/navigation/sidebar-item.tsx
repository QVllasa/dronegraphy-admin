import Link from '@/components/ui/link';
import {getIcon} from '@/utils/get-icon';
import * as sidebarIcons from '@/components/icons/sidebar';
import {useUI} from '@/contexts/ui.context';
import {useMeQuery} from "@/data/user";

const SidebarItem = ({ href, icon, label }: any) => {
  const {closeSidebar} = useUI();
  const {data} = useMeQuery();

  if (!data || !data?.shop) return (<div></div>);

  return (
      <Link
          href={href}
          className="text-start flex w-full items-center text-base text-body-dark focus:text-accent"
      >
        {getIcon({
          iconList: sidebarIcons,
          iconName: icon,
          className: 'w-5 h-5 me-4',
      })}
      <span onClick={() => closeSidebar()}>{label}</span>
    </Link>
  );
};

export default SidebarItem;