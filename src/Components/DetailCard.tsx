import React, {useEffect} from 'react';
import {
  useParams
} from "react-router-dom";
import {Form, Input} from 'antd';
import { Project } from "../Store/projectSlice";
import { getDetailCard } from '../API/project.api';
import { addDetailProject } from '../Store/projectSlice';
import { useAppDispatch, useAppSelector } from '../Store/hooks';

type Props = {
  // project: Project;
  // id: string;
};

type QuizParams = {
  id: string;
};

const DetailCard: React.FC<Props> = () => {

  const dispatch = useAppDispatch()
  
  const projectDetail = useAppSelector((state) => state.project.currenProject)
  
  let { id } = useParams<QuizParams>();

  const fetchDetailCard = async () => {
    try {
      if (!id) return;

      const response = await getDetailCard(id);
      dispatch(addDetailProject(response.data))

      console.log(response.data.id)
    } catch (er) {
      console.log(er);
    }
  }

    useEffect(() => {
      fetchDetailCard();
    }, [])

  if (!projectDetail) {return null;}
  
  return (
    <>
    <p>{projectDetail.title}</p>
      баревчики
    </>
  )
}

export { DetailCard };

