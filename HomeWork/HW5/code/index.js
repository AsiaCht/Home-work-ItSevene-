const createElement = ({id, email, body, name}) => {
  const elComment = document.createElement("div"),
  elName = document.createElement("div"),
  elEmail = document.createElement("div"),
  elBody = document.createElement("div");
  btn = document.createElement("button");


  elComment.className = "com1";
  elEmail.className = "com-email"
  elName.className = "com-name";
  elBody.className = "com-body";
  btn.className = "btn";
  

  elComment.dataset.id = id;
  elName.textContent = name;
  elEmail.textContent = email;
  elBody.textContent = body;
  btn.textContent = 'Edit';
 
  btn.onclick = function () {
    document.querySelector(".modal-window").style.display ='block';
    document.querySelector('.modal-window > .name').innerHTML = name;
    document.querySelector('.modal-window > .comm').innerHTML = body;
    document.querySelector('.modal-window > .comm').setAttribute('contenteditable' , 'true');
  }
  elComment.append(elName, elEmail, elBody, btn)

  return elComment

}

const comments = danis.map(el => {
  return createElement(el)
})

window.onload = () =>{
  document.getElementById('first').append(...comments)
}










// danis.forEach(b => {
//   const com = `<div class = 'com1'>
//   <h4>${b.name}</h4>
//   <h5>${b.email}</h5>
//   <p>${b.body}</p>
//   <button class = 'btn'>Edit</button>
//   </div>`
//   document.querySelector('.first').innerHTML += com;

// });
// const btn0 = document.querySelector('.btn')
// const com = document.querySelector('.com1')
// const click = () => {
//   alert(com)
// }
// btn0.onclick = click



