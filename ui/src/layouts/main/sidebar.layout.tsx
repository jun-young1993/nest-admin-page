import {FlexContainer, SideBarContainer, SideBarIconButton } from "juny-react-style";
import {SideBarInterface} from "./interfaces/sidebar.interface";
import {useState} from "react";

const SideBarLayout = ({ children }: SideBarInterface) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleSideBar = () => {
        setIsOpen(!isOpen);
    }
    return (
            <SideBarContainer
                $isOpen={isOpen}
                $sideBar={
                    <FlexContainer
                        $flexDirection={"column"}
                    >
                        <FlexContainer
                            $width={"100%"}
                            $padding={"0.2rem"}
                        >
                            <SideBarIconButton
                                $tooltip={{
                                    $position: 'right',
                                    $message: "open the sidebar"
                                }}
                                onClick={handleSideBar}
                            />
                        </FlexContainer>
                    </FlexContainer>
                }
            >
                <FlexContainer
                    $flexDirection={"column"}
                >
                    <FlexContainer
                        $padding={"0.2rem"}
                    >
                        {!isOpen &&
                            <SideBarIconButton
                                $tooltip={{
                                    $position: 'right',
                                    $message: "close the sidebar"
                                }}
                                onClick={handleSideBar}
                            />}
                    </FlexContainer>
                    {children}
                </FlexContainer>
            </SideBarContainer>
    )
}

export default SideBarLayout;