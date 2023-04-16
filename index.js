const pizzas=[
    {
        id: 1,
        nombre: "muzza",
        precio:500,
        ingredientes: ["muzarella", "tomate", "aceitunas"],

    },
    //los corchetes y SIN CLASS son una forma mas abreviada y simple.
    {
        id: 2,
        nombre: "pizza de cebolla",
        precio:400,
        ingredientes: ["cebolla", "tomate", "queso cremoso"],

    },
    {
        id: 3,
        nombre: "4 quesos",
        precio:700,
        ingredientes: ["muzarella", "queso cremoso", "roqueford", "queso cabra"],

    },
    {
        id: 4,
        nombre: "napolitana",
        precio:600,
        ingredientes: ["muzarella", "tomate", "aceitunas", "anchoas"],

    },
    {
        id: 5,
        nombre: "especial",
        precio:950,
        ingredientes: ["muzarella", "tomate", "aceitunas", "paleta", "champiñones"],

    },
    {
        id: 6,
        nombre: "anana-pizza",
        precio:800,
        ingredientes: ["muzarella", "tomate", "anana"],

    },
]

/*Vinculamos los elementos del html con el js */
const resultContainer = document.getElementById("result-container");
const form= document.getElementById("form");
const input= document.querySelector(".form-input");


const searchPizza=(value)=>pizzas.find(pizza=> pizza.id===value);

const showEmptyError=()=>{
    resultContainer.innerHTML = ` 
    <div class="pizza-container">
        <h2>No ha ingresado ningun numero, por fsvor ingrese un numero.</h2>
       </div>
    `; 
};

const renderResult = (pizza)=>{
    if(!pizza){
        resultContainer.innerHTML = ` 
       <div class="pizza-container">
        <h2>El numero ingresado no coincide con ninguna pizza, ingrese un numero valido.</h2>
       </div>
        `;
    } else{
        resultContainer.innerHTML = ` 
       <div class="pizza-container">
        <h2>${pizza.nombre}</h2>
        <h3>${pizza.precio}</h3>
       </div>
       `;
    };
};

const submitSearch= (e) => {
    e.preventDefault();
    const searchedValue=input.value; 
    if(!searchedValue){
    showEmptyError();
return;
}
const searchedPizza= searchPizza(Number(searchedValue));
renderResult(searchedPizza);
form.reset();
};




/*funcion inicializadora, comienza la BUSQUEDA*/
const init =()=>{
 form.addEventListener("submit", submitSearch)
};
init()