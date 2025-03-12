# SubscriptionPauseSubscriptionItems

## Example Usage

```typescript
import { SubscriptionPauseSubscriptionItems } from "open-billing/models/operations";

let value: SubscriptionPauseSubscriptionItems = {
  status: "trialing",
  priceId: "<id>",
  quantity: 162358,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1719419977705",
  updatedAt: "1741713153297",
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
        interval: "week",
        frequency: 5221.76,
      },
      trialPeriod: {
        interval: "year",
        frequency: 8894.48,
      },
      unitPrice: {
        amount: 2201.04,
        currencyCode: "NIO",
      },
      status: "active",
      id: "<id>",
      createdAt: "1724722092217",
      updatedAt: "1741725468460",
    },
  ],
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                                                   | [operations.SubscriptionPauseSubscriptionSubscriptionsStatus](../../models/operations/subscriptionpausesubscriptionsubscriptionsstatus.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `priceId`                                                                                                                                  | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `quantity`                                                                                                                                 | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `id`                                                                                                                                       | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `subscriptionId`                                                                                                                           | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `recurring`                                                                                                                                | *boolean*                                                                                                                                  | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `createdAt`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `updatedAt`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `previouslyBilledAt`                                                                                                                       | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `nextBilledAt`                                                                                                                             | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `trialStartedAt`                                                                                                                           | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `trialEndedAt`                                                                                                                             | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `customData`                                                                                                                               | *any*                                                                                                                                      | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `price`                                                                                                                                    | [operations.SubscriptionPauseSubscriptionPrice](../../models/operations/subscriptionpausesubscriptionprice.md)[]                           | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |