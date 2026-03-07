# 1️⃣ What is the difference between var, let, and const?
=>  var: It allows reassignment and redeclaration and its function scoped.
    let: It allows reassignment but does not allow redeclaration in the same scope. It's Block Scoped. 
        It can't be accessed from outside a function if its declared from inside.
    const: const is also block-scoped like let, but its value cannot be reassigned after declaration.

# 2️⃣ What is the spread operator (...)?
=>  The spread operator (...) is used to expand elements from an array, object into individual elements.
    It helps copy, merge or pass values easily without modifying the original data.

# 3️⃣ What is the difference between map(), filter(), and forEach()?
=>  map(): creates a new array by applying a function to each element of the original array. It returns the 
           transformed array without modifying the original one.
    filter(): creates a new array containing only the elements that satisfy a condition. It checks 
            each element and includes it in the result if the condition returns true.
    forEach(): same as for loop just a different syntax in ES6.

# 4️⃣ What is an arrow function?
=>  An arrow function is a shorter syntax for writing functions in ES6.for single argument and single line
    for return doesn't need brackets and it automatically returns it. For multiple arguments it needs (). And for multiple line it needs {} and return keyword.

# 5️⃣ What are template literals?
=>  Template literals are a way to create strings in JavaScript using backticks `` instead of quotes ''/"".
    It's very important during DOM manipulation ,when we need to append some div or button , we can dynamically change something using ${} inside the template literals but not inside a quotes.