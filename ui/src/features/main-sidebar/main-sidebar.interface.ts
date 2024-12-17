import { ReactNode } from 'react';

export interface MainSidebarState {
  data: string | null;
}

export interface MainSidebarProps {
  children: ReactNode;
}
