import axios from './instance';
import { Project, Pagination } from "../store/slices/projectSlice";

export const getPage = (page: number) => {
  return axios.get<Pagination>(`project/?page=${page}`);
}

export const getDetailCard = (id: string) => {
  return axios.get<Project>(`project/${id}/`);
}
