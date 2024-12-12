
import { FullScreen } from "juny-react-style";
import { SideBarProps } from "./interfaces";

export default function SideBarHeader(props: SideBarProps){
    return (
        <FullScreen>
            <FullScreen
                $flex="0.3"
                $alignItems="center"
            >
                아이콘
            </FullScreen>
            <FullScreen
                $flex="0.7"
                $alignItems="center"
            >
                Nest Admin Page
            </FullScreen>
        </FullScreen>
    )
}