import { Media } from './media';

export type FamilyResource = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: Media;
  file: Media;
  url: string;
};
