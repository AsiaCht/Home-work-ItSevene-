const inp = document.createElement('input'),btn = document.createElement('button');
inp.className = 'inp';
inp.setAttribute ('type', 'tel' )
inp.placeholder = 'Введіть номер телефону у форматі 000-000-00-00'
btn.className = 'btn';
btn.textContent = 'Save';

document.body.appendChild(inp);
document.body.appendChild(btn);

const myClick = () =>{  
let pattern = /\d{3}-\d{3}-\d{2}-\d{2}/
if(pattern.test(inp.value) ){
  inp.className = 'green';
  document.location = 'https://7e.com.ua/webdev/';
}else{
    inp.value = "Невірний формат номеру,спробуйте ще раз"
  inp.className = 'inp2'
}
return inp.value
}

btn.onclick = myClick
