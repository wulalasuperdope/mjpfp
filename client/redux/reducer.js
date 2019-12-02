import {
    UPDATE_DISPLAYED_DATES
} from './constants';

const initialState = {
    displayedDates: [],
}

export const reducer = (state = initialState, action) => {
    if (action.type === UPDATE_DISPLAYED_DATES) {
        return { ...state, displayedDates: action.payload }
    }

    return state;
}