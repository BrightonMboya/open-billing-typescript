# SubscriptionPauseSubscriptionScheduledChange

## Example Usage

```typescript
import { SubscriptionPauseSubscriptionScheduledChange } from "open-billing/models/operations";

let value: SubscriptionPauseSubscriptionScheduledChange = {
  id: "<id>",
  subscriptionId: "<id>",
  action: "pause",
  effectiveAt: "<value>",
  resumesAt: "<value>",
  status: "scheduled",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `subscriptionId`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `action`                                                                                                         | [operations.SubscriptionPauseSubscriptionAction](../../models/operations/subscriptionpausesubscriptionaction.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `effectiveAt`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `resumesAt`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `status`                                                                                                         | [operations.SubscriptionPauseSubscriptionStatus](../../models/operations/subscriptionpausesubscriptionstatus.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |