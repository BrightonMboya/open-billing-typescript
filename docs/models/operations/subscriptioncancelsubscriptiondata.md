# SubscriptionCancelSubscriptionData

## Example Usage

```typescript
import { SubscriptionCancelSubscriptionData } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: SubscriptionCancelSubscriptionData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "KPW",
  createdAt: new RFCDate("2025-12-10"),
  updatedAt: new RFCDate("2024-04-09"),
  startedAt: new RFCDate("2025-07-28"),
  firstBilledAt: new RFCDate("2023-05-09"),
  nextBilledAt: new RFCDate("2023-10-25"),
  pausedAt: new RFCDate("2024-03-18"),
  canceledAt: new RFCDate("2024-03-14"),
  collectionMode: "<value>",
  billingDetails: {
    paymentTerms: {},
  },
  currentBillingPeriod: {
    startsAt: new RFCDate("2025-01-05"),
    endsAt: new RFCDate("2024-01-13"),
  },
  billingCycle: {
    frequency: 713767,
    interval: "<value>",
  },
  scheduledChange: [
    {
      id: "<id>",
      subscriptionId: "<id>",
      action: "resume",
      effectiveAt: "<value>",
      resumesAt: "<value>",
      status: "completed",
    },
  ],
  items: [
    {
      status: "inactive",
      priceId: "<id>",
      quantity: 614528,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1712270023660",
      updatedAt: "1741581828342",
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
            frequency: 5369.23,
          },
          trialPeriod: {
            interval: "day",
            frequency: 4050.36,
          },
          unitPrice: {
            amount: 4053.73,
            currencyCode: "GNF",
          },
          status: "active",
          id: "<id>",
          createdAt: "1733311222281",
          updatedAt: "1741520258490",
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

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                           | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `status`                                                                                                                                       | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `customerId`                                                                                                                                   | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `addressId`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `currencyCode`                                                                                                                                 | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `createdAt`                                                                                                                                    | [RFCDate](../../types/rfcdate.md)                                                                                                              | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `updatedAt`                                                                                                                                    | [RFCDate](../../types/rfcdate.md)                                                                                                              | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `startedAt`                                                                                                                                    | [RFCDate](../../types/rfcdate.md)                                                                                                              | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `firstBilledAt`                                                                                                                                | [RFCDate](../../types/rfcdate.md)                                                                                                              | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `nextBilledAt`                                                                                                                                 | [RFCDate](../../types/rfcdate.md)                                                                                                              | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `pausedAt`                                                                                                                                     | [RFCDate](../../types/rfcdate.md)                                                                                                              | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `canceledAt`                                                                                                                                   | [RFCDate](../../types/rfcdate.md)                                                                                                              | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `collectionMode`                                                                                                                               | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `billingDetails`                                                                                                                               | [operations.SubscriptionCancelSubscriptionBillingDetails](../../models/operations/subscriptioncancelsubscriptionbillingdetails.md)             | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `currentBillingPeriod`                                                                                                                         | [operations.SubscriptionCancelSubscriptionCurrentBillingPeriod](../../models/operations/subscriptioncancelsubscriptioncurrentbillingperiod.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `billingCycle`                                                                                                                                 | [operations.SubscriptionCancelSubscriptionBillingCycle](../../models/operations/subscriptioncancelsubscriptionbillingcycle.md)                 | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `scheduledChange`                                                                                                                              | [operations.SubscriptionCancelSubscriptionScheduledChange](../../models/operations/subscriptioncancelsubscriptionscheduledchange.md)[]         | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `items`                                                                                                                                        | [operations.SubscriptionCancelSubscriptionItems](../../models/operations/subscriptioncancelsubscriptionitems.md)[]                             | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `customData`                                                                                                                                   | [operations.SubscriptionCancelSubscriptionCustomData](../../models/operations/subscriptioncancelsubscriptioncustomdata.md)                     | :heavy_minus_sign:                                                                                                                             | Any valid JSON value                                                                                                                           |
| `managementUrls`                                                                                                                               | [operations.SubscriptionCancelSubscriptionManagementUrls](../../models/operations/subscriptioncancelsubscriptionmanagementurls.md)             | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `discount`                                                                                                                                     | [operations.SubscriptionCancelSubscriptionDiscount](../../models/operations/subscriptioncancelsubscriptiondiscount.md)                         | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |