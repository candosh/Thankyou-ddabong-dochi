import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Ddabong from "../assets/ddabong.jpeg";

function Home() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue === "따봉도치야 고마워" || "따봉도치야 고마워!") {
      navigate("/result");
    } else {
      alert("정확한 따봉도치를 입력해주세요 🦹🏻‍♀️");
    }
  };
  return (
    <>
      <MainContainer>
        <ComponentContaienr>
          <HeaderContainer>
            <p>엇! 전설의 따봉도치를 발견했다...!</p>
          </HeaderContainer>
          <MainImgContainer>
            <MainImage src={Ddabong} alt="mainImg" />
          </MainImgContainer>
          <ContentContainer>
            <ContentText>아래 문구를 따라서 입력해주세요.</ContentText>
            <form onSubmit={handleSubmit}>
              <ContentInput
                as="input"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="따봉도치야 고마워!"
              />
            </form>
          </ContentContainer>
        </ComponentContaienr>
      </MainContainer>
    </>
  );
}

export default Home;

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

const MainImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px;
`;

const MainImage = styled.img`
  display: flex;
  height: 650px;
  width: auto;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 520px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 58px;
  width: 400px;
  margin: 30px 37px;
  @media (max-width: 768px) {
    width: 300px;
  }
`;

const ContentText = styled.div`
  font-size: 15px;
  color: #666666;
`;
const ContentInput = styled.input`
  height: 32px;
  width: 350px;
  top: 8px;
  position: relative;
  border-color: #989595;
  border-radius: 10px;
  border: 1px solid;
  outline: none;
  color: #626161;
  font-size: 14px;
  font-weight: 400;
  padding-left: 20px;
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 300px;
  }
`;
