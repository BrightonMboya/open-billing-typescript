# SubscriptionCancelSubscriptionItems

## Example Usage

```typescript
import { SubscriptionCancelSubscriptionItems } from "open-billing/models/operations";

let value: SubscriptionCancelSubscriptionItems = {
  status: "active",
  priceId: "<id>",
  quantity: 589695,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1733568046123",
  updatedAt: "1741584052553",
  previouslyBilledAt: "<value>",
  nextBilledAt: "<value>",
  trialStartedAt: "<value>",
  trialEndedAt: "<value>",
  price: [
    {
      productId: "<id>",
      type: "custom",
      name: "<value>",
      billingCycle: {
        interval: "year",
        frequency: 3998.02,
      },
      trialPeriod: {
        interval: "week",
        frequency: 1478.08,
      },
      unitPrice: {
        amount: 6849.35,
        currencyCode: "PEN",
      },
      status: "archived",
      id: "<id>",
      createdAt: "1713128301235",
      updatedAt: "1741553780636",
    },
  ],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                     | [operations.SubscriptionCancelSubscriptionSubscriptionsStatus](../../models/operations/subscriptioncancelsubscriptionsubscriptionsstatus.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `priceId`                                                                                                                                    | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `quantity`                                                                                                                                   | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `id`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `subscriptionId`                                                                                                                             | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `recurring`                                                                                                                                  | *boolean*                                                                                                                                    | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `createdAt`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `updatedAt`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `previouslyBilledAt`                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `nextBilledAt`                                                                                                                               | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `trialStartedAt`                                                                                                                             | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `trialEndedAt`                                                                                                                               | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `customData`                                                                                                                                 | *any*                                                                                                                                        | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `price`                                                                                                                                      | [operations.SubscriptionCancelSubscriptionPrice](../../models/operations/subscriptioncancelsubscriptionprice.md)[]                           | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |