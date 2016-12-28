insert into users (id) values
  ('345f804bfb3e6cdef3abb68f90489834')

insert into recipes (name, image) values
  ('Pasta Carbonara', 'http://lol.org')
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

insert into recipes (name, image) values
  ('Stalins makaroner', 'http://lol.org')
returning *;

insert into recipes (name, image) values
  ('Krov med bröd', 'http://lol.org')
returning *;
