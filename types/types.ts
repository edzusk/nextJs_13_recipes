type NewRecipe = {
  title: string,
  recipe: string,
  imageUrl: string,
  type: 'coctai' | 'main' | 'dessert',
}
type Recipe = {
  title: string,
  recipe: string,
  imageUrl: string,
  type: 'coctai' | 'main' | 'dessert',
  _id: string,
}

export type {NewRecipe, Recipe}
