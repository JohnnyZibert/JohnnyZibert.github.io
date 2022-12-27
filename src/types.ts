export interface IMyStack {
  imgUrl: string
  name?: string
  id?: string
}

//contact types
export interface IContactIcon {
  linkName: string
  link: string
  imgUrl: string
  id: number
}
export interface IGetIcons {
  contactIcons: IContactIcon[]
  isLoading: boolean
}

//stack types
export interface IStackIcons {
  name: string
  imgUrl: string
  id: number
}
export interface IGetStackIcons {
  stackIcons: IStackIcons[]
  isLoading: boolean
}

//types photos
export interface IPhoto {
  imgUrl: string
  id: number
}

export interface IGetPhotos {
  photos: IPhoto[]
  isLoading: boolean
}
