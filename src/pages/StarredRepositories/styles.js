import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: 1200px;

  .title {
    color: var(--color2);
    margin: 20px;
  }

  .box-repositories {
    padding: 24px;
    margin-top: 20px;   
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);

    p {
      line-height: 24px;
      color: var(--color3);

      span {
        font-weight: bold;
      }
    }

    a {
      text-decoration: none;
      color: var(--color2);
    }
  }
`;