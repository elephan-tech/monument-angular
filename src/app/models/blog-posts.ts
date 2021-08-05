export interface ArticleInfo {
  articleLocation: string;
  articleLink: string;
}


export interface BlogPost {
  title: string;
  subtitle: string;
  article: ArticleInfo;
  name: string;
  display: boolean;
  link: string;
  location: string;
  content: string;
  blogID: string;
  date: Date;
  image?: string;
}


