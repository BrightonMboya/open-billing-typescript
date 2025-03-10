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
  currencyCode: "ZMW",
  createdAt: new RFCDate("2024-02-17"),
  updatedAt: new RFCDate("2025-11-24"),
  startedAt: new RFCDate("2025-05-17"),
  firstBilledAt: new RFCDate("2025-01-10"),
  nextBilledAt: new RFCDate("2023-09-26"),
  pausedAt: new RFCDate("2023-08-26"),
  canceledAt: new RFCDate("2023-07-01"),
  collectionMode: "<value>",
  billingDetails: {
    paymentTerms: {},
  },
  currentBillingPeriod: {
    startsAt: new RFCDate("2025-10-08"),
    endsAt: new RFCDate("2023-11-19"),
  },
  billingCycle: {
    frequency: 453094,
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
      quantity: 139072,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1723524028765",
      updatedAt: "1741583595108",
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
            frequency: 1563.83,
          },
          trialPeriod: {
            interval: "week",
            frequency: 753.59,
          },
          unitPrice: {
            amount: 4246.63,
            currencyCode: "BMD",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1717836592696",
          updatedAt: "1741562304510",
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