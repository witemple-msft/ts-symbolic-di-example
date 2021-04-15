import {registerProvider, Provider} from "consumer";

class InjectedProviderClass implements Provider {
  constructor() {}

  work(): number {
    return -1000;
  }
}

const _class = InjectedProviderClass;

declare module "consumer" {
  export const InjectedProviderClass: typeof _class;
}

registerProvider(InjectedProviderClass);
