// Update to local storage
   const score =  JSON.parse(localStorage.getItem('score'));

// create a function to generate flips using Math.random
function pickMove (playermove) {
    
    const randNum = Math.random();
    
    let picker = ''
    
         if (randNum >= 0 && randNum < 1/3) {
               picker = 'lemon'
         } else if (randNum >= 1/3 && randNum < 2/3) {
              picker = 'apple'
         } else if (randNum >= 2/3 && randNum < 1) {
              picker = 'strawberry';
    
         }
    // Generating moves for each fruit flips
        let result = ''
    
         if (playermove === 'lemon') {
            if (picker === 'lemon') {
                result = 'you tie'
           } else if (picker === 'apple') {
                result = 'you win'
           } else if (picker === 'strawberry') {
               result = 'you loss'
           }
     
         }


         if (playermove === 'apple') {
            if (picker === 'lemon') {
                result = ' you win'
           } else if (picker === 'apple') {
                result = 'you tie'
           } else if (picker === 'strawberry') {
               result = 'you win'
           }
        
         }


         if (playermove === 'strawberry') {
            if (picker === 'lemon') {
                result = 'you loss'
           } else if (picker === 'apple') {
                result = 'you win'
           } else if (picker === 'strawberry') {
               result = 'you tie'
           }
        
         }


         if (result === 'you win') {
            score.wins++
       } else if (result === 'you loss') {
            score.losses++
       } else if (result === 'you tie') {
            score.ties++
       }
       
    //convert js-object to json string
       const jsonFile = JSON.stringify(score);

    //Save to local storage    
       localStorage.setItem('score', jsonFile);
  
   //Update the result    
       stephy.innerHTML = `computermove <img src="Images/${picker}.jpg" class="img">
       <img src="Images/${playermove}.jpg" class="img"> player ${result}-------------------------------
       wins:${score.wins}, losses:${score.losses}, ties:${score.ties}`

};   

    // create function for the reset button  
     function reset () {
         score.wins = 0,
         score.losses = 0,
         score.ties  = 0


     }

    //  Grab the Paragraph element
        const stephy = document.querySelector('.js-para')
        stephy.innerHTML = `computerMove = ${picker},  playermove = ${playermove}`
