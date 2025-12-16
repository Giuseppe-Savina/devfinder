# devfinder
DevFinder is a small front-end web app that lets you search for a GitHub user by username and display key profile details using the GitHub REST API.

It’s built with plain HTML, CSS, and vanilla JavaScript (no frameworks).

## What it does

- Search a GitHub user by username
- Fetch data from the GitHub Users endpoint
- Display profile information:
  - avatar
  - name (or login if name is missing)
  - bio (with a fallback if missing)
  - public repositories count
  - followers / following
  - link to the GitHub profile
- Basic UI states:
  - hides the result card before a search
  - shows the card after a successful search
  - shows an error message when the user is not found (if enabled in the UI)

## Tech stack

- HTML5
- CSS3
- JavaScript (ES6+)
- GitHub REST API (`/users/{username}`)

## How to run the project

DevFinder does not require any build step or dependencies.

To run it locally:

1. Clone or download the repository
2. Open `index.html` in your browser

Alternatively, you can run it with a simple local server (optional):

```bash
# from the project folder
python -m http.server
```
Then open http://localhost:8000 in your browser

# Usage
1. Type a GitHub username in the search input
2. Click the Search button or press Enter
3. The app will fetch data from the GitHub API and display the user profile

If the username does not exist or the input is empty, the app handles the error without breaking the UI.

## Project structure
The project is intentionally kept simple and uses a clear separation of concerns:
```
devfinder/
├── index.html   # page structure
├── styles.css   # layout and visual styling
└── app.js       # application logic and API calls
```
Each file has a single responsibility, making the code easy to read and maintain.

## Features and limitations

### Features

- Uses modern JavaScript (`async / await`) to handle asynchronous API calls
- Fetches real data from the GitHub REST API
- Updates the UI dynamically based on the API response
- Handles missing data gracefully (e.g. name or bio not available)
- Simple and clean user interface focused on readability

### Limitations

- No authentication (subject to GitHub API rate limits)
- Only searches for one user at a time
- Does not include pagination or repository listing
- No backend or database
- Styling is intentionally minimal

## Skills demonstrated

This project demonstrates the following skills:

- JavaScript fundamentals and modern syntax (ES6+)
- Fetching and handling data from a REST API
- Basic UI state management (loading, success, error)
- DOM manipulation without frameworks
- Separation of concerns between HTML, CSS, and JavaScript
- Writing readable and maintainable front-end code

## Possible improvements

If extended in the future, the project could include:

- Displaying a list of recent repositories
- Handling GitHub API rate limits more explicitly
- Adding a loading indicator or skeleton UI
- Persisting recent searches in local storage
- Improving accessibility and keyboard navigation

These improvements are optional and were intentionally left out to keep the project focused on core fundamentals.

#
This project was created as a learning and portfolio exercise to practice core front-end fundamentals.
