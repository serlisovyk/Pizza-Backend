# Scope Rules

This is a small educational/backend-practice project. Keep the implementation
useful without turning it into an enterprise template.

## Do Not Add Without Explicit Request

- JWT authentication
- Redis
- GraphQL
- tRPC
- gRPC
- Swagger/OpenAPI
- Docker
- full logging middleware
- metrics
- dependency injection containers
- test frameworks
- background jobs

## Prefer

- Small incremental refactors
- Clear folder boundaries
- Simple Express patterns
- Practical validation
- Centralized errors
- Direct, maintainable MongoDB queries

## Tradeoffs

- If a feature is unused, do not implement it "just in case".
- If an abstraction hides more than it clarifies, do not add it.
- If a change makes the project harder for a backend learner to understand,
  reconsider the design.
