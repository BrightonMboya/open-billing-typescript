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
  currencyCode: "MYR",
  createdAt: new RFCDate("2025-11-21"),
  updatedAt: new RFCDate("2023-06-11"),
  startedAt: new RFCDate("2023-10-09"),
  firstBilledAt: new RFCDate("2025-08-15"),
  nextBilledAt: new RFCDate("2024-06-23"),
  pausedAt: new RFCDate("2025-09-12"),
  canceledAt: new RFCDate("2023-07-23"),
  collectionMode: "<value>",
  billingDetails: {
    paymentTerms: {},
  },
  currentBillingPeriod: {
    startsAt: new RFCDate("2024-08-06"),
    endsAt: new RFCDate("2023-12-24"),
  },
  billingCycle: {
    frequency: 316542,
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
      quantity: 914971,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1733324303015",
      updatedAt: "1741760478448",
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
            frequency: 7791.8,
          },
          trialPeriod: {
            interval: "year",
            frequency: 3445.3,
          },
          unitPrice: {
            amount: 7708.73,
            currencyCode: "SBD",
          },
          status: "active",
          id: "<id>",
          createdAt: "1737556474547",
          updatedAt: "1741735748850",
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