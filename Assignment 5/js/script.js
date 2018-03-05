//(function(){



var data =[     {name: 'Emmet', description: 'test', author: 'emmetio', url: 'https://atom.io/packages/emmet', downloads: 1665835, stars: 2536},
                {name: "atom-beautify", description: "test", author: "name", url: 'https://atom.io/packages/atom-beautify', downloads: 4233408, stars: 4546},
                {name: "Linter", description: "test", author: "name", url: 'https://atom.io/packages/linter', downloads: 4413173, stars: 4128},
                {name: "language-liquid", description: "test", author: "name", url: 'https://atom.io/packages/language-liquid', downloads: 32365, stars: 76},
                {name: "Highlight Selected", description: "test", author: "name", url: 'https://atom.io/packages/highlight-selected', downloads: 1043782, stars: 2741},
                {name: "File Icons", description: "test", author: "name", url: 'https://atom.io/packages/file-icons', downloads: 4284581, stars: 4949},
                {name: "Pigments", description: "test", author: "name", url: 'https://atom.io/packages/pigments', downloads: 2130545, stars: 3332},
                {name: "Minimap", description: "test", author: "name", url: 'https://atom.io/packages/minimap', downloads: 4501700, stars: 5173},
                {name: "Atom Material UI", description: "test", author: "name", url: 'https://atom.io/themes/atom-material-ui', downloads: 1301210, stars: 1415},
                {name: "Atom Material Syntax", description: "test", author: "name", url: 'https://atom.io/themes/atom-material-syntax', downloads: 782926, stars: 1007} ];

function Package(data){
  this.name = data.name;
  this.description= data.description;
  this.author = data.author;
  this.url = data.url;
  this.downloads = data.downloads;
  this.stars = data.stars;

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
var emmet = new Package (data[0]);
var beautify = new Package (data[1]);
var linter = new Package (data[2]);
var liquid = new Package (data[3]);
var highlight = new Package (data[4]);
var icons = new Package (data[5]);
var pigment = new Package (data[6]);
var minimap = new Package (data[7]);
var ui = new Package (data[8]);
var syntax = new Package (data[9]);


//for all of p1
var p1Name = document.getElementById('p1-name');
var p1Description = document.getElementById('p1-description');
var p1Author = document.getElementById('p1-author');
var p1Downloads = document.getElementById('p1-downloads');
var p1Stars = document.getElementById('p1-stars');

p1Name.textContent = emmet.name;
p1Description.textContent = emmet.description;
p1Author.textContent = emmet.author;
p1Downloads.textContent = emmet.downloads;
p1Stars.textContent = emmet.stars;

//for all of p2
var p2Name = document.getElementById('p2-name');
var p2Description = document.getElementById('p2-description');
var p2Author = document.getElementById('p2-author');
var p2Downloads = document.getElementById('p2-downloads');
var p2Stars = document.getElementById('p2-stars');

p2Name.textContent = beautify.name;
p2Description.textContent = beautify.description;
p2Author.textContent = beautify.author;
p2Downloads.textContent = beautify.downloads;
p2Stars.textContent = beautify.stars;

//for all of p3
var p3Name = document.getElementById('p3-name');
var p3Description = document.getElementById('p3-description');
var p3Author = document.getElementById('p3-author');
var p3Downloads = document.getElementById('p3-downloads');
var p3Stars = document.getElementById('p3-stars');

p3Name.textContent = linter.name;
p3Description.textContent = linter.description;
p3Author.textContent = linter.author;
p3Downloads.textContent = linter.downloads;
p3Stars.textContent = linter.stars;

//for all of p4
var p4Name = document.getElementById('p4-name');
var p4Description = document.getElementById('p4-description');
var p4Author = document.getElementById('p4-author');
var p4Downloads = document.getElementById('p4-downloads');
var p4Stars = document.getElementById('p4-stars');

p4Name.textContent = liquid.name;
p4Description.textContent = liquid.description;
p4Author.textContent = liquid.author;
p4Downloads.textContent = liquid.downloads;
p4Stars.textContent = liquid.stars;

//for all of p5
var p5Name = document.getElementById('p5-name');
var p5Description = document.getElementById('p5-description');
var p5Author = document.getElementById('p5-author');
var p5Downloads = document.getElementById('p5-downloads');
var p5Stars = document.getElementById('p5-stars');

p5Name.textContent = highlight.name;
p5Description.textContent = highlight.description;
p5Author.textContent = highlight.author;
p5Downloads.textContent = highlight.downloads;
p5Stars.textContent = highlight.stars;

//for all of p6
var p6Name = document.getElementById('p6-name');
var p6Description = document.getElementById('p6-description');
var p6Author = document.getElementById('p6-author');
var p6Downloads = document.getElementById('p6-downloads');
var p6Stars = document.getElementById('p6-stars');

p6Name.textContent = icons.name;
p6Description.textContent = icons.description;
p6Author.textContent = icons.author;
p6Downloads.textContent = icons.downloads;
p6Stars.textContent = icons.stars;

//for all of p7
var p7Name = document.getElementById('p7-name');
var p7Description = document.getElementById('p7-description');
var p7Author = document.getElementById('p7-author');
var p7Downloads = document.getElementById('p7-downloads');
var p7Stars = document.getElementById('p7-stars');

p7Name.textContent = pigment.name;
p7Description.textContent = pigment.description;
p7Author.textContent = pigment.author;
p7Downloads.textContent = pigment.downloads;
p7Stars.textContent = pigment.stars;

//for all of p8
var p8Name = document.getElementById('p8-name');
var p8Description = document.getElementById('p8-description');
var p8Author = document.getElementById('p8-author');
var p8Downloads = document.getElementById('p8-downloads');
var p8Stars = document.getElementById('p8-stars');

p8Name.textContent = minimap.name;
p8Description.textContent = minimap.description;
p8Author.textContent = minimap.author;
p8Downloads.textContent = minimap.downloads;
p8Stars.textContent = minimap.stars;

//for all of p9
var p9Name = document.getElementById('p9-name');
var p9Description = document.getElementById('p9-description');
var p9Author = document.getElementById('p9-author');
var p9Downloads = document.getElementById('p9-downloads');
var p9Stars = document.getElementById('p9-stars');

p9Name.textContent = ui.name;
p9Description.textContent = ui.description;
p9Author.textContent = ui.author;
p9Downloads.textContent = ui.downloads;
p9Stars.textContent = ui.stars;

//for all of p10
var p10Name = document.getElementById('p10-name');
var p10Description = document.getElementById('p10-description');
var p10Author = document.getElementById('p10-author');
var p10Downloads = document.getElementById('p10-downloads');
var p10Stars = document.getElementById('p10-stars');

p10Name.textContent = syntax.name;
p10Description.textContent = syntax.description;
p10Author.textContent = syntax.author;
p10Downloads.textContent = syntax.downloads;
p10Stars.textContent = syntax.stars;


//}());
