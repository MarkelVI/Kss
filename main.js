function getVal() {
  const val = document.getElementById('longueur').value;
  var chap = val.replace(/http\S+/g, "");
  var kss = Math.round((parseInt(chap.length) / 1000 + Number.EPSILON) * 10) / 10;
  
  document.getElementById('answer').innerHTML = "Le chapitrent fait " + kss + " kss";
}
