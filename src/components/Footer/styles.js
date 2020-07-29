import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;

  img {
    width: 25%;
  }

  ul {
    display: flex;
    justify-content: center;
    margin-top: 35px;

    li {
      list-style: none;
      &:nth-child(2) {
        margin-left: 50px;
      }

      img {
        width: 35px;
      }
    }
  }
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
