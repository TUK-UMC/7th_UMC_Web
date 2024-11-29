import styled from "styled-components";

export const AlbumCardWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 7px 13px -4px rgba(0, 0, 0, 0.51);

  & > img {
    width: 60px;
    height: 60px;
    border-radius: 8px;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  & > .price-text {
    color: gray;
    margin-top: 10px;
  }
`;

export const QuantityButtonWrapper = styled.div`
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
