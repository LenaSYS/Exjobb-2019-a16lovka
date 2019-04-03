//Node.js modules needed used in the script
var fs = require('fs');
var seedrandom = require('seedrandom');
var arrays  = require('arrays/data_arrays');

//Returns a random date between two specified dates
function getRandomDate() {
    var fromDate = new Date('01-01-2000'); 
    var toDate = new Date('01-01-2019');
    fromDate = fromDate.getTime();
    toDate = toDate.getTime();
    var date = new Date(fromDate + Math.random() * (toDate - fromDate))
    return date;
}

//Genereates random ineger between max and min values
//The maximum and minimum is both inclusive
function getRandomInt(min, max) {
    seedrandom('1', { global: true });
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

//Returns a random length description
function getSlicedDescription() {
    var str = arrays.Description; 
    var length = str.length;
    var randomLength = getRandomInt(200, length);
    var result = str.slice(0, randomLength);
    return result;
}

//Class for an Object
class Item {
    constructor(Id) {
        this.id = Id;
        this.price = getRandomInt(50, 1000);
        this.description = getSlicedDescription();
        this.gender = arrays.Genders[getRandomInt(0, (arrays.Genders.length - 1))];
        this.color = arrays.Colors[getRandomInt(0, (arrays.Colors.length - 1))];
        this.parent_category = arrays.Categorites[getRandomInt(0, (arrays.Categorites.length - 1))];
        this.child_category = arrays.Categorites[getRandomInt(0, (arrays.Categorites.length - 1))];
        this.size = arrays.Sizes[getRandomInt(0, (arrays.Sizes.length - 1))];
        this.created_date = getRandomDate();
        this.modified_date = getRandomDate();
        this.active_date = getRandomDate();
        this.currency = arrays.Currencies[getRandomInt(0, (arrays.Currencies.length - 1))];
        this.country = arrays.Countries[getRandomInt(0, (arrays.Countries.length - 1))];
        this.title = this.color + " " + this.child_category;
    }
    getItem() {
        var item = {
            "id": this.id,
            "title": this.title,
            "price": this.price,
            "description": this.description,
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

//Generates JOSN-object and saves it to a file
function generateJSON() {
    var jsonData = [];

    for (var i = 0; i < 10; i++) {
        var item = new Item(i);
        jsonData.push(item.getItem());
    }

    fs.writeFile ('../data.json', JSON.stringify(jsonData), function(err) {
        if (err) throw err;
        console.log('complete');
    });
}

generateJSON();