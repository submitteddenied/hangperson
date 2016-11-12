# hangperson

Parts
Hangperson game
Serialization (deserialization)
Express API
React components
Mongo DB
User log-on


Hangperson
Data Object for the game
serialize()
deserialize( <game> )
constuctor(<word>)
isGameOver()
isWordGuessed()
guess(<letter>)


Serialization
Word to guess
Length of word to guess
Guessed letters
Guesses remaining
Max guesses
Express API
/hangperson
POST /new
GET /current
POST /guess
letter=<letter>


React
Game
Progress Visualization
Guessed/unguessed letters
Input


Mongo
Collection of games
Serialized games
Later collection of users
References to games or games reference users (or both?)


User Log on
/users
POST /create
POST /login
DELETE /session
