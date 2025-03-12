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
  currencyCode: "JOD",
  details: {
    total: {
      subtotal: 3830.66,
      discount: 3931.22,
      grandTotal: 5897.12,
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
            interval: "year",
            frequency: 535.29,
          },
          trialPeriod: {
            interval: "day",
            frequency: 1122.24,
          },
          unitPrice: {
            amount: 1933.34,
            currencyCode: "HNL",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1730098708101",
          updatedAt: "1741760875831",
        },
      ],
      quantity: 8901.12,
      product: {
        id: "<id>",
        name: "<value>",
        description:
          "abnegate convection bogus till lasting bruised suburban splash psst before",
        updatedAt: "1741746507927",
      },
    },
  ],
  payments: {
    id: "<id>",
    status: "COMPLETED",
    paymentMethod: "BANK_TRANSFER",
    provider: "SELCOM",
    createdAt: "1734526686795",
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
  createdAt: new RFCDate("2023-02-06"),
  customer: {
    id: "<id>",
    name: "<value>",
    status: "active",
    description: "academics ack generously aboard promptly account clamp",
    email: "Shaylee.Durgan-Schaefer88@gmail.com",
    createdAt: "1731249730810",
    updatedAt: "1741704895249",
  },
  address: {
    id: "<id>",
    customData: {},
    updatedAt: "1741781762890",
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