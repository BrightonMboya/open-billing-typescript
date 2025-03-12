# SubscriptionResumeSubscriptionData

## Example Usage

```typescript
import { SubscriptionResumeSubscriptionData } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: SubscriptionResumeSubscriptionData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "NZD",
  createdAt: new RFCDate("2024-07-24"),
  updatedAt: new RFCDate("2024-03-12"),
  startedAt: new RFCDate("2025-04-28"),
  firstBilledAt: new RFCDate("2023-06-04"),
  nextBilledAt: new RFCDate("2025-11-26"),
  pausedAt: new RFCDate("2025-08-01"),
  canceledAt: new RFCDate("2024-11-07"),
  collectionMode: "<value>",
  billingDetails: {
    paymentTerms: {},
  },
  currentBillingPeriod: {
    startsAt: new RFCDate("2023-02-17"),
    endsAt: new RFCDate("2025-02-07"),
  },
  billingCycle: {
    frequency: 913285,
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
      status: "active",
      priceId: "<id>",
      quantity: 754901,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1738158067446",
      updatedAt: "1741706280881",
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
            frequency: 9670.55,
          },
          trialPeriod: {
            interval: "month",
            frequency: 5524.39,
          },
          unitPrice: {
            amount: 2959.5,
            currencyCode: "WST",
          },
          status: "active",
          id: "<id>",
          createdAt: "1736364449999",
          updatedAt: "1741782731637",
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
| `billingDetails`                                                                                                                               | [operations.SubscriptionResumeSubscriptionBillingDetails](../../models/operations/subscriptionresumesubscriptionbillingdetails.md)             | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `currentBillingPeriod`                                                                                                                         | [operations.SubscriptionResumeSubscriptionCurrentBillingPeriod](../../models/operations/subscriptionresumesubscriptioncurrentbillingperiod.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `billingCycle`                                                                                                                                 | [operations.SubscriptionResumeSubscriptionBillingCycle](../../models/operations/subscriptionresumesubscriptionbillingcycle.md)                 | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `scheduledChange`                                                                                                                              | [operations.SubscriptionResumeSubscriptionScheduledChange](../../models/operations/subscriptionresumesubscriptionscheduledchange.md)[]         | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `items`                                                                                                                                        | [operations.SubscriptionResumeSubscriptionItems](../../models/operations/subscriptionresumesubscriptionitems.md)[]                             | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `customData`                                                                                                                                   | [operations.SubscriptionResumeSubscriptionCustomData](../../models/operations/subscriptionresumesubscriptioncustomdata.md)                     | :heavy_minus_sign:                                                                                                                             | Any valid JSON value                                                                                                                           |
| `managementUrls`                                                                                                                               | [operations.SubscriptionResumeSubscriptionManagementUrls](../../models/operations/subscriptionresumesubscriptionmanagementurls.md)             | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `discount`                                                                                                                                     | [operations.SubscriptionResumeSubscriptionDiscount](../../models/operations/subscriptionresumesubscriptiondiscount.md)                         | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |