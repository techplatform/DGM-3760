##get todos
Endpoint: /todos
Method: GET
Description: handles GET requests - all todos
Response: JSON array of todo, giving them id, text and if they are completed or not.

##post todos
Endpoint: /todos
Method: POST
Description: handles adding a new todo to the list
Request: object is taken in as text and if it is completed or not
Response: stores the new todo in the array and displays them

##put todos
Endpoint: /todos/:id
Method: PUT
Description: handles existing todo item
Request: expects json todo object - updated details
Response: updates with the new id

##delete todos
Endpoint: /todos/:id
Method: DELETE
Description: deletes existing todo
Response: deletes the specified id from the array

##category all todos
Endpoint: /todos/category/:category
Method: GET ALL TODOS CATEGORY
Description: gets todos by the category choosen
Response: displays json array by the chosen category

##get categories todos
Endpoint: /categories
Method: GET CATEGORY
Description: gets all categories
Response: returns json arrays of category

##post categories
Endpoint: /categories
Method: POST CATEGORIES
Description: adds in new category
Request: new category details
Response: stores the new category in the array and displays them

##put categories
Endpoint: /categories/:id
Method: PUT CATEGORIES
Description: updates existing category
Request: expects json category object w/ updated details
Response: updates with the new id

##delete categories
Endpoint: /categories/:id
Method: DELETE CATEGORIES
Description: deletes category with the specified id
Response: removes the specified id and displays the new json array

