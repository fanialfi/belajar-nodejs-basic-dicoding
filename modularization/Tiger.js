class Tiger {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  growl() {
    console.log("grrrrr!");
  }
}

/*
 * TODO 1
 * ekspor class Tiger agar dapat digunakan pada berkas javascript lain
 */
module.exports = Tiger;
