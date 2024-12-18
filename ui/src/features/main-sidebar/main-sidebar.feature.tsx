import { createSelector } from '@reduxjs/toolkit';
import { FullScreen, ListItem, SideBarContainer } from 'juny-react-style';

import { useAppDispatch, useAppSelector } from '@hooks';

import { selectMainSidebar, mainSidebarActions } from './main-sidebar.slice';
import { MainSidebarProps } from './main-sidebar.interface';

const MainSidebarFeature = ({ children }: MainSidebarProps) => {
  const dispatch = useAppDispatch();
  const { open, close } = mainSidebarActions;
  const selectIsOpen = createSelector(
    [selectMainSidebar],
    (mainSidebar) => mainSidebar.isOpen
  );
  const isOpen = useAppSelector(selectIsOpen);
  const handleOpen = (setOpen: boolean) => dispatch(setOpen ? open() : close());

  return (
    <SideBarContainer
      $onMouseOver={() => handleOpen(true)}
      $header={
        <FullScreen>
          <FullScreen $flex="0.3" $alignItems="center">
            <span onClick={() => handleOpen(false)}>닫기 아이콘</span>
          </FullScreen>
          <FullScreen $flex="0.7" $alignItems="center">
            Nest Admin Page(타이틀)
          </FullScreen>
        </FullScreen>
      }
      $isOpen={isOpen}
      $items={[<ListItem key="hi">hi</ListItem>]}
    >
      <FullScreen>{children}</FullScreen>
    </SideBarContainer>
  );
};

export default MainSidebarFeature;
