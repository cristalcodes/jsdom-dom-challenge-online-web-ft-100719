document.addEventListener('DOMContentLoaded', function (){

  const counter = document.getElementById('counter');
  const subtract = document.getElementById('minus');
  const add = document.getElementById('plus');
  const likes = document.getElementById('heart');
  const pause = document.getElementById('pause');
  const commentForm = document.getElementById('comment-form');
  const commentInput = document.getElementById('comment-input');
  const submitButton = document.getElementById('submit');


  let timerRunning = true;

//Sets up the timer
  const interval = setInterval(timeElapsed, 1000);
  function timeElapsed(){
    if (timerRunning) { //-> if timerRunning is truthy, then the counter imcrements.
      counter.innerText++;
    }
  }

//decrements timer
  subtract.addEventListener('click', function(event){
    counter.innerText--
  })

//increment timer
  add.addEventListener('click', function(event){
    counter.innerText++
  })

//pause the timer
  pause.addEventListener('click', function(event){
    if (timerRunning){
      timerRunning = false;
      pause.innerText = "resume"
      subtract.disabled = true;
      add.disabled = true;
      likes.disabled = true;
      commentInput.disabled = true;
      submitButton.disabled = true;
    } else if (!timerRunning){
      timerRunning = true;
      pause.innerText = "pause"
      subtract.disabled = false;
      add.disabled = false;
      commentInput.disabled = false;
      submitButton.disabled = false;
    }
  })


//sets up comments
  commentForm.addEventListener('submit', function(event){
    event.preventDefault()
    const userInputField = event.target.querySelector('#comment-input')
    const userInput = userInputField.value
    if (userInput != ""){
      const commentPTag = document.createElement('p')
      commentPTag.textContent = userInput
      list.appendChild(commentPTag)
    }
    userInputField.value = ""
  })




})

//good pesudocode :)
  // //pause the timer
  //   pause.addEventListener('click', function(event){
  //     if the timer is running,
  //       stop the timer
  //       change the text inside the timer to "resume "
  //         else if the timer is NOT running
  //         start the timer
  //         change the text inside timer to "pause"
  //   })



//TRASH CODE
//counter - first attempt-overcomplicating things!
  // counter.addEventListener('load', function(event){
  // const currentCountString = document.getElementById('counter').innerText
  // const currentCount = parseInt(currentCountString, 10);
  // let seconds = setInterval(function time() {
  //   currentCount+= 1
  //   }, 1000);
  // })
