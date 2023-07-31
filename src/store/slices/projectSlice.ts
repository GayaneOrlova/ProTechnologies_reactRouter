import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Project = {
  title: string;
  id: string;
  author: string;
  technologies: [];
  body: string
};

type ProjectsSliceType = {
  projectsList: Project[],
  currentPage: number, //new
  pages: number[], //NEW
};

const initialState: ProjectsSliceType = {
  projectsList: [],
  currentPage: 0, //new
  pages: [],
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,

  reducers: {
    addAllProjects(state, action: PayloadAction<Project[]>) {
      state.projectsList = action.payload
    },
    // new
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
// new
    },
  },
  });
  
  export const {
    addAllProjects,
    setCurrentPage, //new
  } = projectSlice.actions;
  
  
  export default projectSlice.reducer;