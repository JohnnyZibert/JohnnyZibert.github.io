export interface IMyStack {
  image: string
  name: string
  id?: string
}

export interface ITextDataObj {
  navInfo: {
    aboutMeTitle: string
    myStackTitle: string
    myWorkTitle: string
    myContactTitle: string
  }
  title: string
  aboutMe: string
  titleStack: string
  titleWork: string
  projectName: { name: string; id: number }[]
  titleContact: string
  contactName: { name: string; id: number }[]
  photoDirection: { name: string }
}
