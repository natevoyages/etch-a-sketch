const content = document.querySelector(".content");
let num = 16;
const divs = [];
const children = [];

setGrid();
divs.forEach(div => content.appendChild(div));


children.forEach(child => child.addEventListener('mouseover', sketch));


const button = document.querySelector("button");
button.addEventListener('click', changeGrid);

function setGrid(){

  for(let i = 0; i < num * num; i++){
    children.push(document.createElement("div"));
    children[i].style.backgroundColor = "white";
    children[i].style.width = "10px";
    children[i].style.height = "auto";
    children[i].style.flex = "1";
  }

for(let i = 0; i < num; i++){
  divs.push(document.createElement("div"));
  divs[i].classList.add(i);
  divs[i].style.display = "flex";
  divs[i].style.backgroundColor = "white";
  divs[i].style.width = "700px";
  divs[i].style.height = "auto";
  divs[i].style.flex = "1 1 auto";
  


  for(let j = 0; j < num; j++){
    children[j + (i * num)].classList.add(j + (i * num));            //changed to numbers instead of dashes
    divs.forEach(div => div.appendChild(children[j+(i * num)]));     //  to make sketch function simpler
  } 
}
divs.forEach(div => content.appendChild(div));


children.forEach(child => child.addEventListener('mouseover', sketch));

}

function changeGrid(){
  let prevNum = num;
  num = prompt("How many number of squares per side for the new grid? (Limit 100)");
  if (num <= 100 && num > 0){
    divs.forEach(div => div.remove());
    for(let i = 0; i < prevNum; i++){
      divs.pop();
    }
    setGrid();
  }
}


function sketch(){
  children[this.classList.value].style.backgroundColor = "black";

}