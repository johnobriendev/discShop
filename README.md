# Disc Inventory Management System - Frontend

This project is the frontend for the Disc Inventory Management System, designed to support a Disc Golf Store's inventory management and e-commerce functionalities. It is built using React and Vite.

The backend API can be found here: [Link](https://github.com/yourusername/disc-api-backend)

The admin view can be found here: [Link](https://debonair-rounded-opinion.glitch.me/catalog)

The frontend for the E-Commerce store can be found here: [Link](https://barrysdiscs.netlify.app/)

## Features

### E-Commerce Store
The frontend application allows users to:
- View all discs with filtering options
- Retrieve detailed information about each disc, including all its specifications
- Add discs to a cart and manage the cart
- User authentication with login/logout

## Technologies Used
- **React**: JavaScript library for building user interfaces
- **Vite**: Next Generation Frontend Tooling
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: Promise-based HTTP client for the browser and Node.js
- **React Router**: Declarative routing for React

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/disc-api-frontend.git
    cd disc-api-frontend
    ```

2. Install dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```sh
    VITE_API_URL=http://localhost:3000/
    ```

### Running the Application

### Development Mode

To start the application in development mode with hot reloading:

```sh
npm run dev
# or
yarn dev
```

The application will be running at http://localhost:5173.

## Usage
### Routes
/: Home page displaying all discs
/discs/
: Detailed view of a specific disc
/cart: Shopping cart page
/user/login: Login page
/user/signup: Signup page
### Components
Header: Displays the navigation menu
Footer: Displays the footer information
DiscList: Displays a list of all discs
DiscDetail: Displays detailed information about a specific disc
Cart: Displays the contents of the shopping cart
Login: Handles user login
Signup: Handles user signup
## License
This project is licensed under the MIT License. See the LICENSE file for more details.
