import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: 1200px;
  width: 100%;
  background-position-x: 80%;
  
  .container {
    display: flex;
    flex-direction: column;

  .box-btns-back-logout {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0px;

    svg {
      width: 24px;
      height: 24px;
      color: var(--color2);
      cursor: pointer;
      margin: 0;
    }
  }

  > div {
    font-size: 18px;
    width: 100%;

    .content {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      align-items: center;
      padding: 24px; 
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
     
      .box-avatar {
        display: flex;
        flex-direction: column;

        span {
          margin-top: 16px;
        }
      }
      
      img {
        height: 150px;
        width: 150px;
        border-radius: 50%;
      }

      .box-infomations {
        display: flex;
        flex-direction: column;

        span {
          margin-bottom: 4px;
        }
      }

      .box-links {
        display: flex;
        flex-direction: column;

        a {
          padding: 12px;
          font-size: 14px;
          width: 150px;
          margin: 10px 10px 0 0;
          align-self: flex-end;
          background-color: var(--color2);
          color: var(--color1);
          text-align: center;
          text-decoration: none;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s;

    &:hover {
      filter: brightness(94%);
    }
        }
      }
    }
  }
}
`;
