import { FlexContainer, ListItem, SideBarContainer } from "juny-react-style";
import { useState } from "react";
import { SideBarHeader } from "@shared"

export default function MainLayout(){
    const [ isOpenSideBarContainer, setIsOpenSideBarContainer ] = useState<boolean>(true)
    const sideBarContainerItems = [<ListItem><div>item1</div></ListItem>]
    return (
        <FlexContainer>
            <SideBarContainer
                $header={
                    <SideBarHeader 
                        onClose={() => setIsOpenSideBarContainer(false)}
                    />
                }
                $isOpen={isOpenSideBarContainer}
                $items={sideBarContainerItems}
            >
                <div>children</div>
            </SideBarContainer>
        </FlexContainer>
    )
}