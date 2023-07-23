import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type Project = {
  title: string;
  id: string;
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
    addManyProjects(state, action: PayloadAction<Project[]>) {
      state.projectList = action.payload
    },
  },
  });
  
  export const {
    addManyProjects,
    
  } = ProjectSlice.actions;
  
  
  export default ProjectSlice.reducer;