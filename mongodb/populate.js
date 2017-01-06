const { MongoClient } = require('mongodb')
const ObjectId = require('mongodb').ObjectID

const url = 'mongodb://localhost:27017'

MongoClient.connect(url)
  .then((db) => {
    console.log('Connected to server')

    db.collection('recipes').insertMany([
        {
          name: 'Pasta Carbonara',
          image: 'img/pasta-carbonara.jpg',
          tag: 'Passar perfekt till en flaska rödtjut!',
          ingredients: [
            {name: 'Spaghetti', amount: 400, amount_type: 'g'},
            {name: 'Ägg', amount: 4},
            {name: 'Grädde', amount: 2, amount_type: 'dl'},
            {name: 'Bacon', amount: 1, amount_type: 'paket'},
            {name: 'Lök', amount: 1},
            {name: 'Salt'},
            {name: 'Peppar'}
          ],
          instructions: [
            {step: 1, description: 'Skär bacon i strimlor och finhacka löken.'},
            {step: 2, description: 'Koka upp vatten med salt och släng sedan i pastan.'},
            {step: 3, description: 'Stek baconet & löken gyllenbrun, blanda sedan i grädden & äggvitan. Smaksätt med salt & peppar.'},
            {step: 4, description: 'Blanda ihop allting och servera med de kvarvarande äggulorna på.'}
          ]
        },
        {
          name: 'Fusilli á la Caprese',
          image: 'img/fusilli-a-la-caprese.jpg',
          tag: 'Vegetariskt men jädrans gott ändå.',
          ingredients: [
            {name: 'Fusilli eller valfri pasta', amount: 400, amount_type: 'g'},
            {name: 'Körsbärstomater', amount: 250, amount_type: 'g'},
            {name: 'Mozzarella', amount: 250, amount_type: 'g'},
            {name: 'Rödlök', amount: 1},
            {name: 'Balsamico creme'},
            {name: 'Flingsalt'},
            {name: 'Olivolja'}
          ],
          instructions: [
            {step: 1, description: 'Koka pastan enligt anvisning.'},
            {step: 2, description: 'Finhacka rödlöken, skär körsbärstomaterna i klyftor och tärna mozzarellan.'},
            {step: 3, description: 'Lägg upp pastan på en tallrik och strö över ingredienserna. Garnera med flingsalt, olivolja och en rejäl klick balsamic
          o creme.'}
          ]
        },
        {
          name: 'Korv med bröd',
          image: 'img/korv-med-brod.jpg',
          tag: 'En tysk klassiker!',
          ingredients: [
            {name: 'Bratwurstar', amount: 4},
            {name: 'Minibaguetter', amount: 4},
            {name: 'Din favorit senap'},
            {name: 'Mängder med surkål'}
          ],
          instructions: [
            {step: 1, description: 'Grädda baguetterna enligt anvisning.'},
            {step: 2, description: 'Stek Bratwurstarna.'},
            {step: 3, description: 'Skär upp baguetterna och lägg på korven. Häll på rikligt med senap och surkål.'}
          ]
        }
      ])
      .then(() => console.log('DB populated with recipes'))
      .then(() => db.close())
  })
  .catch(console.log)
