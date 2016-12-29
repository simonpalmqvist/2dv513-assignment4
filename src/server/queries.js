module.exports = {
  newUserQuery: `
    insert into users (id)
    select
      md5(
        concat(
          CURRENT_TIMESTAMP::text,
          random()::text
        )
      )
    returning *;
  `,

  getRecipeQuery: `
    SELECT
      r.id,
      r.name,
      r.image,
      r.tag
    FROM
      history h
    INNER JOIN
      recipes r on h.recipe_id = r.id
    WHERE
      h.user_id = $1 AND
      h.used_at = CURRENT_DATE;
  `,

  getNewRecipeQuery: `
    with random_recipe as (
      SELECT
        id,
        name,
        image,
        tag
      FROM
        recipes
      WHERE
        id NOT IN (SELECT recipe_id FROM history WHERE user_id = $1 ORDER BY used_at desc limit 2)
      ORDER BY
        RANDOM()
      LIMIT 1
    ),
    inserted as (
      INSERT INTO history (user_id, recipe_id, used_at)
      SELECT
        $1,
        id,
        CURRENT_DATE
      FROM
        random_recipe
    )
    SELECT * FROM random_recipe;
  `,

  getIngredientsQuery: `
    SELECT
      *
    FROM
      ingredients
    WHERE
      recipe_id = $1;
  `,

  getInstructionsQuery: `
    SELECT
      *
    FROM
      instructions
    WHERE
      recipe_id = $1
    ORDER BY
      step;
  `
}
