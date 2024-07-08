function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  



var order = [];

$('.btn').click(
    (e)=>{
        console.log(e.target.getAttribute('id'));
        order.push(e.target.getAttribute('id'));
        console.log(order)
    }
);

/*
overview:
- figure out how to call random numbers
- figure out how to remember how to store inputs (order of keys pressed)
- 
*/

