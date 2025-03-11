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
    currencyCode: "BOB",
    createdAt: new RFCDate("2025-12-05"),
    updatedAt: new RFCDate("2025-10-19"),
    startedAt: new RFCDate("2024-03-05"),
    firstBilledAt: new RFCDate("2023-09-23"),
    nextBilledAt: new RFCDate("2023-10-02"),
    pausedAt: new RFCDate("2024-06-13"),
    canceledAt: new RFCDate("2023-02-13"),
    collectionMode: "<value>",
    billingDetails: {
      paymentTerms: {},
    },
    currentBillingPeriod: {
      startsAt: new RFCDate("2024-12-02"),
      endsAt: new RFCDate("2024-03-23"),
    },
    billingCycle: {
      frequency: 377406,
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
        quantity: 351936,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1738422532805",
        updatedAt: "1741633749471",
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
              frequency: 2885.7,
            },
            trialPeriod: {
              interval: "year",
              frequency: 1124.27,
            },
            unitPrice: {
              amount: 2124.34,
              currencyCode: "CNY",
            },
            status: "active",
            id: "<id>",
            createdAt: "1733619290961",
            updatedAt: "1741612749355",
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