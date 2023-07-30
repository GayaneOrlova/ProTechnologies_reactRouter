import React, { useEffect } from 'react';
import { getAllProjects } from '../../../api/project.api';
import { addAllProjects } from '../../../store/slices/projectSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { ProductCard } from '../cadrView/CardView';
import { HomePageStyled } from './HomePage.styled';


const HomePage = () => {
  const dispatch = useAppDispatch();
  const projectsList = useAppSelector((state) => state.projects.projectsList)
  
  const fetchAllProjects  = async () => {
    try {
      const response = await getAllProjects();
      dispatch(addAllProjects(response.data))
    } catch(er) {
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
            <ProductCard project={project} />
          </li>
        ))}
      </ul>
    </HomePageStyled>
  )
}

export { HomePage };