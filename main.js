


let chot_func = (num1, num2) => {
    if (num1 % 2 == 0 && num2 % 2  == 0){
       return `Оба четных ${num1 * num2}` 
    }
    else if (num1 % 2 == 1 && num2 % 2  == 0)
    {
        return `первое не четное ${num1}`
    }
    else if (num1 % 2 == 0 && num2 % 2  == 1)
    {
        return `второе не четное ${num2}`
    }else if(num1 % 2 == 1 && num2 % 2  == 1)
    {
        return `Оба не четных ${num1 + num2}`
    }

}


function BtnClick(){

    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;

    alert(chot_func(num1,num2));
}
