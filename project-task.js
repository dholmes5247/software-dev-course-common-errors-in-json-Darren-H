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

  


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

2️⃣ How did you confirm that your corrected JSON file was valid?

3️⃣ Which errors were the most difficult to spot? Why?

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
*/
