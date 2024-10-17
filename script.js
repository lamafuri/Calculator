let buttons = document.querySelectorAll("button");
let input = document.getElementById("inputBox");
let result = "";
//Create an array of all the 20 buttons only
let arr = Array.from(buttons);
arr.forEach(but =>{
    but.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){ //Take the inner HTML of the element where event "click" occured

            //target property is the read only and it returns the element where the event occured

            result = eval(result);//If we click "=", evaluate the text/expression inside the string so that we obtain our calculted result
            // input.value = result;
        }
        else if(e.target.innerHTML == "AC"){
            result ="";

        }
        else if(e.target.innerHTML == "DEL"){
            result= result.substring(0,result.length-1);
        }
        else {
            result += e.target.innerHTML;
        }
        input.value = result;
    })
})
