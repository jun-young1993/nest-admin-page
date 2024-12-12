import { FlexContainer, ListItem, SideBarContainer } from "juny-react-style";
import { useState } from "react";
import { SideBarHeader } from "@shared"

export default function MainLayout(){
    const [ isOpenSideBarContainer, setIsOpenSideBarContainer ] = useState<boolean>(false)
    const sideBarContainerItems = [<ListItem><div>item1</div></ListItem>]
    return (
        <FlexContainer>
            <SideBarContainer
                $onMouseOut={() => setIsOpenSideBarContainer(false)}
                $onMouseOver={() => setIsOpenSideBarContainer(true)}
                $header={<SideBarHeader />}
                $isOpen={isOpenSideBarContainer}
                $items={sideBarContainerItems}
            >
                <div>children</div>
            </SideBarContainer>
        </FlexContainer>
    )
}