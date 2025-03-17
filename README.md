 fake_store
Build a two-page shopping application using the Fake Store API (https://fakestoreapi.com/docs). The app should include a Product Listing page and a Cart page.
Below is a tailored `README.md` file specifically for your deployed shopping app at `https://illustrious-faun-638a55.netlify.app/`. This version assumes the app is functional as per our previous code (product listing and cart pages) and is designed to impress for your internship application. It includes deployment details, a live demo link, and a professional tone.

---

# FakeStore Shopping App

A modern, front-end e-commerce application built with React.js, TypeScript, Tailwind CSS, ShadCN components, and React Query. This project features a product listing page with advanced filtering, sorting, and pagination, alongside a fully functional cart page with persistent state. It’s powered by the [Fake Store API](https://fakestoreapi.com/docs) and deployed live on Netlify.

**[Live Demo](https://illustrious-faun-638a55.netlify.app/)**

## Features

### Product Listing Page
- **Dynamic Product Display**: Fetches and showcases products with images, titles, prices, descriptions, and ratings.
- **Add to Cart**: Each product has an "Add to Cart" button, updating the cart count in real-time.
- **Advanced Features**:
  - **Pagination**: Navigate through product pages with "Previous" and "Next" buttons.
  - **Filtering**: Filter products by category (e.g., Electronics, Jewelry, Men’s Clothing).
  - **Sorting**: Sort by price (low to high, high to low) or rating (low to high, high to low).

### Cart Page
- **Cart Management**: Displays added items with options to update quantities or remove them.
- **Real-Time Totals**: Calculates and displays the total price dynamically.
- **Persistent State**: Cart contents are saved across page reloads using `localStorage`.

### Technical Highlights
- **Data Fetching**: React Query ensures efficient API calls with caching and loading/error states.
- **Type Safety**: TypeScript provides robust type checking for maintainable code.
- **Responsive Design**: Tailwind CSS delivers a mobile-friendly, modern UI.

## Tech Stack
- **React.js**: Core framework for building interactive UI components.
- **TypeScript**: Adds static typing for cleaner, safer code.
- **Tailwind CSS**: Utility-first CSS framework for rapid, responsive styling.
- **ShadCN Components**: Pre-built, customizable UI components for a polished look.
- **React Query**: Manages data fetching, caching, and synchronization.
- **React Router**: Handles client-side navigation between pages.
- **Lucide Icons**: Lightweight SVG icons for a sleek interface.



## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/shopping-app.git
   cd shopping-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Locally**:
   ```bash
   npm start
   ```
   - Opens at `http://localhost:3000` in your browser.

### Project Structure
fake_store/
├── src/
│   ├── components/
│   │   ├── Filters.tsx
│   │   ├── Navbar.tsx
│   │   └── ProductCard.tsx
│   ├── hooks/
│   │   ├── useCart.ts
│   │   └── useProducts.ts
│   ├── pages/
│   │   ├── Cart.tsx
│   │   └── ProductListing.tsx
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── formatCurrency.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── public/
│   ├── index.html
│   └── favicon.ico  (optional)
├── netlify.toml
├── tailwind.config.js
├── package.json
└── README.md
```

## Deployment
The app is deployed on Netlify at [https://illustrious-faun-638a55.netlify.app/](https://illustrious-faun-638a55.netlify.app/).

### Deploy Your Own
1. **Push to GitHub**:
   - Commit your code and push to a GitHub repo.
2. **Deploy on Netlify**:
   - Link your repo in Netlify, set the build command to `npm run build`, and publish directory to `build`.
   - Add a `netlify.toml` for routing:
     ```toml
     [[redirects]]
       from = "/*"
       to = "/index.html"
       status = 200
     ```

## Usage
1. **Browse Products**: Visit the root URL, filter or sort products, and add items to your cart.
2. **Manage Cart**: Click the cart icon in the navbar to view and edit your cart.

## Known Limitations
- The Fake Store API doesn’t fully support server-side pagination. Pagination is simulated client-side.
- CORS or API downtime may occasionally affect product loading (fallback UI is implemented).

## Contributing
1. Fork the repo.
2. Create a branch (`git checkout -b feature/your-feature`).
3. Commit changes (`git commit -m "Add your feature"`).
4. Push to GitHub (`git push origin feature/your-feature`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [Fake Store API](https://fakestoreapi.com) for the mock e-commerce data.
- [Netlify](https://www.netlify.com) for seamless deployment.
- [ShadCN](https://ui.shadcn.com) and [Tailwind CSS](https://tailwindcss.com) for styling inspiration.

---

### Customization Instructions
1. **Replace Username**: Update `git clone https://github.com/your-username/shopping-app.git` with your GitHub username.
2. **Add Screenshots**:
   - Run the app locally or use the live URL.
   - Take screenshots of the Product Listing and Cart pages (e.g., with browser dev tools or a screen capture tool).
   - Save them in a `screenshots/` folder (e.g., `screenshots/product-listing.png`), then update the paths in the README.
3. **Verify Link**: Ensure `https://illustrious-faun-638a55.netlify.app/` works. If you redeploy under a new URL, update the demo link.

### How to Use This
- Copy this content into a `README.md` file in your project root.
- Push it to your GitHub repo linked to the Netlify deployment.
- Present it during your internship interview with confidence: "Here’s my deployed shopping app, live on Netlify, showcasing my front-end skills with React and TypeScript."

Let me know if you need help capturing screenshots, fixing deployment issues, or tweaking this further!
![image](https://github.com/user-attachments/assets/108552f4-e38e-4e7d-ba14-b35e99a2da71)#
