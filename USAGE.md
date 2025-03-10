<!-- Start SDK Example Usage [usage] -->
```typescript
import { OpenBilling } from "open-billing";

const openBilling = new OpenBilling({
  security: {
    bearer: process.env["OPENBILLING_BEARER"] ?? "",
    organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const result = await openBilling.products.list();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->