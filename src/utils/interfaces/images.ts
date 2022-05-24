export interface IImages {
    total: number
    totalHits: number
    hits: IHit[]
  }
  

  export interface IHit {
    id: number
    pageURL: string
    type: string
    tags: string
    previewURL: string
    previewWidth: number
    previewHeight: number
    webformatURL: string
    webformatWidth: number
    webformatHeight: number
    largeImageURL: string
    imageWidth: number
    imageHeight: number
    imageSize: number
    views: number
    downloads: number
    collections: number
    likes: number
    comments: number
    user_id: number
    user: string
    userImageURL: string
    id_hash: string
    fullHDURL: string
    imageURL: string
    vectorURL?: string
  }
  
  export type TImages =  IHit[][]

  export interface IMagesInitialState  {
    loading: boolean,
    current: number,
    images: IHit[],
    imagesArray: TImages|null,
    selectedImage: IHit|null,
    error: null|string,
}

export interface IHome {
  imagesArray: TImages|null,
  loading: boolean,
  current: number,
  error:null|string,
  getImagesAction: (page:number) => void
  clearSelectedImage: () => void
  setCurrentPage: (page:number) => void

}

export interface IImageListCard {
  image: IHit;
  getSelectedImage: (id: number) => void;
}

export interface IImageDetail {
  image: IHit;
  loading: boolean;
}

export interface IGetImagesAction{
  page?:number
}