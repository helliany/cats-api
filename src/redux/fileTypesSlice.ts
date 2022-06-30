import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  fileTypes: {
    animated: "gif",
    static: "jpg, png",
    all: "gif, jpg, png",
  } as const,
  selectedFileType: "",
};

export const fileTypesSlice = createSlice({
  name: "fileTypes",
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<string>) => {
      state.selectedFileType = action.payload;
    },
  },
});

export const { setSelected } = fileTypesSlice.actions;

export default fileTypesSlice.reducer;
