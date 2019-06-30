exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("missedConnections", function(table) {
      table.increments("id").primary();
      table.string("title");
      table.string("date");
      table.string("time");
      table.string("link");
      table.string("id");
    }),
    knex.schema.createTable("gigs", function(table) {
      table.string("title");
      table.string("date");
      table.string("time");
      table.string("link");
      table.string("id");
    }),
    knex.schema.createTable("activities", function(table) {
      table.string("title");
      table.string("date");
      table.string("time");
      table.string("link");
      table.string("id");
    }),
    knex.schema.createTable("lostAndFound", function(table) {
      table.string("title");
      table.string("date");
      table.string("time");
      table.string("link");
      table.string("id");
    })
  ]);
};
exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable("missedConnections"),
    knex.schema.dropTable("gigs"),
    knex.schema.dropTable("activities"),
    knex.schema.dropTable("lostAndFound")
  ]);
};