var nb1 = 0
var nb2 = 0
var op =  0
var isnb1 = true
var a = 0
var operation = 0
var btnresult=document.getElementById("btnresult")
btnresult.textContent=nb1

function clicknb(nbclick){
  if (isnb1 == true) {
    nb1 = nb1 * 10 + nbclick
    btnresult.textContent=nb1
  }
  if (isnb1 == false) {
    nb2 = nb2 * 10 + nbclick
    btnresult.textContent=nb2
  }
  console.log("bouton nb est cliqué")
}

function clickop(operation){
  op = operation
  isnb1 = false
  console.log("bouton op est cliqué")
}

function resetcalcul(a){
  nb1 = a
  nb2 = a
  op = a
  isnb1 = true
  btnresult.textContent=nb1
}

function resultat(a){
  if (op == 1){
    nb1 = nb1 * nb2
    nb2 = 0
    isnb1 = true
  }
  if (op == 2){
    nb1 = nb1 / nb2
    nb2 = 0
    isnb1 = true
  }
  if (op == 3){
    nb1 = nb1 + nb2
    nb2 = 0
    isnb1 = true
  }
  if (op == 4){
    nb1 = nb1 - nb2
    nb2 = 0
    isnb1 = true
  }
  btnresult.textContent=nb1
}