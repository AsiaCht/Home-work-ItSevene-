list.forEach(a => {
  const all = `<div class="dividet">
  <p>${a.id}</p>
  <p>${a.name}</p>
  <p>${a.email}</p>
  <p>${a.body}</p>
  </div>`
  document.getElementById("comment").innerHTML += all;
})