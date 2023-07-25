import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Project = {
  title: string;
  id: string;
  author: string;
  technologies: [];
  body: string
};


type ProjectSliceType = {
  projectList: Project[],
  // currenProject: Project;
};

const initialState: ProjectSliceType = {
  projectList: [],
  // currentProject: {}
};



export const ProjectSlice = createSlice({
  name: "projects",
  initialState,

  reducers: {
    addAllProjects(state, action: PayloadAction<Project[]>) {
      state.projectList = action.payload
    },
    
    addDetailProject(state, action: PayloadAction<Project>) {
      state.currentProject = action.payload
    },
  },
  });
  
  export const {
    addAllProjects,
    addDetailProject,
  } = ProjectSlice.actions;
  
  
  export default ProjectSlice.reducer;