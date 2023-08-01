import styled from "styled-components";

export const  HomePageStyled = styled.div`
  flex-grow: 1;

  .home__page {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding: 0;
    justify-items: center;

}
  
  .pagination {
    text-align: center;
    color: darkcyan;
    padding-top: 20px;
  }
  
  .ant-pagination-item-active {
    border-color: darkcyan;
    color: black;
  }
 
  :where(.css-dev-only-do-not-override-1sn0ohr).ant-pagination .ant-pagination-item-active a {
    color: darkcyan;
}



`;

