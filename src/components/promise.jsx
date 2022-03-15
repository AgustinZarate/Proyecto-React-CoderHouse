let Desarrollo = new Promise ((resolve, reject)=> {
    setTimeout(()=>{
        resolve(
            pokeballs = [
                {
                  "nombre": "Pokeball",
                  "imagen": "img/pokeball.png",
                  "precio": 100,
                  "stock": 15,
                  "descipsion": "Es la básica, puedes coger a cualquier Pokémon."
                },
                {
                  "nombre": "Superball",
                  "imagen": "img/superball.png",
                  "precio": 250,
                  "stock": 10,
                  "descipsion": "Tendrás más posibilidades de atraparlos que con la simple Poké Ball."
                },
                {
                  "nombre": "Ultraball",
                  "imagen": "img/ultraball.png",
                  "precio": 500,
                  "stock": 5,
                  "descipsion": "Tendrás más posibilidades de atraparlos que con la Superball."
                }
              ]
        )
        reject("No hay nada")
    }, 3000)
})

Desarrollo.then((result)=> {
    log(result)
}).catch(err => {
    console.log("Error " + err)
})

export default Desarrollo;