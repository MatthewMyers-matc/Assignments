//(function(){



var data =[     {name: 'Emmet', description: 'Emmet is the number one code snippet tool used by front end developers. Emmet helps to create HTML and CSS faster with the use of snippets. It uses abbreviations that expand to valid HTML tags.', author: 'emmetio', url: 'https://atom.io/packages/emmet', downloads: 'Downloads: ' + 1665835, stars: 'Stars: ' + 2536},
                {name: "atom-beautify", description: "The atom-beautify package will clean up your code, and make it more readable. It has support for a variety of programming languages, including HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C, CoffeeScript, and more.", author: "name", url: 'https://atom.io/packages/atom-beautify', downloads: 'Downloads: ' + 4233408, stars: 'Stars: ' +4546},
                {name: "Linter", description: "The Linter package is a base linter package that relies on sub-packages for specific languages.", author: "name", url: 'https://atom.io/packages/linter', downloads: 'Downloads: ' + 4413173, stars: 'Stars: ' + 4128},
                {name: "language-liquid", description: "The language-liquid package is one I can’t live without when theming for Shopify. For the most part, Atom is pretty good with out-of-the-box syntax highlighting, but it doesn’t have syntax highlighting for Liquid. This is also a great package to use if you’re using Jekyll for templating static sites or blogs.", author: "name", url: 'https://atom.io/packages/language-liquid', downloads: 'Downloads: ' + 32365, stars: 'Stars: ' + 76},
                {name: "Highlight Selected", description: "The Highlight Selected package is super simple, it highlights the current word selected on double click. Especially useful if you’re looking for a particular method name or function within a file without having to open the find panel.", author: "name", url: 'https://atom.io/packages/highlight-selected', downloads: 'Downloads: ' + 1043782, stars: 'Stars: ' + 2741},
                {name: "File Icons", description: "The File Icons package displays specific and meaningful icons next to files in your file-tree, fuzzy-finder, and tabs. They help to visually parse file types with little effort. You can choose between colored or monochrome icons.", author: "name", url: 'https://atom.io/packages/file-icons', downloads: 'Downloads: ' + 4284581, stars: 'Stars: ' + 4949},
                {name: "Pigments", description: "The Pigments package displays colors in project files, wherever it parses a color to be. It’s super helpful to easily determine what a specific hex code might be, especially if the color isn’t labelled by a variable.", author: "name", url: 'https://atom.io/packages/pigments', downloads: 'Downloads: ' + 2130545, stars: 'Stars: ' + 3332},
                {name: "Minimap", description: "The Minimap package displays a Minimap preview of your file on the right hand side of your editor. You can turn code highlights on and off, as well as change the preview to be on the left-hand side if you wish. It also has a ton of other customizations if you want to dig deeper.", author: "name", url: 'https://atom.io/packages/minimap', downloads: 'Downloads: ' + 4501700, stars: 'Stars: ' + 5173},
                {name: "Atom Material UI", description: "The Atom Material UI is a UI (user interface) theme that is an attempt to follow Google’s material design guidelines. It works hand-in-hand with Atom Material Syntax, which enables matching syntax highlighting for the Atom Material UI theme.", author: "name", url: 'https://atom.io/themes/atom-material-ui', downloads: 'Downloads: ' + 1301210, stars: 'Stars: ' + 1415},
                {name: "Atom Material Syntax", description: "NO DISCRIPTION", author: "name", url: 'https://atom.io/themes/atom-material-syntax', downloads: 'Downloads: ' + 782926, stars: 'Stars: ' +  1007} ];

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
var p1Link = document.getElementById('p1-link');
var p1Author = document.getElementById('p1-author');
var p1Downloads = document.getElementById('p1-downloads');
var p1Stars = document.getElementById('p1-stars');

p1Name.textContent = emmet.name;
p1Description.textContent = emmet.description;
p1Link.textContent = emmet.url;
p1Author.textContent = emmet.author;
p1Downloads.textContent = emmet.downloads;
p1Stars.textContent = emmet.stars;

//for all of p2
var p2Name = document.getElementById('p2-name');
var p2Description = document.getElementById('p2-description');
var p2Link = document.getElementById('p2-link');
var p2Author = document.getElementById('p2-author');
var p2Downloads = document.getElementById('p2-downloads');
var p2Stars = document.getElementById('p2-stars');

p2Name.textContent = beautify.name;
p2Description.textContent = beautify.description;
p2Link.textContent = beautify.url;
p2Author.textContent = beautify.author;
p2Downloads.textContent = beautify.downloads;
p2Stars.textContent = beautify.stars;

//for all of p3
var p3Name = document.getElementById('p3-name');
var p3Description = document.getElementById('p3-description');
var p3Link = document.getElementById('p3-link');
var p3Author = document.getElementById('p3-author');
var p3Downloads = document.getElementById('p3-downloads');
var p3Stars = document.getElementById('p3-stars');

p3Name.textContent = linter.name;
p3Description.textContent = linter.description;
p3Link.textContent = linter.url;
p3Author.textContent = linter.author;
p3Downloads.textContent = linter.downloads;
p3Stars.textContent = linter.stars;

//for all of p4
var p4Name = document.getElementById('p4-name');
var p4Description = document.getElementById('p4-description');
var p4Link = document.getElementById('p4-link');
var p4Author = document.getElementById('p4-author');
var p4Downloads = document.getElementById('p4-downloads');
var p4Stars = document.getElementById('p4-stars');

p4Name.textContent = liquid.name;
p4Description.textContent = liquid.description;
p4Link.textContent = liquid.url;
p4Author.textContent = liquid.author;
p4Downloads.textContent = liquid.downloads;
p4Stars.textContent = liquid.stars;

//for all of p5
var p5Name = document.getElementById('p5-name');
var p5Description = document.getElementById('p5-description');
var p5Link = document.getElementById('p5-link');
var p5Author = document.getElementById('p5-author');
var p5Downloads = document.getElementById('p5-downloads');
var p5Stars = document.getElementById('p5-stars');

p5Name.textContent = highlight.name;
p5Description.textContent = highlight.description;
p5Link.textContent = highlight.url;
p5Author.textContent = highlight.author;
p5Downloads.textContent = highlight.downloads;
p5Stars.textContent = highlight.stars;

//for all of p6
var p6Name = document.getElementById('p6-name');
var p6Description = document.getElementById('p6-description');
var p6Link = document.getElementById('p6-link');
var p6Author = document.getElementById('p6-author');
var p6Downloads = document.getElementById('p6-downloads');
var p6Stars = document.getElementById('p6-stars');

p6Name.textContent = icons.name;
p6Description.textContent = icons.description;
p6Link.textContent = icons.url;
p6Author.textContent = icons.author;
p6Downloads.textContent = icons.downloads;
p6Stars.textContent = icons.stars;

//for all of p7
var p7Name = document.getElementById('p7-name');
var p7Description = document.getElementById('p7-description');
var p7Link = document.getElementById('p7-link');
var p7Author = document.getElementById('p7-author');
var p7Downloads = document.getElementById('p7-downloads');
var p7Stars = document.getElementById('p7-stars');

p7Name.textContent = pigment.name;
p7Description.textContent = pigment.description;
p7Link.textContent = pigment.url;
p7Author.textContent = pigment.author;
p7Downloads.textContent = pigment.downloads;
p7Stars.textContent = pigment.stars;

//for all of p8
var p8Name = document.getElementById('p8-name');
var p8Description = document.getElementById('p8-description');
var p8Link = document.getElementById('p8-link');
var p8Author = document.getElementById('p8-author');
var p8Downloads = document.getElementById('p8-downloads');
var p8Stars = document.getElementById('p8-stars');

p8Name.textContent = minimap.name;
p8Description.textContent = minimap.description;
p8Link.textContent = minimap.url;
p8Author.textContent = minimap.author;
p8Downloads.textContent = minimap.downloads;
p8Stars.textContent = minimap.stars;

//for all of p9
var p9Name = document.getElementById('p9-name');
var p9Description = document.getElementById('p9-description');
var p9Link = document.getElementById('p9-link');
var p9Author = document.getElementById('p9-author');
var p9Downloads = document.getElementById('p9-downloads');
var p9Stars = document.getElementById('p9-stars');

p9Name.textContent = ui.name;
p9Description.textContent = ui.description;
p9Link.textContent = ui.url;
p9Author.textContent = ui.author;
p9Downloads.textContent = ui.downloads;
p9Stars.textContent = ui.stars;

//for all of p10
var p10Name = document.getElementById('p10-name');
var p10Description = document.getElementById('p10-description');
var p10Link = document.getElementById('p10-link');
var p10Author = document.getElementById('p10-author');
var p10Downloads = document.getElementById('p10-downloads');
var p10Stars = document.getElementById('p10-stars');

p10Name.textContent = syntax.name;
p10Description.textContent = syntax.description;
p10Link.textContent = syntax.url;
p10Author.textContent = syntax.author;
p10Downloads.textContent = syntax.downloads;
p10Stars.textContent = syntax.stars;


//}());
