import { styled } from "styled-components";
import { Input } from "../components/Input";
import { PrimaryButton } from "../components/PrimaryButton";

export const Search = () => {
  return (
    <Container>
      <InputWrapper>
        <Input placeholder='검색어를 입력해주세요.' />
        <PrimaryButton size='s'>검색</PrimaryButton>
      </InputWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 10px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
