exports.getDate = function(){
 const today = new Date(); //today date
 const currentDay = today.getDay(); //number
 const options = { //0  JS Object
  weekday: "long",
  day: "numeric",
  month: "long"
 }
 return  today.toLocaleString("en-US", options);
}


exports.getDay = function(){
 const today = new Date(); //today date
 const currentDay = today.getDay(); //number
 const options = { //0  JS Object
  weekday: "long",
 }
 return  today.toLocaleString("en-US", options);
}
