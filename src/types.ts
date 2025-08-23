export interface Item {
  title: string;
  category: string;
  authorName: string;
  authorImage: string;
  date: string;
  time: string;
  coverImage: string;
  description: string;
  showTitle?:boolean
  showWriter?:boolean
}

export interface Testimony {
  id: number;
  name: string;
  image: string;
  testimony: string;
}