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
  `
}
