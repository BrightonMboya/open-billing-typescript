# SubscriptionPauseSubscriptionData

## Example Usage

```typescript
import { SubscriptionPauseSubscriptionData } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: SubscriptionPauseSubscriptionData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "XAF",
  createdAt: new RFCDate("2024-07-08"),
  updatedAt: new RFCDate("2025-12-31"),
  startedAt: new RFCDate("2023-08-05"),
  firstBilledAt: new RFCDate("2024-08-09"),
  nextBilledAt: new RFCDate("2023-11-15"),
  pausedAt: new RFCDate("2023-11-30"),
  canceledAt: new RFCDate("2024-10-09"),
  collectionMode: "<value>",
  billingDetails: {
    paymentTerms: {},
  },
  currentBillingPeriod: {
    startsAt: new RFCDate("2025-10-07"),
    endsAt: new RFCDate("2025-06-01"),
  },
  billingCycle: {
    frequency: 723942,
    interval: "<value>",
  },
  scheduledChange: [
    {
      id: "<id>",
      subscriptionId: "<id>",
      action: "resume",
      effectiveAt: "<value>",
      resumesAt: "<value>",
      status: "scheduled",
    },
  ],
  items: [
    {
      status: "inactive",
      priceId: "<id>",
      quantity: 873833,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1736548463465",
      updatedAt: "1741716094337",
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
            frequency: 3228.29,
          },
          trialPeriod: {
            interval: "day",
            frequency: 5068.63,
          },
          unitPrice: {
            amount: 7368.53,
            currencyCode: "BIF",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1739841779756",
          updatedAt: "1741717374011",
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

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `status`                                                                                                                                     | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `customerId`                                                                                                                                 | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `addressId`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `currencyCode`                                                                                                                               | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `createdAt`                                                                                                                                  | [RFCDate](../../types/rfcdate.md)                                                                                                            | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `updatedAt`                                                                                                                                  | [RFCDate](../../types/rfcdate.md)                                                                                                            | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `startedAt`                                                                                                                                  | [RFCDate](../../types/rfcdate.md)                                                                                                            | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `firstBilledAt`                                                                                                                              | [RFCDate](../../types/rfcdate.md)                                                                                                            | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `nextBilledAt`                                                                                                                               | [RFCDate](../../types/rfcdate.md)                                                                                                            | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `pausedAt`                                                                                                                                   | [RFCDate](../../types/rfcdate.md)                                                                                                            | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `canceledAt`                                                                                                                                 | [RFCDate](../../types/rfcdate.md)                                                                                                            | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `collectionMode`                                                                                                                             | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `billingDetails`                                                                                                                             | [operations.SubscriptionPauseSubscriptionBillingDetails](../../models/operations/subscriptionpausesubscriptionbillingdetails.md)             | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `currentBillingPeriod`                                                                                                                       | [operations.SubscriptionPauseSubscriptionCurrentBillingPeriod](../../models/operations/subscriptionpausesubscriptioncurrentbillingperiod.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `billingCycle`                                                                                                                               | [operations.SubscriptionPauseSubscriptionBillingCycle](../../models/operations/subscriptionpausesubscriptionbillingcycle.md)                 | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `scheduledChange`                                                                                                                            | [operations.SubscriptionPauseSubscriptionScheduledChange](../../models/operations/subscriptionpausesubscriptionscheduledchange.md)[]         | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `items`                                                                                                                                      | [operations.SubscriptionPauseSubscriptionItems](../../models/operations/subscriptionpausesubscriptionitems.md)[]                             | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `customData`                                                                                                                                 | [operations.SubscriptionPauseSubscriptionCustomData](../../models/operations/subscriptionpausesubscriptioncustomdata.md)                     | :heavy_minus_sign:                                                                                                                           | Any valid JSON value                                                                                                                         |
| `managementUrls`                                                                                                                             | [operations.SubscriptionPauseSubscriptionManagementUrls](../../models/operations/subscriptionpausesubscriptionmanagementurls.md)             | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `discount`                                                                                                                                   | [operations.SubscriptionPauseSubscriptionDiscount](../../models/operations/subscriptionpausesubscriptiondiscount.md)                         | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |