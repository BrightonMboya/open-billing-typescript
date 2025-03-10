# SubscriptionListItems

## Example Usage

```typescript
import { SubscriptionListItems } from "open-billing/models/operations";

let value: SubscriptionListItems = {
  status: "inactive",
  priceId: "<id>",
  quantity: 279068,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1716675847343",
  updatedAt: "1741520769784",
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
        frequency: 6719.57,
      },
      trialPeriod: {
        interval: "year",
        frequency: 27.03,
      },
      unitPrice: {
        amount: 6471.97,
        currencyCode: "MYR",
      },
      status: "archived",
      id: "<id>",
      createdAt: "1740423096986",
      updatedAt: "1741512230837",
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