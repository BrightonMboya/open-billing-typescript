# SubscriptionListScheduledChange

## Example Usage

```typescript
import { SubscriptionListScheduledChange } from "open-billing/models/operations";

let value: SubscriptionListScheduledChange = {
  id: "<id>",
  subscriptionId: "<id>",
  action: "pause",
  effectiveAt: "<value>",
  resumesAt: "<value>",
  status: "completed",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `subscriptionId`                                                                       | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `action`                                                                               | [operations.SubscriptionListAction](../../models/operations/subscriptionlistaction.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `effectiveAt`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `resumesAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `status`                                                                               | [operations.SubscriptionListStatus](../../models/operations/subscriptionliststatus.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |