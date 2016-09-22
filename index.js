function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  const targetId = document.getElementById('nested');
  return targetId.getElementsByClassName('target')[0];
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('.ranked-list li');
  for ( let i = 0; i < lis.length; i++) {
    lis[i].textContent = parseInt(lis[i].textContent) + parseInt(n);
  }
  return lis;
}

function deepestChild() {
	var gn = document.getElementById('grand-node').querySelectorAll('div');
 	var gnc = gn[gn.length-1];
 	return gnc;
}
