# SubscriptionListItems

## Example Usage

```typescript
import { SubscriptionListItems } from "open-billing/models/operations";

let value: SubscriptionListItems = {
  status: "active",
  priceId: "<id>",
  quantity: 159845,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1711724104205",
  updatedAt: "1741781489277",
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
        frequency: 6128.67,
      },
      trialPeriod: {
        interval: "day",
        frequency: 8818.97,
      },
      unitPrice: {
        amount: 7196.2,
        currencyCode: "YER",
      },
      status: "archived",
      id: "<id>",
      createdAt: "1719721549302",
      updatedAt: "1741745095351",
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                         | [operations.SubscriptionListSubscriptionsStatus](../../models/operations/subscriptionlistsubscriptionsstatus.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `priceId`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `quantity`                                                                                                       | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `subscriptionId`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `recurring`                                                                                                      | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `createdAt`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `updatedAt`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `previouslyBilledAt`                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `nextBilledAt`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `trialStartedAt`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `trialEndedAt`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `customData`                                                                                                     | *any*                                                                                                            | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `price`                                                                                                          | [operations.SubscriptionListPrice](../../models/operations/subscriptionlistprice.md)[]                           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |