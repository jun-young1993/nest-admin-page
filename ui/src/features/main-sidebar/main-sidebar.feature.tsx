import { useAppDispatch, useAppSelector } from '@hooks';
import { selectMainSidebar, fetch } from './main-sidebar.slice';
import { MainSidebarProps } from './main-sidebar.interface';

const MainSidebarFeature = ({ children }: MainSidebarProps) => {
  // const dispatch = useAppDispatch();
  const { data } = useAppSelector(selectMainSidebar);

  return <div>{children}</div>;
};

export default MainSidebarFeature;
