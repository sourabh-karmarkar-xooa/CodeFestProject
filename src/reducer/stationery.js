import {ON_INVENTORY_RECEIVED,ON_SELECTION_CHANGED} from '../constant';
import {createReducer} from "../util";
import _ from 'lodash';

const initialState = {
    stationeryInventory: [],
    stationeryHistory: [],
    selectedItems: {}
};

export default createReducer(initialState, {

    [ON_INVENTORY_RECEIVED]: (state, payload) =>
        Object.assign({}, state, {
            stationeryInventory: payload
        }),
    [ON_SELECTION_CHANGED]: (state, payload) => {
        const itemId = payload.itemId;
        const selectedQuantity = payload.quantity;
        if (!selectedQuantity) {  //If 0
            const clonedSelectedItems = _.cloneDeep(state.selectedItems);
            delete clonedSelectedItems[itemId];
            return Object.assign({}, state, {
                selectedItems: clonedSelectedItems
            });
        } else {
            const newItemObject = {};
            newItemObject[itemId] = selectedQuantity;

            const newSelectedItems = Object.assign({}, state.selectedItems, newItemObject);

            return Object.assign({}, state, {
                selectedItems: newSelectedItems
            });
        }
    }
});
