function Sample(name, file, key, volume = 1, isBgm = false) {
    this.name = name;
    this.file = file;
    this.key = key;
    this.volume = volume;
    this.isBgm = isBgm;
    this.channel = new Howl({
      src: ["audio/" + file + ".mp3"],
      loop: isBgm,
      volume: volume,
    });
  }
  
export let playlist = [
    // 1ª LINHA DE TECLAS
    // new Sample("", "", "KeyQ"),
    // new Sample("", "", "KeyW"),
    // new Sample("", "", "KeyE"),
    // new Sample("", "", "KeyR"),
    // new Sample("", "", "KeyT"),
    // new Sample("", "", "KeyY"),
    new Sample("Um beijo no seu coração", "um-beijo", "KeyU"),
    // new Sample("", "", "KeyI"),
    new Sample("O caaaaaaaaaaos!", "o-caaaaaaaaaos", "KeyO"),
    // new Sample("Onde está o seu Deus?", "onde-esta-o-seu-deus", "KeyO"),
    // new Sample("", "", "KeyP"),

    // 2ª LINHA DE TECLAS
    new Sample("Aqui Não! Sua Lambisgoia!", "aqui-nao", "KeyA"),
    // new Sample("Aqui Não! Sua Sirigaita!", "aqui-nao2", "KeyA"),
    // new Sample("Assererrê !", "assererre", "KeyA"),
    new Sample("Senhora! Volta aqui senhora!", "senhora-volta-aqui-senhora", "KeyS"),
    // new Sample("", "", "KeyD"),
    // new Sample("", "", "KeyF", 2),
    // new Sample("", "", "KeyG", 2),
    // new Sample("", "", "KeyH", 2),
    // new Sample("", "", "KeyJ", 2),
    // new Sample("", "", "KeyK", 2),
    // new Sample("", "", "KeyL", 2),

    // 3ª LINHA DE TECLAS
    // new Sample("", "", "KeyZ", 0.5, true),
    // new Sample("", "", "KeyX", 1, true),
    // new Sample("", "", "KeyC", 0.9, true),
    // new Sample("", "", "KeyV", 1, true),
    new Sample("Boom Boom Boom Shakalaka", "boom-shakalaka", "KeyB", 1, true),
    // new Sample("", "", "KeyN", 1, true),
    // new Sample("", "", "KeyM", 1, true),
  ];