# Project Documentation: Omio-Like Search Bar

The deployed project can be accessed at https://omio-like-search-bar.onrender.com \
The source code with explanatory comments is available on GitHub [repository](https://github.com/jesuisstan/OmioSearchBar).

## Objective

The objective of this web project was to recreate and deploy a search bar that closely resembles the one found on Omio (Recréer et déployer une barre de recherche le plus proche possible de celle de Omio).

## Implementation

The project was implemented using functional components and popular hooks in ReactJS with TypeScript and [Create React App](https://facebook.github.io/create-react-app/docs/getting-started), leveraging the Material UI library for its components and styling, in addition to custom CSS modules. The search bar was developed to be responsive, following a mobile-first approach. The following steps were taken to complete the project:

1.  **API Integration**: Three APIs provided by Tictactrip were used to populate the autocomplete functionality of the search bar. The APIs used are as follows:

    1.1. Autocomplete for cities available on Tictactrip:

        Endpoint: https://api.comparatrip.eu/cities/autocomplete/?q=par (Replacing "par" with user input)

    1.2. Popular cities:

        Endpoint: https://api.comparatrip.eu/cities/popular/5 (Retrieving the 5 most popular cities)

    1.3. Popular cities from a specific city (e.g., Paris):

        Endpoint: https://api.comparatrip.eu/cities/popular/from/paris/5 (Retrieving the 5 most popular cities departing from a given city)

Proper API calls were made to fetch the required data for autocomplete suggestions.

2. **Material UI Components**: Material UI components were utilized to achieve a consistent and visually appealing design. Components such as TextField, Dropdown Menus, and Buttons were used to create the search bar and related elements. The styling and layout were customized to match the design of Omio.

3. **Custom Styling with CSS Modules & Custom Fonts**: In addition to Material UI, custom styling was implemented using CSS modules. To closely resemble the typography used on the Omio website, the GTWalsheimPro font was installed and applied to the project. This helps in achieving a consistent visual representation and enhances the similarity to the Omio search bar.

4. **Deployment**: The code was deployed on Render.com and made accessible through the [URL](https://omio-like-search-bar.onrender.com).

5. **Version Control**: The code was hosted on GitHub and made publicly accessible. The repository can be found at https://github.com/jesuisstan/OmioSearchBar.

## Results

The implemented search bar closely resembles the one found on Omio, providing autocomplete suggestions based on user input. The responsive design ensures a seamless experience across different devices. The deployment of the project on Render.com allows users to access and interact with the search bar through the provided [URL](https://omio-like-search-bar.onrender.com).

## Demonstration


https://github.com/jesuisstan/OmioSearchBar/assets/82715902/d4079f8e-1b19-4c48-a47a-21982cd0f59c


## Future Improvements

While the project has been successfully implemented and deployed, there are potential areas for improvement:

- **Error Handling**: Error handling mechanisms can be implemented to gracefully handle scenarios such as API failures, network issues, and invalid user inputs. This would provide a more robust and reliable user experience.

- **Unit Testing**: Implementing unit tests for the components and functionality of the search bar would help ensure the stability and maintainability of the codebase, allowing for easier future modifications and bug fixes.

- **Safari browser support** was not tested.

By addressing these areas for improvement, the project can be further optimized and polished, providing an even better user experience similar to that of Omio.

## How to use

### Local Development

1. Install all dependencies:
```sh
npm install
```

2. Start the app in development mode:
```sh
npm start
```

3. Open [http://localhost:5555](http://localhost:5555) to view the app in your browser.

### Local Production Build

To test the production build locally:

1. Build the app:
```sh
npm run build
```

2. Serve the production build:
```sh
npm run serve
```

Or use the combined command:
```sh
npm run start:prod
```

The app will be available at [http://localhost:5555](http://localhost:5555).

### Deployment on Render.com

The project is configured for deployment on Render.com using Docker.

**Prerequisites:**
- A Render.com account
- GitHub repository connected to Render.com

**Deployment Steps:**

1. Create a new **Web Service** on Render.com
2. Connect your GitHub repository
3. Configure the service:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run serve`
   - **Port**: `5555`
   - **Environment**: `Node`

4. **Add Environment Variables** (optional, for memory optimization):
   - `NODE_OPTIONS`: `--max-old-space-size=512`

**Important Notes:**

- **Build Command** runs once during deployment and creates the production build
- **Start Command** runs continuously and serves the pre-built static files
- This approach separates build and serve, reducing memory usage during runtime
- The `serve` package is included in `devDependencies` and will be installed during build

**Alternative: Using Dockerfile**

If Render.com automatically detects and uses the Dockerfile:
- The Dockerfile is optimized to build during image creation (not at runtime)
- This reduces memory usage during container startup
- The build happens once when the image is created
- Only the `serve` command runs at container startup (serves pre-built static files)
- Make sure the port is set to `5555` in your Render.com service settings
- **Note**: If you want to use npm commands instead of Dockerfile, you can temporarily rename `Dockerfile` to `Dockerfile.bak` in your repository
