import { User } from "../store/userSlice"
import axios from './instance';
import React from 'react';
import App from '../App';
import instance from './instance';
import { setUser } from "../store/userSlice";

// type Props = {
//   item: User;
//   id: string;
// };

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




// export const getAllTodos = () => {
//   return axios.get<Item[]>('/todos/');
// }

// export const getFiltersTodos = (options:{
//   filter?: string;
// }) => {
//   const { ...params} = options; 
//   return axios.get<Item[]>(`/todos/`, {params});
// }


// export const putTodo = (options: {
//   id: string;
//   value?: string;
//   checked?: boolean;
// }) => {
//   const {id, ...params} = options;
//   console.log(params);
//   return axios.put<Item>(`/todos/${options.id}/update/`, params)
// }

// export const deleteTodo = (id: string) => {
//   return axios.delete<string>(`/todos/${id}/delete/`)
// }

// export const deleteCheckedTodo = () => {
//   return axios.delete<Item[]>(`/todos/delete/checked/`)
// }

// export const checkedAllTodo = () => {
//   return axios.post<Item[]>(`/todos/update/nochecked/`)
// }

