function getVal() {
  const val = document.getElementById('longueur').value;
  var chap = val.replace(/http\S+/g, "");
  var kss = (chap.length/1000).toFixed(1)
  var kas = (val.length/1000).toFixed(1)
  var taux = (parseFloat(kss) / parseFloat(kas) *100).toFixed()
  console.log(kas.length + kss)
  
  document.getElementById('answer').innerHTML =`Le chapitrent fait ${kss} kss\net a un taux de stickerisation de ${taux} %`;
}
