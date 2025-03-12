# SubscriptionListResponseBody

## Example Usage

```typescript
import { SubscriptionListResponseBody } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: SubscriptionListResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "GHS",
    createdAt: new RFCDate("2023-03-24"),
    updatedAt: new RFCDate("2024-04-10"),
    startedAt: new RFCDate("2023-04-28"),
    firstBilledAt: new RFCDate("2024-09-14"),
    nextBilledAt: new RFCDate("2023-09-28"),
    pausedAt: new RFCDate("2024-10-15"),
    canceledAt: new RFCDate("2023-05-09"),
    collectionMode: "<value>",
    billingDetails: {
      paymentTerms: {},
    },
    currentBillingPeriod: {
      startsAt: new RFCDate("2025-12-05"),
      endsAt: new RFCDate("2025-10-19"),
    },
    billingCycle: {
      frequency: 391797,
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
        quantity: 39992,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1730421758658",
        updatedAt: "1741732896035",
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
              frequency: 7090.36,
            },
            trialPeriod: {
              interval: "year",
              frequency: 3519.36,
            },
            unitPrice: {
              amount: 8975.43,
              currencyCode: "SHP",
            },
            status: "active",
            id: "<id>",
            createdAt: "1729852859655",
            updatedAt: "1741722551229",
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | [operations.SubscriptionListData](../../models/operations/subscriptionlistdata.md) | :heavy_check_mark:                                                                 | N/A                                                                                |