// // Bring in DOM elements
// const search = document.getElementById("search");
// const submit = document.getElementById("submit");
// const random = document.getElementById("random");
// const mealsEl = document.getElementById("meals");
// const resultHeading = document.getElementById("result-heading");
// const single_mealEl = document.getElementById("single-meal");
// const enterValue = "Please enter a valid term!";

// //=====================================================================
// //searchMeals and fetch from API FUNCTIONALITY

// //because is a submit event listener we need to prevent the default submit
// //clear single meal display by assigning an empty string with inner.HTML
// //Get the search term this will give us whatever we type in
// //check if something is submited
// //trim() will get rid of the space
// //do the fetch request, it it a GET request so i dont need to specify the method
// //insert term at the end to make the fetch dynamic
// //check if ther`s any meal with the search term
// //if it turns up to be null come up with a message
// //else set mealsEl.innerHTML to the data that i get back and map through
// //for each meal we want to output a div with a class of meal
// //i have access to all the data/property inside each meal and one of the property i need is strMealThumb
// //have the title if i hover over it
// //create a div with class meal-info
// //when having custom html5 atributes have data atribute to set the id
// //set that to meal.idMeal
// //inside this div have an h3 with ${meal.strMeal}--> which basicaly the name of the meal
// //display the result as a string with .join("")
// //clear the text at the search value
// //set the search.value to an empty string
// const searchMeals = async (e) => {
//   e.preventDefault();

//   single_mealEl.innerHTML = "";

//   const term = search.value;

//   if (term.trim()) {
//     const res = await fetch(
//       `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
//     );
//     const data = await res.json();
//     // console.log(data);
//     resultHeading.innerHTML = `<h4>Search results for "${term}":</h4>`;

//     if (data.meals === null) {
//       resultHeading.innerHtml =
//         "<p>There are no search results .Please try again!</p>";
//     } else {
//       mealsEl.innerHTML = data.meals
//         .map(
//           (meal) => `
//         <div class ="meal">
//         <img src = "${meal.strMealThumb}" alt="${meal.strMeal}"/>
//         <div class="meal-info" data-mealID="${meal.idMeal}">
//         <h3>${meal.strMeal}</h3>
//         </div>
//         <div/>`
//         )
//         .join("");
//     }

//     //Clear search text
//     search.value = "";
//   } else {
//     search.placeholder = `${enterValue}`;
//   }
// };
// //===============================================================================

// //addMealToDOM FUNCTIONALITY

// //initialise an array called ingredients
// //create a for loop with a max of 20 ingredients
// // because i use a variable instead of doing the dot(.) syntax-->meal.strIngredient, i use the bracket syntax meal[`strIngredient£{i}`]
// //check for ingredients --> if(meal[`strIngredient£{i}`]),i is the number
// //because the data from the api(ingredient and measure) did not come in an array i have to access them both
// //we are iterating through all the ingredients and measures and strIngredient1 will go togheter with strMeasure1 and so on
// // else --> if there is no ingredient break out of the for loop
// //output a single meal
// //inside the div i want the title which is strMeal
// const addMealToDOM = (meal) => {
//   const ingredients = [];

//   for (let i = 0; i <= 20; i++) {
//     if (meal[`strIngredient${i}`]) {
//       ingredients.push(
//         `${meal[`strIngredient${i}`]}-${meal[`strMeasure${i}`]}`
//       );
//     } else {
//       break;
//     }
//   }
//   //output single meal
//   single_mealEl.innerHTML = `
//   <div class="single-meal">
//     <h1>${meal.strMeal}</h1>
//     <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
//     <div class="single-meal-info">
//       ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ""}
//       ${meal.strArea ? `<p>${meal.strArea}</p>` : ""}
//     </div>
//     <div class="main">
//       <p>${meal.strInstructions}</p>
//       <h2>Ingredients</h2>
//       <ul>
//         ${ingredients.map((ing) => `<li>${ing}</li>`).join("")}
//       </ul>
//     </div>
//   </div>
// `;
// };
// //========================================

// //getMealById FUNCTIONALITY

// //take in an mealId param
// //make a fetch request again
// //look at the apis documentation choose the appropiate url
// //console.log(data),the reuslt is only one meal(the clicked one) inside of an array
// //asign a variable called meal to data.meals
// //its an array and i eant the firs value [0]
// //call addMealToDOM to add everythong to the DOMand pass in meal

// const getMealById = async (mealID) => {
//   const res = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
//   );
//   const data = await res.json();
//   console.log(data);
//   const meal = data.meals[0];
//   addMealToDOM(meal);
// };
// //========================================================================
// //getRandomMeal FUNCTIONALITY
// // Fetch random meal from API
// const getRandomMeal = () => {
//   // Clear meals and heading
//   mealsEl.innerHTML = "";
//   resultHeading.innerHTML = "";

//   fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
//     .then((res) => res.json())
//     .then((data) => {
//       const meal = data.meals[0];

//       addMealToDOM(meal);
//     });
// };
// //===========================================================================

// //EVENT LISTENERS

// submit.addEventListener("submit", searchMeals);

// //find out if the meal-info div belongs to the element that we click
// //e param .path.find() it will go through all the child elements(item)
// //console.log(item) to see what we have access to
// //i need to narow it down to everithing that has the class of meal-info
// // check if there is a class if(item.classList),will return false if there is no class
// //return the item/element that contains the class meal-info
// //else return false
// //now if i console.log(mealInfo) i can see that i have access only to the class(meal-info) and the attribute (data-mealid) of the element that i clicked
// //check for meal info whhich shoul return true if we have info about the meal
// //asign a variable mealID to mealInfo.getAttribute method
// //check if it works by console.log(mealID)
// //pass mealID in the function getMealById

// mealsEl.addEventListener("click", (e) => {
//   const mealInfo = e.path.find((item) => {
//     //  console.log(item);
//     if (item.classList) {
//       return item.classList.contains("meal-info");
//     } else {
//       return false;
//     }
//   });
//   //  console.log(mealInfo);
//   if (mealInfo) {
//     const mealID = mealInfo.getAttribute("data-mealid");
//     console.log(mealID);
//     getMealById(mealID);
//   }
// });

// random.addEventListener("click", getRandomMeal);
// //========================================================================


const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  mealsEl = document.getElementById('meals'),
  resultHeading = document.getElementById('result-heading'),
  single_mealEl = document.getElementById('single-meal');

// Search meal and fetch from API
function searchMeal(e) {
  e.preventDefault();

  // Clear single meal
  single_mealEl.innerHTML = '';

  // Get search term
  const term = search.value;

  // Check for empty
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;

        if (data.meals === null) {
          resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`;
        } else {
          mealsEl.innerHTML = data.meals
            .map(
              meal => `
            <div class="meal">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
              <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3>${meal.strMeal}</h3>
              </div>
            </div>
          `
            )
            .join('');
        }
      });
    // Clear search text
    search.value = '';
  } else {
    alert('Please enter a search term');
  }
}

// Fetch meal by ID
function getMealById(mealID) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(res => res.json())
    .then(data => {
      const meal = data.meals[0];

      addMealToDOM(meal);
    });
}

// Fetch random meal from API
function getRandomMeal() {
  // Clear meals and heading
  mealsEl.innerHTML = '';
  resultHeading.innerHTML = '';

  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => {
      const meal = data.meals[0];

      addMealToDOM(meal);
    });
}

// Add meal to DOM
function addMealToDOM(meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  single_mealEl.innerHTML = `
    <div class="single-meal">
      <h1>${meal.strMeal}</h1>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <div class="single-meal-info">
        ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
      </div>
      <div class="main">
        <p>${meal.strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>
          ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

// Event listeners
submit.addEventListener('submit', searchMeal);
random.addEventListener('click', getRandomMeal);

mealsEl.addEventListener('click', e => {
  const mealInfo = e.path.find(item => {
    if (item.classList) {
      return item.classList.contains('meal-info');
    } else {
      return false;
    }
  });

  if (mealInfo) {
    const mealID = mealInfo.getAttribute('data-mealid');
    getMealById(mealID);
  }
});