// A ValueConverter for iterating an Object's values inside of a repeat.for in Aurelia
export class ObjectValuesValueConverter {
    toView(obj) {
        return Object.values(obj);
    }
}

/**
 * Usage
 * Shows how to use the custom ValueConverter to iterate an objects values
 * 
 * <require from="./ObjectValuesValueConverter"></require>
 * <li repeat.for="val of myVmObject | objectValues">${val}</li>
 */