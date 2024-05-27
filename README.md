Description

The application is a contact management system built with React and Redux Toolkit. It enables users to manage their contacts by adding, viewing, filtering, and deleting contacts. The app interacts with a mock API to store and retrieve contact data.
Features

    View Contacts: Retrieve and display a list of contacts from the API.
    Add Contact: Add new contacts with a name and phone number.
    Delete Contact: Remove existing contacts from the list.
    Filter Contacts: Search contacts by name or phone number.
    Pagination: Navigate through contacts with a paginated view.

Technologies

    React: For building the user interface.
    Redux Toolkit: For managing the application state.
    Axios: For making HTTP requests to the API.
    MockAPI: As a backend service to simulate API calls.

Components

    App: The main component that initializes the application and dispatches the initial fetch request for contacts.
    AddContact: A form component for adding new contacts.
    Buttons: Simulates a keypad for interaction, handling keypress events.
    ContactsList: Displays the list of contacts with pagination and delete functionality.
    Filter: Provides a search input to filter contacts based on user input.
    Pagination: Controls the navigation through paginated contact lists.
    Screen: A container component that includes AddContact, Filter, and ContactsList.

File Overview

    index.js: Entry point of the application, rendering the App component inside a Redux Provider.
    contactsSlice.js: Redux slice for managing contact-related state and actions.
    filterSlice.js: Redux slice for managing the filter state.
    operations.js: Defines asynchronous operations for fetching, adding, and deleting contacts using Axios.
    App.js: The main component rendering the overall layout, including Screen and Buttons.
    AddContact.js: Component for adding new contacts with a form.
    Buttons.js: Handles keypad button press and keydown events.
    ContactsList.js: Component to display the list of contacts with delete functionality and pagination.
    Filter.js: Component for filtering contacts based on user input.
    Pagination.js: Component to handle pagination of contacts.
    Screen.js: Aggregates AddContact, Filter, and ContactsList components.

How to Run

    Clone the repository.
    Install dependencies: npm install.
    Start the development server: npm start.

Contributing

Contributions are welcome! Please fork the repository and submit pull requests.
