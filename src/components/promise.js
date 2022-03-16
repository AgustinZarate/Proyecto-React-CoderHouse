let ControlStock = new Promise ((resolve, reject)=> {
    setTimeout(()=>{
      const pokeballs = [
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
      if(pokeballs.length===0){
        reject("No hay pokeballs disponible")
    }else{
        resolve(pokeballs)
    }
    }, 2000)
})

ControlStock.then((result)=> {
    console.log(result)
}).catch(err => {
    console.log("Error " + err)
})

export default ControlStock;