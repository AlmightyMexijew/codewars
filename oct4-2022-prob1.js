function abbrevName(name){

    // code away
let theName = name.split(" ");
  //split the name up
let ArrFir = theName[0];
  //this array holds fname
let ArrSec = theName[1];
  //this array holds lname
//then we have to string them again so we can uppercase them
ArrFir = ArrFir.toString()
ArrFir = ArrFir.toUpperCase();
ArrSec = ArrSec.toString();
ArrSec = ArrSec.toUpperCase();
//then we combine the first character of each variable with a "." to separate them...Since they're caps already it's taken care of.
return ArrFir[0] + "." + ArrSec[0];
}