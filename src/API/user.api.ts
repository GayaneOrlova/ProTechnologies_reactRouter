import { User } from "../Store/userSlice"
import axios from './instance';
import React from 'react';
import App from '../App';
import instance from './instance';
import { setUser } from "../Store/userSlice";


type TokensResponseType = {
  tokens: {
    refresh: string;
    access: string;
  }
}

type LoginResponseType = {
  user: User;
} & TokensResponseType;

export const postUser = ({ email, password }: { email: string, password: string }) => {
  return axios.post<LoginResponseType>(`/login/`, { email, password })
}


// export const getAllProjects = () => {
//   return axios.get<LoginResponseType>('project/');
// }
