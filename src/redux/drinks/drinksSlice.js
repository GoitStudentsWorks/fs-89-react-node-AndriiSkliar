// @ts-nocheck
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { drinksOperations } from './drinksOperations';

const initialState = {
  ownCocktails: [],
  cocktails: [],
  popularDrinks: [],
  favoriteCocktails: [],
  homepageDrinks: [],
  totalFavorites: null,
  isLoading: false,
  error: null,
  totalOwn: null,
};

const cocktailsSlice = createSlice({
  name: 'cocktails',
  initialState,

  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(
        drinksOperations.fetchOwnCoctails.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.ownCocktails = payload.drinks;
          state.totalOwn = payload.total;
        }
      )
      .addCase(
        drinksOperations.fetchCocktails.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.cocktails = payload;
        }
      )
      .addCase(
        drinksOperations.fetchPopularDrinks.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.popularDrinks = payload;
        }
      )
      .addCase(
        drinksOperations.fetchFavoriteCocktails.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.favoriteCocktails = payload.drinks;
          state.totalFavorites = payload.total;
        }
      )
      .addCase(drinksOperations.addCocktail.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cocktails = [...state.ownCocktails, payload];
        state.totalOwn += 1;
        // toast.success(`Now ${payload.name} added`);
      })
      .addCase(
        drinksOperations.deleteOwnCocktail.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.cocktails = state.ownCocktails.filter(
            (cocktail) => cocktail._id !== payload._id
          );
          state.totalOwn -= 1;
          // toast(`❌ ${payload.name} was deleted`);
        }
      )
      .addCase(
        drinksOperations.addToFavorites.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.favoriteCocktails = [
            ...state.favoriteCocktails,
            payload.result,
          ];
          state.totalFavorites = state.totalFavorites += 1;
        }
      )
      .addCase(
        drinksOperations.deleteFromFavorites.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.favoriteCocktails = state.favoriteCocktails.filter(
            (cocktail) => cocktail._id !== payload.result._id
          );
          state.totalFavorites = state.totalFavorites -= 1;
        }
      )
      .addCase(
        drinksOperations.fetchHomePageDrinks.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.homepageDrinks = payload;
        }
      )
      .addMatcher(
        isAnyOf(
          drinksOperations.fetchOwnCoctails.pending,
          drinksOperations.fetchCocktails.pending,
          drinksOperations.fetchFavoriteCocktails.pending,
          drinksOperations.addCocktail.pending,
          drinksOperations.deleteOwnCocktail.pending,
          drinksOperations.addToFavorites.pending,
          drinksOperations.fetchPopularDrinks.pending,
          drinksOperations.deleteFromFavorites.pending,
          drinksOperations.fetchHomePageDrinks.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          drinksOperations.fetchOwnCoctails.rejected,
          drinksOperations.fetchCocktails.rejected,
          drinksOperations.fetchPopularDrinks.rejected,
          drinksOperations.fetchFavoriteCocktails.rejected,
          drinksOperations.addCocktail.rejected,
          drinksOperations.deleteOwnCocktail.rejected,
          drinksOperations.addToFavorites.rejected,
          drinksOperations.deleteFromFavorites.rejected,
          drinksOperations.fetchHomePageDrinks.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const cocktailsReducer = cocktailsSlice.reducer;
