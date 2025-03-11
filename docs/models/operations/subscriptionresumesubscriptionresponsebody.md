# SubscriptionResumeSubscriptionResponseBody

Resumes a subscription given its id

## Example Usage

```typescript
import { SubscriptionResumeSubscriptionResponseBody } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: SubscriptionResumeSubscriptionResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "JOD",
    createdAt: new RFCDate("2025-06-07"),
    updatedAt: new RFCDate("2024-01-17"),
    startedAt: new RFCDate("2023-08-20"),
    firstBilledAt: new RFCDate("2023-03-07"),
    nextBilledAt: new RFCDate("2025-08-18"),
    pausedAt: new RFCDate("2025-10-03"),
    canceledAt: new RFCDate("2023-05-12"),
    collectionMode: "<value>",
    billingDetails: {
      paymentTerms: {},
    },
    currentBillingPeriod: {
      startsAt: new RFCDate("2024-01-02"),
      endsAt: new RFCDate("2023-07-12"),
    },
    billingCycle: {
      frequency: 115898,
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
        quantity: 96450,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1737348034727",
        updatedAt: "1741616170758",
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
              frequency: 7573.64,
            },
            trialPeriod: {
              interval: "week",
              frequency: 6573.19,
            },
            unitPrice: {
              amount: 5173.26,
              currencyCode: "KZT",
            },
            status: "archived",
            id: "<id>",
            createdAt: "1727608911213",
            updatedAt: "1741638665215",
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                         | [operations.SubscriptionResumeSubscriptionData](../../models/operations/subscriptionresumesubscriptiondata.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |