let gn=document.querySelector('#guessn');

let score=0;
let remaining=10;
 document.querySelector('#remn').value=remaining;
        document.querySelector('#score').value=score;
function checkscore(){
    let rnnum=Math.floor((Math.random()*10)+1);
if(remaining===0){
    alert('you are out of chance pls refresh the page for next game , goodluck')
    return
}
    if(!gn.value ||  gn.value === ' '){
        alert('guess the number ');
    return
    }
if(gn.value<0 || gn.value>10){
    alert('guessed number is either below the range or out of the range , try again')
return
}
 if(gn.value == rnnum){
        
        document.querySelector('#msg').innerHTML=`you won,my number is also ${rnnum}`
        score++;
        document.querySelector('#score').value=score;
        }else{
        document.querySelector('#msg').innerHTML=`you lost, my number is ${rnnum} and your guessed number is ${gn.value}, try again better luck next time `
    }
  
    remaining--;
      document.querySelector('#remn').value=remaining;

}


 