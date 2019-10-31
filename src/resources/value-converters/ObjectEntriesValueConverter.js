// A ValueConverter for iterating an Object's entries inside of a repeat.for in Aurelia
export class ObjectEntriesValueConverter {
    toView(obj) {
        return Object.entries(obj);
    }
}

/**
 * Usage
 * Shows how to use the custom ValueConverter to iterate an objects values
 * 
 * <require from="./ObjectValuesValueConverter"></require>
 * <li repeat.for="val of myVmObject | objectValues">${val}</li>
 */