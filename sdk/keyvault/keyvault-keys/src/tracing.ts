import { createTracingClient } from "@azure/core-tracing";
import { SDK_VERSION } from "./constants";

export const tracingClient = createTracingClient({
  namespace: "Microsoft.KeyVault",
  packageName: "@azure/keyvault-keys",
  packageVersion: SDK_VERSION,
});
