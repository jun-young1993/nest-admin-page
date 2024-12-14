import { FlexContainer, FullScreen, ListItem, SideBarContainer } from "juny-react-style";
import { ReactNode, useState } from "react";
import { SideBarHeader } from "@shared/side-bar";
import MainComponentMapper from "./main-component-mapper";

export default function MainLayout(){
    const [ isOpenSideBarContainer, setIsOpenSideBarContainer ] = useState<boolean>(false)
    const [ view, setView ] = useState<ReactNode | null>(null)



    const handleClickListItem = (view: ReactNode) => {
        setView(view)
    }
    return (
        <FlexContainer>
            <SideBarContainer
                $onMouseOut={() => setIsOpenSideBarContainer(false)}
                $onMouseOver={() => setIsOpenSideBarContainer(true)}
                $header={<SideBarHeader />}
                $isOpen={isOpenSideBarContainer}
                $items={[
                    ...MainComponentMapper.map(({name, children}) => {
                        return (
                            <ListItem
                                onClick={() => handleClickListItem(children)}
                            >
                                {name}
                            </ListItem>
                        )
                    })
                ]}
            >
                <FullScreen>
                    {view}
                </FullScreen>
            </SideBarContainer>
        </FlexContainer>
    )
}