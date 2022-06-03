const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let possibleRecipes = [];

  // Find any recipes with matching ingredients in bakeryA
  for (let recipe of recipes) {
    for (let ingredient of recipe.ingredients) {
      for (let item of bakeryA) {
        if (item === ingredient) {
          possibleRecipes.push(recipe);
        }
      }
    }
  }

  // Use found bakeryA matches to find any bakeryB matches
  for (let recipe of possibleRecipes) {
    for (let ingredient of recipe.ingredients) {
      for (let item of bakeryB) {
        if (item === ingredient) {
          return recipe.name;
        }
      }
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));