# SubscriptionResumeSubscriptionScheduledChange

## Example Usage

```typescript
import { SubscriptionResumeSubscriptionScheduledChange } from "open-billing/models/operations";

let value: SubscriptionResumeSubscriptionScheduledChange = {
  id: "<id>",
  subscriptionId: "<id>",
  action: "cancel",
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
| `action`                                                                                                           | [operations.SubscriptionResumeSubscriptionAction](../../models/operations/subscriptionresumesubscriptionaction.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `effectiveAt`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `resumesAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `status`                                                                                                           | [operations.SubscriptionResumeSubscriptionStatus](../../models/operations/subscriptionresumesubscriptionstatus.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |