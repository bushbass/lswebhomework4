document.body.style.backgroundColor = "red";
document.querySelector('h1').style.backgroundColor = "blue";
document.body.style.fontFamily = "sans-serif";
document.getElementById('nickname').innerHTML=('Big Al');
document.getElementById('favorites').innerHTML=('Pizza and Beer');
document.getElementById('hometown').innerHTML=('Parsippany, NJ');

var elem = document.createElement("img");
elem.src="http://alexnielsen.com/me-new-specs.jpg";
elem.setAttribute("height", "450");
document.querySelector('body').appendChild(elem);

var liList = document.querySelector('ul').getElementsByTagName("li");
var listLength = liList.length;
// for(var i = 0; i < listLength; i++) {
//   document.querySelector('ul')[i].className = "listitem";
// };

var ulList = document.querySelector('ul');
var items = ulList.getElementsByTagName("li");
for (var i = 0; i < items.length; ++i) {
   items[i].className = "listitem"
}

   var redStyle = document.createElement("STYLE");
   redStyle.innerHTML=".listitem {background-color: white;color: red; }"
    document.head.appendChild(redStyle);