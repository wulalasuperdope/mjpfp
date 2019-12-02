import {
    UPDATE_DISPLAYED_DATES
} from './constants';

export const updateDisplayedDates = dates => ({
    type: UPDATE_DISPLAYED_DATES,
    payload: dates
})