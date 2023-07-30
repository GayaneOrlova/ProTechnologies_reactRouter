import { User } from "../store/slices/userSlice"
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

export const getUser = () => {
  return axios.get<User>(`/me/`)
}