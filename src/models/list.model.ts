export interface List {
  id: string;
  name: string;
  items?: ListItem[];
}

export interface ListItem {
  id: string;
  name: string;
  url: string;
}
