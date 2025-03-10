# SubscriptionResumeSubscriptionItems

## Example Usage

```typescript
import { SubscriptionResumeSubscriptionItems } from "open-billing/models/operations";

let value: SubscriptionResumeSubscriptionItems = {
  status: "trialing",
  priceId: "<id>",
  quantity: 5152,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1731952134642",
  updatedAt: "1741590217856",
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
        interval: "day",
        frequency: 4835.18,
      },
      trialPeriod: {
        interval: "day",
        frequency: 3589.95,
      },
      unitPrice: {
        amount: 9371.17,
        currencyCode: "VUV",
      },
      status: "active",
      id: "<id>",
      createdAt: "1720771777605",
      updatedAt: "1741562631128",
    },
  ],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                     | [operations.SubscriptionResumeSubscriptionSubscriptionsStatus](../../models/operations/subscriptionresumesubscriptionsubscriptionsstatus.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
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
| `price`                                                                                                                                      | [operations.SubscriptionResumeSubscriptionPrice](../../models/operations/subscriptionresumesubscriptionprice.md)[]                           | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |