console.log("Chrome Ext ready"); 

let paragraphs = document.getElementsByTagName("p");
let link = document.getElementsByTagName("a");

for (elt of paragraphs) {
    elt.style['background-color'] = "white"; 
    elt.style['color'] = "black";
    elt.style['font-weight'] = "900";
    elt.style['font-size'] = "30px";

}

for (elm of link) {
    elt.style['background-color'] = "white"; 
    elt.style['color'] = "black";
    elt.style['font-weight'] = "900";
    elt.style['font-size'] = "30px";
    elt.style['text-decoration'] = "none"; 
}

document.body.style.backgroundColor = "white";
document.body.style.fontWeight = "900"; 
document.body.style.color = "black !important";
document.body.style.zoom = "150%";   