import { Events } from './events';
import { Careers } from 'src/app/models/careers';
import { Fields } from './Fields';

export type CollectionType =
  'events' |
  'Events' |
  'careers' |
  'knowledge-center' |
  'announcements' |
  'emergencyMessage'|
  undefined;

export type Data = Careers | Events | any;


export type CollectionTypeData = {
  [key in CollectionType]: Data[]
};

export interface CollectionData extends CollectionTypeData {
  __type: Fields
}

export type Collection = any;
