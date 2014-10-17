(function () {
  'use strict';

  function log(message) {
    if (console.log) {
      console.log(message);
    }
  }

  var world = {};

  function createEntities() {
    var entities = [
      {name: 'title', bounds: {x: 0, y: 0, width: 2048, height: 1536}},
      {name: 'title/background', position: {}, size: {width: 2048, height: 1536}, image: {}},
      {name: 'title/flower', position: {x: 512, y: 256}, size: {width: 1024, height: 1024}, image: {src: 'assets/images/flower.png'}},
      {name: 'title/text', position: {x: 256, y: 384}, size: {width: 1536, height: 768}, image: {}}
    ];

    engine.addEntities(entities);

    var people = [];
  }

  function interact(sprite) {
    // var id = engine.runtime.index.name[sprite.name];
    // var o = engine.runtime.phaser.objects[id];
    var flower = world.flower;
    engine.visible('title/flower', !flower.visible);
    world.flower = flower;
  }

  function gameReset() {
    engine.visible('', false);
    engine.visible('title', true);
    world.flower = {visible: true};
  }

  function registerKeyboard() {
    engine.phaser.input.keyboard.addKey(Phaser.Keyboard.R).onUp.add(gameReset);
  }

  function preload() {
    createEntities();
  }

  function create() {
    engine.phaser.stage.disableVisibilityChange = true; // while Phaser doesn't work correctly regarding events

    registerKeyboard();
  }

  function start() {
    gameReset();
  }

  function activate() {
    engine.activate();
  }

  function passivate() {
    engine.passivate();
  }

  var engine = new Engine({
    assets: 'assets/',
    screen: {width: 2048, height: 1536},
    preload: preload,
    create: create,
    interact: interact,
    start: start,
    log: true
  });
  engine.start();

  activate();
})();
