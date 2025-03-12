# SubscriptionUpdateSubscriptionScheduledChange

## Example Usage

```typescript
import { SubscriptionUpdateSubscriptionScheduledChange } from "open-billing/models/operations";

let value: SubscriptionUpdateSubscriptionScheduledChange = {
  id: "<id>",
  subscriptionId: "<id>",
  action: "resume",
  effectiveAt: "<value>",
  resumesAt: "<value>",
  status: "scheduled",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `subscriptionId`                                                                                                   | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `action`                                                                                                           | [operations.SubscriptionUpdateSubscriptionAction](../../models/operations/subscriptionupdatesubscriptionaction.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `effectiveAt`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `resumesAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `status`                                                                                                           | [operations.SubscriptionUpdateSubscriptionStatus](../../models/operations/subscriptionupdatesubscriptionstatus.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |