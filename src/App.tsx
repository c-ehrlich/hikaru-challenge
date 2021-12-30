import styled from "styled-components";
import Index from "./components/Index";
import SetIndex from "./components/SetIndex";
import Video from "./components/Video";

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const StyledAppTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

function App() {
  return (
    <StyledApp className="App">
      <StyledAppTop>
        <h1>Hikaru Challenge</h1>
        <Video />
        <Index />
      </StyledAppTop>
      <SetIndex />
    </StyledApp>
  );
}

export default App;
