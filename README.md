#Quartest

To build:
	*run npm install
	*run npm start 
	*go to localhost:8080


You'll find here a server side rendered react/redux app that goes through the user story as specified in the exerice question I received over email. 
app.js is the file handling the rendering.

Componenents are only concerned with rendering while the containers are connected to the redux store.

In client/reducers you'll find reducers to keep track of a user answers as well as the selected therapist. I have also used it to store and access the test questions from the test container. 

For simplicity sake, I used the react-router optional params to pass the user score to the ThankYou containers (vs using the redux store), allowing the app to display different message depending on the user score. 
