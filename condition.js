/**
    ----------------
    Condition
    ----------------
    1. Meaning of >, <, >=, <=,==, !=, ===, !==.
    2. meaning of &&
    3. meaning of ||
    4. simple math...
    তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০০০০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 
 */

var take = 199999;
if(take>=80000){
    console.log("buy a mac");
    
}
else if(take>=60000){
    console.log("buy a gaming laptop");
    
}
else if(take>=40000){
    console.log("buy a lenovo yoga");
    
}
else if(take>=20000){
    console.log("buy a second hand laptop");
    
}
else{
    console.log("work with phone");
    
}