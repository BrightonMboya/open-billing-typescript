# SubscriptionCreateItems

## Example Usage

```typescript
import { SubscriptionCreateItems } from "open-billing/models/operations";

let value: SubscriptionCreateItems = {
  status: "trialing",
  priceId: "<id>",
  quantity: 958741,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1713947837546",
  updatedAt: "1741706864044",
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
        interval: "month",
        frequency: 8481.51,
      },
      trialPeriod: {
        interval: "year",
        frequency: 9834.27,
      },
      unitPrice: {
        amount: 3998.02,
        currencyCode: "BTN",
      },
      status: "active",
      id: "<id>",
      createdAt: "1731848110769",
      updatedAt: "1741754362572",
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