var hNum = parseInt(Cookies.get('HotDogs')) || 0
  , pNum = parseInt(Cookies.get('Pizza')) || 0
  , dNum = parseInt(Cookies.get('Doughnuts')) || 0
  ; sum = hNum + pNum +dNum
document.getElementsByClassName('htdogNum')[0].innerHTML = hNum;
document.getElementsByClassName('pizzaNum')[0].innerHTML = pNum;
document.getElementsByClassName('doughNum')[0].innerHTML = dNum;


document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('#hotdogs').onclick = function hotDogClick(){
    hNum++;
    if (hNum == 3){
      alert("I don't think you need anymore");
    }
    document.getElementsByClassName('htdogNum')[0].innerHTML = hNum;
    Cookies.set( 'HotDogs', hNum );
  };
  document.querySelector('#pizza').onclick = function pizzaClick(){
    pNum++;
    if (pNum == 5){
      alert("5 slices?....talk about a minute on the lips, lifetime on the hips");
    }
    document.getElementsByClassName('pizzaNum')[0].innerHTML = pNum;
    Cookies.set( 'Pizza', pNum );
  };
  document.querySelector('#doughnuts').onclick = function doughnutClick(){
    dNum++;
    if (dNum == 3){
      alert("Because nobody ever said 'too many dougnuts'...except for your scale");
    }
    document.getElementsByClassName('doughNum')[0].innerHTML = dNum;
    Cookies.set( 'Doughnuts', dNum );
  };
  document.getElementById('checkout').onclick = function(){
    Cookies.set( 'HotDogs', 0 );
    Cookies.set( 'Pizza', 0 );
    Cookies.set( 'Doughnuts', 0 );
    // window.location.reload();
  
  };
})
