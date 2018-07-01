//guardar_localdtorage();
obtener_localstorage();

function obtener_localstorage(){

    if (localStorage.getItem('nombre')){
        // se que existe el nombre en el localstorage
        let nombre = localStorage.getItem('nombre');
        let persona =JSON.parse(localStorage.getItem('persona'));

        console.log(nombre);
        console.log(persona);
    }else{
        console.log('No hay entradas en el local storage');

    }
    
};


function guardar_localdtorage(){
    let persona = {
        nombre: 'Fernando',
        edad: 31,
        correo:'dhjhd@gmail.com',
        coords: {
            lat:10,
            lng: -10
        }
    };

    let nombre = 'Pedro';

    //localStorage.setItem('nombre', JSON.stringify(persona));
    localStorage.setItem('nombre', nombre);
    //localStorage.setItem('persona', persona);
    localStorage.setItem('persona', JSON.stringify(persona));
}