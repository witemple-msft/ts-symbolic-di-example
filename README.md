# Symbolic Dependency Injection

This package is meant to illustrate how a single package can accept injected behaviors (similar to classical OO Dependency Injection) via purely symbolic values.

The "host" package is a driver program. Build all three packages (run `tsc` in the consumer, then provider, then host) and run `node index.js` in the "host" directory to see the example.

The "consumer" package exposes a `Consumer` class that accepts an optional `provider`. However, rather than an interface specifying a contract of behavior, `provider` is a symbol that must be registered through the "consumer" package's `registerProvider` method. In order to ensure type safety, that symbol must be added to the `__CONSUMER_PROVIDER_REGISTRY` (__otherwise it cannot be registered__), a global type map that lists valid providers.

THe "provider" package extends the `__CONSUMER_PROVIDER_REGISTRY` and registers a secondary provider, exporting the symbol it used to register the provider through its API.

The "host" then imports both packages and can use whichever provider it prefers.

Notes:

- If "provider" is not imported, then the type of the `provider` option is limited to only the DefaultProvider. The type of the `provider` option _expands dynamically_ when the "provider" package is imported.
- "host" can register its own provider if it creates a symbol, adds its `unique symbol` type to the provider registry, and then registers it with a handler (using the `registerProvider` method, same as the "provider" package does).

It is probably possible to accomplish a cleaner version of this (that does not leak `__CONSUMER_PROVIDER_REGISTRY` into the global scope) through module augmentation.
