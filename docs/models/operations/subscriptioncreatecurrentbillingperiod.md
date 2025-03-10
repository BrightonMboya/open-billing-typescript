# SubscriptionCreateCurrentBillingPeriod

## Example Usage

```typescript
import { SubscriptionCreateCurrentBillingPeriod } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: SubscriptionCreateCurrentBillingPeriod = {
  startsAt: new RFCDate("2024-03-15"),
  endsAt: new RFCDate("2025-10-15"),
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `startsAt`                        | [RFCDate](../../types/rfcdate.md) | :heavy_check_mark:                | N/A                               |
| `endsAt`                          | [RFCDate](../../types/rfcdate.md) | :heavy_check_mark:                | N/A                               |