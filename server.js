const express = require("express");
const app = express();
const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);

const port = process.env.PORT || 3000;

app.set("port", process.env.PORT || 3000);

app.use(express.json());

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
app.get("/", (req, res) => {
  res.status(200).send("hello max");
});

app.get("/api/v1/missedconnections", (request, response) => {
  database("missedConnections")
    .select()
    .then(missedConnections => {
      response.status(200).json(missedConnections);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});
app.get("/api/v1/missedconnections/links", (request, response) => {
  database("missedConnections")
    .select()
    .then(missedConnections => {
      const links = missedConnections.map(connection => connection.link);
      response.status(200).json(links);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});
app.get("/api/v1/missedconnections/dates", (request, response) => {
  database("missedConnections")
    .select()
    .then(missedConnections => {
      const dates = missedConnections.map(connection => connection.date);
      response.status(200).json(dates);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});
app.get("/api/v1/missedconnections/:id", (req, res) => {
  database("missedConnections")
    .where({ id: req.params.id })
    .then(con => {
      if (!con) res.status(404).json({ error: "No item found" });
      else res.status(200).json(con);
    })
    .catch(error => res.status(500).json({ error }));
});

app.post("/api/v1/missedconnections", (request, response) => {
  const newConnection = request.body;
  const format = ["title", "link", "date"];
  for (let requiredParam of format) {
    if (!newConnection[requiredParam] && !newConnection[requiredParam] === "") {
      return response.status(422).send({
        error: `Expected format: ${format}. You are missing ${requiredParam}.`
      });
    }
  }
  database("missedConnections")
    .insert(newConnection, "id")
    .then(newConnection => {
      response.status(201).json({ id: newConnection[0] });
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.get("/api/v1/gigs", (request, response) => {
  database("gigs")
    .select()
    .then(gigs => {
      response.status(200).json(gigs);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.delete("/api/v1/gigs/:id", (request, response) => {
  let found = false;
  database("gigs")
    .select()
    .then(gigs => {
      gigs.forEach(gig => {
        if (gig.id === parseInt(request.params.id)) {
          found = true;
        }
      });
      if (!found) {
        return response.status(404).json(`Gig does not exist`);
      } else {
        database("gigs")
          .where("id", parseInt(request.params.id))
          .del()
          .then(() => {
            return response
              .status(202)
              .json(`Deleted gig with id of ${request.params.id}`);
          });
      }
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.post("/api/v1/gigs", (request, response) => {
  const gig = request.body;
  const format = ["title", "link", "date"];
  for (let requiredParam of format) {
    if (!gig[requiredParam] && !gig[requiredParam] === "") {
      return response.status(422).send({
        error: `Expected format: ${format}. You are missing ${requiredParam}.`
      });
    }
  }
  database("missedConnections")
    .insert(gig, "id")
    .then(gig => {
      response.status(201).json({ id: gig[0] });
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});
