/*Implement following assignment using find, filter, map, reduce methods with arrow function(do not use annonymous functions)

Consider following Book Price Array
[567.50,345.40,767.45,567.60,600,400,230,450,350.50,560.40,800.56,890.9]

1. Find all prices less than 500
2. Find the first price greater than 600
3. Find all prices between 500 and 600
4. Display sum of all prices
5. Display sum of all prices but initial value of sum should be 100
6. Double every price from array and display new prices
7. Display sum of prices which are less than 500

Consider following Book Names Array
['Learn Java','Basics of Python','Advanced java Concepts','Web Basics', 'Easy learnng Python', 'Web Fundamentals', 'JAVA fundamentals']

1. Find all books starting with 'Web'  : ['Web Basics','Web Fundamentals']
2. Find all books which are related to Java :['Learn Java', 'Advanced java Concepts','JAVA fundamentals']
3. Prepend 'Neo-' to every Book Name and Display new book name
4. Display sum of length of every bookname

*/

const bookPrices = [567.50,345.40,767.45,567.60,600,400,230,450,350.50,560.40,800.56,890.9];

// 1.prices less than 500
const pricesLessThan500 = bookPrices.filter(price => price < 500);
console.log(pricesLessThan500);

// 2.price greater than 600
const firstPriceGreaterThan600 = bookPrices.find(price => price > 600);
console.log(firstPriceGreaterThan600);

// 3.prices between 500 and 600
const pricesBetween500And600 = bookPrices.filter(price => price >= 500 && price <= 600);
console.log(pricesBetween500And600);

// 4.sum of all prices
const sumOfAllPrices = bookPrices.reduce((sum, price) => sum + price, 0);
console.log(sumOfAllPrices);

// 5.sum of all prices but initial value of sum should be 100
const sumOfAllPricesWithInitialValue100 = bookPrices.reduce((sum, price) => sum + price, 100);
console.log(sumOfAllPricesWithInitialValue100);

// 6. Double every price from array and display new prices
const doubledPrices = bookPrices.map(price => price * 2);
console.log(doubledPrices);

// 7.sum of prices which are less than 500
const sumOfPricesLessThan500 = bookPrices.filter(price => price < 500).reduce((sum, price) => sum + price, 0);
console.log(sumOfPricesLessThan500);


const bookNames = ['Learn Java', 'Basics of Python', 'Advanced java Concepts', 'Web Basics', 'Easy learning Python', 'Web Fundamentals', 'JAVA fundamentals'];

// 1. Find all books starting with 'Web'
const booksStartingWithWeb = bookNames.filter(book => book.startsWith('Web'));
console.log(booksStartingWithWeb);

// 2. Find all books which are related to Java
const javaRelatedBooks = bookNames.filter(book => book.includes('Java') || book.includes('JAVA') || book.includes('java'));
console.log(javaRelatedBooks);

// 3. Prepend 'Neo-' to every Book Name and Display new book name
const addNeoBookNames = bookNames.map(book => 'Neo-' + book);
console.log(addNeoBookNames);

// 4. Display sum of length of every book name
const sumOfBookNameLengths = bookNames.reduce((sum, book) => sum + book.length, 0);
console.log(sumOfBookNameLengths);