import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Project = {
  title: string;
  id: string;
  author: string;
  technologies: [];
  body: string
};

export type Pagination = {
  count: number,
  next: string,
  previous: string,
  results: Project[],
}


type ProjectsSliceType = {
  pagination: Pagination,
  currentPage: number,
};

const initialState: ProjectsSliceType = {
  pagination: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  },
  currentPage: 1,
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,

  reducers: {
    setPagination(state, action: PayloadAction<Pagination>) {
      state.pagination = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
  }
  });
  
  export const {
    setCurrentPage,
    setPagination,
  } = projectSlice.actions;
  
  
  export default projectSlice.reducer;