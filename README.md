# Craigslist API

### MissedConnections
---
Get all missed connections:
/api/v1/missedconnections
Sample response:
```javascript
[
  {
    id: 137,
    title: "We're always looking for her...",
    date: "Jun 26",
    time: "2019-06-26 12:38",
    link: "https://denver.craigslist.org/mis/d/denver-were-always-looking-for-her/6920983101.html",
    created_at: "2019-06-30T15:06:16.829Z",
    updated_at: "2019-06-30T15:06:16.829Z"
   }
]
```

Get all missed connections links:
/api/v1/missedconnections/links
Sample response:
```javascript
[
  "https://denver.craigslist.org/mis/d/denver-were-always-looking-for-her/6920983101.html",
  "https://denver.craigslist.org/mis/d/denver-asian-lady-in-orange-dress/6920722278.html",
  "https://denver.craigslist.org/mis/d/aurora-raven-the-aurora-show-off/6920389355.html",
  "https://denver.craigslist.org/mis/d/golden-for-the-love-of-buffalo/6919702016.html",
  "https://denver.craigslist.org/mis/d/aurora-know-you-are-there-in-the-dark/6919014374.html",
  "https://denver.craigslist.org/mis/d/castle-rock-planet-fitness/6918676408.html"
]
```

Get all missed connections dates:
/api/v1/missedconnections/dates
Sample response:
```javascript
[
  "Jun 26",
  "Jun 26",
  "Jun 25",
  "Jun 24",
  "Jun 24",
  "Jun 23",
  "Jun 22",
  "Jun 21",
  "Jun 20",
  "Jun 19",
  "Jun 18",
  "Jun 18",
  "Jun 17",
  "Jun 26",
]
```
Get specific missed connections ids:
/api/v1/missedconnections/:id

Post a new missed connection:
/api/v1/missedconnections

### Gigs
---
Get all missed gigs:
/api/v1/gigs

Delete a specific gig:
/api/v1/gigs/:id

Post a new gig:
/api/v1/gigs

