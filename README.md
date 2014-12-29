d3exsvc
=======

[ ![Codeship Status for jdbellamy/d3exsvc](https://codeship.com/projects/e5151130-714a-0132-fc4d-62f5102d8589/status?branch=master)](https://codeship.com/projects/54590)

D3 Example Service Endpoint
http://d3exsvc-41577.onmodulus.net/api/

States
------

```json
[ {"state":"AL","freq":{"low":4786,"mid":1319,"high":249 }},
  {"state":"AZ","freq":{"low":1101,"mid":412 ,"high":674 }},
  {"state":"CT","freq":{"low":932 ,"mid":2149,"high":418 }},
  {"state":"DE","freq":{"low":832 ,"mid":1152,"high":1862}},
  {"state":"FL","freq":{"low":4481,"mid":3304,"high":948 }},
  {"state":"GA","freq":{"low":1619,"mid":167 ,"high":1063}},
  {"state":"IA","freq":{"low":1819,"mid":247 ,"high":1203}},
  {"state":"IL","freq":{"low":4498,"mid":3852,"high":942 }},
  {"state":"IN","freq":{"low":797 ,"mid":1849,"high":1534}},
  {"state":"KS","freq":{"low":162 ,"mid":379 ,"high":471 }} ]
```

#### Example Requests

Endpoint Address: http://d3exsvc-41577.onmodulus.net/api/states

```bash
## GET api home
curl -X GET http://d3exsvc-41577.onmodulus.net/api

## GET all states
curl -X GET http://d3exsvc-41577.onmodulus.net/api/states

## DELETE state ${oid}
curl -X DELETE http://d3exsvc-41577.onmodulus.net/api/states/${oid}

## INSERT state ${json}
curl -X POST -H "Content-Type: application/json" -d '{
  "state": "WA",
  "freq": { "low": 4786, "mid": 5319, "high": 2249 }
}' http://d3exsvc-41577.onmodulus.net/api/states

curl -X POST -H "Content-Type: application/json" -d '{
  "state": "GA",
  "freq": { "low":1619, "mid":167, "high":1063 }
}' http://d3exsvc-41577.onmodulus.net/api/states

curl -X POST -H "Content-Type: application/json" -d '{
  "state": "AZ",
  "freq": { "low": 1101, "mid": 412, "high": 674 }
}' http://d3exsvc-41577.onmodulus.net/api/states

curl -X POST -H "Content-Type: application/json" -d '{
  "state": "KS",
  "freq": { "low": 162, "mid": 379, "high": 471 }
}' http://d3exsvc-41577.onmodulus.net/api/states

curl -X POST -H "Content-Type: application/json" -d '{
  "state": "IN",
  "freq": { "low":797, "mid":1849, "high":1534 }
}' http://d3exsvc-41577.onmodulus.net/api/states

curl -X POST -H "Content-Type: application/json" -d '{
  "state": "AL",
  "freq": { "low": 4786, "mid": 1319, "high": 249 }
}' http://d3exsvc-41577.onmodulus.net/api/states

curl -X POST -H "Content-Type: application/json" -d '{
  "state": "CT",
  "freq": { "low": 932, "mid": 2149, "high": 418 }
}' http://d3exsvc-41577.onmodulus.net/api/states

curl -X POST -H "Content-Type: application/json" -d '{
  "state": "DE",
  "freq": { "low":832, "mid": 1152, "high": 1862 }
}' http://d3exsvc-41577.onmodulus.net/api/states

curl -X POST -H "Content-Type: application/json" -d '{
  "state": "FL",
  "freq": { "low": 4481, "mid": 3304, "high": 948 }
}' http://d3exsvc-41577.onmodulus.net/api/states

curl -X POST -H "Content-Type: application/json" -d '{
  "state": "GA",
  "freq": { "low": 1619, "mid": 167, "high": 1063 }
}' http://d3exsvc-41577.onmodulus.net/api/states

curl -X POST -H "Content-Type: application/json" -d '{
  "state": "IA",
  "freq": { "low": 1819, "mid": 247, "high": 1203 }
}' http://d3exsvc-41577.onmodulus.net/api/states

curl -X POST -H "Content-Type: application/json" -d '{
  "state": "IL",
  "freq": { "low": 4498, "mid": 3852, "high": 942 }
}' http://d3exsvc-41577.onmodulus.net/api/states

curl -X POST -H "Content-Type: application/json" -d '{
  "state": "IN",
  "freq": { "low": 797, "mid": 1849, "high": 1534 }
}' http://d3exsvc-41577.onmodulus.net/api/states
```
