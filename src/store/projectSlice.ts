import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type Project = {
  title: string;
  id: string;
  author: string;
  technologies: []
};

type ProjectSliceType = {
  projectList: Project[];
};

const initialState: ProjectSliceType = {
  projectList: [],
};

export const ProjectSlice = createSlice({
  name: "projects",
  initialState,

  reducers: {
    addAllProjects(state, action: PayloadAction<Project[]>) {
      state.projectList = action.payload
    },
  },
  });
  
  export const {
    addAllProjects,
    
  } = ProjectSlice.actions;
  
  
  export default ProjectSlice.reducer;