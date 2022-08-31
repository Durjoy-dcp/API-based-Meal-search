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

        //calling the modal from the here  

        div.innerHTML = ` 
        <div class="card h-100" onclick="idDetails(${item.idMeal})" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
        .then(data => displayModal(data.meals[0]))


}
function displayModal(details) {
    const modalPart = document.getElementById('modal-body');
    // modalPart.innerText = details;
    document.getElementById('staticBackdropLabel').innerText = details.strMeal;

    // changing the innerHTML of modal here 

    modalPart.innerHTML = `<div class="card w-100">
    <img src="${details.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${details.strMeal}</h5>
    <p class="card-text">${details.strInstructions}</p>
    </div>
  </div>`



}
