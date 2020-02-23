import { SharedState } from "../../shared/shared-state";
import { inject } from "aurelia-framework";

@inject(SharedState)
export class LightingModeToggle {

    isDark;
    lightingMode = localStorage.getItem('lightingMode') ?? 'light';

    constructor(sharedState) {
        this.sharedState = sharedState;
    }

    toggleLightingMode() {
        this.lightingMode = this.lightingMode === 'light' ? 'dark' : 'light';
        localStorage.setItem('lightingMode', this.lightingMode);
        this.sharedState.lightingMode = this.lightingMode;
    }
}