import { CATEGORIES_PRODUCTS } from '../constants.js'

const defaultState = 
{
	foods: ['Polos', 'Shirts', 'Pants', 'Jackets'],
	cosmetics: ['Dresses', 'Cardigans', 'Tops', 'Trench Coats']
}

export const categoriesProducts = (state = defaultState, action) => {
  switch (action.type) {
		case CATEGORIES_PRODUCTS:
				return state;

		default:
				return state;
  }
}