# SubscriptionActivateSubscriptionData

## Example Usage

```typescript
import { SubscriptionActivateSubscriptionData } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: SubscriptionActivateSubscriptionData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "PGK",
  createdAt: new RFCDate("2024-04-08"),
  updatedAt: new RFCDate("2023-08-07"),
  startedAt: new RFCDate("2024-02-07"),
  firstBilledAt: new RFCDate("2025-02-13"),
  nextBilledAt: new RFCDate("2024-12-12"),
  pausedAt: new RFCDate("2025-10-14"),
  canceledAt: new RFCDate("2025-08-08"),
  collectionMode: "<value>",
  billingDetails: {
    paymentTerms: {},
  },
  currentBillingPeriod: {
    startsAt: new RFCDate("2025-06-13"),
    endsAt: new RFCDate("2025-09-25"),
  },
  billingCycle: {
    frequency: 276337,
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
      quantity: 668218,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1719289916318",
      updatedAt: "1741699300826",
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
            interval: "week",
            frequency: 9421.85,
          },
          trialPeriod: {
            interval: "year",
            frequency: 8603.11,
          },
          unitPrice: {
            amount: 6530,
            currencyCode: "HNL",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1735956955359",
          updatedAt: "1741706139127",
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

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                               | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `status`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `customerId`                                                                                                                                       | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `addressId`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `currencyCode`                                                                                                                                     | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `createdAt`                                                                                                                                        | [RFCDate](../../types/rfcdate.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `updatedAt`                                                                                                                                        | [RFCDate](../../types/rfcdate.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `startedAt`                                                                                                                                        | [RFCDate](../../types/rfcdate.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `firstBilledAt`                                                                                                                                    | [RFCDate](../../types/rfcdate.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `nextBilledAt`                                                                                                                                     | [RFCDate](../../types/rfcdate.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `pausedAt`                                                                                                                                         | [RFCDate](../../types/rfcdate.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `canceledAt`                                                                                                                                       | [RFCDate](../../types/rfcdate.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `collectionMode`                                                                                                                                   | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `billingDetails`                                                                                                                                   | [operations.SubscriptionActivateSubscriptionBillingDetails](../../models/operations/subscriptionactivatesubscriptionbillingdetails.md)             | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `currentBillingPeriod`                                                                                                                             | [operations.SubscriptionActivateSubscriptionCurrentBillingPeriod](../../models/operations/subscriptionactivatesubscriptioncurrentbillingperiod.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `billingCycle`                                                                                                                                     | [operations.SubscriptionActivateSubscriptionBillingCycle](../../models/operations/subscriptionactivatesubscriptionbillingcycle.md)                 | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `scheduledChange`                                                                                                                                  | [operations.SubscriptionActivateSubscriptionScheduledChange](../../models/operations/subscriptionactivatesubscriptionscheduledchange.md)[]         | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `items`                                                                                                                                            | [operations.SubscriptionActivateSubscriptionItems](../../models/operations/subscriptionactivatesubscriptionitems.md)[]                             | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `customData`                                                                                                                                       | [operations.SubscriptionActivateSubscriptionCustomData](../../models/operations/subscriptionactivatesubscriptioncustomdata.md)                     | :heavy_minus_sign:                                                                                                                                 | Any valid JSON value                                                                                                                               |
| `managementUrls`                                                                                                                                   | [operations.SubscriptionActivateSubscriptionManagementUrls](../../models/operations/subscriptionactivatesubscriptionmanagementurls.md)             | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `discount`                                                                                                                                         | [operations.SubscriptionActivateSubscriptionDiscount](../../models/operations/subscriptionactivatesubscriptiondiscount.md)                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |