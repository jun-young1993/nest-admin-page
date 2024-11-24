import {FlexContainer, SideBarContainer} from "juny-react-style";
import {SideBarInterface} from "./interfaces/sidebar.interface";

const SideBarLayout = ({isOpen, children}: SideBarInterface) => {
    return (
        <SideBarContainer
            $isOpen={isOpen}
            $sideBar={
                <FlexContainer
                >
                    <div>hi</div>
                </FlexContainer>
            }
        >
            {children}
        </SideBarContainer>
    )
}

export default SideBarLayout;