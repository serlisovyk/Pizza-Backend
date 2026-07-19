# Architecture Rules

## Layer Responsibilities

- `app.ts` configures Express middleware and mounts routers.
- `main.ts` is the application bootstrap entry point.
- `server.ts` starts the HTTP server.
- `controllers/` handle HTTP input and output only.
- `services/` contain application logic and decisions.
- `repositories/` contain MongoDB queries.
- `models/` contain Mongoose schemas and models.
- `schemas/` contain Zod validation schemas.
- `middlewares/` contain reusable Express middleware.
- `config/` owns environment loading and validation.

## Boundaries

- Do not call Mongoose models directly from controllers.
- Do not parse or validate request input inside services.
- Do not put business decisions inside routers.
- Do not mount unrelated route groups through a generic root router unless the
  project grows enough to justify it.
- Keep route mounting explicit in `app.ts`.

## Data Access

- Use repositories for MongoDB access.
- Use `.lean()` for read-only API queries unless Mongoose document methods are
  required.
- Keep query-building logic close to the repository that uses it.
- Return empty arrays for empty collection/list responses unless the API contract
  explicitly requires an error.

## Configuration

- Read environment variables through `CONFIG`.
- Validate environment variables with Zod before starting the app.
- Keep config keys uppercase, for example `CONFIG.PORT`.
