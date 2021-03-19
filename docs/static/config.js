// highlight.js
hljs.initHighlighting();

// tablesort
document$.subscribe(function() {
  var tables = document.querySelectorAll("article table");
  tables.forEach(function(table) {
    new Tablesort(table);
  });
});

// append circle character to every .can-use-filter
// damn this was hard
document.addEventListener("DOMContentLoaded", function() {
  var canusefilter = document.getElementsByClassName("can-use-filter");
  for (var i = 0; i < canusefilter.length; i++) {
    var newspan = document.createElement("span");
    newspan.setAttribute("class", "append-circle");
    newspan.textContent = " ◎";
    var origtext = canusefilter[i].childNodes[0];
    var spanlink = canusefilter[i].childNodes[1];
    canusefilter[i].appendChild(newspan);
    canusefilter[i].appendChild(spanlink);
  }
});
