AFRAME.registerComponent('audioanalyser-volume-radius', {
  schema: {
    analyserEl: {type: 'selector'},
    multiplier: {type: 'number', default: 1},
    which: {default: "red", oneOf:["red", "green", "blue", "alpha"]}
  },

  tick: function (time) {
    var el = this.el;
    var volume;
    var dt = el.sceneEl.systems.clubber.getData(time)
    volume = dt[this.data.which] * this.data.multiplier;
    el.setAttribute('scale', {
      x: volume + .5,
      y: 1,
      z: volume + .5});
    }
});
