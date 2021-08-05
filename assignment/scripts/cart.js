console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem(item) {
  basket.push(item);
  return true;
}//End addItem

console.log('Your item was added to the basket:', addItem('potato'));//test to see if 'potato' added to basket, expect true
console.log(basket);

console.log('Your item was added to the basket:', addItem('rock'));//test to see if 'rock' added to basket, expect true
console.log(basket);

function listItems() {
  for (x of basket) {
    console.log(x);
  }
}//End listItems

listItems();//Function doesn't return a value b/c return would break loop

function empty() {
  basket = [];
  return true
}//end empty

empty()
console.log('The basket is now:', basket);

//testing empty
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
console.log('Adding oranges (expect true)', addItem('oranges'));
console.log(`Basket is now ${basket}`);
console.log('Your list of items is empty:', empty());
console.log(`Basket is now ${basket}`);

//Stretch goals
//1
const maxItems = 5;
//2
function isFull() {
  if (basket.length<maxItems) {
    return false;
  } else {
    return true;
  }
}
//3
function addItem2(item) {//Called addItem2 to minimize confusion with our earlier function
  switch (isFull()) {//Ternary operator likely more concise.
    case true:
      return false;//if basket is full, addItem returns false - no new item added
    case false:
      basket.push(item);//if basket is not full, a new item is added to basket
      return true;
  }
}//End addItem2

//testing addItem2
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem2('apples'));
console.log('Adding rocks (expect true)', addItem2('rocks'));
console.log('Adding pies (expect true)', addItem2('pies'));
console.log('Adding water (expect true)', addItem2('water'));
console.log('Adding oranges (expect true)', addItem2('oranges'));
console.log('Adding potato (expect false)', addItem2('potato'));
console.log('Your list of items is empty:', empty());
console.log(`Basket is now ${basket}`);

//4
function removeItem(item) {
  if (basket.indexOf(item) == -1) {//When item cannot be found in basket, basket.indexOf(item) returns -1
    return null;
  } else {//When item found in basket, basket.indexOf(item) >= 0
    basket.splice(basket.indexOf(item), 1);//Splice can remove, replace, or add elements to an array.
    //basket.splice(basket.indexOf(item), 1) indicates that 1 element at index basket.indexOf(item) will be removed
    return item;//basket.splice returns an array of any removed elements. In this case, the goal is to simply return the removed item (non array)
  }
}//End removeItem

//testing removeItem
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem2('apples'));
console.log('Adding rocks (expect true)', addItem2('rocks'));
console.log(`Basket is now ${basket}`);
console.log('Removing item:', removeItem('shelf'));//should return null, shelf not in array
console.log(`Basket is now ${basket}`);
console.log('Removing item:', removeItem('apples'));//should return apples
console.log(`Basket is now ${basket}`);//expect rocks
