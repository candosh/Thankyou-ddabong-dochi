import styled from "styled-components";
import LuckyDochi from "../assets/luckydochi.png";

function Result() {
  return (
    <>
      <MainContainer>
        <ComponentContaienr>
          <HeaderContainer>
            <p>🍀 행운의 따봉도치 발견! 🍀</p>
          </HeaderContainer>
          <MainImage src={LuckyDochi} alt="Img" />
          <ContentContainer>
            <ContentText>
              <p>
                당신은 뭐든지 잘 해낼 거고, 잘 될거예요!
                <br />
                <br />이 행운 따봉도치의 말을 믿고 <br />
                <br />
                오늘도 좋은 하루 보내요! ...🦔🍀
              </p>
            </ContentText>
          </ContentContainer>
        </ComponentContaienr>
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

const ComponentContaienr = styled.div`
  margin: 25px;
  @media (max-width: 768px) {
    margin: 15px;
  }
`;

const HeaderContainer = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  font-family: DNFBitBitv2;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const MainImage = styled.img`
  height: 500px;
  width: auto;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 485px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 350px;
  padding: 30px;
  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const ContentText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: SUIT Variable;
  font-size: 17px;
`;
