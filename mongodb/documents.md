# Documents

## recipes document
```
{
  "_id" : ObjectId("586f5d66e173cc12cda064ac"),
  "name" : "Pasta Carbonara",
  "image" : "img/pasta-carbonara.jpg",
  "tag" : "Passar perfekt till en flaska rödtjut!",
  "ingredients" : [
    { "name" : "Spaghetti", "amount" : 400, "amount_type" : "g" },
    { "name" : "Ägg", "amount" : 4 },
    { "name" : "Grädde", "amount" : 2, "amount_type" : "dl" },
    { "name" : "Bacon", "amount" : 1, "amount_type" : "paket" },
    { "name" : "Lök", "amount" : 1 },
    { "name" : "Salt" },
    { "name" : "Peppar" }
  ],
  "instructions" : [
    { "step" : 1, "description" : "Skär bacon i strimlor och finhacka löken." },
    { "step" : 2, "description" : "Koka upp vatten med salt och släng sedan i pastan." },
    { "step" : 3, "description" : "Stek baconet & löken gyllenbrun, blanda sedan i grädden & äggvitan. Smaksätt med salt & peppar." },
    { "step" : 4, "description" : "Blanda ihop allting och servera med de kvarvarande äggulorna på." }
  ]
}
```

## users document
{
  "_id" : ObjectId("586f8c8bd4b68500268d58ba"),
  "history" : [
    {
      "recipe_id" : ObjectId("586f8c837b0a651f89cd60ef"),
      "date" : ISODate("2017-01-06T12:24:45.598Z")
    }
  ]
}
