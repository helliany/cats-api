import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFileTypes {
  fileTypes: {
    animated: "gif",
    static: "jpg, png",
    all: "gif, jpg, png",
  };
  selectedFileType: string;
}

const initialState: IFileTypes = {
  fileTypes: {
    animated: "gif",
    static: "jpg, png",
    all: "gif, jpg, png",
  },
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
