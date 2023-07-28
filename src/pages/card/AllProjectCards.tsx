import React, { useEffect } from 'react';
import { getAllProjects } from '../../api/project.api';
import { addAllProjects } from '../../store/projectSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ProductCard } from './ProjectCard';


const AllProductCards = () => {
  const dispatch = useAppDispatch();
  const projectsList = useAppSelector((state) => state.projects.projectsList)
  
  const fetchAllProjects  = async () => {
    try {
      const response = await getAllProjects();
      dispatch(addAllProjects(response.data))
      
      console.log('responce', response.data)
    } catch(er) {
      console.log(er);
    }
  }

    useEffect(() => {
      fetchAllProjects();
    }, [])

  return (
    <>
    <ul
      style={{
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: 'space-around',
        listStyleType: 'none',
        columnGap: "5px"}}
    >
    {projectsList.map((project) => (
      <li key={project.id}>
        <ProductCard  project={project}/>
      </li>
    ))}
    </ul>
    </>
  )
}

export { AllProductCards };