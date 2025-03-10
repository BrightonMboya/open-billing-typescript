# SubscriptionUpdateSubscriptionData

## Example Usage

```typescript
import { SubscriptionUpdateSubscriptionData } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: SubscriptionUpdateSubscriptionData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "NIO",
  createdAt: new RFCDate("2023-02-17"),
  updatedAt: new RFCDate("2025-02-07"),
  startedAt: new RFCDate("2025-09-27"),
  firstBilledAt: new RFCDate("2024-07-28"),
  nextBilledAt: new RFCDate("2024-01-24"),
  pausedAt: new RFCDate("2023-05-12"),
  canceledAt: new RFCDate("2025-04-07"),
  collectionMode: "<value>",
  billingDetails: {
    paymentTerms: {},
  },
  currentBillingPeriod: {
    startsAt: new RFCDate("2025-08-27"),
    endsAt: new RFCDate("2023-04-20"),
  },
  billingCycle: {
    frequency: 758985,
    interval: "<value>",
  },
  scheduledChange: [
    {
      id: "<id>",
      subscriptionId: "<id>",
      action: "pause",
      effectiveAt: "<value>",
      resumesAt: "<value>",
      status: "scheduled",
    },
  ],
  items: [
    {
      status: "inactive",
      priceId: "<id>",
      quantity: 552439,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1719394247151",
      updatedAt: "1741591063367",
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
            interval: "year",
            frequency: 9851.09,
          },
          trialPeriod: {
            interval: "year",
            frequency: 5189.9,
          },
          unitPrice: {
            amount: 660.74,
            currencyCode: "KWD",
          },
          status: "active",
          id: "<id>",
          createdAt: "1716456549248",
          updatedAt: "1741547371044",
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

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                         | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `status`                                                                                                                                                     | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `customerId`                                                                                                                                                 | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `addressId`                                                                                                                                                  | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `currencyCode`                                                                                                                                               | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `createdAt`                                                                                                                                                  | [RFCDate](../../types/rfcdate.md)                                                                                                                            | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `updatedAt`                                                                                                                                                  | [RFCDate](../../types/rfcdate.md)                                                                                                                            | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `startedAt`                                                                                                                                                  | [RFCDate](../../types/rfcdate.md)                                                                                                                            | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `firstBilledAt`                                                                                                                                              | [RFCDate](../../types/rfcdate.md)                                                                                                                            | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `nextBilledAt`                                                                                                                                               | [RFCDate](../../types/rfcdate.md)                                                                                                                            | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `pausedAt`                                                                                                                                                   | [RFCDate](../../types/rfcdate.md)                                                                                                                            | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `canceledAt`                                                                                                                                                 | [RFCDate](../../types/rfcdate.md)                                                                                                                            | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `collectionMode`                                                                                                                                             | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `billingDetails`                                                                                                                                             | [operations.SubscriptionUpdateSubscriptionSubscriptionsBillingDetails](../../models/operations/subscriptionupdatesubscriptionsubscriptionsbillingdetails.md) | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `currentBillingPeriod`                                                                                                                                       | [operations.SubscriptionUpdateSubscriptionCurrentBillingPeriod](../../models/operations/subscriptionupdatesubscriptioncurrentbillingperiod.md)               | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `billingCycle`                                                                                                                                               | [operations.SubscriptionUpdateSubscriptionBillingCycle](../../models/operations/subscriptionupdatesubscriptionbillingcycle.md)                               | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `scheduledChange`                                                                                                                                            | [operations.SubscriptionUpdateSubscriptionScheduledChange](../../models/operations/subscriptionupdatesubscriptionscheduledchange.md)[]                       | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `items`                                                                                                                                                      | [operations.SubscriptionUpdateSubscriptionSubscriptionsItems](../../models/operations/subscriptionupdatesubscriptionsubscriptionsitems.md)[]                 | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `customData`                                                                                                                                                 | [operations.SubscriptionUpdateSubscriptionSubscriptionsCustomData](../../models/operations/subscriptionupdatesubscriptionsubscriptionscustomdata.md)         | :heavy_minus_sign:                                                                                                                                           | Any valid JSON value                                                                                                                                         |
| `managementUrls`                                                                                                                                             | [operations.SubscriptionUpdateSubscriptionManagementUrls](../../models/operations/subscriptionupdatesubscriptionmanagementurls.md)                           | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `discount`                                                                                                                                                   | [operations.SubscriptionUpdateSubscriptionDiscount](../../models/operations/subscriptionupdatesubscriptiondiscount.md)                                       | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |