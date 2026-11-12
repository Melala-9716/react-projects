# Cosmetics Load More

A React project that fetches products from an API and displays them in a simple product listing interface. Users can load more products and reset the list to its initial state.

## Features

- Fetches products from the DummyJSON API.
- Displays the first 10 products initially.
- Loads 10 additional products when the user clicks **Show More**.
- Provides a **Reset** button to return to the first 10 products.
- Automatically scrolls to the top when resetting.
- Displays the current number of visible products.

## Technologies Used

- React
- JavaScript (JSX)
- CSS
- Vite
- DummyJSON API

## API

This project uses the DummyJSON Products API:

https://dummyjson.com/products?limit=100

The endpoint currently returns products from multiple categories. Cosmetics-specific filtering can be added as a future improvement.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Melala-9716/react-projects.git
```

### 2. Navigate to the project folder

```bash
cd react-projects/cosmetics-load-more
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## What I Practiced

Through this project, I practiced:

- React components and props.
- React `useState` and state updates.
- `useEffect` for fetching data.
- Fetch API and asynchronous JavaScript.
- Rendering lists using `.map()`.
- Limiting displayed items using `.slice()`.
- Conditional rendering using `&&`.
- Handling button click events.
- Git and incremental commits.

## Future Improvements

- Filter products by category.
- Add product search.
- Improve the product card design.
- Make the interface fully responsive.

---

**Author:** Melala Muleta

**Repository:** [react-projects](https://github.com/Melala-9716/react-projects)