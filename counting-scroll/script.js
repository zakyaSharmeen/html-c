// grt elemnts from the DOM

const counters = document.querySelectorAll(".counters span")
const container = document.querySelector(".counters")


// variavble track if the counters have been actgivated

let activated = false;


// add scroll event to the page

window.addEventListener("scroll", () =>{


    // if the page is scrolled to the conatiners elements and the counters are not activated

    if(pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated ===false){


        // select all counters
        counters.forEach(counter =>{
            counter.innerText = 0;


            // set count variable to track the count
            let count = 0;

            function updateCount(){
                // get counter target number to count to
                const target = parseInt(counter.dataset.count);

                // as long as the count is below the target value

                if(count < target){
                    count++;

                    // set the counter text to the count

                    counter.innerText = count;

                    // repeat this in every 10 miliseconds

                    setTimeout(updateCount, 10);

                }else{
                    counter.innerText = target;
                }
            }
            // run thr function initially
            updateCount();

            activated = true
        })

        // if teh page is scrolledback a certain amount or to the top and activated is true
    }else if (
        pageYOffset < container.offsetTop - container.offsetHeight - 500 || pageYOffset === 0 && activated === true
    ){
         // select all counters
         counters.forEach(counter =>{
            counter.innerText = 0;
         });

         activated = false;

    }
})