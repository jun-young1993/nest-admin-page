import { useState } from 'react';
import { FlexContainer, FullScreen } from 'juny-react-style';

import { MainSidebarFeature } from '@features/main-sidebar';
import { MainSidebarItemInterface } from '@features/main-sidebar/main-sidebar.interface';
import FeatureComponents from '@features/feature-component';

import MainHeader from './component/main.header';

const mainSideBarItems: MainSidebarItemInterface[] = [
  {
    key: 'database/database.feature.tsx',
    name: 'database',
  },
];
export default function MainLayout() {
  const [selectedSidebarItem, setSelectedSidebarItem] = useState<
    MainSidebarItemInterface['key'] | null
  >(null);

  const handleClickSidebarItem = (selectedItem: MainSidebarItemInterface) => {
    setSelectedSidebarItem(selectedItem.key);
  };

  return (
    <FlexContainer $flexDirection="column">
      <FullScreen $height="1.5rem">
        <MainHeader />
      </FullScreen>
      <hr
        style={{
          margin: 0, // 여백 제거
          height: '1px', // 두께
          border: 'none', // 기본 테두리 제거
          backgroundColor: '#000', // 색상
          width: '100%', // 선 길이
        }}
      />
      <FullScreen>
        <MainSidebarFeature
          items={mainSideBarItems}
          onClickItem={handleClickSidebarItem}
        >
          <FeatureComponents
            featureKey={selectedSidebarItem || mainSideBarItems[0].key}
          />
        </MainSidebarFeature>
      </FullScreen>
    </FlexContainer>
  );
}
