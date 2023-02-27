db = db.getSiblingDB('recipes');
db.createCollection('recipes');
db.recipes.insertMany([
  {
    title: 'Spaghetti Bolognese',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Spaghetti_bolognese_%28hozinja%29.jpg/220px-Spaghetti_bolognese_%28hozinja%29.jpg',
    recipe: 'Cook spaghetti according to package instructions. Brown ground beef in a large skillet. Add onion and garlic, cook until softened. Add tomato sauce and seasonings, simmer until thickened. Serve sauce over cooked spaghetti.',
    type: 'main'
},
  {
    title: 'Chicken Curry',
    imageUrl: 'https://hips.hearstapps.com/delish/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg?crop=0.987xw:0.834xh;0.00801xw,0.135xh',
    recipe: 'Season chicken with curry powder, salt, and pepper. Brown chicken in a large skillet. Add onion and garlic, cook until softened. Add coconut milk, bring to a boil, then reduce heat and simmer until chicken is cooked through. Serve curry over rice.',
    type:'main'
},
]);