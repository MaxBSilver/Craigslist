var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true });
const fs = require("fs");
let missedConnections;
nightmare
  .goto("https://denver.craigslist.org/d/labor-gigs/search/lbg")
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
    fs.writeFile("gigs.js", JSON.stringify(missedConnections), error => {});
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
