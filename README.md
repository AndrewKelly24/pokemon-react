# Pokemon Search App

## Overview

Welcome to my Pokemon Search App, a project I built to explore React and Next.js.
This app uses the PokeAPI to search for Pokemon and check out their details.

## Features

- **Search Pokémon**: Look up Pokémon by name or ID.
- **Display Pokémon Details**: See info like type, abilities, stats, and sprites.
- **Responsive UI**: Crafted with Shadcn/UI and Tailwind CSS for a clean, mobile-friendly design.
- **Component-Based Architecture**: Modular React components for reusability and maintainability.
- **Data Fetching**: Connects to PokeAPI for real-time Pokémon data.

## Tech Stack

- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: For building reusable UI components.
- **TypeScript**: Adds type safety to the codebase for better development experience.
- **Shadcn/UI**: Pre-built, customizable components for a polished UI.
- **Tailwind CSS**: For styling the user interface.
- **PokeAPI**: External API for Pokémon data.

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (version 18 or higher recommended)
- **npm** or **yarn** (package managers)

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/pokemon-search-app.git
   cd pokemon-search-app
   ```

2. **Install Dependencies**:
   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Run the Development Server**:
   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

4. **Open the App**:
   Open your browser and navigate to `http://localhost:3000` to view the app.

## Project Structure

```
pokemon-search-app/
├── components/          # Reusable React components (TypeScript)
├── pages/              # Next.js pages (routes, .tsx files)
├── public/             # Static assets (images, etc.)
├── styles/             # Tailwind CSS or custom styles
├── package.json        # Project dependencies and scripts
├── README.md           # This file
├── tsconfig.json       # TypeScript configuration
```

## Usage

- Enter a Pokémon name or ID in the search bar to fetch and display its details.
- Explore the responsive UI and interact with the components to see Pokémon data.
- The app fetches data from the PokeAPI in real-time, so an internet connection is required.

## Learning Objectives

This project was built to learn and demonstrate:

- **React Components**: Creating and reusing modular components with TypeScript.
- **Data Fetching**: Using `fetch` or libraries like Axios to interact with APIs.
- **State Management**: Managing component state with React hooks (`useState`, `useEffect`).
- **UI Design**: Styling with Shadcn/UI and Tailwind CSS for a modern, responsive interface.
- **Next.js Routing**: Leveraging file-based routing for a seamless user experience.
- **TypeScript**: Adding type safety to improve code reliability and maintainability.

## Future Improvements

- Add pagination for browsing all Pokémon.
- Implement advanced search filters (e.g., by type or generation).
- Add error handling for invalid searches or API failures.
- Enhance UI with animations or transitions.

## Contributing

Feel free to fork this repository and submit pull requests with improvements or bug fixes. This project is a learning tool, so contributions that align with its educational goals are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [PokeAPI](https://pokeapi.co/) for providing a free and comprehensive Pokémon API.
- [Next.js](https://nextjs.org/) for an amazing React framework.
- [Shadcn/UI](https://ui.shadcn.com/) for beautiful, customizable components.
- [Tailwind CSS](https://tailwindcss.com/) for rapid and responsive styling.
