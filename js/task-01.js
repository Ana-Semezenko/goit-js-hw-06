const categoriesList = document.querySelectorAll('.item');
const numberOfCategories = categoriesList.length;
console.log('Number of categories:', numberOfCategories);
for (const element of categoriesList) {
    const catagory = element.querySelector('h2').textContent;
    console.log("Catagory:", catagory);
    const elements = element.querySelectorAll('li').length;
    console.log('Elements:', elements);
}