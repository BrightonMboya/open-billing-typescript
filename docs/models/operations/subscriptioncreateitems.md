# SubscriptionCreateItems

## Example Usage

```typescript
import { SubscriptionCreateItems } from "open-billing/models/operations";

let value: SubscriptionCreateItems = {
  status: "trialing",
  priceId: "<id>",
  quantity: 288398,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1717731002003",
  updatedAt: "1741624464376",
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
        frequency: 5173.09,
      },
      trialPeriod: {
        interval: "week",
        frequency: 5546.88,
      },
      unitPrice: {
        amount: 2870.51,
        currencyCode: "RON",
      },
      status: "active",
      id: "<id>",
      createdAt: "1721487789080",
      updatedAt: "1741638819774",
    },
  ],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                                             | [operations.SubscriptionCreateSubscriptionsResponseStatus](../../models/operations/subscriptioncreatesubscriptionsresponsestatus.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `priceId`                                                                                                                            | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `quantity`                                                                                                                           | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `subscriptionId`                                                                                                                     | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `recurring`                                                                                                                          | *boolean*                                                                                                                            | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `createdAt`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `updatedAt`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `previouslyBilledAt`                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `nextBilledAt`                                                                                                                       | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `trialStartedAt`                                                                                                                     | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `trialEndedAt`                                                                                                                       | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `customData`                                                                                                                         | *any*                                                                                                                                | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `price`                                                                                                                              | [operations.SubscriptionCreatePrice](../../models/operations/subscriptioncreateprice.md)[]                                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |