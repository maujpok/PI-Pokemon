//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Type } = require('./src/db.js');
const fetch = require('cross-fetch');
const url = `https://pokeapi.co/api/v2/type/`;

conn.sync({ force: true, alter: false })
  .then(() => {
    server.listen(3001, async () => {
      console.log('Listening at 3001')
      const pokemonTypes = await fetch(url)
        .then(response => response.json())
        .then(data => data.results.map(e => {
          return Type.create({
            name: e.name
          })
        }))
      Promise.all(pokemonTypes)
        .then(res => console.log("Pokemon's types loaded!"));
    });
});