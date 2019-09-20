
console.log('Hasta aquí bien');
document.querySelector('#tabla').addEventListener('click',traerDatos());

//document.querySelector('#tabla3').addEventListener('click',torta());

function traerDatos(){
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET','tablajson.json',true);
  xhttp.send();
  xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      let res = document.querySelector('#res');
      res.innerHTML = '';
      for(let item of datos){
        res.innerHTML += `
          <tr id="row">
           <td>${item.Mesa}</td>
           <td id="cana">${item.Candidato_A}</td>
           <td>${item.Candidato_B}</td>
           <td>${item.Votos_blancos}</td>
           <td>${item.Votos_nulos}</td>
           <td>
									<button type="button" class="btn btn-info" onclick="getData(${item.Candidato_A},${item.Candidato_B},${item.Votos_blancos},${item.Votos_nulos},${item.Mesa})">Enviar</button>
								</td>
          <script type = "text/javascript" src="index.html"></script>
          </tr>
          `
      }
    }
  }
}

//function torta(){
  //const xhttp = new XMLHttpRequest();
  //xhttp.open('GET','tablajson.json',true);
  //xhttp.send();
  //xhttp.onreadystatechange = function(){
    //if (this.readyState == 4 && this.status == 200) {
      //let datos = JSON.parse(this.responseText);
      //let res = document.querySelector('#torta');
      //res.innerHTML = '';
      //var tcana = 0; var tcanb = 0; var tvobl = 0; var tvonu = 0; var tmesa = 0;
      //for(let item of datos){
        //tcana += parseFloat(item.Candidato_A);
        //tcanb += parseFloat(item.Candidato_B);
        //tvobl += parseFloat(item.Votos_blancos);
        //tvonu += parseFloat(item.Votos_nulos);
        //tmesa ++;
      //};
      //console.log(tcana,tcanb,tvobl,tvonu);
        //res.innerHTML += `
          //<tr>
           //<td>${tmesa}</td>
           //<td>${tcana}</td>
           //<td>${tcanb}</td>
           //<td>${tvobl}</td>
           //<td>${tvonu}</td>
           //<td>
						//			<button type="button" class="btn btn-info" onclick="getTorta(${tcana},${tcanb},${tvobl},${tvonu},${tmesa})">Gráfica</button>
							//	</td>
                //<script type = "text/javascript" src="tortap.html"></script>
          //</tr>
          //`
    //}
  //}
//}
