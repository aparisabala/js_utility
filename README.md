#### Initialization

Include the CDN of common-utilities.js or just direct import by script tags.
use $_tv then dot and desired functions dot 'res'. we can also chain methods.

    $_tv.ucFirst().res;

#### Functions
1 **.ucFirst** (Array | String) - Make given string or array first letter to upper case 

-Array | String **Required**

   $_tv.ucFirst(["element 1", "Element 2 ", "element 3"]); // outputs  ["Element 1", "Element 2 ", "Element 3"]

2 **.ucWords** (Array | String)  - Make given string or arrays each words first letter to uppercase 

-Array | String **Required**

   $_tv.ucWords(["element one", "Element two", "element three"]); // outputs  ["Element One", "Element Two", "Element Three"]

3 **.mt_rand** (min,max | NULL) - Make random number between two integer number . Equvalant to php mt_rand() functions. Default range is min:1 , max: 9 

-Min **Required**, must be positive integer <br>
-Max **Required**, Must be positive integer

   $_tv.mt_rand(1,9); // outputs  random "One" digit number


4 **.comma_number** (integer | float ) -  

-integer | float  **Required**

   $_tv.comma_number(10000); // outputs   10,000

   $_tv.comma_number(10000.87); // outputs   10,000.87



4 **.in_words** (integer | float ) -  

-integer | float  **Required**

   $_tv.in_words(1000); // outputs   one thousan only
