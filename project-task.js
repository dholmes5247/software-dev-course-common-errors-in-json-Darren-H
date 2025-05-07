/*

ACTIONS TAKEN:
1-Removed the BackTicks at the beginning and end- template literal.  
2-added a comma, after checkInDate, commas go between key value Pairs in Object
2.5-added double quotes to the key "name": "Alice Johnson" line
3-changed the undefined data type to Null, can't use undefined
4-removed the comma after parking in the last Array, it wasn't needed
5-Fixed Curly Que Braces that weren't matched up with one another.
6. Removed the Const line as we are just sending data with JSON.
7. Ensured Brackets were matched up properly. 


*/


{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}

  
/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
I started with eyeballing it.  I looked for mismatches and missing or extra commas, double quotes etc.  
The file came over in JS so I didn't trust VS and the terminal to display correctly with that.  

2️⃣ How did you confirm that your corrected JSON file was valid?
Once I had made all the changes that I could see I copied and pasted the info into the website JSON Lint.
It came back showing it was valid JSON

3️⃣ Which errors were the most difficult to spot? Why?
The extra commas at the end of an array.  When everything is on one line it is pretty easy to spot but when 
they are starting a new line with each piece of info it can be problematic. 

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
   Taking the info from the JS file and putting it into a JSON file within VS would give me real time feedback that 
   I could trust, hopefully eliminating some errors.  I will make use of JSON Lint and Beautify, they both seem straightforward
   and easy to use.  
*/
