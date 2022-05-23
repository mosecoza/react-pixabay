import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/images";

export const getImagesAction = createAsyncThunk("images/getImagesAction",async (props, {dispatch}) => {
    return await api.getImages()
})
