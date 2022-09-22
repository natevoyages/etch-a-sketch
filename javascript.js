const content = document.querySelector(".content");


createSquares(16);



function createSquares(num){
    const divs = [];
    const children = [];

    for(let j = 0; j < num * num; j++){
      children.push(document.createElement("div"));
      children[j].style.backgroundColor = "white";
      children[j].style.border = "1px solid black";
      children[j].style.width = "10px";
      children[j].style.height = "auto";
      children[j].style.flex = "1";
    }

    for(let i = 0; i < num; i++){
      divs.push(document.createElement("div"));
      divs[i].classList.add(i);
      divs[i].style.display = "flex";
      divs[i].style.backgroundColor = "white";
      divs[i].style.width = "600px";
      divs[i].style.height = "auto";
      divs[i].style.flex = "1 1 auto";


      for(let j = 0; j < num; j++){
        children[j + (i * num)].classList.add(`${i}-${j}`);
        divs.forEach(div => div.appendChild(children[j+(i * num)]));
      } 
    }
    divs.forEach(div => content.appendChild(div));

  };
