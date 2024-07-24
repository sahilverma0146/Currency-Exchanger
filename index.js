const dropdowns = document.querySelectorAll("dropdow select");

import {list}  from './code.js'

// console.log(list);
// for(code in list){
//     console.log(code , list[code]);
// }

 let newfxn =  ()=>{

    for(let select of dropdowns){
        for(code in list){
            let newOption = document.createElement("option");
                newOption.innerText=currCode;
                newOption.value=currCode;
    
            
        }
    }
    
 
}

console.log(newfxn());
    