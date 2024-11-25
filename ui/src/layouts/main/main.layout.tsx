import {FlexContainer, SideBarIconButton} from "juny-react-style"
import SideBarLayout from "./sidebar.layout";
import HeaderLayout from "./header.layout";

const MainLayout = () => {
    return (
            <FlexContainer>
                <SideBarLayout>
                    <FlexContainer
                        $width={"100%"}
                        $height={"100%"}
                    >
                        <div>side bar</div>
                    </FlexContainer>
                    <div>Hi</div>
                </SideBarLayout>
            </FlexContainer>
    )
}
export default MainLayout;