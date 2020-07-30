var products = [];
var strQuantity = "";
var shoppingCart = [];
var shoppingCartLength = 0;

//var months = [];
function addingItem() {
    var item = document.getElementById("productName").value;
    var product = { name: item, price: 0 };
    document.getElementById("productName").value = "";
    if (item != "") {
        products.push(product);
        var menuList = document.getElementById("firstSelect");
        var myOption = document.createElement("option");
        myOption.text = product.name;
        menuList.add(myOption);
    }

}
function addPriceOfProduct() {
    var item = document.getElementById("firstSelect").value;
    var priceOfProduct = document.getElementById("price").value;
    document.getElementById("price").value = "";
    var i;
    if (priceOfProduct != "") {
        for (i = 0; i < products.length; i++) {
            if (products[i].name == item) {
                products[i].price = priceOfProduct;
                var unitMenuList = document.getElementById("secondSelect");
                var myOption = document.createElement("option");
                myOption.text = products[i].name + " $" + priceOfProduct + "/unit";
                unitMenuList.add(myOption);
            }
        }
    }
}

function addUnitsToProduct1() {
    strQuantity +="1";
}

function addUnitsToProduct2() {
    strQuantity +="2";
}

function addUnitsToProduct3() {
    strQuantity +="3";
}

function addUnitsToProduct4() {
    strQuantity +="4";
}

function addUnitsToProduct5() {
    strQuantity +="5";
}

function addUnitsToProduct6() {
    strQuantity +="6";
}

function addUnitsToProduct7() {
    strQuantity +="7";
}

function addUnitsToProduct8() {
    strQuantity +="8";
}

function addUnitsToProduct9() {
    strQuantity +="9";
}

function addUnitsToProduct0() {
    strQuantity +="0";
}

function addToCart(){
    var totalUnits = parseInt(strQuantity, 10);
    strQuantity = "";
    var item = document.getElementById("secondSelect").value;
    for (var i = 0; i < products.length; i++) {
         if(item.search(products[i].name)>=0){
            var productWithQuantityObject = {
                product:products[i],
                units: totalUnits,
                totalPrice: products[i].price * totalUnits
            };

            shoppingCart.push(
                productWithQuantityObject);

             shoppingCartLength++;

         }        
   }
}

function amtDue(){
    var grandPrice=0;
    var rowStart = 2;
    var table = document.getElementById("thisTable");
    for(var i=0; i<shoppingCart.length;i++){
        var cartItem=shoppingCart[i];
        var product2=cartItem.product;
        var totalPrice = cartItem.totalPrice;
        grandPrice+=totalPrice;
        var myUnits = cartItem.units;
        var pricePerUnit = product2.price;
        var myRow = table.insertRow(rowStart);
        rowStart++;
        var dataCell1 = myRow.insertCell(0);
        var dataCell2 = myRow.insertCell(1);
        var dataCell3 = myRow.insertCell(2);
        var dataCell4 = myRow.insertCell(3);
        dataCell1.innerHTML = product2.name;
        dataCell2.innerHTML = pricePerUnit;
        dataCell3.innerHTML = myUnits;
        dataCell4.innerHTML = totalPrice;
    }

    tax = grandPrice * 5.0 / 100;
    if(shoppingCart.length >0){
        document.getElementById("totalPrice").innerHTML = "Total Price: " + grandPrice;
        document.getElementById("totalTax").innerHTML = "Taxes: " + tax;
        document.getElementById("totalAmt").innerHTML = "Amount Due: " + (grandPrice+tax);

    }

    shoppingCart = [];
   
 }

function resetTable() {

    var table = document.getElementById("thisTable");
    var rowStart = 2;
    for(var i=0; i<shoppingCartLength;i++){
       table.deleteRow(rowStart);
            
 }
        shoppingCartLength=0;
        shoppingCart=[];
        document.getElementById("totalPrice").innerHTML = "Total Price: ";
        document.getElementById("totalTax").innerHTML = "Taxes: ";
        document.getElementById("totalAmt").innerHTML = "Amount Due: ";
}

function myDisplayDateTime (){
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
document.getElementById("dateAndtime").value = dateTime;
}




