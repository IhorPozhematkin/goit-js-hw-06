const numberCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberCategories.length}`);

numberCategories.forEach(category => {
    const title = category.firstElementChild.textContent;
    const element = category.firstElementChild.nextElementSibling.children.length;
console.log(`Category: ${title}`);
console.log(`Elements: `, element)});



