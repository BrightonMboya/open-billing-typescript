# SubscriptionListData

## Example Usage

```typescript
import { SubscriptionListData } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: SubscriptionListData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "MAD",
  createdAt: new RFCDate("2025-01-30"),
  updatedAt: new RFCDate("2023-04-10"),
  startedAt: new RFCDate("2023-09-07"),
  firstBilledAt: new RFCDate("2024-03-25"),
  nextBilledAt: new RFCDate("2024-11-14"),
  pausedAt: new RFCDate("2025-08-30"),
  canceledAt: new RFCDate("2024-11-09"),
  collectionMode: "<value>",
  billingDetails: {
    paymentTerms: {},
  },
  currentBillingPeriod: {
    startsAt: new RFCDate("2023-05-27"),
    endsAt: new RFCDate("2025-12-10"),
  },
  billingCycle: {
    frequency: 871786,
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
      quantity: 923306,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1736232815744",
      updatedAt: "1741594432135",
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
            frequency: 1747.72,
          },
          trialPeriod: {
            interval: "week",
            frequency: 9521.43,
          },
          unitPrice: {
            amount: 3000.29,
            currencyCode: "CAD",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1724138666999",
          updatedAt: "1741589212703",
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

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `status`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `customerId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `addressId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `currencyCode`                                                                                                     | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `createdAt`                                                                                                        | [RFCDate](../../types/rfcdate.md)                                                                                  | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updatedAt`                                                                                                        | [RFCDate](../../types/rfcdate.md)                                                                                  | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `startedAt`                                                                                                        | [RFCDate](../../types/rfcdate.md)                                                                                  | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `firstBilledAt`                                                                                                    | [RFCDate](../../types/rfcdate.md)                                                                                  | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `nextBilledAt`                                                                                                     | [RFCDate](../../types/rfcdate.md)                                                                                  | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `pausedAt`                                                                                                         | [RFCDate](../../types/rfcdate.md)                                                                                  | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `canceledAt`                                                                                                       | [RFCDate](../../types/rfcdate.md)                                                                                  | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `collectionMode`                                                                                                   | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `billingDetails`                                                                                                   | [operations.SubscriptionListBillingDetails](../../models/operations/subscriptionlistbillingdetails.md)             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `currentBillingPeriod`                                                                                             | [operations.SubscriptionListCurrentBillingPeriod](../../models/operations/subscriptionlistcurrentbillingperiod.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `billingCycle`                                                                                                     | [operations.SubscriptionListBillingCycle](../../models/operations/subscriptionlistbillingcycle.md)                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `scheduledChange`                                                                                                  | [operations.SubscriptionListScheduledChange](../../models/operations/subscriptionlistscheduledchange.md)[]         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `items`                                                                                                            | [operations.SubscriptionListItems](../../models/operations/subscriptionlistitems.md)[]                             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `customData`                                                                                                       | [operations.SubscriptionListCustomData](../../models/operations/subscriptionlistcustomdata.md)                     | :heavy_minus_sign:                                                                                                 | Any valid JSON value                                                                                               |
| `managementUrls`                                                                                                   | [operations.SubscriptionListManagementUrls](../../models/operations/subscriptionlistmanagementurls.md)             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `discount`                                                                                                         | [operations.SubscriptionListDiscount](../../models/operations/subscriptionlistdiscount.md)                         | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |