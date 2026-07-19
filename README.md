# Pizza Server

🍕 REST API server for a pizza ordering application.

This backend provides product, category, and sorting data through a small
Express + TypeScript API. The project is intentionally compact, but structured
with clear backend layers: routing, controllers, services, repositories,
validation, configuration, and centralized error handling.

## ✨ Features

- Product listing with pagination, category filtering, text search, and sorting
- Single product lookup by MongoDB ObjectId
- Categories endpoint
- Sort options endpoint
- Zod-based request validation
- Environment validation on startup
- Centralized application errors
- MongoDB access isolated behind repositories
- Lightweight application console wrapper

## 🧰 Tech Stack

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose
- Zod
- Helmet
- CORS
- Prettier

## 📁 Project Structure

```text
src/
  config/        Environment loading and validation
  constants/     Shared app, domain, validation, and error constants
  controllers/   HTTP request handlers
  error/         Application error class
  logger/        AppConsole wrapper
  middlewares/   Validation, async handler, and error handler
  models/        Mongoose schemas and models
  repositories/  MongoDB query layer
  router/        Express route definitions
  schemas/       Zod validation schemas
  services/      Business/application logic
  types/         Shared TypeScript types
  utils/         Small reusable helpers
```

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
DB_URI=mongodb+srv://user:password@cluster.mongodb.net/database
```

`PORT` is optional and defaults to `5000`.
`DB_URI` is required.

## 🚀 Scripts

Install dependencies:

```bash
yarn
```

Run in development mode:

```bash
yarn dev
```

Build TypeScript:

```bash
yarn build
```

Run compiled app:

```bash
yarn start
```

Format code:

```bash
yarn format
```

Check formatting:

```bash
yarn format:check
```

## 🔌 API Endpoints

### Products

```http
GET /products
```

Supported query parameters:

| Parameter | Type   | Description                                      |
| --------- | ------ | ------------------------------------------------ |
| page      | number | Page number, starts from `1`                     |
| category  | string | Filter products by category                      |
| search    | string | Search by product title                          |
| sortBy    | string | Sort by `title`, `price`, or `rating` descending |

Example:

```http
GET /products?page=1&category=pizza&search=pepperoni&sortBy=rating
```

```http
GET /products/:id
```

Returns a single product by MongoDB ObjectId.

### Categories

```http
GET /categories
```

Returns all product categories.

### Sort Options

```http
GET /sort
```

Returns available sort options.

## ❌ Error Format

The API returns errors in a consistent shape:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid query parameters",
    "fields": {
      "page": "Invalid input: expected number, received string"
    }
  }
}
```

Validation errors that are related to the whole object instead of a specific
field are placed under the `_root` key.

## 🧱 Architecture Notes

- `app.ts` configures Express middlewares and route mounting.
- `main.ts` is the bootstrap entry point.
- Controllers only handle HTTP input/output.
- Services contain application decisions and throw `AppError` when needed.
- Repositories own MongoDB queries and use `.lean()` for read-only API responses.
- Zod schemas validate external input before controllers use it.
- Environment variables are parsed once through `CONFIG`.
