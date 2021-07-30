import { EmergencyMessage } from './../components/topnavigation/topnavigation.component';
import { Events } from './events';
import { Careers } from 'src/app/models/careers';
import { Fields } from './Fields';

export type CollectionType =
  'events' |
  'Events' |
  'careers' |
  'knowledgeCenter' |
  'announcements' |
  'emergencyMessage' |
  'familyResources' |
  'articles'|
  undefined;

export type Data = Careers | Events | EmergencyMessage | any;


export type CollectionTypeData = {
  [key in CollectionType]: Data[]
};

export interface CollectionData extends CollectionTypeData {
  __type: Fields;
}

export type Collection = any;
