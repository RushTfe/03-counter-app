// Desestructuración o asignación desestructurante.

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

//const {nombre, edad, clave} = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

const usarContext = ({clave, nombre, edad, rango = 'Capitán'}) => {
        return {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 12.21433,
                lng: -54.4323
            }
        }
}

const {nombreClave, anios, latlng:{lat, lng}} = usarContext(persona);;

console.log(nombreClave, anios);
console.log(lat, lng);