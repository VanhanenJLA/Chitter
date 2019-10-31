// A ValueConverter for iterating an Object's properties inside of a repeat.for in Aurelia
export class ObjectKeysValueConverter {
    toView(obj) {
        // Create a temporary array to populate with object keys
        return Object.keys(obj);
    }
}

/**
 * Usage
 * Shows how to use the custom ValueConverter to iterate an objects properties
 * aka its keys.
 *
 * <require from="ObjectKeys"></require>
 * <li repeat.for="prop of myVmObject | objectKeys">${prop}</li>
 */