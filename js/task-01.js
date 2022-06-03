const categories = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${categories.length}`);

const categoriesChildren = categories.forEach((el) => {
    const headings = el.querySelector('h2').outerText;
    const listItems = el.querySelectorAll('li').length;
    console.log(`Category: ${headings}`+ '\n' +`Elements: ${listItems}`)
});

