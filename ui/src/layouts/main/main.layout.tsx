import {FlexContainer, SideBarIconButton} from "juny-react-style"
import SideBarLayout from "./sidebar.layout";
import HeaderLayout from "./header.layout";

const MainLayout = () => {
    return (
            <FlexContainer>
                <SideBarLayout
                    isOpen={true}
                >
                    <FlexContainer
                        $width={"100%"}
                        $height={"100%"}
                    >
                        <SideBarIconButton

                        />
                    </FlexContainer>
                    <div>Hi</div>
                </SideBarLayout>
            </FlexContainer>
    )
}
export default MainLayout;