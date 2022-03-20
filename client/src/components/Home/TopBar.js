import { navData } from "../../constants/data";
import styled from "styled-components";

const TopBar = () => {
  return (
    <Container>
      {navData.map((data) => (
        <Content>
          <img src={data.url} />
          <span>{data.text}</span>
        </Content>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;
  padding: 20px 30px;
  background: white;
  overflow-x: overlay;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  img {
    width: 75px;
  }
  span {
    font-size: 14;
    font-weight: 600;
  }
  &:hover {
    color: #2874f0;
  }
`;

export default TopBar;
