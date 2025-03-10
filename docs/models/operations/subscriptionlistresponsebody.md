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
    currencyCode: "CAD",
    createdAt: new RFCDate("2024-12-25"),
    updatedAt: new RFCDate("2024-04-27"),
    startedAt: new RFCDate("2023-03-25"),
    firstBilledAt: new RFCDate("2025-02-02"),
    nextBilledAt: new RFCDate("2023-09-29"),
    pausedAt: new RFCDate("2023-02-13"),
    canceledAt: new RFCDate("2023-03-07"),
    collectionMode: "<value>",
    billingDetails: {
      paymentTerms: {},
    },
    currentBillingPeriod: {
      startsAt: new RFCDate("2023-03-08"),
      endsAt: new RFCDate("2025-09-21"),
    },
    billingCycle: {
      frequency: 739884,
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
        quantity: 304446,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1741532909731",
        updatedAt: "1741542065943",
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
              frequency: 9795.27,
            },
            trialPeriod: {
              interval: "day",
              frequency: 3279.88,
            },
            unitPrice: {
              amount: 6803.49,
              currencyCode: "AZN",
            },
            status: "archived",
            id: "<id>",
            createdAt: "1725124232809",
            updatedAt: "1741535310486",
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