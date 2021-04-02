export const MODEL = 'MODEL';
export const CONDITION = 'CONDITION';
export const SERVICE_PROVIDER = 'SERVICE_PROVIDER';
export const STORAGE = 'STORAGE_PROVIDER';
export const CART = 'CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SHIPPING_LABEL = 'SHIPPING_LABEL';
export const CLEAR = 'CLEAR';


export function addPhoneComponent(actionName, payloadValue) {
    return {
        type: actionName,
        payload: payloadValue
    };
}

