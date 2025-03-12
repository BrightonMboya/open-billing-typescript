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
  currencyCode: "GNF",
  createdAt: new RFCDate("2025-07-30"),
  updatedAt: new RFCDate("2024-05-17"),
  startedAt: new RFCDate("2024-05-02"),
  firstBilledAt: new RFCDate("2024-01-04"),
  nextBilledAt: new RFCDate("2025-08-23"),
  pausedAt: new RFCDate("2025-11-01"),
  canceledAt: new RFCDate("2025-12-23"),
  collectionMode: "<value>",
  billingDetails: {
    paymentTerms: {},
  },
  currentBillingPeriod: {
    startsAt: new RFCDate("2024-02-17"),
    endsAt: new RFCDate("2025-11-24"),
  },
  billingCycle: {
    frequency: 791880,
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
      status: "active",
      priceId: "<id>",
      quantity: 166047,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1739348070601",
      updatedAt: "1741723026992",
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
            frequency: 7781.72,
          },
          trialPeriod: {
            interval: "year",
            frequency: 1390.72,
          },
          unitPrice: {
            amount: 4269.04,
            currencyCode: "TND",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1713477739247",
          updatedAt: "1741711130428",
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