/**
    ----------------
        Array
    ----------------
    1. What is the purpose of array?
    Ans: The purpose of an array is to store multiple pieces of data of the same type together.

    2. how to declare in an array?
    Ans: Syntax: const array_name = [item1, item2, ...];
    
    3. number of element in array?
    Ans: The length property sets or returns the number of elements in an array.

    4. What is Index?
    Ans: The location of an item in an array.
        the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

    5. Find the value of an element by index.
    Ans: To find the position of an element in an array, you use the indexOf() method. This method returns the index of the first occurrence the element that you want to find, or -1 if the element is not found
    var scores = [10, 20, 30, 10, 40, 20];
    console.log(scores.indexOf(10)); // 0
    console.log(scores.indexOf(30)); // 2
    console.log(scores.indexOf(50)); // -1
    console.log(scores.indexOf(20)); // 1

    6. change an element by index.
    Ans: items[items.indexOf(oldValue)] = newValue

    7. get the index of an element by the value?
    Ans: The indexOf() method returns the first index (position) of a specified value. The indexOf() method returns -1 if the value is not found. The indexOf() method starts at a specified index and searches from left to right. By default the search starts at the first element and ends at the last.

    8. what does it mean when you get undefine while getting the value of an element?
    Ans: A variable that has not been assigned a value is of type undefined . A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned 

    9. how can you add element to an array at the last position?
    Ans: const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Kiwi");

    10. How can you remove the last element form array.
    Ans:Remove (pop) the last element:
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.pop(); 

    11. Add element at the first position of array.
    Ans:The unshift() method adds new elements to the beginning of an array.
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.unshift("Lemon","Pineapple");
    
    12. Remove the first element of an array.
    Ans: Shift (remove) the first element of the array:
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.shift(); 

 */
