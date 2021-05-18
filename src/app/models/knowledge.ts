export interface Item {
  itemTitle: string;
  itemDescription: string;
  learnMore: string;
  download: string;
}
export interface Tab {
  name: string;
  items: Item[];
}

export interface Content {
  title: string;
  image: string;
  description: string;
  mainContent: string;
  id: string;
  tabs: Tab[];
}

export interface Model {
  name: string;
  content: Content[];
}
