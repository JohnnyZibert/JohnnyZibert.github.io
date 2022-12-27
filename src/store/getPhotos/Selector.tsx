import { RootState } from '../Store'

export const selectorPhotos = () => (state: RootState) => state.photos
