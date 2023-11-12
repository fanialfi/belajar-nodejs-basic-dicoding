// TODO 1
const { EventEmitter } = require("events");

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

// TODO 2
const myEmitter = new EventEmitter();

// TODO 3
myEmitter.on("brithday", birthdayEventListener);

// TODO 4
myEmitter.emit("brithday", "fanialfi");

/*
 * TODO 1 : Buat atau impor variabel EventEmitter dari core module events.
 * TODO 2 : Buat variabel myEmitter yang merupakan instance dari EventEmitter
 * TODO 3 : Tentukan birthdayEventListener sebagai aksi ketika event ‘birthday’ dibangkitkan pada myEmitter
 * TODO 4 : Bangkitkanlah event ‘birthday’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda
 *
 * Bila Anda selesai mengerjakan TODO yang ada, eksekusi berkas index.js dengan perintah:
 * node ./events/index.js
 */
