import { User } from "../Store/userSlice"
import axios from './instance';

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

export const getUser = (access: string | null) => {
  return axios.get<User>(`/me/`)
}