import styled from 'styled-components'

export const Product = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 3%;

  img {
    min-width: 40%;
    max-height: 500px;
    cursor: pointer;
  }
  @media screen and (max-width: 820px) {
    flex-direction: column;

    img {
      width: 100%;
    }
  }
`

export const ProductGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 40px;

  .btn-submit {
    min-width: 340px;
    height: 50px;
    padding: 0;
    font-size: 14px;
    border-radius: 2px;
    margin-top: 20px;
    font-weight: 500;
    color: #FFF;
    background: var(--primary);
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
  .link-back {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-top: 20px;

    &:hover {
      color: rgb(180, 180, 180);
    }
  }

  @media screen and (max-width: 820px) {
    margin: 5px 0px;
    align-items: center;
  }
`

export const ProductInfo = styled.div`
  text-align: center;

  h3 {
    font-weight: 500;
    font-size: 18px;
  }
`

export const InfoPrice = styled.div`
  label {
    font-weight: 400;
    font-size: 14px;
    text-decoration: line-through;
    color: #c8c8c8;
  }
  strong {
    margin-left: 5px;
    font-weight: 400;
  }
  label.installments {
    font-size: 14px;
    color: var(--primary);
  }
`

export const ProductSize = styled.div`
  margin: 12px 0;

  p {
    font-size: 14px;
    color: var(--primary);
    margin: 10px 0;
  }
  .size__btn {
    background: #131313;
    width: 30px;
    height: 30px;
    margin-right: 5px;
    border-radius: 100%;
    border: 1px solid #FFF;
    color: #FFF;
    box-shadow: 2px 2px 2px #1d1d1d;
  }
  .size__btn--selected {
    background: var(--primary);
  }
`
