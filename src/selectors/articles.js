import { createSelector } from 'reselect';

export const getArticles = createSelector(
  (state) => state.articles,
  (articles) => Object.values(articles)
);

export function getArticle(state) {
  return state.articles;
}
