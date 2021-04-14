import {registerProvider, Provider} from "consumer";

export const ExternalProvider: unique symbol = Symbol();

export class InjectedProviderClass implements Provider {
  constructor() {}

  work(): number {
    return -1000;
  }
}

const _class = InjectedProviderClass;

declare module "consumer" {
  export interface ProviderRegistry {
    // Here we're just adding another option to this type.
    [ExternalProvider]: never;
  }
  export const InjectedProviderClass: typeof _class;
}

registerProvider(InjectedProviderClass);
