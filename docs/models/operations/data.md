# Data

## Example Usage

```typescript
import { Data } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: Data = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "UZS",
  createdAt: new RFCDate("2023-11-22"),
  updatedAt: new RFCDate("2025-12-23"),
  startedAt: new RFCDate("2023-10-01"),
  firstBilledAt: new RFCDate("2023-04-27"),
  nextBilledAt: new RFCDate("2025-11-08"),
  pausedAt: new RFCDate("2023-09-13"),
  canceledAt: new RFCDate("2025-01-25"),
  collectionMode: "<value>",
  billingDetails: {
    paymentTerms: {},
  },
  currentBillingPeriod: {
    startsAt: new RFCDate("2023-03-05"),
    endsAt: new RFCDate("2025-03-11"),
  },
  billingCycle: {
    frequency: 881721,
    interval: "<value>",
  },
  scheduledChange: [
    {
      id: "<id>",
      subscriptionId: "<id>",
      action: "pause",
      effectiveAt: "<value>",
      resumesAt: "<value>",
      status: "completed",
    },
  ],
  items: [
    {
      status: "inactive",
      priceId: "<id>",
      quantity: 748789,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1717617113633",
      updatedAt: "1741582072606",
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
            frequency: 8391.89,
          },
          trialPeriod: {
            interval: "day",
            frequency: 5023.89,
          },
          unitPrice: {
            amount: 9425.84,
            currencyCode: "NPR",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1739768076496",
          updatedAt: "1741632090006",
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `status`                                                                                                               | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customerId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `addressId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `currencyCode`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `createdAt`                                                                                                            | [RFCDate](../../types/rfcdate.md)                                                                                      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `updatedAt`                                                                                                            | [RFCDate](../../types/rfcdate.md)                                                                                      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `startedAt`                                                                                                            | [RFCDate](../../types/rfcdate.md)                                                                                      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `firstBilledAt`                                                                                                        | [RFCDate](../../types/rfcdate.md)                                                                                      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `nextBilledAt`                                                                                                         | [RFCDate](../../types/rfcdate.md)                                                                                      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `pausedAt`                                                                                                             | [RFCDate](../../types/rfcdate.md)                                                                                      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `canceledAt`                                                                                                           | [RFCDate](../../types/rfcdate.md)                                                                                      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `collectionMode`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `billingDetails`                                                                                                       | [operations.SubscriptionCreateBillingDetails](../../models/operations/subscriptioncreatebillingdetails.md)             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `currentBillingPeriod`                                                                                                 | [operations.SubscriptionCreateCurrentBillingPeriod](../../models/operations/subscriptioncreatecurrentbillingperiod.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `billingCycle`                                                                                                         | [operations.SubscriptionCreateBillingCycle](../../models/operations/subscriptioncreatebillingcycle.md)                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `scheduledChange`                                                                                                      | [operations.ScheduledChange](../../models/operations/scheduledchange.md)[]                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `items`                                                                                                                | [operations.SubscriptionCreateItems](../../models/operations/subscriptioncreateitems.md)[]                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customData`                                                                                                           | [operations.SubscriptionCreateCustomData](../../models/operations/subscriptioncreatecustomdata.md)                     | :heavy_minus_sign:                                                                                                     | Any valid JSON value                                                                                                   |
| `managementUrls`                                                                                                       | [operations.SubscriptionCreateManagementUrls](../../models/operations/subscriptioncreatemanagementurls.md)             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `discount`                                                                                                             | [operations.SubscriptionCreateDiscount](../../models/operations/subscriptioncreatediscount.md)                         | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |