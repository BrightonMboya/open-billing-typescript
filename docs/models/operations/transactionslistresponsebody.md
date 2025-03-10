# TransactionsListResponseBody

Returns the list of all Transactions

## Example Usage

```typescript
import { TransactionsListResponseBody } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: TransactionsListResponseBody = {
  data: [
    {
      status: "billed",
      customerId: "<id>",
      addressId: "<id>",
      productId: "<id>",
      currencyCode: "AED",
      details: {
        total: {
          subtotal: 5537.66,
          discount: 1138.94,
          grandTotal: 7220.25,
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
                interval: "day",
                frequency: 9417.43,
              },
              trialPeriod: {
                interval: "month",
                frequency: 2979.7,
              },
              unitPrice: {
                amount: 7092.34,
                currencyCode: "SAR",
              },
              status: "active",
              id: "<id>",
              createdAt: "1721905734279",
              updatedAt: "1741541800192",
            },
          ],
          quantity: 6166.19,
          product: {
            id: "<id>",
            name: "<value>",
            description:
              "pupil extroverted excepting reschedule splash whale within versus upon amid",
            updatedAt: "1741544782968",
            customData: {},
          },
        },
      ],
      payments: {
        id: "<id>",
        status: "PROCESSING",
        paymentMethod: "CARD",
        provider: "TIGO",
        createdAt: "1736577595436",
        providerReference: "<value>",
        providerMetadata: {},
        methodDetails: {
          paymentMethod: "CARD",
          details: {
            last4: "<value>",
            brand: "<value>",
            expMonth: 3920.22,
            expYear: 1439.76,
            cardholderName: "<value>",
          },
        },
      },
      createdAt: new RFCDate("2025-06-01"),
      customer: {
        id: "<id>",
        name: "<value>",
        status: "archived",
        description: "now ouch geez leap respectful geez",
        email: "Nicola_Orn23@gmail.com",
        createdAt: "1732400022427",
        updatedAt: "1741544707734",
      },
      address: {
        id: "<id>",
        customData: {},
        updatedAt: "1741513302733",
      },
      invoiceId: "<id>",
    },
  ],
  meta: {
    total: 4349.55,
    perPage: 9082.73,
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [operations.TransactionsListData](../../models/operations/transactionslistdata.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `meta`                                                                               | [operations.Meta](../../models/operations/meta.md)                                   | :heavy_check_mark:                                                                   | N/A                                                                                  |