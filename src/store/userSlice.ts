import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// // import generateRandomID from "../utils/generateRandomID";


export type User = {
  email: string;
  password: string;
};

const initialState = {
  email: null,
  id: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
      
    },
  },
});

export const {
  setUser,
} = userSlice.actions;

export default userSlice.reducer;



//   reducers: {
//     addManyItems(state, action: PayloadAction<Item[]>) {
//       state.toDoList = action.payload
//     },


//     // addItem: (state, action: PayloadAction<string>) => {
//     //   if (!action.payload.trim()) {
//     //     return;
//     //   }
//     //   const newListItem = {
//     //     value: action.payload,
//     //     id: generateRandomID(),
//     //     checked: false,
//     //   };
//     //   state.toDoList.push(newListItem);
//     // },


//     addItem: (state, action: PayloadAction<Item>) => {
//       state.toDoList.push(action.payload);
//     },

//     // onTodoItemChecked: (state, action: PayloadAction<string>) => {
//     //   state.toDoList = state.toDoList.map((item) => {
//     //     if (item.id !== action.payload) {
//     //       return item;
//     //     }
//     //     return { ...item, checked: !item.checked };
//     //   });
//     // },

//     onTodoItemChecked: (state, action: PayloadAction<Item>) => {
//       state.toDoList = state.toDoList.map((item) => {
//         if (item.id !== action.payload.id) {
//           return item;
//         }
//         return action.payload;
//       });
//     },
    
    
//     onChangeValue: (state, action: PayloadAction<Item>) => {
//       state.toDoList = state.toDoList.map((item) => {
//         if (item.id !== action.payload.id) {
//           return item;
//         }
//         return action.payload;
//       });
//     },
    
//     onTodoItemRemove: (state, action: PayloadAction<string>) => {
//       state.toDoList = state.toDoList.filter((item) => item.id !== action.payload
//       );
//     },


//     onClearComplited: (state) => {
//       state.toDoList = state.toDoList.filter((item) => !item.checked);
//     },

// // 
//     onToogleCheck: (state) => {
//       const isCheckedItem = Boolean(state.toDoList.find((item) => !item.checked));
//       state.toDoList = state.toDoList.map((item) => {
//         return { ...item, checked: isCheckedItem };
//       });
//     },


//     setTodoItem(state, action: PayloadAction<Item>) {
//       state.toDoList = state.toDoList.map((e) => {
//         if (e.id !== action.payload.id) { return e };
//         return action.payload
//       })
//     },

//     setFilter: (state, action: PayloadAction<string>) => {
//       state.filter = action.payload;
//     },
//   },
// });

// export const {
//   addItem,
//   onTodoItemChecked,
//   onTodoItemRemove,
//   onClearComplited,
//   onToogleCheck,
//   onChangeValue,
//   setFilter,
//   addManyItems,
// } = todoSlice.actions;


// export default todoSlice.reducer;
