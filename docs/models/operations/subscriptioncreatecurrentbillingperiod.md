# SubscriptionCreateCurrentBillingPeriod

## Example Usage

```typescript
import { SubscriptionCreateCurrentBillingPeriod } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: SubscriptionCreateCurrentBillingPeriod = {
  startsAt: new RFCDate("2023-11-08"),
  endsAt: new RFCDate("2023-09-19"),
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `startsAt`                        | [RFCDate](../../types/rfcdate.md) | :heavy_check_mark:                | N/A                               |
| `endsAt`                          | [RFCDate](../../types/rfcdate.md) | :heavy_check_mark:                | N/A                               |