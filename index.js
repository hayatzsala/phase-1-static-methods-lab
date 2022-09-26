class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str){
    return str.replace(/[^a-zA-Z\'\-\s]/g,"");
  }

  static titleize(str){
    const stringList = str.split(' ');
    const specialChar = ['the','a','an','but','of','and','for','at','by','from'];
    let result = "";
    console.log(this.specialChar);
    stringList.forEach(x=>{
      if(specialChar.find(element => element === x) !== undefined){
        result += x + ' ';
        console.log(x);
        return;
      }
        
      result +=  this.capitalize(x) + ' ';
    })
    console.log("'"+result.trim()+"'");
   return this.capitalize(result.trim());
  }
}

console.log(Formatter.titleize("a tale of two cities"));