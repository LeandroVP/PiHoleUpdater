export interface LinkList extends NewLinkList{
  id: string;
}

export interface NewLinkList {
  description: string;
  name: string;
  links?: Link[];
}

export interface Link extends NewLink{
  id: string;
}

export interface NewLink {
  name: string;
  url: string;
  type?: string;
}
