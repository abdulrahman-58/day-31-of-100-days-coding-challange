// Assalamualaikum @everyone 👋

// 🚀 Day 31 Challenge: Start Coding! 🚀

// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.
let favouriteFruits: string[]= ["Mango", "Banana", "Apple"];
favouriteFruits.push("Grapes");
console.log(favouriteFruits);
console.log(`\n`);

// Question 92: Write a function to remove the last element from an array and return the removed element.
function removeLastElement<T>(arr: T[]): T | undefined {
    return arr.pop();
}
let fruits: string[]= ["Mango", "Banana", "Apple"];
console.log(removeLastElement(fruits));
console.log(fruits);
console.log(`\n`);

// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
function replace(fruit: string[]): void{
    const index = fruit.indexOf("Banana");
    if(index !== -1)
        fruit[index]= "Mango";
}
let fruit:string[] = ["Strawberry", "Banana", "Apple"];
replace(fruit);
console.log(fruit);

