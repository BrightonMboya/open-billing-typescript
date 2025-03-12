# SubscriptionActivateSubscriptionScheduledChange

## Example Usage

```typescript
import { SubscriptionActivateSubscriptionScheduledChange } from "open-billing/models/operations";

let value: SubscriptionActivateSubscriptionScheduledChange = {
  id: "<id>",
  subscriptionId: "<id>",
  action: "pause",
  effectiveAt: "<value>",
  resumesAt: "<value>",
  status: "scheduled",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `subscriptionId`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `action`                                                                                                               | [operations.SubscriptionActivateSubscriptionAction](../../models/operations/subscriptionactivatesubscriptionaction.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `effectiveAt`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `resumesAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `status`                                                                                                               | [operations.SubscriptionActivateSubscriptionStatus](../../models/operations/subscriptionactivatesubscriptionstatus.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |