import { LinkManager } from "./links";
export class PiHoleUpdater {
}

// Usage example
var linkManager = new LinkManager();
for (let j = 0; j < 5; j++) {
  const listId = linkManager.addList({
    description: "This is the description of the list " + j.toString(),
    name:  "List " + j.toString(),
    links: [],
  }).id;
  for (let i = 0; i < 10; i++) {
   linkManager.addLink({
    name: "Link " + i.toString(),
    url: "www.link" + j.toString() +i.toString() + ".com",
    type: "Type " + j.toString(),
  }, listId)
  }
}
console.log(linkManager.showLinks());
