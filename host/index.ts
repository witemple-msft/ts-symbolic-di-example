// identity-native
import "provider";

// identity
import {Consumer, InjectedProviderClass} from "consumer";

function main() {
  const client = new Consumer({
    provider: new InjectedProviderClass()
  });

  console.log("Augmented:", client.num);

  const noOptionsClient = new Consumer();

  console.log("Default:", noOptionsClient.num);
}

main();
