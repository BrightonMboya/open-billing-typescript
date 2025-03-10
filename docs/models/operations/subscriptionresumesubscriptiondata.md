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
  currencyCode: "MGA",
  createdAt: new RFCDate("2023-12-24"),
  updatedAt: new RFCDate("2023-12-13"),
  startedAt: new RFCDate("2024-05-04"),
  firstBilledAt: new RFCDate("2024-04-19"),
  nextBilledAt: new RFCDate("2024-01-27"),
  pausedAt: new RFCDate("2025-09-29"),
  canceledAt: new RFCDate("2025-03-12"),
  collectionMode: "<value>",
  billingDetails: {
    paymentTerms: {},
  },
  currentBillingPeriod: {
    startsAt: new RFCDate("2025-03-08"),
    endsAt: new RFCDate("2023-11-14"),
  },
  billingCycle: {
    frequency: 577710,
    interval: "<value>",
  },
  scheduledChange: [
    {
      id: "<id>",
      subscriptionId: "<id>",
      action: "cancel",
      effectiveAt: "<value>",
      resumesAt: "<value>",
      status: "scheduled",
    },
  ],
  items: [
    {
      status: "inactive",
      priceId: "<id>",
      quantity: 770873,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1733268322543",
      updatedAt: "1741522999367",
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
            interval: "week",
            frequency: 4864.1,
          },
          trialPeriod: {
            interval: "week",
            frequency: 5678.46,
          },
          unitPrice: {
            amount: 6211.69,
            currencyCode: "LBP",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1729857415994",
          updatedAt: "1741545456323",
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