# Verification Rules

## Required Checks

After TypeScript/backend code changes, run:

```bash
yarn build
```

After formatting-sensitive changes, run:

```bash
yarn format:check
```

If formatting was intentionally changed, run:

```bash
yarn format
```

## Package Manager

- Use `yarn`, not `npm`.
- Do not create `package-lock.json`.

## Reporting

When finishing work, report:

- what changed
- which commands were run
- whether they passed
- anything that could not be verified

Do not claim the project builds or formats correctly unless the command was run
successfully.
