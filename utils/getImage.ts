// utils/getImage.ts
const images: { [key: string]: any } = {
  'xburguer.jpg': require('../assets/xburguer.jpg'),
  'xsalada.jpg': require('../assets/xsalada.jpg'),
  'xbacon.jpg': require('../assets/xbacon.jpg'),
  'xfrango.jpg': require('../assets/xfrango.jpg'),
  'xegg.jpg': require('../assets/xegg.jpg'),
  'xtudo.jpg': require('../assets/xtudo.jpg'),
  'xcalabresa.jpg': require('../assets/xcalabresa.jpg'),
  'xveggie.jpg': require('../assets/xveggie.jpg'),
};


export const getImage = (nome: string) => images[nome];
