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
};

const initialState: ProjectsSliceType = {
  projectsList: [],
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,

  reducers: {
    addAllProjects(state, action: PayloadAction<Project[]>) {
      state.projectsList = action.payload
    },
  },
  });
  
  export const {
    addAllProjects,
  } = projectSlice.actions;
  
  
  export default projectSlice.reducer;