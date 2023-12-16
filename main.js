// create a function to generate flips using Math.random
function pickMove (playermove) {
    
    const randNum = Math.random();
    
    let picker = ''
    
         if (randNum >= 0 && randNum < 1/3) {
               picker = 'orange'
         } else if (randNum >= 1/3 && randNum < 2/3) {
              picker = 'banana'
         } else if (randNum >= 2/3 && randNum < 1) {
              picker = 'apple';
    
         }
    // Generating moves for each fruit flip
        let result = ''
    
         if (playermove === 'orange') {
            if (picker === 'orange') {
                result = 'tie'
           } else if (picker === 'banana') {
                result = 'loss'
           } else if (picker === 'apple') {
               result = 'you win'
           }
     
         }
};