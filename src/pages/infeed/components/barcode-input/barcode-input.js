import { bindable } from "aurelia-framework";

export class BarcodeInput {

    @bindable barcode;
    input;

    sampleJSON = {

        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500,
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center",
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",

    };

    constructor() {
        this.input = JSON.stringify(this.sampleJSON);
    }

    attached() {
        this.hasFocus = true;
    }

    submit(barcode) {
        if (barcode === "") {
            return;
        }
        this.barcode = JSON.parse(barcode);
    }

}