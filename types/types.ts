type NewRecipe = {
  title: string,
  recipe: string,
  imageUrl: string,
  type: 'coctail' | 'main' | 'dessert',
}
type Recipe = {
  title: string,
  recipe: string,
  imageUrl: string,
  type: 'coctail' | 'main' | 'dessert',
  _id: string,
}

export type {NewRecipe, Recipe}
