function getVal() {
  var replace = ["'''", "''", "*", "<u>", "</u>", "<s>", "</s>", "<spoil>", "</spoil>", "<code>", "</code>"];
  const val = document.getElementById('longueur').value;
  var chap = val.replace(/http\S+/g, "");
  for (const element of replace) {
    chap = chap.replaceAll(element, "");
  }
  chap = chap.replaceAll("\n", "\n ").replaceAll("\n ", "\n").replaceAll(" \n", "\n")
  chap = chap.replaceAll("\n", "")
  chap = chap.replaceAll("  ", " ")
  var kss = (chap.length/1000).toFixed(1)
  var kas = (val.length/1000).toFixed(1)
  var sticker = (val.match(/http\S+/g) || []).length
  document.getElementById('answer').innerHTML =`Le chapitrent fait ${kss} kss, ${kas} kas\net ${sticker} stickers`;
}

function supprimer(){
  document.getElementById('longueur').value = ' ';
}

function trapiser() {
  text = document.getElementById('trap')
  button = document.getElementById('trapotin')
  if (text.style.visibility != 'visible' && button.innerHTML != 'TRAPENT' ) {
    text.style.visibility = 'visible';
    document.getElementById('trapotin').innerHTML='TRAPENT';
  }
  else {
    if (text.value != '') {
      mot = text.value;
      let replaced = document.getElementById('longueur').value.replace(mot, "trap");
      document.getElementById('longueur').value = replaced;
    }
    else {
      text.style.visibility = 'hidden';
      document.getElementById('trapotin').innerHTML='Trap';
    }
  }
}

