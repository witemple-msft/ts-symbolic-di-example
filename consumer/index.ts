// Copyright (c) Microsoft Corporation
// Licensed under the MIT license.

declare global {
  // This type being declared "global" allows other packages to extend
  // the definition of `providers` dynamically simply because they are
  // imported within the types-modules graph.
  interface __CONSUMER_PROVIDER_REGISTRY {
    // Here in consumer, we will add our default provider symbol
    [DefaultProvider]: never;
  }
}

export type ProviderSymbol = keyof __CONSUMER_PROVIDER_REGISTRY;

// The type and values of providers as exported to customers are purely
// symbolic. Additional providers must call `registerProvider` and add
// themselves to __CONSUMER_PROVIDER_REGISTRY in order to add a backend
// implementation to the registry.

export const DefaultProvider: unique symbol = Symbol();

const providers: Record<symbol, () => Consumer["message"]> = {
  [DefaultProvider]: () => "default"
};

/**
 * @internal
 * @hidden
 */
export function registerProvider(sym: ProviderSymbol, provider: () => Consumer["message"]): void {
  // Cast to any is required because of strange type semantics
  // around indexing with unique symbols.
  (providers as any)[sym] = provider;
}

registerProvider(DefaultProvider, () => "default");

export class Consumer {
  private _value: string;

  constructor(options?: {provider?: ProviderSymbol}) {
    const sym = options?.provider ?? DefaultProvider;
    // Cast to any again required
    this._value = (providers as any)[sym]();
  }

  public get message(): string {
    return this._value;
  }
}
