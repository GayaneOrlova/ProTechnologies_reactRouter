import axios from './instance';
import { Project } from "../store/slices/projectSlice";

type Props = {
  project: Project
  id: string;
};

// export const getAllProjects = (currentPage: number) => {//new
//   return axios.get<Project[]>(`project/${currentPage}`);
// }

export const getAllProjects = () => {//new
  return axios.get<Project[]>(`project/`);
}
export const getDetailCard = (id: string) => {
  return axios.get<Project>(`project/${id}/`);
}
