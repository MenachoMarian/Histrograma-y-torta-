document.querySelector('#tabla3').addEventListener('click',torta());
function torta(){
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET','tablajson.json',true);
  xhttp.send();
  xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      let res = document.querySelector('#torta3');
      res.innerHTML = '';
      var tcana = 0;
      var tcanb = 0;
      var tvobl = 0;
      var tvonu = 0;
      var tmesa = 0;
      for(let item of datos){
        tcana += parseFloat(item.Candidato_A);
        tcanb += parseFloat(item.Candidato_B);
        tvobl += parseFloat(item.Votos_blancos);
        tvonu += parseFloat(item.Votos_nulos);
        tmesa ++;
      };
      //console.log(tcana,tcanb,tvobl,tvonu);
        res.innerHTML += `
          <tr>
           <td>${tmesa}</td>
           <td>${tcana}</td>
           <td>${tcanb}</td>
           <td>${tvobl}</td>
           <td>${tvonu}</td>
          </tr>
          `,
          getTorta3(tcana,tcanb,tvobl,tvonu,tmesa);
    }
  }
}
