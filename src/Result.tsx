import styled from "styled-components";
import Bye from "../src/assets/bye.jpeg";

function Result() {
  return (
    <>
      <MainContainer>
        <MainImage src={Bye} alt="mainImg" />
        <ContentContainer>
          <p>
            구름 위를 걷는 기분⛅️ 스터디 수고하셨습니다!❤️
            <br />
            만수무강~~^^ 개강 파이팅!🍀
          </p>
        </ContentContainer>
      </MainContainer>
    </>
  );
}

export default Result;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MainImage = styled.img`
  height: 500px;
  width: auto;
  object-fit: cover;
`;
const ContentContainer = styled.div`
  height: 58px;
  width: 330px;
  padding-top: 50px;
  align-items: center;
`;
