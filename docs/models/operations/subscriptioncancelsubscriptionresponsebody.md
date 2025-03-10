# SubscriptionCancelSubscriptionResponseBody

Cancels an active subscription given its id

## Example Usage

```typescript
import { SubscriptionCancelSubscriptionResponseBody } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: SubscriptionCancelSubscriptionResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "MZN",
    createdAt: new RFCDate("2025-02-09"),
    updatedAt: new RFCDate("2024-11-26"),
    startedAt: new RFCDate("2025-11-17"),
    firstBilledAt: new RFCDate("2023-04-24"),
    nextBilledAt: new RFCDate("2025-08-08"),
    pausedAt: new RFCDate("2023-02-01"),
    canceledAt: new RFCDate("2024-08-09"),
    collectionMode: "<value>",
    billingDetails: {
      paymentTerms: {},
    },
    currentBillingPeriod: {
      startsAt: new RFCDate("2024-03-19"),
      endsAt: new RFCDate("2024-07-28"),
    },
    billingCycle: {
      frequency: 365100,
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
        quantity: 842777,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1721830911239",
        updatedAt: "1741530028443",
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
              interval: "day",
              frequency: 2213.96,
            },
            trialPeriod: {
              interval: "day",
              frequency: 2650.39,
            },
            unitPrice: {
              amount: 661.49,
              currencyCode: "BAM",
            },
            status: "archived",
            id: "<id>",
            createdAt: "1715173797612",
            updatedAt: "1741559129233",
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
| `data`                                                                                                         | [operations.SubscriptionCancelSubscriptionData](../../models/operations/subscriptioncancelsubscriptiondata.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |