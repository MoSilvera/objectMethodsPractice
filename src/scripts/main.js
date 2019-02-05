//refrence to the place in the dom where the information will be printed
const carContainer = document.getElementById("carContainer")
//function that injects HTML elments into the DOM
const printToTheCarContainer = (whatToPrint) => {carContainer.innerHTML += (whatToPrint)}
//returns the element for the seller name
const nameElement = (sale) => { return `<h2>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}</h2>`}
//returns the element for the car info key value pairs
const carInfoElement = (keyOrValue) => { return `<div>${keyOrValue[0]}: ${keyOrValue[1]}`}
//returns the element for the profit dollar amount
const profitElement = (sale) => { return `<h3>Gross Profit:$${sale.gross_profit}</h3>`}

//iterates through the sales array
let weeklySalesReport = () => salesByWeek.forEach(sale => {
   //prints the name element to the car container
  printToTheCarContainer(nameElement(sale))
  //turns the value of sales.vehicle -an object- into an array fully of inner arrays contianing key value pairs 
   const carSubArray = Object.entries(sale.vehicle)
   //for each interior array, the key value pairs are printed to the DOM
    for (const entry of carSubArray) {
      printToTheCarContainer(carInfoElement(entry))
    }
    //prints the profit element to the car container
   printToTheCarContainer(profitElement(sale))
})

weeklySalesReport()

const searchInput = document.getElementById("searchInput")
const searchResults = document.getElementById("searchResults")


searchInput.addEventListener('keypress', event => {
   if (event.keyCode === 13) {
      searchResults.innerHTML= ""
     const searchTerm = event.target.value
     salesByWeek.forEach(sale => {
        let agent = sale.sales_agent
        for(const value of Object.values(agent)) {
           if(value.toUpperCase().includes(searchTerm.toUpperCase())){
            searchResults.innerHTML += `
            <h2>${agent.first_name} ${agent.last_name}</h2>
            <div>email: ${agent.email}</div>
            <div>sale: $${sale.gross_profit}</div `
           }}

     })

   }
 })

