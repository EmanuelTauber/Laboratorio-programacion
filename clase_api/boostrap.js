var button = document.querySelector("#button");
var datos = document.querySelector("#datos");


button.addEventListener('click' , () => {

    fetch('datos.jason')

    .then (response => response.json())
    .then (data =>  {
        
        datos.innerHTML = ""
        
        for(let indice of data) {
            
            datos.innerHTML += `
            
            <tr> 
                <th scope="row">${indice.id}</th>
                <td>${indice.nombre}</td>
                <td>${indice.apellido}</td>
                <td>${indice.dni}</td>
            </tr>
            `   
        }
    })
}
)
