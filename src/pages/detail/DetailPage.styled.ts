import styled from "styled-components";

export const  DetailPageStyled = styled.div`
  flex-grow: 1;

  .card {
    min-width: 500px;
    width: 500px;
    margin: 30px auto;
    text-align: center;
    font-size: 24px;
    border: 2px solid darkcyan;
  }
  
  .card__image {
    width: 50%;
    margin: 0 auto;
    padding-top: 20px;
  }
  
   .card__table.ant-row {
    align-items: center;
    column-gap: 12px;
    row-gap: 12px;
    justify-content: center;
  }
  
  .card__table-row {
    border: none;
    text-align: right;
    font-weight: 700;
  }
  
  .card__table-column {
    padding: 8px 0;
    border: 1px solid darkcyan;
    border-radius: 5px;
  }
  
`;

