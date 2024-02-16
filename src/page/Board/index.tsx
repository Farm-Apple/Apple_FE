import Introduce from "@src/page/Board/Introduce.tsx";
import IntroduceMap from "@src/page/Board/IntroduceMap.tsx";
import styled from "styled-components";

const BoardContainer = styled.section`
  padding:15rem 10rem;
`

export default function BoardPage() {
  return (
      <BoardContainer>
          <Introduce/>
          <IntroduceMap/>
      </BoardContainer>
  );
}
