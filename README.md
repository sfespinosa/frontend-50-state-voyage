## <img src='./src/assets/img/50-state-voyage-blue.png' alt='app logo'/>

# About
While travelling is on hold due to COVID-19, ‘50 State Voyage’ is an application that allows you to track states you’ve been to and plan out visits to states you’ll visit sometime in the future.

You can also share some of your favorite places with friends and bounce ideas with each other for your respective trips!

# Technologies
* React - version '16.13.1'
* Redux - version '4.0.5'
* Google API
* Reactstrap

# Getting Started
** You've reached the '50 State Voyage' front-end repo. To reach the back-end repo, please go to <a href='https://github.com/sfespinosa/backend-50-state-voyage'>https://github.com/sfespinosa/backend-50-state-voyage</a>. Both repos are required to run this project.

To start, complete the steps in the back-end repository then continue below to complete the installation.

1. Obtain a free <a href='https://console.developers.google.com/'>Google API key</a>
2. Clone this repository and cd into the directory
3. Install NPM packages

    npm install

4. Create a .env file in the main directory and enter your API Key

    REACT_APP_API_KEY=YOUR_API_KEY

5. Ensure the backend is running on http://localhost:3000/ then start your server

    npm start


# Features
* Log in as a new or returning user
* View the US Map and visually see which states you've been to
* Select a state on the US Map to begin
    * Read data about the state and view the state flag
    * Toggle whether or not you've visited that state
    * View/Edit/Remove any of your saved establishments
    * View your Friends Feed to see what your friends have saved (and save any for yourself!)
    * Add any new establishments to your collection
    * Create Map Markers to display on your Establishment Map
* View the Establishment Map
    * Map is defaulted to the home state of the user
    * Select a state on the side menu to view a different state
    * View that Map Markers to determine which establishments are near each other for your next trip
    * Click a Map Marker to center the establishment on your map
    * Hover over it to view details about the establishment
* View Your profile
    * Edit your profile and update your home state if you move
    * Delete your profile (please don't go!)
    * View where you rank in total states amongst your friends
    * Hover over any state counts to view which states your friends have been to
    * View/Edit/Remove any of your saved establishments for all states
* Find Other Users
    * View a list of all users on the application
    * Search by username to find a specific user
    * Click on user to view their profile
    * Follow/Unfollow other users through their profile page
* Log out and return to the main page

# Contact Info
Scott Espinosa<br/>
scottjames.espinosa@gmail.com<br/>
https://github.com/sfespinosa <br/>
https://www.linkedin.com/in/scottespinosa/

# License
Distributed under the MIT License.

# Contributions
* <a href='https://github.com/CivilServiceUSA/us-states'>Civil Service USA</a>
* <a href='https://www.npmjs.com/package/react-usa-map'>React-US-Map</a>
* <a href='https://github.com/google-map-react/google-map-react'>Google Map React</a>
* <a href='https://www.creative-tim.com/'>Creative Tim</a>
* <a href='https://material.io/'>Material Design</a>
