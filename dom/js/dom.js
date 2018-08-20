// giving background color for body

document.body.style.backgroundColor = "gray";
// getting the id for main-section 

var mainsection = document.getElementById('mainsection');
// header div section

var headerdiv = document.createElement("div");
// styling header

headerdiv.style.backgroundColor = "#51D11E";
headerdiv.style.height = "5px";
mainsection.style.paddingTop="10px";
mainsection.appendChild(headerdiv);

// first division of nav-header right part
var navheader = document.createElement("div");
navheader.classList.add("navheader");
var navheading = document.createElement("span");

// span contents
var navhead = document.createTextNode("The Modernist");
navheading.classList.add("modernist");
navheading.appendChild(navhead);
navheader.appendChild(navheading);
// appending navheader to mainsection
mainsection.appendChild(navheader);

// creating nav header down part
var navsidecont = document.createElement("p");
var navcont = document.createTextNode("Free PSD Website template");
navsidecont.classList.add("modernist-side");
navsidecont.appendChild(navcont);
navheader.appendChild(navsidecont);


var ul = document.createElement('ul');
ul.classList.add("ul");
navheader.appendChild(ul);
var li1= document.createElement('li');
li1.innerHTML="Home";
ul.appendChild(li1);
var li2= document.createElement('li');
li2.innerHTML="Style demo";
ul.appendChild(li2);
var li3= document.createElement('li');
li3.innerHTML="Full width";
ul.appendChild(li3);
var li4= document.createElement('li');
li4.innerHTML="Dropdown";
ul.appendChild(li4);
var li5= document.createElement('li');
li5.innerHTML="Protfolio";
ul.appendChild(li5);
var li6= document.createElement('li');
li6.innerHTML="Gallery";
ul.appendChild(li6);


// paragraph division
var paraleft= document.createElement("div");
paraleft.classList.add("paraleft");

var parahead = document.createElement("h2");
var para= document.createTextNode("Cursus pentai Saccum nuclea");
parahead.classList.add("parahead");
parahead.appendChild(para);
paraleft.appendChild(parahead);


var parap= document.createElement("p");
var parap1= document.createTextNode("Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.Urnaultries quis vurabiur phasellentesque congue magnis vestibulum ulla et feugiat adipisscinia pellentum leo.");
parap.classList.add("parap1");
var btn=document.createElement("button");
btn.innerHTML="Read more here>";
btn.classList.add("btn");
parap.appendChild(parap1);

paraleft.appendChild(parap);
paraleft.appendChild(btn);
mainsection.appendChild(paraleft);

// adding the image on the right side of para
var paraimg= document.createElement("div");
paraimg.classList.add("paraimg");
paraimg.style.backgroundImage="url(js/baby.jpeg)";
paraimg.style.backgroundRepeat="no-repeat";
paraimg.style.backgroundPosition="center";
paraimg.style.backgroundSize="cover";
mainsection.appendChild(paraimg);