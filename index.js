import {
    input,
    close_btn,
    describe,
    empty_input,
    clear_pop_up,
    open_win,
    catchbutton,
} from "./functional.js"


close_btn.addEventListener("click", function(){
    clear_pop_up();
})

input.addEventListener("keyup", function(key){
    if(key.target.value != "")
        empty_input.innerHTML = "";
    if(key.key == "Enter")
        open_win();
})

describe.addEventListener("keyup", function(key){
    if(key.key == "Enter")
        catchbutton();
})




