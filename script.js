//const buttons = ['clear', 'delete', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ]

const divs = document.getElementById('gridContainer').children;

for (let i = 0; i<divs.length; i++)
    {
        if (divs[i].id == 'output') continue;

        divs[i].classList.add('onHover');
    };

function $ (x){
    return document.getElementById(x);
}
    
const buttonId = [0,1,2,3,4,5,6,7,8,9];
const output = $('output');
//const result = $('result');
    
let myNum = '';
let value1 = '';
let value2 = '';
let resultant=0;
let operation = '';
    
function clear(){
    output.textContent = ''; 
    result.textContent = '';
    myNum = '';
    value1 = '';
   
    resultant = '';
    operation = '';
}

function add (x, y){
    return x+y;
}
    
function subtract (x, y){
    return x-y;
}
    
function multiply (x, y){
    return x*y;
}
    
function divide (x, y){
    return x/y;
}
    
function getResult(x, y, operand){
    let resultant = '';
    x = Number(x);
    y = Number(y);
    switch(operand) 
        {
            case '+':
                resultant = add(x, y);
                break;
            case '/':
                resultant = divide(x, y);
                break;
            case '-':
                resultant = subtract(x, y);
                break;
            case 'x': 
                resultant = multiply(x, y);
                break;
        }
        
        return resultant;
    }
document.addEventListener('keypress', function(e)
                                             {
                            if ((e.code>= 48 && e.code <= 57) || (e.code >= 96 && e.code <= 105)) { // 0-9 only
                                console.log(e.key);
                                output.textContent += e.key;
                                result.textContent += e.key;
                                myNum += e.key;
                                
                            };
                        
                        });
    
    
const buttons = document.querySelectorAll('.button');
buttons.forEach(btn =>
                    {
                        
                        btn.addEventListener('click', function(e)
                            {
                                value = e.target.id.toString();
                            
                                switch(value) {
                                    case '.':
                                        if (myNum.includes('.')) 
                                            break;
                                        myNum += value;
                                        output.textContent += value;
                                        result.textContent += value;
                                        break;
                                    case '0':
                                    case '1':
                                    case '2':
                                    case '3':
                                    case '4':
                                    case '5':
                                    case '6':
                                    case '7':
                                    case '8':
                                    case '9':
                                        
                                        output.textContent += value;
                                        result.textContent += value;
                                        console.log('the content is: ' + output.textContent);
                                        myNum = parseFloat(result.textContent);
                                        break;
                                        
                                    case '+':
                                    case '/':
                                    case '-':
                                    case 'x':
                                        
                                        console.log('TOP VALUE 1: ' + value1);
                                        console.log('myNum is: ' + myNum);
                                        if (value1 != '' && operation == '' && value2 == ''){
                                            operation = value;
                                            output.textContent += operation;
                                            break;
                                        }
                                                                                
                                        if (myNum == '' && operation != ''){
                                            operation = value;
                                            output.textContent = output.textContent.slice(0,-1);
                                            output.textContent += operation;
                                            break;
                                        }
                                                                                
                                        if (operation == '' && value1 == '' && myNum != ''){
                                            value1 = Number(myNum);
                                            result.textContent = '';
                                            console.log('value 1 has been set to: ' + value1);
                                            operation = value;
                                            output.textContent += operation;
                                            console.log('operation has been set to: ' + operation);
                                            myNum = '';
                                            break;
                                        }
                                        
                                        if (value1 != '' && myNum != '' && operation != ''){
                                            
                                            value2 = Number(myNum);
                                            console.log('value 2 has been set to: ' + value2);
                                            resultant = getResult(value1, value2, operation);
                                            
                                            value1 = resultant;
                                            
                                            myNum = '';
                                            result.textContent = '';
                                            value2 = '';
                                            operation = value;
                                            output.textContent = resultant + operation;
                                            
                                            console.log('value 1 is now set to: ' + value1);
                                            break;
                                        }
                                        
                                        if (myNum == ''){
                                            break;
                                        }
                                        
                                        if (value1 != '' && operation == '' && value2 == ''){
                                            operation = value;
                                            output.textContent += operation;
                                            console.log('setting operation AFTER =');
                                            break;
                                        }
                                        
                                        break;

                                    case '=':
                                        console.log('this is inside the equals!');
                                        console.log('operation is: ' + operation);
                                        console.log('value1 is: ' + value1);
                                        console.log('myNum is: ' + myNum);
                                        
                                        if (value2 == '' && myNum != ''){
                                            value2 = Number(myNum);
                                        }
                                        console.log('value2 is: ' + value2);
                                        if (operation != '' && value1 != '' && value2 != ''){
                                            result.textContent = '';
                                            
                                            resultant = getResult(value1, value2, operation);
                                            output.textContent = resultant;
                                            value1 = resultant;

                                            operation = '';
                                            value2 = '';
                                            myNum = '';
                                            console.log('operation is: ' + operation);
                                            console.log('value1 is: ' + value1);
                                            console.log('value2 is: ' + value2);
                                            break;
                                        }
                                        
                                        break;
                                        
                                    case 'clear':
                                        clear();
                                        break;
                                    case 'delete':
                                        const ops = ['x', '/', '+', '-'];
                                        if (ops.includes(operation)) break;
                                        output.textContent = output.textContent.slice(0,-1);
                                        result.textContent = result.textContent.slice(0,-1);
                                        if (output.textContent.length == 0){
                                            myNum = '';
                                            value1 = '';
                                            console.log('This is inside the if of delete');
                                            console.log('new myNum: ' + myNum);
                                            console.log('new myNum: ' + myNum);
                                            console.log('new value1: ' + value1);
                                            break;
                                            
                                        }
                                
                                        if (value1 != ''){
                                                value1 = parseFloat(output.textContent);
                                            }
                                        
                                        console.log('new myNum: ' + myNum);
                                        console.log('new myNum: ' + myNum);
                                        console.log('new value1: ' + value1);
                                        break;
                                }                        
                            });
                                    
                    });
