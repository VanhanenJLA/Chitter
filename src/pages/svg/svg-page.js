import svgPanZoom from 'svg-pan-zoom';
import world_map from './../../static/svg/world_map.svg';
import world from './../../static/svg/world.svg';

export class SvgPage {
    constructor() {
        this.world = world;
        this.world_map = world_map;
    }

    attached() {
        this.zoomable.addEventListener('load', function() {
            svgPanZoom(this);
        });
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 05b71ca... Work dump
=======
>>>>>>> f6e8439... Work dump
    }
}
