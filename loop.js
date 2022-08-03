/**

২৫. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 

২৬. while লুপ কিভাবে কাজ করে 
Ans: The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement. 

২৭. for লুপ কিভাবে কাজ করে 
Ans:Statement 1 is executed (one time) before the execution of the code block.
    Statement 2 defines the condition for executing the code block.
    Statement 3 is executed (every time) after the code block has been executed.

২৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়। 

২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 

৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  

৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 

৩২.while আর for loop এর মধ্যে পার্থক্য কি 
Ans: while — loops through a block of code once; then the condition is evaluated. If the condition is true, the statement is repeated as long as the specified condition is true. for — loops through a block of code until the counter reaches a specified number. for…in — loops through the properties of an object.

৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 

৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 

৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 

৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 

 */

/*
    var i=1;
    while (i<=39) {
        console.log(i+" Ajke amar mon valo nei");
        i++;
    
        }
*/
    

// var n=0;
//     while(n<=3){
//         n++;
//         console.log(n);
        
        
//     }

// //২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
// for (let i = 58; i <= 98; i++) {
//     console.log(i);

// }

// একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  

// for(i=412; i<=456; i+=2){
//     console.log(i);
    
// }

// //৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
// for(i=581; i<=623; i+=2){
//     console.log(i);
    
// }


// ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।

// var array=["html", "css", "php", "array", "loop"];
// for(i=0; i<array.length; i++){
//     var num=array[i];
//     console.log(num);
    
// }


//৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 

// var array=['maximus', 'symphony', 'xaiomi'];
// var i=0
// while(i<array.length){
    
//     var num=array[i];
//     console.log(num);
//     i++;
    
// }

//৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 

// for(i=30; i<=86; i++){
//     console.log(i);
//     if(i>=44){
//         break;
//     }
// }

//৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 


// var array=["html", "css", "php", "array", "loop"];
// for(i=0; i<array.length; i++){
//     var num=array[i];
//     if(num=="php"){
//         break;
//     }
//     console.log(num);
    
// }

// var book=[20, 156,120,186,286,86,188]
// for(i=0; i=book.length; i++){
//     num=book[i];
//     if(num>=200){
//         break
//     }
//     console.log(num);
    
// }
var book = [20, 156, 120, 186, 286, 86, 188,200,220,350,05];
for (let i = 0; i < book.length; i++) {
    const number = book[i];
    if (number>=200) {
        continue;
        
    }
    console.log(number);
    
    
}