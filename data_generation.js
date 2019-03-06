var jsonData = [];

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

function generateItem(i) {
    var id = i + 1;
    var product_id = "";
    var title = "";
    var price = getRandomInt(50, 1000);
    var description = "";
    var brand = "";
    var gender = Genders[getRandomInt(0, (Genders.length-1))];
    var color = Colors[getRandomInt(0, (Colors.length-1))];
    var parent_category = Categorites[getRandomInt(0, (Categorites.length-1))];
    var child_category = Categorites[getRandomInt(0, (Categorites.length-1))];
    var size = Sizes[getRandomInt(0, (Sizes.length-1))];
    var created_date = getRandomDate();
    var modified_date = getRandomDate();
    var active_date = getRandomDate();
    var currency = Currencies[getRandomInt(0, (Currencies.length-1))];
    var country = Countries[getRandomInt(0, (Countries.length-1))];


    var item = {
        "id": id,
        "product_id": product_id,
        "title": title,
        "price": price,
        "description": description,
        "brand": brand,
        "gender": gender,
        "color": color,
        "categories": [
            { "parent_category":  parent_category},
            { "child_category": child_category}
        ],
        "size": size,
        "date": [
            { "created_date": created_date },
            { "modified_date": modified_date },
            { "active_date": active_date }
        ],
        "currency": currency,
        "country": country
    };
    return item;
}

function generateJSON() {
    for (var i = 0; i < 10; i++) {
        /* Sets the seed for the random number functions 
        using this package: https://github.com/davidbau/seedrandom */
        Math.seedrandom(i); 
        var item = generateItem(i);
        jsonData.push(item);
    } 
    download(jsonData, 'data.json', 'application/json');
    console.log(jsonData);
}

/* Downloads the file in JSON format */
function download(content, fileName, contentType) {
    var formattedContent = JSON.stringify(content);
    var a = document.createElement("a");
    var file = new Blob([formattedContent], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

generateJSON();
