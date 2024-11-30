let userScore=0
let compScore=0

const choices=document.querySelectorAll('.choice')
const msg=document.querySelector('#msg')
const cscore=document.querySelector('#comp-score')
const uscore=document.querySelector('#user-score')



///////////////////////////////
const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        userScore++
        uscore.innerText=userScore
        msg.innerText=`You Win!!!! ${userchoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
        

    }
    else{
        compScore++
        cscore.innerText=compScore
        msg.innerText=`You Lose!   ${compChoice} beats ${userchoice} `
        msg.style.backgroundColor="red"
        
    }

}
/////////////////////////
const drawGame=()=>{
  
    msg.innerText="Game was Draw ! Play Again.."
    msg.style.backgroundColor="orange"
    
}
///////////////////////////
const getCompChoice=()=>{
     let option=['rock','paper' ,'scissor']
     let idx=Math.floor(Math.random()*3)
     return option[idx]

}
////////////////////////////////////
const playGame=(userchoice)=>{
const compChoice=getCompChoice();


if(userchoice===compChoice){
   drawGame()
}
else{
   let userWin=true
   if (userchoice==='rock'){
    //paper scissor
         userWin=compChoice=='paper'?false:true;
   }
   else if(userchoice==='paper'){
    //scissor rock
        userWin=compChoice=='scissor'?false:true;
   }
   else{
    userWin=compChoice=='stone'?false:true;
   }
   showWinner(userWin,userchoice,compChoice)
}
}
////////////////////////////////////////////////////////
choices.forEach((choice)=>{

    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute("id")
        playGame(userchoice)
    })
})
