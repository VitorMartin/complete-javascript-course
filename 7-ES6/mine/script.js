/*

CODING CHALLENGE

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/


// ========== CLASSES ========== //
class Element{
    constructor(name, shortName, buildYear){
        this.name = name;
        this.shortName = shortName;
        this.buildYear = buildYear;
        this.age = curYear() - buildYear;
    };
};

class Park extends Element{
    constructor(name, shortName, buildYear, numberOfTrees, area){
        super(name, shortName, buildYear);
        this.numberOfTrees = numberOfTrees;
        this.area = area;
        this.treeDensity = numberOfTrees / area;
    };
};

class Street extends Element{
    constructor(name, shortName, buildYear, length, size = 'normal'){
        super(name, shortName, buildYear);
        this.length = length;
        this.size = size;
    };
};


// ========== FUNCTIONS ========== //
var curYear = function(){
    return new Date().getFullYear();
};


// ========== BODY ========== //
// PARKS
var ibira = new Park('Parque Ibirapuera', 'ibira', 1954, 2500, 158);
var aclimacao = new Park('Parque Aclimacao', 'aclimacao', 1939, 900, 11.2);
var carmo = new Park('Parque do Carmo', 'carmo', 1979, 5750, 150);

const parks = new Map();
parks.set(ibira.shortName, ibira);
parks.set(aclimacao.shortName, aclimacao);
parks.set(carmo.shortName, carmo);

var avgParkAge = 0;
parks.forEach(park => {
    avgParkAge += park.age;
})
avgParkAge = avgParkAge / parks.size;

// STREETS
var paulista = new Street('Avenida Paulista', 'paulista', 1891, 2.8);
var vergueiro = new Street('Rua Vergueiro', 'vergueiro', 1979, 9.2, 'big');
var sapopemba = new Street('Avenida Sapopemba', 'sapopemba', 1810, 45, 'huge');

const streets = new Map();
streets.set(paulista.shortName, paulista);
streets.set(vergueiro.shortName, vergueiro);
streets.set(sapopemba.shortName, sapopemba);

var totalLength = 0;
streets.forEach(street => {
    totalLength += street.length;
})
var avgLength = totalLength / streets.size;


// SHOW RESULTS
console.log('========== PARKS ==========');
var str = `Average age: ${avgParkAge}\n`;
parks.forEach(park => {    
    str += `Name: ${park.name} | Age: ${park.age} | Tree density: ${park.treeDensity}`;
    park.numberOfTrees >= 1000 ? str += ' | Has more than 1000 trees' : false;
    str += '\n'
})
console.log(str);

console.log('\n');

console.log('========= STREETS =========');
str = `Total length: ${totalLength}\n`;
str += `Average length: ${avgLength}\n`;
streets.forEach(street => {
    str += `Name: ${street.name} | Length: ${street.length} | Size: ${street.size}\n`;
});
console.log(str);