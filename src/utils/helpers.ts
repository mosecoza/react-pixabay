import { IHit, TImages } from "./interfaces/images";

const helpers = {
   
     partition:(array:IHit[], n:number):TImages=> {
        const images =  array.length ? [array.splice(0, n)].concat(helpers.partition(array, n)) : [];

        return images;
      } 
}
export default helpers