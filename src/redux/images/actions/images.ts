import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/images";
import { IGetImagesAction } from "../../../utils/interfaces/images";

export const getImagesAction = createAsyncThunk("images/getImagesAction",async ({page}:IGetImagesAction, {dispatch}) => {
    return await api.getImages(page)
})
