

function check() {
    console.log('test');
}

function submit() {
    alert('Volume Set To  ' + output.textContent);
}

function reset() {
   outputInt = 0;
   output.textContent = outputInt;
}


var hits = 0;
var hitElement = document.querySelector( '.hits' );
document.body.onkeyup = function(e) {
  if( e.keyCode == 32 ) {
    addHit();
  }
  if (outputInt < 100) {
    outputInt +=1;
   output.textContent = outputInt;
   }
}

var addHit = function() {
  hits++;
  renderHits();
}

var renderHits = function() {
 hitElement.innerHTML = hits;
}

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);


const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);

const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);






