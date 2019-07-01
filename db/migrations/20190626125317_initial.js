exports.up = function(knex) {
  knex.schema.createTable("activities", function(table) {
    table.string("title");
    table.string("date");
    table.string("time");
    table.string("link");
  }),
    knex.schema.createTable("lostAndFound", function(table) {
      table.string("title");
      table.string("date");
      table.string("time");
      table.string("link");
    });
};
exports.down = function(knex) {
  knex.schema.dropTable("activities"), knex.schema.dropTable("lostAndFound");
};
