import styled from 'styled-components';

export const Item = styled.li`
  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 13px;
    padding-right: 13px;
    margin: 0;
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.65);
    font-weight: 800;
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
    border-radius: 8px;
    font-size: 12px;
    text-transform: uppercase;
    box-shadow: 0 20px 25px -10px rgba(0, 0, 0, 0.15);
    text-decoration: none;
  }

  h3 {
    color: rgba(0, 0, 0, 0.65);
  }
`;
