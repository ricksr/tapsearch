var total;
var map1 = new Map();
let str = [];

function clear_all() {
  map1 = new Map();
  total = "";
  document.getElementById("demo").innerHTML = total;
}
function search_input() {
  total = document.getElementById("txt").value;
  total = total.toLowerCase();
  total.replace( /,/g, "" );
  total.replace( /./g, "" );
  document.getElementById("demo").innerHTML = total;
  map1 = new Map();
  var set1 = new Set();
  str = total.split('\n\n');
  for(var i = 0; i < str.length; i++) {
      var para = str[i]; // is a paragraph
      var words = para.split(" "); // words
      // i is the paragraph number
      for(var j = 0; j < words.length; j++) {
          //map1.set(words[j], i+1);
          //map1[words[j]].push(i+1);
          var key = words[j];
          map1[key] = map1[key] || [];
          map1[key].push(i+1);
          set1.add(words[j]);
      }
  }
  //console.log(map1);
  for (let item of set1) {
      console.log(item);
      for(let it of map1[item]){
          console.log(it);
      }
  }

}

function search_output() {
  var wrd = document.getElementById("text1").value;
  if(total.length == 0) {
    document.getElementById("maps").innerHTML = "Enter Text please"
  }
  else {
    document.getElementById("maps").innerHTML = map1[wrd];
    for(let item of map1[wrd]) {
      alert("present in paragraph " + item);
    }
  }
}
