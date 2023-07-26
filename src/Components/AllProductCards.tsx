import React, { useEffect, useState } from 'react';
import { getAllProjects } from '../API/project.api';
import { addAllProjects } from '../Store/projectSlice';
import { useAppDispatch, useAppSelector } from '../Store/hooks';
import { ProductCard } from './ProductCard';

const style = {
}

const AllProductCards = () => {
  const dispatch = useAppDispatch();
  const projectsList = useAppSelector((state) => state.project.projectList)
  
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
    <ul style={{display: 'flex', flexWrap: "wrap", justifyContent: 'space-around', listStyleType: 'none' , columnGap: "5px"}}>
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