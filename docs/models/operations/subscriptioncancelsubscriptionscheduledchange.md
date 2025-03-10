# SubscriptionCancelSubscriptionScheduledChange

## Example Usage

```typescript
import { SubscriptionCancelSubscriptionScheduledChange } from "open-billing/models/operations";

let value: SubscriptionCancelSubscriptionScheduledChange = {
  id: "<id>",
  subscriptionId: "<id>",
  action: "pause",
  effectiveAt: "<value>",
  resumesAt: "<value>",
  status: "completed",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `subscriptionId`                                                                                                   | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `action`                                                                                                           | [operations.SubscriptionCancelSubscriptionAction](../../models/operations/subscriptioncancelsubscriptionaction.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `effectiveAt`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `resumesAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `status`                                                                                                           | [operations.SubscriptionCancelSubscriptionStatus](../../models/operations/subscriptioncancelsubscriptionstatus.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |