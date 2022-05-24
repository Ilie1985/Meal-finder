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
  } else {
    search.placeholder = `${enterValue}`;
  }
};

//EVENT LISTENERS

submit.addEventListener("submit", searchMeals);
