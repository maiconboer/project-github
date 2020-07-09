import styled from 'styled-components';

export const Container = styled.div`

  max-width: 450px;
  width: 100%;
  margin: 80px auto 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 20%;
  }

  a {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin: 10px auto -10px;
  display: flex;
  align-items: center;

  .title-tags {
    background-color: #fa9000;
    color: #ffffff;
    padding: 4px 8px;
    margin-left: 4px;
    border-radius: 4px;
    font-size: 18px;
  }
`;


