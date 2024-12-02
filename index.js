let cards = document.getElementById("cards")
let body = document.getElementById("body")


let burgers = [
    {
        id: 1,
        img: "./images/b-1.png",
        title: "Beef Burger",
        description: "Beef Patty Oninon Tomatoes Mayo Mustard",
        price: 15
    },
    {
        id:2,
        img: "./images/b-2.png",
        title: "Spicy Tandoori",
        description:"Tandoori Pickles Lettuce Ketchup Mayo Mustard",
        price: 16
    },
    {
        id:3,
        img: "./images/b-3.png",
        title: "BBQ Chicken",
        description:"Grilled Chicken Mozza Cheese Pickles Mayo",
        price: 18
    },
    {
        id:4,
        img: "./images/b-4.png",
        title: "Beef Bacon",
        description:"Beef Patty Chedder Pickles Mayo Mustard Lettuce",
        price: 17
    },
    {
        id:5,
        img: "./images/b-5.png",
        title: "Spicy Buffalo",
        description:"Crispy Chicken, Mozza,Ketchup,Mayo,Mustard",
        price: 19
    },
    {
        id:6,
        img: "./images/b-6.png",
        title: "Cheese Burger",
        description:"Beef Patty Oninon Lettuce Ketchup Mayo Mustard",
        price: 20
    },
]
let cart = []



function readBurgers () {
  let a =  burgers.map(item=> `<div class="col-6">
        <div class="card my-2">
            <div class="card-body">
                <div class="row">
                    <div class="col-3">
                        <img src="${item.img}" alt="" />
                    </div>
                    <div class="col-9">
                        <h3 class="d-flex justify-content-between"> ${item.title}  <span> $${item.price}  </span> </h3>
                        <p> ${item.description} </p> 
                        <div class="d-flex justify-content-between align-items-center"> 
                            <span class="badge bg-secondary p-2">  </span>
                            <button class="btn btn-success" onclick="addToCart(${item.id})"> Add to Cart </button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    cards.innerHTML = a.join("")
}
readBurgers()


function addToCart(id){
    readBurgers()
    document.getElementById("length").innerHTML = cart.length

     burgers.map(item=> {
        if(item.id === id){
        cart.push(item)
        let a = cart.map(item=> `<tr>
                    <td> ${item.id} </td>
                    <td> <img class="img-fluid" src="${item.img}"> </td>
                    <td> ${item.title} </td>
                    <td> ${item.description} </td>
                    <td> ${item.price} </td>
                    <td> <button class="btn btn-danger"> Delete </button> </td>
                </tr>` )
            body.innerHTML = a.join("")
        }
     })
}