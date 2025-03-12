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
    currencyCode: "SLE",
    createdAt: new RFCDate("2025-12-25"),
    updatedAt: new RFCDate("2024-11-04"),
    startedAt: new RFCDate("2023-02-10"),
    firstBilledAt: new RFCDate("2023-01-16"),
    nextBilledAt: new RFCDate("2024-01-10"),
    pausedAt: new RFCDate("2025-06-21"),
    canceledAt: new RFCDate("2025-08-07"),
    collectionMode: "<value>",
    billingDetails: {
      paymentTerms: {},
    },
    currentBillingPeriod: {
      startsAt: new RFCDate("2025-11-19"),
      endsAt: new RFCDate("2023-03-13"),
    },
    billingCycle: {
      frequency: 44571,
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
        status: "inactive",
        priceId: "<id>",
        quantity: 982445,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1722876563967",
        updatedAt: "1741755149999",
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
              frequency: 5277.15,
            },
            trialPeriod: {
              interval: "day",
              frequency: 2713.06,
            },
            unitPrice: {
              amount: 2580.59,
              currencyCode: "MDL",
            },
            status: "archived",
            id: "<id>",
            createdAt: "1740184509355",
            updatedAt: "1741757587831",
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