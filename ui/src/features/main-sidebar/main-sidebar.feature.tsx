import { createSelector } from '@reduxjs/toolkit';
import { FullScreen, ListItem, SideBarContainer } from 'juny-react-style';

import { useAppSelector } from '@hooks';

import { selectMainSidebar } from './main-sidebar.slice';
import {
  MainSidebarItemInterface,
  MainSidebarProps,
} from './main-sidebar.interface';

const MainSidebarFeature = ({
  children,
  items,
  onClickItem,
}: MainSidebarProps) => {
  const selectIsOpen = createSelector(
    [selectMainSidebar],
    (mainSidebar) => mainSidebar.isOpen
  );
  const isOpen = useAppSelector(selectIsOpen);

  const handleClickListItem = (item: MainSidebarItemInterface) =>
    onClickItem(item);
  return (
    <SideBarContainer
      $height="100%"
      $header={
        <FullScreen>
          <FullScreen $alignItems="center">Nest Admin Page(타이틀)</FullScreen>
        </FullScreen>
      }
      $isOpen={isOpen}
      $items={items.map((item) => (
        <ListItem key={item.key} onClick={() => handleClickListItem(item)}>
          {item.name}
        </ListItem>
      ))}
    >
      <FullScreen>{children}</FullScreen>
    </SideBarContainer>
  );
};

export default MainSidebarFeature;
