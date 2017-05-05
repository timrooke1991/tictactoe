# tictactoe

This is a basic Tic Tac Toe browser game built using jQuery. The aim of this project was to implement some jQuery functionality in a basic, real-life game. 

The game uses various jQuery class methods - addClass(), removeClass(), hasClass() - to style the game board with the appropriate noughts and crosses. This is also used for validation to determine whether the a player has achieved three noughts or crosses in a row. 

Logic and conditionals are used to keep track of turn, so not to add two crosses consecutively for example. Also, the logic ensures that only one spot is clicked once and that if a spot is clicked twice that that player does not lose their turn, a user can continue clicking until they find a vacant spot on the board. Messages are displayed to prompt the user to click another square if necessary. 

Finally, I have added a CSS banner, which displays the outcome of the game - “Winner” in red or green depending on the team that wins or “Tie”. This animation effect was take from CodePen, I adapted the wording, colour and timing to achieve an effect I was happy with. 
