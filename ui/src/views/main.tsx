import styled from "styled-components";
import NavBar from "@/shared/nav-bar/ui/nav-bar";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5;
`;
export default function Main(){
    return (
        <Container>
          <NavBar></NavBar>
        </Container>
    )
    
}