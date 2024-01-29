var obj1= {
    name : "person1",
    Age : 5
}
var obj2= {
    Age : 5,
    name : "person1"
}
//Step: 1 Get object keys seperately
var objKeys1 = Object.keys(obj1);
var objKeys2 = Object.keys(obj2);
 //Step: 2 Sort Object keys
 objKeys1.sort();
 objKeys2.sort();
 //Step: 3 Create Temp object based on sorted keys and assign the values from old objected
 var temp_obj1 = {};
 var temp_obj2 = {};
for (let i = 0; i < objKeys1.length; i++) {
    temp_obj1[objKeys1[i]] = obj1[objKeys1[i]]
}
for (let i = 0; i < objKeys1.length; i++) {
    temp_obj2[objKeys2[i]] = obj2[objKeys2[i]]
}

//step: 4 Conver it to the json string and compare
var json1 = JSON.stringify(temp_obj1);
var json2 = JSON.stringify(temp_obj2);
if(json1 == json2){
    alert("true");
}
else{
    alert("false");
}
