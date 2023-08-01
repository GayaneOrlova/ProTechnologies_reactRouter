import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { ProductCard } from '../cadrView/CardView';
import { HomePageStyled } from './HomePage.styled';
import { Pagination } from 'antd';
import { setCurrentPage } from '../../../store/slices/projectSlice';
import { getPage } from '../../../api/project.api';
import { setPagination } from '../../../store/slices/projectSlice';
import { messagingOnError } from '../../../utils/error';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { results: paginationResults, count } = useAppSelector((state) => state.projects.pagination)
  const currentPage = useAppSelector((state) => state.projects.currentPage)

  const changePageHandler = async (page: number) => {
    try {
      const responce = await getPage(page);
      dispatch(setCurrentPage(page));
      dispatch(setPagination(responce.data));
      console.log(responce.data)

    } catch (er) {
      messagingOnError();
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
            <ProductCard project={project} />
          </li>
        ))}
      </ul>
      <Pagination
        className='pagination'
        defaultCurrent={1}
        total={count}
        defaultPageSize={6}
        current={currentPage}
        onChange={changePageHandler}
      />
    </HomePageStyled>
  )
}

export { HomePage };