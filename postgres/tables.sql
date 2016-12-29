CREATE TABLE users (
  id char(32) PRIMARY KEY
);

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  name varchar(50) NOT NULL CHECK (name NOT LIKE ''),
  image text NOT NULL,
  tag varchar(100) NOT NULL
);

CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY,
  name varchar(50) NOT NULL CHECK (name NOT LIKE ''),
  amount decimal,
  amount_type varchar(10),
  recipe_id integer REFERENCES recipes(id)
);

CREATE TABLE instructions (
  id SERIAL PRIMARY KEY,
  step integer NOT NULL,
  description varchar(200) NOT NULL CHECK (description NOT LIKE ''),
  recipe_id integer REFERENCES recipes(id)
);

CREATE TABLE history (
  id SERIAL PRIMARY KEY,
  user_id char(32) REFERENCES users(id),
  recipe_id integer REFERENCES recipes(id),
  used_at date NOT NULL,
  UNIQUE (user_id, used_at)
);

CREATE INDEX history_user_idx ON history(user_id);
CREATE INDEX ingredients_recipe_idx ON ingredients(recipe_id);
CREATE INDEX instructions_recipe_idx ON instructions(recipe_id);
