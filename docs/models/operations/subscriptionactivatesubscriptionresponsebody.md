# SubscriptionActivateSubscriptionResponseBody

Activates a subscription given its id

## Example Usage

```typescript
import { SubscriptionActivateSubscriptionResponseBody } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: SubscriptionActivateSubscriptionResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "RSD",
    createdAt: new RFCDate("2023-02-18"),
    updatedAt: new RFCDate("2025-08-21"),
    startedAt: new RFCDate("2024-07-24"),
    firstBilledAt: new RFCDate("2023-02-03"),
    nextBilledAt: new RFCDate("2023-09-03"),
    pausedAt: new RFCDate("2025-11-11"),
    canceledAt: new RFCDate("2024-09-30"),
    collectionMode: "<value>",
    billingDetails: {
      paymentTerms: {},
    },
    currentBillingPeriod: {
      startsAt: new RFCDate("2023-04-28"),
      endsAt: new RFCDate("2023-11-12"),
    },
    billingCycle: {
      frequency: 456704,
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
        quantity: 243678,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1728624492348",
        updatedAt: "1741575852616",
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
              frequency: 6396.22,
            },
            trialPeriod: {
              interval: "year",
              frequency: 7782.76,
            },
            unitPrice: {
              amount: 8483.46,
              currencyCode: "LAK",
            },
            status: "active",
            id: "<id>",
            createdAt: "1741465203507",
            updatedAt: "1741521949632",
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

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                             | [operations.SubscriptionActivateSubscriptionData](../../models/operations/subscriptionactivatesubscriptiondata.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |