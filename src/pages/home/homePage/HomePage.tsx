import React, { useEffect, useState } from 'react';
import { getAllProjects } from '../../../api/project.api';
import { addAllProjects } from '../../../store/slices/projectSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { ProductCard } from '../cadrView/CardView';
import { HomePageStyled } from './HomePage.styled';
import { onFinishFailed } from '../../../utils/error';
import type { PaginationProps } from 'antd';

// import { Pagination } from 'antd';
// import {Pagination} from '../../pagination/Pagination'
// import ReactPaginate from 'react-paginate';

const ITEMS_PER_PAGES = 50;

const HomePage = () => {
  const dispatch = useAppDispatch();
  const projectsList = useAppSelector((state) => state.projects.projectsList)
  // const currentPage = useAppSelector((state) => state.projects.currentPage);//new


  const [page, setPage] = useState(1);//new

  // const pageCount = 10;
  // const pageChangeHandler = ({selected} : {selected: number}) => {
  // }

  


  
  const fetchAllProjects  = async () => {
    try {
      // const response = await getAllProjects(currentPage);//new
      const response = await getAllProjects();//new

      dispatch(addAllProjects(response.data))
    } catch(er) {
      onFinishFailed();
      console.log(er);
    }
  }

  useEffect(() => {
    fetchAllProjects();
  }, [])

  return (
    <HomePageStyled>
      <ul className="home__page">
        {projectsList.map((project) => (
          <li key={project.id}>
            <ProductCard project={project}/>
          </li>
        ))}
      </ul>
      {/* <Pagination></Pagination> */}
      
      {/* <Pagination showQuickJumper current={page} total={projectsList.length} pageSize = {4} onChange={setPage} /> */}

      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={pageChangeHandler}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
      /> */}
      
    </HomePageStyled>
  )
}

export { HomePage };