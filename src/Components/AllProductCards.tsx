import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getAllProjects } from '../API/project.api';
import { addAllProjects } from '../Store/projectSlice';
import { useAppDispatch, useAppSelector } from '../Store/hooks';
import { ProductCard } from './ProductCard';


const AllProductCards = () => {
  const [projects, setProjects] = useState([])
  
  const dispatch = useAppDispatch();
  const fetchAllProjects  = async () => {
    try {
      const response = await getAllProjects();
      dispatch(addAllProjects(response.data))
      setProjects(response.data);
    } catch(er) {
      console.log(er);
    }
  }

  
    // new
    useEffect(() => {
      fetchAllProjects();
    }, [])

  return (
    <>
    <ul>
    {projects.map((project) => (
      <li><ProductCard project={project} /></li>
    ))}
    </ul>
    </>
  )
}

export { AllProductCards };