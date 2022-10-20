const doc = {
  header : 'main',
  body : 'bodies',
  footer : 'end',
  data : 'year',
  dodatok : {
    heads : {
      head :'brains',
      nose : 'snot',
      ears : 'sound'},
    bodies : {
      heart :'motor',
      stomach : 'fuel'},
    data : {
        years: 'many',
        months: 'twelve'
      }
  },
   funcs: function (elem){
    for(let i in doc){
      doc[i] = elem;
      document.write(doc[i]);
    }
  }
}


