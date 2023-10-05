const USERNAME = process.env.USERNAME;
const LANGUAGE = process.env.LANGUAGE;

if (USERNAME) {
    console.log(`¡Hola, ${USERNAME} desde GitHub!`)
}else{
    console.log("¡Hola lenguaje!")
}

if (LANGUAGE) {
    console.log(`¡El lenguaje es ${LANGUAGE}!`)
}else{
    console.log("¡Hola lenguaje!")
}