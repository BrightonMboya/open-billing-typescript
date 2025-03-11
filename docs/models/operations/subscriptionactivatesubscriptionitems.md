# SubscriptionActivateSubscriptionItems

## Example Usage

```typescript
import { SubscriptionActivateSubscriptionItems } from "open-billing/models/operations";

let value: SubscriptionActivateSubscriptionItems = {
  status: "inactive",
  priceId: "<id>",
  quantity: 480061,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1726584962946",
  updatedAt: "1741640975972",
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
        frequency: 6228.94,
      },
      trialPeriod: {
        interval: "day",
        frequency: 4589.7,
      },
      unitPrice: {
        amount: 3223.33,
        currencyCode: "GMD",
      },
      status: "active",
      id: "<id>",
      createdAt: "1733133468849",
      updatedAt: "1741573202577",
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