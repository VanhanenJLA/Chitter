import svgPanZoom from 'svg-pan-zoom';

export class SvgPage {

  attached() {
    document.getElementById('jumbotron').hidden = "true";
    svgPanZoom(document.getElementById('svg'));
  }
}
