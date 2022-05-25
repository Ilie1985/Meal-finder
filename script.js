// Bring in DOM elements
const search = document.getElementById("search");
const submit = document.getElementById("submit");
const random = document.getElementById("random");
const mealsEl = document.getElementById("meals");
const resultHeading = document.getElementById("result-heading");
const single_mealEl = document.getElementById("single-meal");
const enterValue = "Please enter a valid term!";
//searchMeal and fetch from API FUNCTIONALITY

//because is a submit event listener we need to prevent the default submit
//clear single meal display by assigning an empty string with inner.HTML
//Get the search term this will give us whatever we type in
//check if something is submited
//trim() will get rid of the space
//do the fetch request, it it a GET request so i dont need to specify the method
//insert term at the end to make the fetch dynamic
//check if ther`s any meal with the search term
//if it turns up to be null come up with a message
//else set mealsEl.innerHTML to the data that i get back and map through
//for each meal we want to output a div with a class of meal
//i have access to all the data/property inside each meal and one of the property i need is strMealThumb
//have the title if i hover over it
//create a div with class meal-info
//when having custom html5 atributes have data atribute to set the id
//set that to meal.idMeal
//inside this div have an h3 with ${meal.strMeal}--> which basicaly the name of the meal
//display the result as a string with .join("")
//clear the text at the search value
//set the search.value to an empty string
const searchMeals = async (e) => {
  e.preventDefault();

  single_mealEl.innerHTML = "";

  const term = search.value;

  if (term.trim()) {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
    );
    const data = await res.json();
    console.log(data);
    resultHeading.innerHTML = `<h4>Search results for "${term}":</h4>`;

    if (data.meals === null) {
      resultHeading.innerHtml = "<p>There are no search results .Please try again!</p>";
    } else {
      mealsEl.innerHTML = data.meals
        .map(
          (meal) => `
        <div class ="meal">
        <img src = "${meal.strMealThumb}" alt="${meal.strMeal}"/>
        <div class="meal-info" data-mealID="${meal.idMeal}">
        <h3>${meal.strMeal}</h3>
        </div>
        <div/>`
        )
        .join("");
    }

    //Clear search text
    search.value = "";
  } else {
    search.placeholder = `${enterValue}`;
  }
};

//EVENT LISTENERS

submit.addEventListener("submit", searchMeals);
