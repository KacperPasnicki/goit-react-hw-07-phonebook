import { createSelector } from '@reduxjs/toolkit';
export const getContact = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getFindContact = createSelector(
  [getContact, getFilter],
  (items, filter) => {
    if (filter === '') return items;
    const newArray = items.filter(item => {
      const valueToLow = filter.toLowerCase();
      return item.name.toLowerCase().includes(valueToLow);
    });
    console.log(newArray);
    return newArray;
  }
);
