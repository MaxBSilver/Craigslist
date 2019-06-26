var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true }); // this opens a browser. Normally we don't want that to happen, as it slows things down
const fs = require("fs");
let missedConnections;
nightmare
  .goto("https://denver.craigslist.org/d/groups/search/grp")
  .wait(2000)
  .evaluate(function() {
    var connections = [];
    $(".result-info").each(function() {
      item = {};
      item["title"] = $(this)
        .find(".hdrlnk")
        .text();
      item["date"] = $(this)
        .find(".result-date")
        .text();
      item["time"] = $(this)
        .find("time")
        .attr("datetime");
      item["link"] = $(this)
        .find("a")
        .attr("href");
      item["id"] = $(this)
        .find("a")
        .attr("data-id");
      connections.push(item);
    });
    return connections;
  })
  .end()
  .then(function(result) {
    missedConnections = result;
    fs.writeFile("groups.json", JSON.stringify(missedConnections), error => {
        console.log(error);
      });
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });


