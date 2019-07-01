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

Get all missed connections dates:
/api/v1/missedconnections/dates

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

