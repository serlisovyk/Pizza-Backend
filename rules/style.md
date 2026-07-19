# Style Rules

## General

- Use TypeScript strict mode patterns.
- Prefer readable code over clever code.
- Keep files focused on one responsibility.
- Avoid unnecessary comments. Add comments only when they explain non-obvious
  reasoning.

## Imports

- Use `.js` extensions for local runtime imports.
- Use `import type` for type-only imports.
- Prefer imports from specific files over broad barrel files.

## Naming

- Do not prefix interfaces with `I`.
- Use `AppConsole` for application logs.
- Use `AppError` for operational errors.
- Use uppercase object keys for shared constants:

```ts
ERROR_MESSAGE.PRODUCT_NOT_FOUND
ERROR_CODE.VALIDATION_ERROR
CONFIG.PORT
```

## Formatting

- Use Prettier.
- Use single quotes.
- Do not use semicolons.
- Keep `printWidth` at `85`.
- Use `yarn format` to apply formatting.
