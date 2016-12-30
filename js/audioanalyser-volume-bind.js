/**
 *
 */
AFRAME.registerComponent('audioanalyser-volume-bind', {
  schema: {
    analyserEl: {type: 'selector'},
    component: {type: 'string'},
    property: {type: 'string'},
    min: {default: {x: 0, y: 0, z: 0}, type: 'vec3'},
    max: {default: {x: 1, y: 1, z: 1}, type: 'vec3'},
    multiplier: {type: 'number'}
  },

  tick: function () {
    var analyserComponent;
    var data = this.data;
    var el = this.el;
    var max = data.max;
    var min = data.min;
    var value;
    var smoothed;

    analyserComponent = data.analyserEl.components.audioanalyser;
    if (!analyserComponent.analyser) { return; }

    value = analyserComponent.volume * data.multiplier;
    smoothed += (value - smoothed) / .5;
    el.setAttribute(data.component, data.property, '#' + new THREE.Color(
      smoothed * max.x + min.x,
      smoothed * max.y + min.y,
      smoothed * max.z + min.z
    ).getHexString());
  }
});


//  stackoverflow.com/questions/1344984/drawing-a-smooth-line-from-tablet-input
