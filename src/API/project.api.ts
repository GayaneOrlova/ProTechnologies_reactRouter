import axios from './instance';
import { Project, Pagination } from "../store/slices/projectSlice";

type Props = {
  project: Project
  id: string;
};

export const getPage = (currentPage: number) => {
  return axios.get<Pagination>(`project/?offset=${currentPage}`);
}

export const getDetailCard = (id: string) => {
  return axios.get<Project>(`project/${id}/`);
}
