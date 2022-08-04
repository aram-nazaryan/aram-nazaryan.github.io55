export const input = document.getElementById("input");
export const close_btn = document.getElementById("cross");
export const describe = document.getElementById("describe");
export const empty_input = document.getElementById("empty_input");
export const name_beer = document.getElementById("name_beer");
export const content = document.getElementById("content");
export const discription = document.getElementById("discription");

export function clear_pop_up(){
    describe.value = "";
    discription.style.display = 'none';
    name_beer.innerHTML = "";
}


export function open_win (){
    if(input.value != ""){
        discription.style.display = 'block';
        empty_input.innerHTML = "";
        name_beer.innerHTML = input.value;
        input.value = "";
    }
    else {
        empty_input.innerHTML = "Enter beer name!";
    }
}


export function catchbutton(){
    let des_text = describe.value;
    let new_box = document.createElement("div");
    new_box.classList.add("card");
    new_box.innerHTML = `
    <svg class="close_icon" onclick="delete_beer(this)" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path></svg>
    </div>
    <img class="img" src="./img" alt="">
    <p class="beerhearder">
       ${name_beer.innerHTML}       
    </p>
    <p>
        ${des_text}          
    </p>
    `
    clear_pop_up();
    content.appendChild(new_box);
}

