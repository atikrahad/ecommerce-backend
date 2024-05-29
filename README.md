# Product Management Backend

This is a backend server for managing products, built using Node.js, Express, and Mongoose.

## Table of Contents

- [Server live link](https://productshunts-topaz.vercel.app/)
- [Installation](https://github.com/atikrahad/ecommerce-backend/new/main?filename=README.md#prerequisites)
- [API Endpoints](#api-endpoints)
- [Environment](#license)

## Installation

### Prerequisites

Ensure you have the following software installed in your device:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher)

1. **Clone the Repository**: Clone this repository to your local machine.
    ```bash
    git clone https://github.com/atikrahad/ecommerce-backend.git
    ```

2. **Install Dependencies**: Navigate to the project directory and install dependencies.
    ```bash
    cd ecommerce-backend
    npm install
    ```

3. **Run the Application**: Start the development server.
    ```bash
    npm run dev
    ```
# API Endpoints
### Products routes
1. **Products post route.**
    ```bash
    https://productshunts-topaz.vercel.app/api/products
    ```
2. **All products get route.**
    ```bash
    https://productshunts-topaz.vercel.app/api/products
    ```
3. **Single product get route using productId.**
    ```bash
    https://productshunts-topaz.vercel.app/api/products/:productId
    ```
4. **Search products get route using a searchTerm query.**
    ```bash
    https://productshunts-topaz.vercel.app/api/products?searchTerm=
    ```
5. **Update a product route using a productId.**
    ```bash
    https://productshunts-topaz.vercel.app/api/products/:productId
    ```
6. **Delete a product route using a productId.**
    ```bash
    https://productshunts-topaz.vercel.app/api/products/:productId
    ```
### Order routes
1. **Order post route.**
    ```bash
    https://productshunts-topaz.vercel.app/api/orders
    ```
2. **All Orders get route.**
    ```bash
    https://productshunts-topaz.vercel.app/api/orders
    ```
3. **Orders get route specific-user queries using email.**
    ```bash
    https://productshunts-topaz.vercel.app/api/orders?email=
    ```

# Environment variables 
   ```bash
    PORT=5000
    DATABASE_URI=mongodb+srv://Producthunt1:PeeNo2Hccj5wegHQ@cluster0.0twede1.mongodb.net/productsDb?retryWrites=true&w=majority&appName=Cluster0
   ```

