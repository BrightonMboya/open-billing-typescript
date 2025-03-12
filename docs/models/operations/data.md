# Data

## Example Usage

```typescript
import { Data } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: Data = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "AZN",
  createdAt: new RFCDate("2024-05-30"),
  updatedAt: new RFCDate("2023-05-07"),
  startedAt: new RFCDate("2024-05-15"),
  firstBilledAt: new RFCDate("2025-12-10"),
  nextBilledAt: new RFCDate("2024-04-09"),
  pausedAt: new RFCDate("2025-07-28"),
  canceledAt: new RFCDate("2023-05-09"),
  collectionMode: "<value>",
  billingDetails: {
    paymentTerms: {},
  },
  currentBillingPeriod: {
    startsAt: new RFCDate("2023-10-25"),
    endsAt: new RFCDate("2024-03-18"),
  },
  billingCycle: {
    frequency: 399812,
    interval: "<value>",
  },
  scheduledChange: [
    {
      id: "<id>",
      subscriptionId: "<id>",
      action: "cancel",
      effectiveAt: "<value>",
      resumesAt: "<value>",
      status: "completed",
    },
  ],
  items: [
    {
      status: "trialing",
      priceId: "<id>",
      quantity: 639187,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1722835964483",
      updatedAt: "1741734922649",
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
            frequency: 8224.07,
          },
          trialPeriod: {
            interval: "month",
            frequency: 7263.43,
          },
          unitPrice: {
            amount: 5369.23,
            currencyCode: "BND",
          },
          status: "active",
          id: "<id>",
          createdAt: "1723031879910",
          updatedAt: "1741725356800",
        },
      ],
    },
  ],
  managementUrls: {
    updatePaymentMethod: "<value>",
    cancel: "<value>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `status`                                                                                                               | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customerId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `addressId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `currencyCode`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `createdAt`                                                                                                            | [RFCDate](../../types/rfcdate.md)                                                                                      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `updatedAt`                                                                                                            | [RFCDate](../../types/rfcdate.md)                                                                                      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `startedAt`                                                                                                            | [RFCDate](../../types/rfcdate.md)                                                                                      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `firstBilledAt`                                                                                                        | [RFCDate](../../types/rfcdate.md)                                                                                      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `nextBilledAt`                                                                                                         | [RFCDate](../../types/rfcdate.md)                                                                                      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `pausedAt`                                                                                                             | [RFCDate](../../types/rfcdate.md)                                                                                      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `canceledAt`                                                                                                           | [RFCDate](../../types/rfcdate.md)                                                                                      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `collectionMode`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `billingDetails`                                                                                                       | [operations.SubscriptionCreateBillingDetails](../../models/operations/subscriptioncreatebillingdetails.md)             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `currentBillingPeriod`                                                                                                 | [operations.SubscriptionCreateCurrentBillingPeriod](../../models/operations/subscriptioncreatecurrentbillingperiod.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `billingCycle`                                                                                                         | [operations.SubscriptionCreateBillingCycle](../../models/operations/subscriptioncreatebillingcycle.md)                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `scheduledChange`                                                                                                      | [operations.ScheduledChange](../../models/operations/scheduledchange.md)[]                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `items`                                                                                                                | [operations.SubscriptionCreateItems](../../models/operations/subscriptioncreateitems.md)[]                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customData`                                                                                                           | [operations.SubscriptionCreateCustomData](../../models/operations/subscriptioncreatecustomdata.md)                     | :heavy_minus_sign:                                                                                                     | Any valid JSON value                                                                                                   |
| `managementUrls`                                                                                                       | [operations.SubscriptionCreateManagementUrls](../../models/operations/subscriptioncreatemanagementurls.md)             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `discount`                                                                                                             | [operations.SubscriptionCreateDiscount](../../models/operations/subscriptioncreatediscount.md)                         | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |