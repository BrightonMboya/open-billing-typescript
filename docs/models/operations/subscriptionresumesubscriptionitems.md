# SubscriptionResumeSubscriptionItems

## Example Usage

```typescript
import { SubscriptionResumeSubscriptionItems } from "open-billing/models/operations";

let value: SubscriptionResumeSubscriptionItems = {
  status: "trialing",
  priceId: "<id>",
  quantity: 715143,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1727846722459",
  updatedAt: "1741758526026",
  previouslyBilledAt: "<value>",
  nextBilledAt: "<value>",
  trialStartedAt: "<value>",
  trialEndedAt: "<value>",
  price: [
    {
      productId: "<id>",
      type: "standard",
      name: "<value>",
      billingCycle: {
        interval: "day",
        frequency: 113.55,
      },
      trialPeriod: {
        interval: "month",
        frequency: 832.91,
      },
      unitPrice: {
        amount: 510.75,
        currencyCode: "YER",
      },
      status: "archived",
      id: "<id>",
      createdAt: "1715042349704",
      updatedAt: "1741697676606",
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