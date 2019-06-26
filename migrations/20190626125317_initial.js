exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("missedConnections", function(table) {
      table.increments("id").primary();
      table.string("title");
      table.string("date");
      table.string("time");
      table.string("link");
      table.timestamps(true, true);
    }),
    knex.schema.createTable("gigs", function(table) {
      table.increments("id").primary();
      table.string("title");
      table.string("date");
      table.string("time");
      table.string("link");
      table.timestamps(true, true);
    }),
    knex.schema.createTable("activities", function(table) {
      table.increments("id").primary();
      table.string("title");
      table.string("date");
      table.string("time");
      table.string("link");
      table.timestamps(true, true);
    }),
    knex.schema.createTable("lostAndFound", function(table) {
      table.increments("id").primary();
      table.string("title");
      table.string("date");
      table.string("time");
      table.string("link");
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable("missedConnections"),
    knex.schema.dropTable("gigs")
  ]);
};
