import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { ProductCard } from '../cadrView/CardView';
import { HomePageStyled } from './HomePage.styled';
import { Pagination } from 'antd';
import { setCurrentPage } from '../../../store/slices/projectSlice';
import { getPage } from '../../../api/project.api';
import { setPagination } from '../../../store/slices/projectSlice';
import { onFinishFailed } from '../../../utils/error';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const paginationResults = useAppSelector((state) => state.projects.pagination.results)
  const count = useAppSelector((state) => state.projects.pagination.count)
  const currentPage = useAppSelector((state) => state.projects.currentPage)

  const changePageHandler = async (page: number) => {
    try {
      const offset = (page - 1) * 2;
      const responce = await getPage(offset);
      dispatch(setCurrentPage(page));
      dispatch(setPagination(responce.data));
      console.log(responce.data)

    } catch (er) {
      onFinishFailed();
      console.log(er);
    }
  }

  useEffect(() => {
    changePageHandler(currentPage);
  }, [])
  
 
  return (
    <HomePageStyled>
      <ul className="home__page">
        {paginationResults.map((project) => (
          <li key={project.id}>
            <ProductCard project={project}/>
          </li>
        ))}
      </ul>
      <Pagination
        defaultCurrent={1}
        total={count}
        defaultPageSize={2}
        current={currentPage}
        onChange={changePageHandler}
      /> 
    </HomePageStyled>
  )
}

export { HomePage };



// 1 - 0
// 2 - 2
// 3 - 4
// 4 - 6