

function hideonclose() {
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
//creates a close button on each task
var todolist = document.getElementsByTagName('li')
var i;

for(i = 0; i < todolist.length; i++ ) {
    var span = document.createElement('span')
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    todolist[i].appendChild(span);
}

//clicking on close button to hide
var close = document.getElementsByClassName("close");
var i;
hideonclose();

//checks out the list when clicked
var list = document.querySelector('ul')
list.addEventListener('click',function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    }
}, false)

//create new list item on add button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("inputfield").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Text field is empty! write something!");
    } else {
      document.getElementById("listul").appendChild(li);
    }
    document.getElementById("inputfield").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    hideonclose();
  }