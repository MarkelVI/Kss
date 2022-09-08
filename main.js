function getVal() {
  const val = document.getElementById('longueur').value;
  var chap = val.replace(/http\S+/g, "");
  var kss = (chap.length/1000).toFixed(1)
  var kas = (val.length/1000).toFixed(1)
  var sticker = (val.match(/http\S+/g) || []).length
  
  document.getElementById('answer').innerHTML =`Le chapitrent fait ${kss} kss, ${kas} kas\net ${sticker} stickers`;
}

function supprimer(){
  document.getElementById('longueur').value=' ';
}
