const content = document.querySelector(".content");


createSquares(16);



function createSquares(num){
    const divs = [];
    for(let i = 0; i < num; i++){
      divs.push(document.createElement("div"));
      divs[i].classList.add(i);
      divs[i].style.display = "flex";
      divs[i].style.backgroundColor = "white";
      divs[i].style.border = "1px solid blue";
      divs[i].style.width = "600px";
      divs[i].style.height = "auto";
      divs[i].style.flex = "1 1 auto";
    }
    divs.forEach(div => content.appendChild(div));

    const children = [];

    for(let j = 0; j < num; j++){
      children.push(document.createElement("div"));
      children[j].classList.add(j);
      children[j].style.backgroundColor = "white";
      children[j].style.border = "2px solid blue";
      children[j].style.width = "10px";
      children[j].style.height = "auto";
      children[j].style.flex = "1";
    } 

    for(let k = 0; k < num; k++){
      divs.forEach(div => div.appendChild(children[k]));
    }

  };
