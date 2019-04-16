//Node.js modules needed used in the script
var fs = require('fs');
var seedrandom = require('seedrandom');
var arrays  = require('arrays');

//Returns a random date between two specified dates
function getRandomDate() {
    var fromDate = new Date('01-01-2000'); 
    var toDate = new Date('01-01-2019')
    fromDate = fromDate.getTime();
    toDate = toDate.getTime();
    return new Date(fromDate + Math.random() * (toDate - fromDate));
}

//Genereates random ineger between max and min values
//The maximum and minimum is both inclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Class for a tiny Object
class TinyItem {
    constructor(Id) {
        this.id = Id;
        this.price = getRandomInt(50, 1000);
        this.gender = arrays.Genders[getRandomInt(0, (arrays.Genders.length - 1))];
        this.color = arrays.Colors[getRandomInt(0, (arrays.Colors.length - 1))];
        this.parent_category = arrays.Categorites[getRandomInt(0, (arrays.Categorites.length - 1))];
        this.child_category = arrays.Categorites[getRandomInt(0, (arrays.Categorites.length - 1))];
        this.size = arrays.Sizes[getRandomInt(0, (arrays.Sizes.length - 1))];
        this.date = getRandomDate();
        this.currency = arrays.Currencies[getRandomInt(0, (arrays.Currencies.length - 1))];
        this.country = arrays.Countries[getRandomInt(0, (arrays.Countries.length - 1))];
        this.title = this.color + " " + this.child_category;
    }
    getTinyItem() {
        var item = {
            "id": this.id,
            "title": this.title,
            "price": this.price,
            "gender": this.gender,
            "color": this.color,
            "categories": [
                { "parent_category":  this.parent_category},
                { "child_category": this.child_category}
            ],
            "size": this.size,
            "date": this.created_date,
            "currency": this.currency,
            "country": this.country
        };
        return item;
    }
}

//Generates JOSN-object and saves it to a file
function generateJSON() {
    var jsonData = [];
    seedrandom('1', { global: true });

    var item = new TinyItem(1);
    jsonData.push(item.getTinyItem());

    fs.writeFile ('../data_tiny.json', JSON.stringify(jsonData), function(err) {
        if (err) throw err;
        console.log('complete');
    });
}

generateJSON();