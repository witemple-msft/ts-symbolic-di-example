# Class-based Export Injection

This package illustrates how a module can allow exports to be injected in a type-safe way.

The "host" package provides a driver program that illustrates how this functionality works.

If and only if "provider" is imported, then `InjectedProviderClass` can be imported (type-safely) from "consumer."
