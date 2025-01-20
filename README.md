# User Directory Application

A React.js application that fetches and displays a list of users from an API. The app includes functionalities such as search, sorting, viewing detailed user information, and a dark/light mode toggle.

## Features

- **User List**: Display a list of users fetched from the API.
- **Search**: Filter users by name using a search bar.
- **Sorting**: Sort users in ascending or descending order alphabetically.
- **User Details**: View detailed information about a specific user, including their name, email, phone, company name, and website.
- **Dark/Light Mode**: Toggle between dark and light themes for the application.
- **Error Handling**: Gracefully handle errors during data fetching.
- **Responsive Design**: Ensures compatibility with both desktop and mobile devices.

## Tech Stack

- **Frontend**: React.js
- **State Management**: React Context API
- **Styling**: Plain CSS
- **API**: JSONPlaceholder (https://jsonplaceholder.typicode.com/users)
- **Routing**: React Router DOM

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-directory.git
   ```

2. Navigate to the project directory:
   ```bash
   cd user-directory
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Project Structure

```
src/
├── components/
│   ├── Home.js          # Displays the user list with search and sorting features
│   ├── UserDetail.js    # Displays detailed information about a specific user
├── context/
│   ├── AppContext.js    # Context for global state management
│   ├── AppProvider.js   # Provider component for state and API handling
├── styles/
│   ├── styles.css       # Contains plain CSS for styling
├── App.js               # Main application component with routing
├── index.js             # Entry point of the application
```

## Usage

1. **Home Page**:
   - View the list of users fetched from the API.
   - Use the search bar to filter users by name.
   - Sort users alphabetically in ascending or descending order.

2. **User Detail Page**:
   - Click on a user's name to view their detailed information.
   - Use the "Go Back" button to return to the home page.

3. **Dark/Light Mode**:
   - Toggle the theme using the button in the header.

## Screenshots

### Home Page
![Home Page](screenshot-home.png)

### User Detail Page
![User Detail Page](screenshot-user-detail.png)

## API Reference

- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Method**: GET
- **Response**: List of user objects with the following structure:
  ```json
  {
    "id": 1,
    "name": "Leanne Graham",
    "email": "Sincere@april.biz",
    "address": {
      "city": "Gwenborough"
    },
    "phone": "1-770-736-8031",
    "company": {
      "name": "Romaguera-Crona"
    },
    "website": "hildegard.org"
  }
  ```

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on GitHub.


---

Developed with ❤️ using React.js.

