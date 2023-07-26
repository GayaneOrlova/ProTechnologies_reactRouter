import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { getDetailCard } from '../API/project.api';
import { Project } from "../Store/projectSlice";

type Props = {

};

type QuizParams = {
  id: string;
};

const DetailCard: React.FC<Props> = () => {
  const [projectDetail, setProjectDetail] = useState<Project>();
  let { id } = useParams<QuizParams>();

  const fetchDetailCard = async () => {
    try {
      if (!id) return;
      const response = await getDetailCard(id);
      setProjectDetail(response.data);
      
    } catch (er) {
      console.log(er);
    }
  }
  
   useEffect(() => {
      fetchDetailCard();
    }, [])
    console.log('projectDetail:',projectDetail);

  if (!projectDetail) {return null}
  return (
    <>
      <div>Project name:  <b>{projectDetail.title}</b></div>
      <div>Author:  <b>{projectDetail.author}</b></div>
      <div>Technologies: <b>{projectDetail.technologies}</b> </div>
      <div>Description: <b>{projectDetail.body}</b></div>
      баревчики
    </>
  )
}

export { DetailCard };