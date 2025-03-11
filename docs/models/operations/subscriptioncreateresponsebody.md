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
    currencyCode: "QAR",
    createdAt: new RFCDate("2025-11-26"),
    updatedAt: new RFCDate("2025-12-25"),
    startedAt: new RFCDate("2024-05-10"),
    firstBilledAt: new RFCDate("2023-03-19"),
    nextBilledAt: new RFCDate("2023-11-17"),
    pausedAt: new RFCDate("2023-06-16"),
    canceledAt: new RFCDate("2024-04-02"),
    collectionMode: "<value>",
    billingDetails: {
      paymentTerms: {},
    },
    currentBillingPeriod: {
      startsAt: new RFCDate("2023-05-24"),
      endsAt: new RFCDate("2024-10-24"),
    },
    billingCycle: {
      frequency: 382808,
      interval: "<value>",
    },
    scheduledChange: [
      {
        id: "<id>",
        subscriptionId: "<id>",
        action: "cancel",
        effectiveAt: "<value>",
        resumesAt: "<value>",
        status: "scheduled",
      },
    ],
    items: [
      {
        status: "inactive",
        priceId: "<id>",
        quantity: 274823,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1728794202585",
        updatedAt: "1741644703959",
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
              interval: "month",
              frequency: 2716.53,
            },
            trialPeriod: {
              interval: "week",
              frequency: 4017.13,
            },
            unitPrice: {
              amount: 2484.13,
              currencyCode: "LKR",
            },
            status: "active",
            id: "<id>",
            createdAt: "1721881651787",
            updatedAt: "1741612581614",
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