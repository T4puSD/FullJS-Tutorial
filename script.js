oddlist = document.createElement("ul");
evenlist = document.createElement("ul");

//generating odd numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    let li = document.createElement("li");
    li.innerHTML = i;
    oddlist.appendChild(li);
  }
}

//generating even numbers
for (let i = 2; i <= 100; i++) {
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

let body = document.querySelector("body");
body.append(main);

//creating css

let style = document.createElement("style");
style.innerHTML = `body{
    display:flex;
    justify-content:center;
    align-item:center;
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

console.log(main);

console.log(oddlist);
console.log(evenlist);
