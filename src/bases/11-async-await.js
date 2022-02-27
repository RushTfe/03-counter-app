export const findImagen = async() => {
    try {
        const apiKey = '7mmZNL56QHm56pSMJqhgxSDWNsXia1B1';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const {data} = await respuesta.json();

        const {url} = data.images.original;

        return url;
         
    } catch (error) {
        return 'No existe';
    }
};