### Exercise: GitHub User Search Application
#### Objective
Create a React application that interacts with the GitHub API to search for users and display their profiles. This exercise will test your ability to work with external APIs, manage application state, and implement a user-friendly interface.
#### Requirements

    **Search Functionality:**
    - Implement a search bar where users can enter a GitHub username.
    - On submitting the search, fetch and display the user's profile information from the GitHub API.
    **User Profile Display:**
        Display the following information for the searched user:
        - Avatar image
        - Username
        - Full name (if available)
        - Bio (if available)
        - Number of public repositories
        - Number of followers
        - Number of following
    **Repository List:**
    - Display a list of the user's public repositories.
        For each repository, display:
        - Repository name
        - Description (if available)
        - Star count
        - Fork count
    **Error Handling:**
    - Handle errors gracefully (e.g., user not found, API rate limits).
    - Display appropriate error messages to the user.
    **UI/UX:**
    - Ensure the application is responsive and user-friendly.
    - Apply basic styling to make the UI visually appealing.

#### Bonus Points
- Implement pagination for the repository list if the user has many repositories.
- Use TypeScript for type safety.
- Implement unit tests for key components and functions.
- Use a state management library like Redux or Zustand.
- Implement caching to minimize API calls for the same user search.
#### Technical Requirements
- Use React (preferably with hooks).
- Use Axios or Fetch API for making HTTP requests.
- Use styled-components or any CSS-in-JS library for styling.
#### GitHub API Reference
- [Get User](https://docs.github.com/en/rest/users/users#get-a-user): `GET /users/{username}`
- [List User Repositories](https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user): `GET /users/{username}/repos`


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
