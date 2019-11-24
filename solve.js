var total;
var map1;
let str = [];
var set2;
var wrd = "";
var out = [];

function clear_all() {
  map1 = new Map();
  total = "";
  out.length = 0;
  wrd = "";
  document.getElementById("demo").innerHTML = total;
  document.getElementById("maps").innerHTML = out;
}

function search_input() {
  total = document.getElementById("txt").value;
  total = total.toLowerCase();
  var temp = total;
  document.getElementById("demo").innerHTML = total;
  map1 = new Map();
  var set1 = new Set();
  str = total.split('\n\n');
  for(var i = 0; i < str.length; i++) {
      var para = str[i]; // is a paragraph
      var words = para.split(" "); // words
      // i is the paragraph number
      for(var j = 0; j < words.length; j++) {
          words[j] = words[j].replace(/[&\/\\#,+()$~%.'":*?<>{}\n]/g, '');
          var key = words[j];
          map1[key] = map1[key] || [];
          map1[key].push(i+1);
          set1.add(words[j]);
      }
  }
  // DEBUG FROM HERE
  // for (let item of set1) {
  //     console.log(item);
  //     for(let it of map1[item]){
  //         console.log(it);
  //     }
  // }

}

function search_output() {
  // wrd is word to search in top 10
  
  wrd = document.getElementById("text1").value;
  wrd = wrd.toLowerCase();
  var topTen = 0;
  set2 = new Set();
  out.length = 0;

  // no text
  if( (total.length == 0) || (total == undefined) ) {
    document.getElementById("maps").innerHTML = "Enter Text please"
  }

  // present
  else if(map1[wrd] != undefined) {
    for(let it of map1[wrd]) {
      set2.add(it);
    }
    for(let item of set2) {
      if(topTen == 10) {
        break;
      }
      out.push(item);
      topTen = topTen + 1;
    }
    document.getElementById("maps").innerHTML = out;
  } 

  // word not found
  else {
    alert("word not found, please try another");
    document.getElementById("maps").innerHTML = "oops!! Word Not Found , Please try another !";
  }
  
}
