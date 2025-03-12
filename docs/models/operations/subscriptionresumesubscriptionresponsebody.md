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
    currencyCode: "SOS",
    createdAt: new RFCDate("2024-07-22"),
    updatedAt: new RFCDate("2023-03-14"),
    startedAt: new RFCDate("2024-06-01"),
    firstBilledAt: new RFCDate("2024-04-25"),
    nextBilledAt: new RFCDate("2023-08-11"),
    pausedAt: new RFCDate("2024-04-09"),
    canceledAt: new RFCDate("2024-01-28"),
    collectionMode: "<value>",
    billingDetails: {
      paymentTerms: {},
    },
    currentBillingPeriod: {
      startsAt: new RFCDate("2023-06-29"),
      endsAt: new RFCDate("2024-04-28"),
    },
    billingCycle: {
      frequency: 262800,
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
        status: "trialing",
        priceId: "<id>",
        quantity: 816365,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1727674223596",
        updatedAt: "1741771214656",
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
              frequency: 6308.32,
            },
            trialPeriod: {
              interval: "year",
              frequency: 9878.9,
            },
            unitPrice: {
              amount: 6033.23,
              currencyCode: "BRL",
            },
            status: "archived",
            id: "<id>",
            createdAt: "1710313129593",
            updatedAt: "1741714804988",
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