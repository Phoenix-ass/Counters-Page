const counts = document.querySelectorAll('.count')
const speed = 20

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 10)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})



let count_percentage1 = document.getElementById("count-percentage1")
let counter1 = 0;

setInterval(() => {
    if (counter1 == 92){
    clearInterval();
    }
    else{
        counter1 += 1;
        count_percentage1.innerHTML = counter1 + "%";

    }
},20)

let count_percentage2 = document.getElementById("count-percentage2")
let counter2 = 0;

setInterval(() => {
    if (counter2 == 97){
    clearInterval();
    }
    else{
        counter2 += 1;
        count_percentage2.innerHTML = counter2 + "%";

    }
}, 15)

let count_percentage3 = document.getElementById("count-percentage3")
let counter3 = 0;

setInterval(() => {
    if (counter3 == 80){
    clearInterval();
    }
    else{
        counter3 += 1;
        count_percentage3.innerHTML = counter3 + "%";

    }
},18)


let count_percentage4 = document.getElementById("count-percentage4")
let counter4 = 0;

setInterval(() => {
    if (counter4 == 87){
    clearInterval();
    }
    else{
        counter4 += 1;
        count_percentage4.innerHTML = counter4 + "%";

    }
},15)