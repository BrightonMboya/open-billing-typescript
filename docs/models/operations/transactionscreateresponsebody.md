# TransactionsCreateResponseBody

Creates a Transaction and returns an Id

## Example Usage

```typescript
import { TransactionsCreateResponseBody } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: TransactionsCreateResponseBody = {
  status: "cancelled",
  customerId: "<id>",
  addressId: "<id>",
  productId: "<id>",
  currencyCode: "XAF",
  details: {
    total: {
      subtotal: 3051.89,
      discount: 9834.34,
      grandTotal: 9021.32,
    },
  },
  items: [
    {
      price: [
        {
          productId: "<id>",
          type: "standard",
          name: "<value>",
          billingCycle: {
            interval: "year",
            frequency: 7690.47,
          },
          trialPeriod: {
            interval: "month",
            frequency: 3198.34,
          },
          unitPrice: {
            amount: 1964.51,
            currencyCode: "PHP",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1710573721549",
          updatedAt: "1741566311191",
        },
      ],
      quantity: 4428.73,
      product: {
        id: "<id>",
        name: "<value>",
        description:
          "phooey the worthless times worldly hover nimble whoever mmm boohoo",
        updatedAt: "1741552335210",
        customData: {},
      },
    },
  ],
  payments: {
    id: "<id>",
    status: "PROCESSING",
    paymentMethod: "BANK_TRANSFER",
    provider: "FLUTTERWAVE",
    createdAt: "1721056678950",
    providerReference: "<value>",
    providerMetadata: {},
    methodDetails: {
      paymentMethod: "BANK_TRANSFER",
      details: {
        bankName: "<value>",
        bankReference: "<value>",
      },
    },
  },
  createdAt: new RFCDate("2025-06-01"),
  customer: {
    id: "<id>",
    name: "<value>",
    status: "archived",
    description:
      "oof blah feminize sans annual before hotfoot pulp unconscious",
    email: "Amir.Bruen@hotmail.com",
    createdAt: "1729911862254",
    updatedAt: "1741574029984",
  },
  address: {
    id: "<id>",
    customData: {},
    updatedAt: "1741587678375",
  },
  invoiceId: "<id>",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                       | [operations.TransactionsCreateTransactionsStatus](../../models/operations/transactionscreatetransactionsstatus.md)                             | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `customerId`                                                                                                                                   | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `addressId`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `productId`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `currencyCode`                                                                                                                                 | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `subscriptionId`                                                                                                                               | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `discountId`                                                                                                                                   | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `collectionMode`                                                                                                                               | [operations.TransactionsCreateTransactionsCollectionMode](../../models/operations/transactionscreatetransactionscollectionmode.md)             | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `customData`                                                                                                                                   | [operations.TransactionsCreateTransactionsCustomData](../../models/operations/transactionscreatetransactionscustomdata.md)                     | :heavy_minus_sign:                                                                                                                             | Any valid JSON value                                                                                                                           |
| `currentBillingPeriod`                                                                                                                         | [operations.TransactionsCreateTransactionsCurrentBillingPeriod](../../models/operations/transactionscreatetransactionscurrentbillingperiod.md) | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `details`                                                                                                                                      | [operations.Details](../../models/operations/details.md)                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `items`                                                                                                                                        | [operations.TransactionsCreateTransactionsItems](../../models/operations/transactionscreatetransactionsitems.md)[]                             | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `payments`                                                                                                                                     | [operations.Payments](../../models/operations/payments.md)                                                                                     | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `createdAt`                                                                                                                                    | [RFCDate](../../types/rfcdate.md)                                                                                                              | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `updatedAt`                                                                                                                                    | [RFCDate](../../types/rfcdate.md)                                                                                                              | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `customer`                                                                                                                                     | [operations.Customer](../../models/operations/customer.md)                                                                                     | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `address`                                                                                                                                      | [operations.Address](../../models/operations/address.md)                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `discount`                                                                                                                                     | [operations.TransactionsCreateDiscount](../../models/operations/transactionscreatediscount.md)                                                 | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `invoiceId`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |