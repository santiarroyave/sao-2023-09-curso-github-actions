const USERNAME = process.env.USERNAME;

if (USERNAME) {
    console.log(`¡Hola, ${USERNAME} desde GitHub!`)
}else{
    console.log("¡Hola mundo!")
}
