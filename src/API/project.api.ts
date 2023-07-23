import { User } from "../Store/userSlice"
import axios from './instance';
import React from 'react';
import App from '../App';
import instance from './instance';
import { setUser } from "../Store/userSlice";
import { Project } from "../Store/projectSlice";


type Props = {
  project: Project
  // id: string;
};


export const getAllProjects = () => {
  return axios.get<Project[]>('project/');
}
