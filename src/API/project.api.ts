import axios from './instance';
import { Project } from "../Store/projectSlice";

type Props = {
  project: Project
  id: string;
};

export const getAllProjects = () => {
  return axios.get<Project[]>('project/');
}

export const getDetailCard = (id: string) => {
  return axios.get<Project>(`project/${id}/`);
}
