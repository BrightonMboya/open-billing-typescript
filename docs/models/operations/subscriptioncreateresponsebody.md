# SubscriptionCreateResponseBody

Creates a Subscription

## Example Usage

```typescript
import { SubscriptionCreateResponseBody } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: SubscriptionCreateResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "ANG",
    createdAt: new RFCDate("2025-03-19"),
    updatedAt: new RFCDate("2023-05-01"),
    startedAt: new RFCDate("2024-10-26"),
    firstBilledAt: new RFCDate("2025-02-09"),
    nextBilledAt: new RFCDate("2024-11-26"),
    pausedAt: new RFCDate("2025-11-17"),
    canceledAt: new RFCDate("2023-04-24"),
    collectionMode: "<value>",
    billingDetails: {
      paymentTerms: {},
    },
    currentBillingPeriod: {
      startsAt: new RFCDate("2025-08-08"),
      endsAt: new RFCDate("2023-02-01"),
    },
    billingCycle: {
      frequency: 534917,
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
        quantity: 190567,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1710851078689",
        updatedAt: "1741742386642",
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
              frequency: 2228.64,
            },
            trialPeriod: {
              interval: "day",
              frequency: 853.11,
            },
            unitPrice: {
              amount: 2213.96,
              currencyCode: "BIF",
            },
            status: "active",
            id: "<id>",
            createdAt: "1712334108387",
            updatedAt: "1741703287210",
          },
        ],
      },
    ],
    managementUrls: {
      updatePaymentMethod: "<value>",
      cancel: "<value>",
    },
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `data`                                             | [operations.Data](../../models/operations/data.md) | :heavy_check_mark:                                 | N/A                                                |