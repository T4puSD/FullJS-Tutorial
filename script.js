//creating user input field
let input = document.createElement("input");
input.id = "input";
input.type = "text";

let label = document.createElement("label");
label.innerHTML = "Enter a Number:";

label.setAttribute("for", "input");

let submit = document.createElement("button");
submit.type = "submit";
submit.innerHTML = "Submit";
submit.onclick = "generateList()";
console.log(submit);

submit.addEventListener("click", () => {
  if (input.value) {
    console.log(input.value);
    generateList(input.value);
  } else {
    input.placeholder = "Please Enter number herer";
    input.focus();
  }
  // generateList();
});
console.log(submit);

let body = document.querySelector("body");
body.append(label, input, submit);

function generateList(value) {
  let mm = document.querySelector("main");
  if (mm) {
    // console.log(mm);
    body.removeChild(mm);
  } else {
    console.log("called for the first time");
  }
  // body.removeChild();
  let oddlist = document.createElement("ul");
  let evenlist = document.createElement("ul");
  //generating odd numbers
  for (let i = 0; i <= value; i++) {
    if (i % 2 != 0) {
      let li = document.createElement("li");
      li.innerHTML = i;
      oddlist.appendChild(li);
    }
  }

  //generating even numbers
  for (let i = 2; i <= value; i++) {
    if (i % 2 == 0) {
      let li = document.createElement("li");
      li.innerHTML = i;
      evenlist.appendChild(li);
    }
  }

  let main = document.createElement("main");
  let container = document.createElement("div");
  container.className = "container";

  let sub1 = document.createElement("div");
  sub1.className = "sub1";
  let sub2 = document.createElement("div");
  sub2.className = "sub2";

  //creating heade for each sub

  let sub1Header = document.createElement("h1");
  sub1Header.innerHTML = "Odd Numbers";
  let sub2Header = document.createElement("h1");
  sub2Header.innerHTML = "Even Numbers";

  sub1.append(sub1Header, oddlist);
  sub2.append(sub2Header, evenlist);

  container.append(sub1, sub2);

  main.appendChild(container);

  //getting body object from html
  body.append(main);
}

//creating css

let style = document.createElement("style");
style.innerHTML = `body{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    }
    
    main{
        display:flex;
        justify-content:center;
        align-item:center;
        width:90%;
        background:aqua;
    }
    .container{
        display:flex;
        justify-content:center;
        align-item:center;
        width:90%;
    }
    .sub1{
        flex:1;
        text-align:center;
    }
    .sub2{
        flex:1;
        text-align:center;
    }
    ul{
        list-style:none;
    }
    `;

//finding head
let head = document.querySelector("head");
head.appendChild(style);
