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
  currencyCode: "XCD",
  createdAt: new RFCDate("2025-07-15"),
  updatedAt: new RFCDate("2024-02-24"),
  startedAt: new RFCDate("2023-01-28"),
  firstBilledAt: new RFCDate("2025-06-29"),
  nextBilledAt: new RFCDate("2024-12-24"),
  pausedAt: new RFCDate("2023-06-16"),
  canceledAt: new RFCDate("2025-12-27"),
  collectionMode: "<value>",
  billingDetails: {
    paymentTerms: {},
  },
  currentBillingPeriod: {
    startsAt: new RFCDate("2023-04-20"),
    endsAt: new RFCDate("2025-08-08"),
  },
  billingCycle: {
    frequency: 294266,
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
      status: "trialing",
      priceId: "<id>",
      quantity: 937865,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1729836300049",
      updatedAt: "1741706070066",
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
            interval: "year",
            frequency: 7118.71,
          },
          trialPeriod: {
            interval: "day",
            frequency: 3962.23,
          },
          unitPrice: {
            amount: 1674.35,
            currencyCode: "THB",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1738096753593",
          updatedAt: "1741781130490",
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