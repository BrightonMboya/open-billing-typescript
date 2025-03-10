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
  currencyCode: "MGA",
  createdAt: new RFCDate("2023-11-15"),
  updatedAt: new RFCDate("2023-11-30"),
  startedAt: new RFCDate("2024-10-09"),
  firstBilledAt: new RFCDate("2025-10-07"),
  nextBilledAt: new RFCDate("2025-06-01"),
  pausedAt: new RFCDate("2025-03-04"),
  canceledAt: new RFCDate("2024-09-04"),
  collectionMode: "<value>",
  billingDetails: {
    paymentTerms: {},
  },
  currentBillingPeriod: {
    startsAt: new RFCDate("2025-10-07"),
    endsAt: new RFCDate("2024-06-23"),
  },
  billingCycle: {
    frequency: 873833,
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
      quantity: 12171,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1720241925386",
      updatedAt: "1741530607810",
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
            frequency: 976.76,
          },
          trialPeriod: {
            interval: "month",
            frequency: 9384.12,
          },
          unitPrice: {
            amount: 2286.46,
            currencyCode: "PKR",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1710378542110",
          updatedAt: "1741551884321",
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