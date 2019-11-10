import {ON_INVENTORY_RECEIVED,ON_SELECTION_CHANGED,
    ON_CURRENT_ITEM_SELECTION_CHANGED} from '../constant';

export const getInventory = () => (dispatch) => {
    setTimeout(()=>{
        dispatch({
            type:ON_INVENTORY_RECEIVED,
            payload:[
                {
                    id:1,
                    label:'Blue Pen',
                    category: 'Pen',
                    availableQuantity:20,
                    imageURL:'https://www.officerock.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/b/l/bl.jpg'
                },
                {
                    id:2,
                    label:'Black Pen',
                    category: 'Pen',
                    availableQuantity:2,
                    imageURL:'https://www.officerock.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/b/l/bl.jpg'
                },
                {
                    id:3,
                    label:'Red Pen',
                    category: 'Pen',
                    availableQuantity:0,
                    imageURL:'https://www.officerock.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/b/l/bl.jpg'
                },
                {
                    id:13,
                    label:'Red Pen',
                    category: 'Pen',
                    availableQuantity:0,
                    imageURL:'https://www.officerock.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/b/l/bl.jpg'
                },
                {
                    id:23,
                    label:'Red Pen',
                    category: 'Pen',
                    availableQuantity:0,
                    imageURL:'https://www.officerock.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/b/l/bl.jpg'
                },
                {
                    id:33,
                    label:'Red Pen',
                    category: 'Pen',
                    availableQuantity:0,
                    imageURL:'https://www.officerock.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/b/l/bl.jpg'
                },
                {
                    id:4,
                    label:'Red Marker',
                    category: 'Marker',
                    availableQuantity:10,
                    imageURL:'data:image/webp;base64,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'
                },
                {
                    id:5,
                    label:'Long Notebook',
                    category: 'Notebook',
                    availableQuantity:10,
                    imageURL:'data:image/webp;base64,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'
                }
            ]
        })
    },1000);
};

export const onCurrentlySelectedItemChanged = (item) => {
    return {
        type:ON_CURRENT_ITEM_SELECTION_CHANGED,
        payload:item
    }
};

export const onItemQuantityChanged = (itemId,quantity) => {
    return {
        type:ON_SELECTION_CHANGED,
        payload:{itemId,quantity}
    }
};
