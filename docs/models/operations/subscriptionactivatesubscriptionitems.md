# SubscriptionActivateSubscriptionItems

## Example Usage

```typescript
import { SubscriptionActivateSubscriptionItems } from "open-billing/models/operations";

let value: SubscriptionActivateSubscriptionItems = {
  status: "active",
  priceId: "<id>",
  quantity: 426002,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1738400431516",
  updatedAt: "1741706568352",
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
        interval: "month",
        frequency: 4355.31,
      },
      trialPeriod: {
        interval: "year",
        frequency: 9234.56,
      },
      unitPrice: {
        amount: 2991.53,
        currencyCode: "INR",
      },
      status: "active",
      id: "<id>",
      createdAt: "1728795963146",
      updatedAt: "1741782623266",
    },
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                                                         | [operations.SubscriptionActivateSubscriptionSubscriptionsStatus](../../models/operations/subscriptionactivatesubscriptionsubscriptionsstatus.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `priceId`                                                                                                                                        | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `quantity`                                                                                                                                       | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `subscriptionId`                                                                                                                                 | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `recurring`                                                                                                                                      | *boolean*                                                                                                                                        | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `createdAt`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `updatedAt`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `previouslyBilledAt`                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `nextBilledAt`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `trialStartedAt`                                                                                                                                 | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `trialEndedAt`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `customData`                                                                                                                                     | *any*                                                                                                                                            | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `price`                                                                                                                                          | [operations.SubscriptionActivateSubscriptionPrice](../../models/operations/subscriptionactivatesubscriptionprice.md)[]                           | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |