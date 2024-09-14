// Task 1: Create an inventory array of Product Objects


// Initializing inventory with product objects
const inventory = [
    { name: "Laptop", price: 2000, quantity: 500, lowStockLevel: 200 }, // Laptop for $2000, 500 in stock and minimum stock level of 200
    { name: "Phone", price: 1000, quantity: 100, lowStockLevel: 50 }, //Phone for $1000, 100 in stock and minimum stock level of 50
    { name: "Tablet", price: 800, quantity: 70, lowStockLevel: 30 }, //Tablet for $800, 70 in stock and minimum stock level of 30
    { name: "TV", price: 1500, quantity: 80, lowStockLevel: 8 }, //TV for $1500, 80 in stock and minimum stock level of 8
    { name: "Speaker", price: 300, quantity: 20, lowStockLevel: 10 } // Speaker for $300, 20 in stock and minimum stock level of 10
];

// Task 2: Function to Display Product Details

function displayProductDetails(productDetails) {
    let quantity = inventory.quantity; // declaring the quantity variable
    const stockStatus = quantity <= productDetails.lowStockLevel ? "Low Stock" : "In Stock"; //Determining the stock status based on the quantity amount in stock
    console.log(`Product: ${productDetails.name}\nPrice: $${productDetails.price}\nQuantity: ${productDetails.quantity}\nStock Status: ${stockStatus}`); // displays the product, price, quantity and stock status
    
};
inventory.forEach(productDetails => displayProductDetails(productDetails)); // displays for each product in the inventory array

//Task 3: Function to Update Product Stock After Sales

function updateStock(inventory, unitsSold) { 
    inventory.quantity -= unitsSold; // calculating the number of units available after sale and updates the inventory amount
    console.log(`Units Sold: ${unitsSold}\n Remaining Stock: ${inventory.quantity}`); //prints number of units sold and remaining stock
    
    if (inventory.quantity <= inventory.lowStockLevel){ // determines if stock amount after sale is less than low stock level amount
        console.log(`IMPORTANT: ${inventory.name} is has a low stock level!`);
    }

    else{
        console.log(`Only ${inventory.quantity} units available`); //informs about stock level
    }
};

updateStock(inventory[1],75); // example of function
        
// Task 4: Function to Check Low Stock Products

function checkLowStock(inventory){
    inventory.forEach(inventory => {
        if (inventory.quantity <= inventory.lowStockLevel){ // determines if inventory is less than stock level
            console.log(`${inventory.name} is low in stock.`); 
        }
    });
};

checkLowStock(inventory); //displays message if stock level is low