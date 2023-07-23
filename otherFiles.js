const { power } = require("./matematik.js");
const sayiEkle = (x, y) => {
  return x + y;
};

const sayiEkleme = (x, y, z) => {
  return x + y + z;
};

const powerAl = (x, y) => {
  //kullanıcının biligileri
  power(x, y);
};

let degisken = 31;

module.exports = {
  sayiEkle,
  sayiEkleme,
  degisken,
  powerAl,
};
