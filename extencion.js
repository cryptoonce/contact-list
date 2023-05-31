let new Contactos = function(nombre,apellido,numero){
this.nombre = nombre; 
this.apellido = apellido;
this.numero = numero;
};

let mostrarContacto = function(contacto){
console.log ("nombre:"+contacto.nombre);
console.log ("apellido:"+contacto.apellido);
console.log("numero:"+contacto.numero);
};
let listaDeContactos = [];

listaDeContactos.push (new Contacto("luis","moguea","3203972107"));
listaDeContactos.push(new Contacto("nicole","moguea",3144821254));
listaDeContactos.push(new Contacto("nicole","cobos","3057767102"));
listaDeContactos.push(new Contacto("brenda","manrique","3029963660"))
listaDeContactos.push(new Contacto("david","aguirre","3203692964"));

let añadirContactos = function(nombre,apellido,numero){
    let nuevoContato = new Contacto(nombre,apellido,numero);
    listaDeContactos.push(nuevoContato);
    console.long ("se ha añadido el contacto: "+nombre+""+apellido);
}


let borrarContacto= function (nombre,apellido){
    let indice = -1;
    for ( let i=0;i<listaDeContacto.length; i++){
    if(listaDeContacto[i].nombre===nombre && listaDeContacto[i].apellido===apellido){
    indice=i;
    break;
    }
    }

    if (indice !== -1){
    listaDeContacto.splice(indice,1);
    console.log("se ha borrado el contacto:"+nombre+"+apellido");
    }else{
    console.log("no se encontro el contacto:"+nombre+""+apellido);
    }
    };
    let imprimirListaDeContacto = function(){
    console.log ("la lista tiene"+listaDeContacto.length+"contactos:");
    for (let i=0;i<listaDeContacto.length;i++){
    mostrarContacto(listaDeContactos[i]);
    }
    };
