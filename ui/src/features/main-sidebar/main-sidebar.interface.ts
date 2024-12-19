import { ReactNode } from 'react';

export interface MainSidebarItemInterface {
  key: string;
  name: string;
}
export interface MainSidebarState {
  isOpen: boolean;
}

export interface MainSidebarProps {
  children: ReactNode;
  items: MainSidebarItemInterface[];
  onClickItem: (item: MainSidebarItemInterface) => void;
}
