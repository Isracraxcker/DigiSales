import styled from "styled-components";
import { PropagateLoader } from "react-spinners";
export function Spinner1() {
  return (
    <Container>
      <PropagateLoader color="#071b75" size={30} />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
