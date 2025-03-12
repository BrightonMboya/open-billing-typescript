# SubscriptionPauseSubscriptionResponseBody

Pause a subscription given its id

## Example Usage

```typescript
import { SubscriptionPauseSubscriptionResponseBody } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: SubscriptionPauseSubscriptionResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "PKR",
    createdAt: new RFCDate("2024-10-11"),
    updatedAt: new RFCDate("2023-01-12"),
    startedAt: new RFCDate("2024-06-05"),
    firstBilledAt: new RFCDate("2025-02-15"),
    nextBilledAt: new RFCDate("2023-02-18"),
    pausedAt: new RFCDate("2025-08-21"),
    canceledAt: new RFCDate("2024-07-24"),
    collectionMode: "<value>",
    billingDetails: {
      paymentTerms: {},
    },
    currentBillingPeriod: {
      startsAt: new RFCDate("2023-02-03"),
      endsAt: new RFCDate("2023-09-03"),
    },
    billingCycle: {
      frequency: 953676,
      interval: "<value>",
    },
    scheduledChange: [
      {
        id: "<id>",
        subscriptionId: "<id>",
        action: "resume",
        effectiveAt: "<value>",
        resumesAt: "<value>",
        status: "completed",
      },
    ],
    items: [
      {
        status: "active",
        priceId: "<id>",
        quantity: 456704,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1710908700549",
        updatedAt: "1741733182355",
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
              frequency: 5886.39,
            },
            trialPeriod: {
              interval: "year",
              frequency: 2358.34,
            },
            unitPrice: {
              amount: 6205,
              currencyCode: "NZD",
            },
            status: "archived",
            id: "<id>",
            createdAt: "1734791735621",
            updatedAt: "1741770915370",
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

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                       | [operations.SubscriptionPauseSubscriptionData](../../models/operations/subscriptionpausesubscriptiondata.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |