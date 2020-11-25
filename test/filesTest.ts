import { Link, NewLink, NewLinkList } from "./../src/models/link.model";
import { LinkManager } from "../src/links";
import { expect } from "chai";

describe("PiHoleUpdater tests", () => {
  const linkManager = new LinkManager();

  const linkTest: NewLink = {
    name: "testLink",
    url: "www.anothersite.com",
    type: "anothertype",
  };
  const listTest: NewLinkList = {
    name: "testList",
    description: "anothertype",
    links: [],
  };


  it("Adding a new link", () => {
    expect(linkManager.addLink(linkTest), "addLink Test")
      .to.be.an("object")
      .to.have.property("id")
      .to.equal("0000000000000001");
  });

  it("Adding a new List", () => {
    expect(linkManager.addList(listTest), "addList Test")
      .to.be.an("object")
      .to.have.property("id")
      .to.not.be.equal("0000000000000000");
  });

  it("Adding a link to the new list", () => {
    expect(linkManager.addLink(linkTest, "0000000000000001" ), "Adding link to recently created list")
      .to.be.deep.equal({...linkTest,id: '0000000000000002'});
  });
  
  it("Displaying list", () => {
    expect(linkManager.showLinks(), "Show link lists").to.be.an("string");
  })
});
