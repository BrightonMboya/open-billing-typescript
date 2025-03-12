# SubscriptionListCurrentBillingPeriod

## Example Usage

```typescript
import { SubscriptionListCurrentBillingPeriod } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: SubscriptionListCurrentBillingPeriod = {
  startsAt: new RFCDate("2023-06-27"),
  endsAt: new RFCDate("2024-09-05"),
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `startsAt`                        | [RFCDate](../../types/rfcdate.md) | :heavy_check_mark:                | N/A                               |
| `endsAt`                          | [RFCDate](../../types/rfcdate.md) | :heavy_check_mark:                | N/A                               |