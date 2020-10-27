class PiHoleUpdater {
  constructor() {
    this.mainFunction();
  }

  private path = require("path");
  private fs = require("fs");
  private directoryPath = this.path.join(__dirname, "../lists");
  private fileNames: string[] = [];
  private filesLines: string[] = [];

  mainFunction() {
    //passsing directoryPath and callback function
    this.fileNames = this.fs.readdirSync(this.directoryPath);
    
    this.fileNames.forEach((fileName) => {
      this.filesLines = this.filesLines.concat([
        this.fs.readFileSync(this.directoryPath + "/" + fileName, "utf8"),
      ]);
    });
    
    console.log(this.fileNames);
    console.log(this.filesLines);
  }

  storeAddresses() {

    this.fs.writeFile('./build/output.txt', this.filesLines,  function(err:Error) {
        if (err) {
            return console.error(err);
        }
        console.log("File created!");
    });
}
  showAddresses(){
    console.log(this.fileNames);
    console.log(this.filesLines);
  }

}

// Usage
var obj = new PiHoleUpdater();
obj.storeAddresses();
obj.showAddresses();
