// Copyright (c) Microsoft Corporation
// Licensed under the MIT license.


export interface Provider {
  work(): number;
}

interface ProviderConstructor {
  new(...args: never[]): Provider;
}

export function registerProvider(ctor: ProviderConstructor) {
  (module.exports as unknown as Record<string, ProviderConstructor>)[ctor.name] = ctor;
}

export interface ConsumerOptions {
  provider?: Provider;
}

export class Consumer {
  private provider: Provider | undefined;

  constructor(options?: ConsumerOptions) {
    this.provider = options?.provider;
  }

  public get num(): number {
    return this.provider?.work() ?? 0;
  }
}

