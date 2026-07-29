const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    let target = Number(counter.dataset.target);
    let count = 0;

    let update = setInterval(()=>{

        count += Math.ceil(target / 100);

        if(count >= target){
            count = target;
            clearInterval(update);
        }

        counter.innerHTML = count;

    },30);

});
