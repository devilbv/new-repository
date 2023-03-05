(function(){
let result = document.querySelector('.result');
let clear = document.querySelector('.btn-clear');
let del = document.querySelector('.btn-delete');
let numbers = document.querySelectorAll('.btn');
let equals = document.querySelector('.btn-equals');

numbers.forEach(function(number){

    number.addEventListener('click', function(e){
       let value = e.target.dataset.num;
       result.value += value;
    })
});

equals.addEventListener('click', function(e){
    if(result.value === ''){
        result.value = "";
    } else{
        let answer = eval(result.value);
        result.value = answer;
    }
})

clear.addEventListener('click', function(e){
    result.value = '';
});
del.addEventListener('click', function(){
    result.value = result.value.toString().slice(0,-1);
});







})();

