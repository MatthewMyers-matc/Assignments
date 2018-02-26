(function(){



var packages =[ {name: "Emmet", description: "test", author: "name", url='https://atom.io/packages/emmet', downloads: 2222222, stars: 5},
                {name: "atom-beautify", description: "test", author: "name", url='https://atom.io/packages/atom-beautify', downloads: 2222222, stars: 5},
                {name: "Linter", description: "test", author: "name", url='https://atom.io/packages/linter', downloads: 2222222, stars: 5},
                {name: "language-liquid", description: "test", author: "name", url='https://atom.io/packages/language-liquid', downloads: 2222222, stars: 5},
                {name: "Highlight Selected", description: "test", author: "name", url='https://atom.io/packages/highlight-selected', downloads: 2222222, stars: 5},
                {name: "File Icons", description: "test", author: "name", url='https://atom.io/packages/file-icons', downloads: 2222222, stars: 5},
                {name: "Pigments", description: "test", author: "name", url='https://atom.io/packages/pigments', downloads: 2222222, stars: 5},
                {name: "Minimap", description: "test", author: "name", url='https://atom.io/packages/minimap', downloads: 2222222, stars: 5},
                {name: "Atom Material UI", description: "test", author: "name", url='https://atom.io/themes/atom-material-ui', downloads: 2222222, stars: 5},
                {name: "Atom Material Syntax", description: "test", author: "name", url='https://atom.io/themes/atom-material-syntax', downloads: 2222222, stars: 5} ];

function Package(packages){
  this.name = packages.name;
  this.discription = packages.description;
  this.author = packages.author;
  this.url = packages.url;
  this.downloads = packages.downloads;
  this.stars = packages.stars;

  this.getFormattedDownlads = function (){
    return this.downloads.toLocaleString();
  }
  this.getFormattedStars = function (){
    return this.stars.toLocaleString();
  }
}

var today =  new Date();
console.log(today);
var dateEL = document.getElementById('date');
dateEL.textContent = today.toDateString();

//load package and write infor to page


}());
