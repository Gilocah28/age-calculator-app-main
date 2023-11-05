const inputDay = document.getElementById('inputDate')
const inputMonth = document.getElementById('inputMonth')
const inputYear = document.getElementById('inputYear')
const btnSubmit = document.getElementById('submit')

//error State
const errorDay = document.querySelector('.textDay')
const errorMonth = document.querySelector('.textMonth')
const errorYear = document.querySelector('.textYear')


const errorStateDay = document.querySelector('.colorDay')
const errorStateMonth = document.querySelector('.colorMonth')
const errorStateYear = document.querySelector('.colorYear')

let state = false;

btnSubmit.addEventListener('click', () => {

    const date = new Date();


    if(inputDay.value === ''){
        errorStateDay.style.color = 'hsl(0, 100%, 67%)'
        inputDay.style.border = '1px solid hsl(0, 100%, 67%)'
        inputDay.style.color = 'hsl(0, 100%, 67%)'
        errorDay.classList.add('active')
        errorDay.textContent = 'Field is empty'
        clear()
    }else if(isNaN(inputDay.value)){
        errorStateDay.style.color = 'hsl(0, 100%, 67%)'
        inputDay.style.border = '1px solid hsl(0, 100%, 67%)'
        inputDay.style.color = 'hsl(0, 100%, 67%)'
        errorDay.classList.add('active')
        errorDay.textContent = 'Must be a valid Date'
        clear()
    }else if (inputDay.value > 31){
        errorStateDay.style.color = 'hsl(0, 100%, 67%)'
        inputDay.style.border = '1px solid hsl(0, 100%, 67%)'
        inputDay.style.color = 'hsl(0, 100%, 67%)'
        errorDay.classList.add('active')
        errorDay.textContent = 'The day is max of 31'
        clear()
    }else if (inputDay.value < 1){
        errorStateDay.style.color = 'hsl(0, 100%, 67%)'
        inputDay.style.border = '1px solid hsl(0, 100%, 67%)'
        inputDay.style.color = 'hsl(0, 100%, 67%)'
        errorDay.classList.add('active')
        errorDay.textContent = 'The day is min of 1'
        clear()
    }else{
        state = true
    }
    
    if(inputMonth.value === ''){
        errorStateMonth.style.color = 'hsl(0, 100%, 67%)'
        errorMonth.classList.add('active')
        errorMonth.textContent = 'Field is empty'
        inputMonth.style.border = '1px solid hsl(0, 100%, 67%)'
        inputMonth.style.color = 'hsl(0, 100%, 67%)'
        clear()
        
    }else if (isNaN(inputMonth.value)){
        errorStateMonth.style.color = 'hsl(0, 100%, 67%)'
        inputMonth.style.border = '1px solid hsl(0, 100%, 67%)'
        inputMonth.style.color = 'hsl(0, 100%, 67%)'
        errorMonth.classList.add('active')
        errorMonth.textContent = 'Must be a valid Month'
        clear()

    }else if (inputMonth.value > 12) {

        errorStateMonth.style.color = 'hsl(0, 100%, 67%)'
        inputMonth.style.border = '1px solid hsl(0, 100%, 67%)'
        inputMonth.style.color = 'hsl(0, 100%, 67%)'
        errorMonth.classList.add('active')
        errorMonth.textContent = 'The month is max of 12'
        clear()

    }else if (inputMonth.value < 1) {

        errorStateMonth.style.color = 'hsl(0, 100%, 67%)'
        inputMonth.style.border = '1px solid hsl(0, 100%, 67%)'
        inputMonth.style.color = 'hsl(0, 100%, 67%)'
        errorMonth.classList.add('active')
        errorMonth.textContent = 'The month is min of 1'
        clear()

    }else{
        state = true
    }

    if(inputYear.value === ''){
        errorStateYear.style.color = 'hsl(0, 100%, 67%)'
        errorYear.classList.add('active')
        errorYear.textContent = 'Field is empty'
        inputYear.style.border = '1px solid hsl(0, 100%, 67%)'
        inputYear.style.color = 'hsl(0, 100%, 67%)'
        clear()
    }else if (isNaN(inputYear.value)){
        errorStateYear.style.color = 'hsl(0, 100%, 67%)'
        inputYear.style.border = '1px solid hsl(0, 100%, 67%)'
        inputYear.style.color = 'hsl(0, 100%, 67%)'
        errorYear.classList.add('active')
        errorYear.textContent = 'Must be a valid Year'
        clear()
    }else if(inputYear.value < 1900){
        errorStateYear.style.color = 'hsl(0, 100%, 67%)'
        inputYear.style.border = '1px solid hsl(0, 100%, 67%)'
        inputYear.style.color = 'hsl(0, 100%, 67%)'
        errorYear.classList.add('active')
        errorYear.textContent = 'The minimun range is year 1900'
        clear()
    }else if(inputYear.value >= date.getFullYear()){
        errorStateYear.style.color = 'hsl(0, 100%, 67%)'
        inputYear.style.border = '1px solid hsl(0, 100%, 67%)'
        inputYear.style.color = 'hsl(0, 100%, 67%)'
        errorYear.classList.add('active')
        errorYear.textContent = `The maximun range is year ${date.getFullYear()}`
        clear()
    }else{
        state = true
    }

    if(state === true){
        btnErrorRemove()
        validate()
    }
})

inputDay.addEventListener('click',()=>{
    errorStateDay.style.color = 'hsl(0, 1%, 44%)'
    inputDay.style.border = '1px solid hsl(0, 0%, 86%)'
    inputDay.style.color = 'hsl(0, 1%, 44%)'
    errorDay.classList.remove('active')
})

inputMonth.addEventListener('click',()=>{
    errorStateMonth.style.color = 'hsl(0, 1%, 44%)'
    inputMonth.style.border = '1px solid hsl(0, 0%, 86%)'
    inputMonth.style.color = 'hsl(0, 1%, 44%)'
    errorMonth.classList.remove('active')
})

inputYear.addEventListener('click',()=>{
    errorStateYear.style.color = 'hsl(0, 1%, 44%)'
    inputYear.style.border = '1px solid hsl(0, 0%, 86%)'
    inputYear.style.color = 'hsl(0, 1%, 44%)'
    errorYear.classList.remove('active')
})

function btnError (){
    btnSubmit.classList.add('btnErr')
}
function btnErrorRemove (){
    btnSubmit.classList.remove('btnErr')
}



const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// Result span text
const resultDay = document.getElementById('days')
const resultMonth = document.getElementById('months')
const resultYear = document.getElementById('years')

function validate () {
    const date = new Date();
    const dayValue = date.getDate();
    const monthValue = date.getMonth() + 1;
    const yearValue = date.getFullYear();

    if(inputDay.value === '' || inputMonth.value === '' || inputYear.value === '' 
       || inputDay.value > 31 || inputMonth.value > 12 || inputYear.value < 1900 || inputYear.value >= yearValue||
       isNaN(inputDay.value) || isNaN(inputMonth.value) || isNaN(inputYear.value)
    ){
        clear()
    }else{
        
    
        let d = dayValue - inputDay.value;
        let m = monthValue - inputMonth.value;
        let y = yearValue - inputYear.value;
        
        if (d < 0) {
            m -= 1;
            d += months[monthValue - 1];
        }
        
        if (m < 0) {
            y -= 1;
            m += 12;
        }
        resultDay.textContent = d;
        resultMonth.textContent = m;
        resultYear.textContent = y;
    }
}

function clear(){
    state = false
    resultDay.textContent = '--';
    resultMonth.textContent = '--';
    resultYear.textContent = '--';
    btnError()
}

