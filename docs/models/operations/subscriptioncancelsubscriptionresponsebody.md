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
    currencyCode: "KZT",
    createdAt: new RFCDate("2024-05-06"),
    updatedAt: new RFCDate("2024-09-14"),
    startedAt: new RFCDate("2024-11-11"),
    firstBilledAt: new RFCDate("2024-06-30"),
    nextBilledAt: new RFCDate("2025-08-08"),
    pausedAt: new RFCDate("2024-11-18"),
    canceledAt: new RFCDate("2024-03-15"),
    collectionMode: "<value>",
    billingDetails: {
      paymentTerms: {},
    },
    currentBillingPeriod: {
      startsAt: new RFCDate("2024-04-01"),
      endsAt: new RFCDate("2025-06-07"),
    },
    billingCycle: {
      frequency: 348192,
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
        status: "trialing",
        priceId: "<id>",
        quantity: 918547,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1714036129068",
        updatedAt: "1741726517321",
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
              frequency: 8998.67,
            },
            trialPeriod: {
              interval: "day",
              frequency: 9804.86,
            },
            unitPrice: {
              amount: 964.5,
              currencyCode: "TTD",
            },
            status: "archived",
            id: "<id>",
            createdAt: "1721850664653",
            updatedAt: "1741727197164",
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