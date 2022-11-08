
//Carrito de Compras 


const productos = [
    { 
    	nombre: `Sustrato`, 
	    precio: 4560 
	},
    {   nombre: `Fertilizante`, 
        precio: 1400 
    },
    {   nombre: `Maceta`, 
    	precio: 800 
    },
    {   nombre: `Medidor de ph`, 
    	precio: 2300 
    },
    { nombre: `Picador`, 
    	precio: 5300 
    }
    ];

    function mostrarProducto (){
	alert(`Estos Son Nuestros Productos`)
	let todosLosProductos = productos.map((producto) => producto.nombre + ` ` + ` $ ` + producto.precio );
	alert(todosLosProductos.join (` -  `))

}

let carrito = []

let seleccion = prompt(`Hola, Desea comprar algun producto? ¿Si o No?`)

while (seleccion != `si` && seleccion !== `no`){
	alert(`Respuesta Incorrecta, Por Favor ingrese ¡Si o No!`)
	seleccion = prompt(`Desea Comprar Algun Producto? ¿Si o No?`)
}



if(seleccion == `si`){
	alert(`Estos Son Nuestros Productos`)
	let todosLosProductos = productos.map((producto) => producto.nombre + ` ` + ` $ ` + producto.precio  );
	alert(todosLosProductos.join (` - `))
} else if (seleccion == `no`){
	alert(`Gracias por Visitarnos, Hasta Pronto!`)
}

while(seleccion != `no`){
	let producto = prompt(`Eligue Alguno de los Produsctos Anteriores Para Agregar a Tu Carrito`)
	let precio = 0 

	if(producto == `sustrato` || producto == `fertilizante` || producto == `maceta` || producto == `medidor de ph` || producto == `picador`){
		switch(producto){
		  case`sustrato`:
			precio = 4560;
			break;
		  case`fertilizante`:
			precio = 1400;
			break;
		  case`maceta`:
			precio = 800;
			break;
		  case`medidor de ph`:
			precio = 2300;
			break;
		  case`picador`:
			precio = 5300;
			break;
			default:
			break;
		}
	let unidades = parseInt (prompt(`¿Cuantas Unidades del Producto Eleguido Quiere Llevar?`))
	
	carrito.push({producto, unidades, precio})
	console.log(carrito)	
	}else{
		alert(`No Tenemos Ese Producto`)
	}
	break;
}


	seleccion2 = prompt("¿Desea Agregar Otro Producto al Carrito? ¿Si o no?")
	if(seleccion2 == "si"){

	mostrarProducto ();

	let producto = prompt(`Eligue Alguno de los Produsctos Anteriores Para Agregar a Tu Carrito`)
	let precio = 0 
		if(producto == `sustrato` || producto == `fertilizante` || producto == `maceta` || producto == `medidor de ph` || producto == `picador`){
		switch(producto){
		  case`sustrato`:
			precio = 4560;
			break;
		  case`fertilizante`:
			precio = 1400;
			break;
		  case`maceta`:
			precio = 800;
			break;
		  case`medidor de ph`:
			precio = 2300;
			break;
		  case`picador`:
			precio = 5300;
			break;
			default:
			break;
		}
	let unidades = parseInt (prompt(`¿Cuantas Unidades del Producto Eleguido Quiere Llevar?`))
	
	carrito.push({producto, unidades, precio})
	console.log(carrito)	
	}else{
		alert(`No Tenemos Ese Producto`)
	}
	
}



	while(seleccion === `no`){
		alert(`Gracias por Su Compra! Hasta Pronto`)
		carrito.forEach((carritoFinal) => {
			console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, 
			Total a Pagar Por Producto ${carritoFinal.unidades * carritoFinal.precio}`)
		})
	break;	
	}



const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`El Total de Su Compra es: ${total}`)






















