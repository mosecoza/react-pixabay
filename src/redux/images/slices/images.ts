import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import helpers from "../../../utils/helpers";
import {  IMagesInitialState, IImages, TImages, IHit } from "../../../utils/interfaces/images";
import {  getImagesAction } from "../actions/images";


const initialState: IMagesInitialState = {
    loading: false,
    current: 1,
    images: [],
    imagesArray: null,
    selectedImage: null,
    error: null,
}

const images = createSlice({
    name: "images",
    initialState,
    reducers: {
        getSelectedImage: (state, { payload }) => {
            
            if (payload && state.images) {
                state.selectedImage = current(state.images).filter(image => image.id === payload)[0]
            }
        },
        getImagesArray: (state, actions) => {
            if (state.images && state.images.length) {
                state.imagesArray = helpers.partition(state.images, state.images.length/4)
            }
        },
        clearError: (state, actions) => {
            state.error = null
        },
        setCurrentPage: (state, {payload}) => {
            state.current = payload
        },
      
        clearSelectedImage: (state) => {
            state.selectedImage = null
        },
       
    },
    extraReducers: (builder) => {
        builder.addCase(getImagesAction.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getImagesAction.rejected, (state) => {
            state.loading = false;
            state.error = "Failed to load images"
        });
        builder.addCase(getImagesAction.fulfilled, (state, { payload }: PayloadAction< IImages>) => {
            state.loading = false;
            if (payload.hits) {
                state.images = Object.assign(state.images,payload.hits);
                if(state.imagesArray&&state.imagesArray?.length>1){
                    
                    let tmp = helpers.partition(payload.hits, payload.hits.length /4) 
                    let temp = current(state.imagesArray) ;
                     let newArray = temp.map((entry, i)=>[...entry, ...tmp[i]])
                     console.log("newArray ", newArray);
                     state.imagesArray = newArray
                } else{

                    state.imagesArray = helpers.partition(payload.hits, payload.hits.length /4)
                }
            } else {
                state.error = "Failed to load images"
            }
        });
        
    }
})

export const {
    getImagesArray,
    getSelectedImage,
    clearError,
    clearSelectedImage,
    setCurrentPage
} = images.actions;

export default images.reducer;