var nb1 = 0
var nb2 = 0
var op =  0
var isnb1 = true
var a = 0
var operation = 0


function click(nbclick){
  if (isnb1 == true) {
    nb1 = nb1 * 10 + nbclick
  }
  if (isnb1 == false) {
    nb1 = nb1 * 10 + nbclick
  }
  console.log("bouton est cliqué");
}

function clickop(operation){
  op = operation
  isnb1 = false
}

function resetcalcul(a){
  nb1 = a
  nb2 = a
  op = a
  isnb1 = true
  alert(nb1);
}

function resultat(a){
  alert(nb1);
}