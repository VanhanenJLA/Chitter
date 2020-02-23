export class InverseLightingModeValueConverter {
    toView(value) {
        switch (value) {
            case 'light':
                return 'dark';
            case 'dark':
                return 'light';
            default:
                console.error('Error: Unknown lighting mode: ' + value);
                break;
        }
    }
}