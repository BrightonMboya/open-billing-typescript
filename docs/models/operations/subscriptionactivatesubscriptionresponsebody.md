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
    currencyCode: "STN",
    createdAt: new RFCDate("2023-02-15"),
    updatedAt: new RFCDate("2025-06-13"),
    startedAt: new RFCDate("2025-06-04"),
    firstBilledAt: new RFCDate("2023-02-25"),
    nextBilledAt: new RFCDate("2024-11-18"),
    pausedAt: new RFCDate("2024-07-04"),
    canceledAt: new RFCDate("2023-07-06"),
    collectionMode: "<value>",
    billingDetails: {
      paymentTerms: {},
    },
    currentBillingPeriod: {
      startsAt: new RFCDate("2023-06-12"),
      endsAt: new RFCDate("2025-04-27"),
    },
    billingCycle: {
      frequency: 567693,
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
        status: "trialing",
        priceId: "<id>",
        quantity: 118615,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1739836863895",
        updatedAt: "1741718749867",
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
              interval: "year",
              frequency: 2036.21,
            },
            trialPeriod: {
              interval: "month",
              frequency: 1858.16,
            },
            unitPrice: {
              amount: 1047.36,
              currencyCode: "BND",
            },
            status: "active",
            id: "<id>",
            createdAt: "1710394814228",
            updatedAt: "1741734326253",
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