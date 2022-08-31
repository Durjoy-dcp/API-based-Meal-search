const mealLoad = () => {
    const item = document.getElementById('srch').value;


    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}

const displayMeal = meal => {

    const MealContainer = document.getElementById('meal-container');
    MealContainer.innerHTML = '';
    meal = meal.slice(0, 6);
    meal.forEach(item => {
        console.log(item);
        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML = ` <div class="card h-100" onclick="idDetails(${item.idMeal})">
        <img src="${item.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <div class="">
            <h5 class="card-title">${item.strMeal}</h5>
            <p class="card-text">${item.strInstructions.split('.').slice(0, 4).join('.')}.</p>
            </div>
        </div>`;
        MealContainer.appendChild(div);
    })

}
mealLoad();


function idDetails(id) {
    // console.log(id);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => console.log(data.meals[0]))
}

