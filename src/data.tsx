import { v4 as uuidv4 } from 'uuid'

import { images } from './assets/images/images'

export const DataUser = [
  {
    image: images.react,
    name: 'React',
    id: uuidv4(),
  },
  {
    image: images.js,
    name: 'Java Script',
    id: uuidv4(),
  },
  {
    image: images.typeScript,
    name: 'Type Script',
    id: uuidv4(),
  },
  {
    image: images.redux,
    name: 'Redux',
    id: uuidv4(),
  },
  {
    image: images.gitHub,
    name: 'Github',
    id: uuidv4(),
  },
  {
    image: images.framer,
    name: 'Framer motion',
    id: uuidv4(),
  },
  {
    image: images.axios,
    name: 'Axios',
    id: uuidv4(),
  },
  {
    image: images.styled,
    name: 'Styled components',
    id: uuidv4(),
  },
]
