import {registerProvider} from "consumer";

export const ExternalProvider: unique symbol = Symbol();

declare global {
  interface __CONSUMER_PROVIDER_REGISTRY {
    // Here we're just adding another option to this type.
    [ExternalProvider]: never;
  }
}

registerProvider(ExternalProvider, () => "injected!");
