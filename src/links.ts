import { LinkList, Link, NewLink, NewLinkList } from "./models/link.model";

export class LinkManager {
  availableLists: LinkList[] = [];
  listOfLinks: LinkList;
  exampleLink: Link;

  linkCounter = 0; // Temporal counters until database is implemented and id is auto-generated
  listCounter = 0;

  constructor() {
    this.exampleLink = {
      id: "0000000000000000",
      name: "Google",
      url: "www.google.com",
      type: "Personal data seller",
    };

    this.listOfLinks = {
      id: "0000000000000000",
      description: "This is the default list.",
      name: "Default",
      links: [this.exampleLink],
    };

    this.availableLists.push(this.listOfLinks);
  }

  public addLink(link: NewLink, listId?: string): Link {
    this.linkCounter++;
    const linkToStore = {
      ...link,
      id: this.linkCounter.toString().padStart(16, "0"),
    };
    if (listId) {
      const selectedListPosition = this.availableLists.findIndex(
        (list) => list.id === listId
      );
      if (selectedListPosition !== -1) {
        this.availableLists[selectedListPosition].links?.push(linkToStore);
      } else throw new Error("Id does not correspond with any list of Links");
    } else {
      this.listOfLinks.links?.push(linkToStore);
    }
    return linkToStore;
  }

  public addList(list: NewLinkList): LinkList {
    this.listCounter++;
    const listToStore = {
      ...list,
      id: this.listCounter.toString().padStart(16, "0"),
    };
    this.availableLists.push(listToStore);
    return listToStore;
  }

  public showLinks(): string {
    return JSON.stringify(this.availableLists);
  }
}
