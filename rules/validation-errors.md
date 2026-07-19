# Validation & Error Rules

## Validation

- Validate external input with Zod before controllers use it.
- Use the shared `validate` middleware for `query`, `params`, and `body`.
- Keep validation targets in `VALIDATION_TARGET`.
- Keep shared validation constants in `validationConstants.ts`.
- Reuse domain constants in schemas when possible, for example `SORT_FIELDS`.

## Validated Data

- Controllers should read parsed input through `getValidatedRequestData`.
- Services should receive already validated data.
- Do not rely on raw `req.query`, `req.params`, or `req.body` after validation.

## Error Shape

Return API errors in this shape:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid query parameters",
    "fields": {
      "page": "Expected number"
    }
  }
}
```

## Error Constants

- Keep error codes in `ERROR_CODE`.
- Keep error messages in `ERROR_MESSAGE`.
- Do not hardcode repeated error strings inside controllers, services, or
  middlewares.

## AppError

- Throw `AppError` for operational errors.
- Let `asyncHandler` pass async errors to the centralized error middleware.
- Do not add `try/catch` blocks inside controllers unless a controller has a
  genuinely local recovery path.
