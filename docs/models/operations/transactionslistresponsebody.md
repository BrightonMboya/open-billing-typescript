# TransactionsListResponseBody

Returns the list of all Transactions

## Example Usage

```typescript
import { TransactionsListResponseBody } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: TransactionsListResponseBody = {
  data: [
    {
      status: "cancelled",
      customerId: "<id>",
      addressId: "<id>",
      productId: "<id>",
      currencyCode: "PGK",
      details: {
        total: {
          subtotal: 1648.05,
          discount: 271.97,
          grandTotal: 3175.04,
        },
      },
      items: [
        {
          price: [
            {
              productId: "<id>",
              type: "custom",
              name: "<value>",
              billingCycle: {
                interval: "week",
                frequency: 6925.55,
              },
              trialPeriod: {
                interval: "year",
                frequency: 4884.42,
              },
              unitPrice: {
                amount: 1342.67,
                currencyCode: "TOP",
              },
              status: "archived",
              id: "<id>",
              createdAt: "1733582687243",
              updatedAt: "1741758501911",
            },
          ],
          quantity: 9682.12,
          product: {
            id: "<id>",
            name: "<value>",
            description: "ah excepting inexperienced mothball oh",
            updatedAt: "1741735199286",
          },
        },
      ],
      payments: {
        id: "<id>",
        status: "REFUNDED",
        paymentMethod: "CARD",
        provider: "STRIPE",
        createdAt: "1741453681617",
        providerReference: "<value>",
        providerMetadata: {},
        methodDetails: {
          paymentMethod: "CARD",
          details: {
            last4: "<value>",
            brand: "<value>",
            expMonth: 3659.98,
            expYear: 1020.19,
            cardholderName: "<value>",
          },
        },
      },
      createdAt: new RFCDate("2025-05-13"),
      customer: {
        id: "<id>",
        name: "<value>",
        status: "archived",
        description:
          "sin astride acidic range whoever gee outfit outrun lighthearted quizzically",
        email: "Gerry_Oberbrunner@yahoo.com",
        createdAt: "1712387920593",
        updatedAt: "1741779890089",
      },
      address: {
        id: "<id>",
        customData: {},
        updatedAt: "1741743245345",
      },
      invoiceId: "<id>",
    },
  ],
  meta: {
    total: 8012.74,
    perPage: 502.91,
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [operations.TransactionsListData](../../models/operations/transactionslistdata.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `meta`                                                                               | [operations.Meta](../../models/operations/meta.md)                                   | :heavy_check_mark:                                                                   | N/A                                                                                  |