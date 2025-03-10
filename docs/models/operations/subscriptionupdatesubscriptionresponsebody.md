# SubscriptionUpdateSubscriptionResponseBody

Updates a Subscription given its Id

## Example Usage

```typescript
import { SubscriptionUpdateSubscriptionResponseBody } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: SubscriptionUpdateSubscriptionResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "HUF",
    createdAt: new RFCDate("2023-06-29"),
    updatedAt: new RFCDate("2024-04-28"),
    startedAt: new RFCDate("2023-10-16"),
    firstBilledAt: new RFCDate("2024-07-26"),
    nextBilledAt: new RFCDate("2023-02-08"),
    pausedAt: new RFCDate("2025-09-20"),
    canceledAt: new RFCDate("2025-06-13"),
    collectionMode: "<value>",
    billingDetails: {
      paymentTerms: {},
    },
    currentBillingPeriod: {
      startsAt: new RFCDate("2024-08-28"),
      endsAt: new RFCDate("2025-07-22"),
    },
    billingCycle: {
      frequency: 962396,
      interval: "<value>",
    },
    scheduledChange: [
      {
        id: "<id>",
        subscriptionId: "<id>",
        action: "pause",
        effectiveAt: "<value>",
        resumesAt: "<value>",
        status: "scheduled",
      },
    ],
    items: [
      {
        status: "trialing",
        priceId: "<id>",
        quantity: 987890,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1729087566793",
        updatedAt: "1741521834386",
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
              interval: "day",
              frequency: 1989.11,
            },
            trialPeriod: {
              interval: "year",
              frequency: 3304.4,
            },
            unitPrice: {
              amount: 6383.9,
              currencyCode: "FKP",
            },
            status: "archived",
            id: "<id>",
            createdAt: "1733037000892",
            updatedAt: "1741539255043",
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
| `data`                                                                                                         | [operations.SubscriptionUpdateSubscriptionData](../../models/operations/subscriptionupdatesubscriptiondata.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |