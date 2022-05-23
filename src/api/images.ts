import { IImages } from "../utils/interfaces/images"

const api = {
    getImages: async ():Promise<IImages>=>{
        const response = await fetch("https://pixabay.com/api/?key=6473511-0417f2cad683f1bee54cafe15&page=3&per_page=60",{
            method:"GET",
            
        })
        
        return  await  response.json()
    },
   
}

export default api