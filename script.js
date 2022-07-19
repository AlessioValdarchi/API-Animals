async function animalFetch() {
    let arrayAnimal = {};
    for (let i = 0; i <= 20; i++) {
        let response = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand');
        let fetchAnimals = await response.json();
        arrayAnimal[fetchAnimals.id] = fetchAnimals;
        //if(fetchAnimals.id in arrayAnimal)
    }
    console.log(arrayAnimal);
}

animalFetch()