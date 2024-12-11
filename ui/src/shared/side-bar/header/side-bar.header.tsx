
import { CycleCloseIconButton, FullScreen, SideBarIconButton } from "juny-react-style";
import { SideBarProps } from "./interfaces";

export default function SideBarHeader({ onClose }: SideBarProps){
    return (
        <FullScreen>
            <FullScreen
                $alignItems="center"
            >
                <CycleCloseIconButton 
                    onClick={() => onClose()}
                />
            </FullScreen>
            <FullScreen
                $alignItems="center"
            >
                Nest Admin Page
            </FullScreen>
        </FullScreen>
    )
}