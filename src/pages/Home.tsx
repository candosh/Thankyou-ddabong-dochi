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
    if (inputValue === "따봉도치야 고마워") {
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
          <MainImage src={Ddabong} alt="mainImg" />
          <ContentContainer>
            <form onSubmit={handleSubmit}>
              <ContentInput
                as="input"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="따봉도치야 고마워"
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
  margin: 30px 30px;
`;

const HeaderContainer = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  font-family: DNFBitBitv2;
  font-size: 20px;
`;

const MainImage = styled.img`
  height: 700px;
  width: auto;
  object-fit: cover;
`;
const ContentContainer = styled.div`
  height: 58px;
  width: 400px;
  padding-top: 50px;
`;
const ContentInput = styled.input`
  height: 32px;
  width: 317px;
  top: 26px;
  position: relative;
  border-color: #989595;
  border-radius: 10px;
  border: 1px solid;
  outline: none;
  color: #3c3c3c;
  font-size: 14px;
  font-weight: 400;
  padding-left: 20px;
`;
