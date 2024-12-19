import {
  mainSidebarActions,
  selectMainSidebar,
} from '@features/main-sidebar/main-sidebar.slice';
import { useAppDispatch, useAppSelector } from '@hooks';
import { createSelector } from '@reduxjs/toolkit';
import { FullScreen, OpenSideBarIconButton, ToolTip } from 'juny-react-style';

const MainHeader = () => {
  const dispatch = useAppDispatch();
  const { open, close } = mainSidebarActions;
  const selectIsOpen = createSelector(
    [selectMainSidebar],
    (mainSidebar) => mainSidebar.isOpen
  );
  const isOpen = useAppSelector(selectIsOpen);
  const handleOpen = () => dispatch(isOpen ? close() : open());
  return (
    <FullScreen>
      <ToolTip $message="Open the sidebar" $position="bottom">
        <OpenSideBarIconButton $size="xs" onClick={() => handleOpen()} />
      </ToolTip>
    </FullScreen>
  );
};

export default MainHeader;
