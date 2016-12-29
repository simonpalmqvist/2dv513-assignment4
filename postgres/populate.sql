insert into users (id) values
  ('610cb3f4f23efe22483e527952ddd337');

insert into recipes (name, image, tag) values
  ('Pasta Carbonara', 'img/pasta-carbonara.jpg', 'Passar perfekt till en flaska rödtjut!')
returning *;

insert into ingredients (recipe_id, name, amount, amount_type) values
  (1, 'Spaghetti', '400', 'g'),
  (1, 'Ägg', '4', NULL),
  (1, 'Grädde', '2', 'dl'),
  (1, 'Bacon', '1', 'paket'),
  (1, 'Lök', '1', NULL),
  (1, 'Salt', NULL, NULL),
  (1, 'Peppar', NULL, NULL);

insert into instructions (recipe_id, step, description) values
  (1,1, 'Skär bacon i strimlor och finhacka löken.'),
  (1,2, 'Koka upp vatten med salt och släng sedan i pastan.'),
  (1,3, 'Stek baconet & löken gyllenbrun, blanda sedan i grädden & äggvitan. Smaksätt med salt & peppar.'),
  (1,4, 'Blanda ihop allting och servera med de kvarvarande äggulorna på.');

insert into recipes (name, image, tag) values
  ('Fusilli á la Caprese', 'img/fusilli-a-la-caprese.jpg', 'Vegetariskt men jädrans gott ändå.')
returning *;

insert into ingredients (recipe_id, name, amount, amount_type) values
  (2, 'Fusilli eller valfri pasta', '400', 'g'),
  (2, 'Körsbärstomater', '250', 'g'),
  (2, 'Mozzarella', '250', 'g'),
  (2, 'Bacon', '1', 'paket'),
  (2, 'Rödlök', '1', NULL),
  (2, 'Balsamico creme', NULL, NULL),
  (2, 'Flingsalt', NULL, NULL),
  (2, 'Olivolja', NULL, NULL);

insert into instructions (recipe_id, step, description) values
  (2,1, 'Koka pastan enligt anvisning.'),
  (2,2, 'Finhacka rödlöken, skär körsbärstomaterna i klyftor och tärna mozzarellan.'),
  (2,3, 'Lägg upp pastan på en tallrik och strö över ingredienserna. Garnera med flingsalt, olivolja och en rejäl klick balsamico creme.');

insert into recipes (name, image, tag) values
  ('Korv med bröd', 'img/korv-med-brod.jpg', 'En tysk klassiker!')
returning *;

insert into ingredients (recipe_id, name, amount, amount_type) values
  (3, 'Bratwurstar', '4', NULL),
  (3, 'Minibaguetter', '4', NULL),
  (3, 'Din favorit senap', NULL, NULL),
  (3, 'Mängder med surkål', NULL, NULL);

insert into instructions (recipe_id, step, description) values
  (3,1, 'Grädda baguetterna enligt anvisning.'),
  (3,2, 'Stek Bratwurstarna.'),
  (3,3, 'Skär upp baguetterna och lägg på korven. Häll på rikligt med senap och surkål.');
