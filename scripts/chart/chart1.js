/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var la = {
"cols":[
    {"id":"","label":"Time of Day","pattern":"","type":"timeofday"},
    {"id":"","label":"Motivation Level","pattern":"","type":"number"},
    {"id":"","label":"Energy Level","pattern":"","type":"number"}
],
"rows":[
    {"c":[{"v":[8,0,0],"f":"8 am"},{"v":1},{"v":0.25}]},
    {"c":[{"v":[9,0,0],"f":"9 am"},{"v":2},{"v":0.5}]},
    {"c":[{"v":[10,0,0],"f":"10 am"},{"v":3},{"v":1}]},
    {"c":[{"v":[11,0,0],"f":"11 am"},{"v":4},{"v":2.25}]},
    {"c":[{"v":[12,0,0],"f":"12 pm"},{"v":5},{"v":2.25}]},
    {"c":[{"v":[13,0,0],"f":"1 pm"},{"v":6},{"v":3}]},
    {"c":[{"v":[14,0,0],"f":"2 pm"},{"v":7},{"v":4}]},
    {"c":[{"v":[15,0,0],"f":"3 pm"},{"v":8},{"v":5.25}]},
    {"c":[{"v":[16,0,0],"f":"4 pm"},{"v":9},{"v":7.5}]},
    {"c":[{"v":[17,0,0],"f":"5 pm"},{"v":10},{"v":10}]}
]
}

return la;			