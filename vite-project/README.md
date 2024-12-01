# ShoppyGlobe E-commerce Application

ShoppyGlobe is a React-based e-commerce application that lets users browse products, view details, and manage a shopping cart. It includes state management with Redux, routing with React Router, lazy loading for optimization, and a responsive design.

## Technologies Used

- **React** (with Hooks)
- **Redux** (for state management)
- **React Router** (for navigation)
- **Vite** (for fast development)
- **CSS** (for styling)
- **React Lazy & Suspense** (for code-splitting)
- **Axios** (for fetching data)

## Key Components

- **App**: Main container with routing and layout.
- **Header**: Navigation and shopping cart icon.
- **ProductList**: Displays the list of products fetched from an API.
- **ProductItem**: Represents a single product with an "Add to Cart" button.
- **ProductDetail**: Shows detailed info about a selected product.
- **Cart**: Displays cart items with options to modify or remove them.
- **CartItem**: Represents a single item in the cart.
- **NotFound**: 404 error page for unknown routes.
- **SearchPage**: Search results page for filtering products.
- **ViewMore**: Detailed view of a product.
- **Error404Component**: Fallback for unknown routes.
- **Spinner**: Displays a loading spinner during lazy loading.
- **About/Contact**: Lazy-loaded pages with information about the app.

## State Management with Redux

Redux handles the cart state with actions like:
- **Add to Cart**: Adds products to the cart.
- **Remove from Cart**: Removes items from the cart.
- **Update Quantity**: Modifies item quantities in the cart.

## Features

- **Data Fetching**: Fetches product data from the API using `useEffect` and custom hooks.
- **Add/Remove Items**: Add products to the cart and remove them.
- **Search**: Filter products in the list using a search bar.

## Routing

- `/`: Home page (Product list + Header)
- `/About`: About page (lazy-loaded)
- `/Contact`: Contact page (lazy-loaded)
- `/cartPage`: Cart page (lazy-loaded)
- `/searchPage`: Search results page (lazy-loaded)
- `/item/:id`: Product detail page

## Performance Optimization

- Lazy load components using `React.lazy()` and `Suspense` for better performance.
- A spinner is shown while the lazy-loaded components are being fetched.

## Styling

The app is styled with **CSS** and is fully responsive, adapting to both mobile and desktop devices.

## Error Handling

The app handles errors gracefully, displaying fallback UI in case of failed data fetches and a custom 404 page for unknown routes.

## Installation

1. Clone the repository:

   git clone https://github.com/idmukesh/shoppyglobe.git

2. Navigate to the vite-project directory:

  cd shoppyglobe/vite-project

  npm install (for install node modules)

  npm run dev (for run the development)


