# Agent Instructions

This file defines how AI coding agents should work in this repository.

This is a compact Express + TypeScript + MongoDB backend for a pizza ordering
application. Keep the code clean, practical, and proportional to the project
size.

## Rule Files

Read these files before making changes:

- [Architecture Rules](rules/architecture.md)
- [Style Rules](rules/style.md)
- [Scope Rules](rules/scope.md)
- [Validation & Error Rules](rules/validation-errors.md)
- [Verification Rules](rules/verification.md)

## Working Principles

- Prefer small, focused changes.
- Follow the existing project structure.
- Do not add new abstractions unless they remove real duplication or clarify a
  boundary.
- Do not rewrite working code just to make it look different.
- If a request conflicts with these rules, follow the user's explicit request
  and mention the tradeoff.

## Project Defaults

- Package manager: `yarn`
- Runtime: Node.js
- Framework: Express
- Language: TypeScript
- Database: MongoDB with Mongoose
- Validation: Zod
- Formatting: Prettier

## Before Finishing

Run the relevant checks:

```bash
yarn build
yarn format:check
```

If a check cannot be run, report that clearly.
