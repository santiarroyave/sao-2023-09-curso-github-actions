const username = process.env.USERNAME;

if (username) {
    console.log(`¡Hola, ${username} desde GitHub!`)
}else{
    console.log("¡Hola mundo!")
}