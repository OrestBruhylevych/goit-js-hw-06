const categoriesEl = document.querySelector('#categories');
const categoriesLength = categoriesEl.children.length;

console.log(`Number of categories: ${categoriesLength}`);

const items = categoriesEl.querySelectorAll('.item');

items.forEach(item => {
    const itemName = item.querySelector('h2').textContent;
    console.log(`Category: ${itemName}`);

    const numberOfElements = item.querySelector('ul').children.length;
    console.log(`Elements: ${numberOfElements}`);
});