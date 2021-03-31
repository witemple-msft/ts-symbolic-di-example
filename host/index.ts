import {Consumer, DefaultProvider} from "consumer";

import {ExternalProvider} from "provider";

function main() {

  // This first consumer will use the default provider
  const consumer1 = new Consumer();
  console.log("Consumer 1 says:", consumer1.message);

  // The second will use the default provider explicitly
  const consumer2 = new Consumer({
    provider: DefaultProvider
  });
  console.log("Consumer 2 says:", consumer2.message);

  // The third will use the provider from "provider"
  const consumer3 = new Consumer({
    provider: ExternalProvider
  });
  console.log("Consumer 3 says:", consumer3.message);
}

main();
