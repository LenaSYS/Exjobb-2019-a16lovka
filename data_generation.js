var fs = require('fs');
var seedrandom = require('seedrandom');

var Colors = ["Red", "Blue", "Yellow",
    "Green", "Brown", "Grey",
    "Black", "White", "Beige",
    "Pink", "Purple", "Orange"];

var Genders = ["Female", "Male"];

var Categorites = ["Shoes", "Clothes", "Accessories",
    "Bags", "Underwear", "Tops",
    "Jeans", "Trousers", "Dresses",
    "Sweaters", "Jewelry", "Hats",
    "Gloves", "Coats", "Jackets",
    "Skirts", "Shorts", "Shirts",
    "Blouses", "Belts", "Sportswear"];

var Sizes = ["XXS", "XS", "S",
    "M", "L", "XL",
    "XXL", 35, 36,
    37, 38, 39,
    40, 41, 42,
    43, 44, 45];

var Currencies = ["SEK", "DKK", "NOK",
    "EUR", "GBP", "USD"];

var Countries = ["Sweden", "Norway", "Denmark",
    "United Kingdom", "Finland", "Germany",
    "USA", "France", "Spain"];

//var Titles = [];
//var Dates = [];
//var Descriptions = [];
//var Brands = [];

function getRandomDate() {
    var fromDate = new Date('01-01-2000'); 
    var toDate = new Date('01-01-2019')
    fromDate = fromDate.getTime();
    toDate = toDate.getTime();
    return new Date(fromDate + Math.random() * (toDate - fromDate));
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

class Item {
    constructor(Id) {
        this.id = Id + 1;
        this.product_Id = "";
        this.title = "";
        this.price = getRandomInt(50, 1000);
        this.description = "";
        this.brand = "";
        this.gender = Genders[getRandomInt(0, (Genders.length - 1))];
        this.color = Colors[getRandomInt(0, (Colors.length - 1))];
        this.parent_category = Categorites[getRandomInt(0, (Categorites.length - 1))];
        this.child_category = Categorites[getRandomInt(0, (Categorites.length - 1))];
        this.size = Sizes[getRandomInt(0, (Sizes.length - 1))];
        this.created_date = getRandomDate();
        this.modified_date = getRandomDate();
        this.active_date = getRandomDate();
        this.currency = Currencies[getRandomInt(0, (Currencies.length - 1))];
        this.country = Countries[getRandomInt(0, (Countries.length - 1))];
    }
    getItem() {
        var item = {
            "id": this.id,
            "product_id": this.product_id,
            "title": this.title,
            "price": this.price,
            "description": this.description,
            "brand": this.brand,
            "gender": this.gender,
            "color": this.color,
            "categories": [
                { "parent_category":  this.parent_category},
                { "child_category": this.child_category}
            ],
            "size": this.size,
            "date": [
                { "created_date": this.created_date },
                { "modified_date": this.modified_date },
                { "active_date": this.active_date }
            ],
            "currency": this.currency,
            "country": this.country
        };
        return item;
    }
}

class JsonObject {
    constructor() {
        this.jsonData = [];
    }
    addItem(item) {
        this.jsonData.push(item);
    }
    getObject() {
        return this.jsonData;
    }
}

function generateJSON() {
    var jsonData = new JsonObject();
    seedrandom('1', { global: true });

    for (var i = 0; i < 10; i++) {
        var item = new Item(i);
        jsonData.addItem(item.getItem());
    }

    var jsonData = jsonData.getObject();
    console.log(jsonData);

    fs.writeFile ('../data.json', JSON.stringify(jsonData), function(err) {
        if (err) throw err;
        console.log('complete');
    });
}

generateJSON();