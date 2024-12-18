import { FlexContainer } from 'juny-react-style';
import { MainSidebarFeature } from '@features/main-sidebar';
import { MainSidebarItemInterface } from '@features/main-sidebar/main-sidebar.interface';

const mainSideBarItems: MainSidebarItemInterface[] = [
  {
    key: 'database/database.feature.tsx',
    name: 'database',
  },
];
export default function MainLayout() {
  return (
    <FlexContainer>
      <MainSidebarFeature items={mainSideBarItems}>
        <div>hi</div>
      </MainSidebarFeature>
    </FlexContainer>
  );
}
