// id: searchBtn, mealList, mealDetailsContent, recipeCloseBtn, searchInput

searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {mealDetailsContent.parentElement.classList.remove('showRecipe')})

function getMealList() {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput.value.trim()}`)
        .then(res => res.json())
        .then(data => {
            let html = ''
            if(data.meals) {
                data.meals.forEach(meal => {
                    html += `<div class = "meal-item" data-id = "${meal.idMeal}">
                                <div class = "meal-img">
                                    <img src = "${meal.strMealThumb}" alt = "food">
                                </div>
                                <div class = "meal-name">
                                    <h3>${meal.strMeal}</h3>
                                    <a href = "#" class = "recipe-btn">Get Recipe</a>
                                </div>
                            </div>
                        `;
                });
                title.textContent = 'Your Search Results:'
                mealList.classList.remove('notFound')
            } else {
                html = 'Sorry, we didn\'t find any mealList!'
                mealList.classList.add('notFound')
            }
            mealList.innerHTML = html
            searchInput.value = null
        })
}

function getMealRecipe(event) {
    event.preventDefault();
    if(event.target.classList.contains('recipe-btn')) {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${event.target.parentElement.parentElement.dataset.id}`)
            .then(res => res.json())
            .then(data => mealRecipeModal(data.meals))
    }
}

function mealRecipeModal(meal) {
    meal = meal[0]
    let html = `
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <p class = "recipe-category">${meal.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;
    mealDetailsContent.innerHTML = html
    mealDetailsContent.parentElement.classList.add('showRecipe');
}