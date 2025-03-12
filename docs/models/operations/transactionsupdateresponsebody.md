# TransactionsUpdateResponseBody

Returns an updated Transaction

## Example Usage

```typescript
import { TransactionsUpdateResponseBody } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: TransactionsUpdateResponseBody = {
  status: "cancelled",
  customerId: "<id>",
  addressId: "<id>",
  productId: "<id>",
  currencyCode: "BOB",
  details: {
    total: {
      subtotal: 8182.73,
      discount: 4973.63,
      grandTotal: 2343.83,
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
            frequency: 3276.24,
          },
          trialPeriod: {
            interval: "month",
            frequency: 4278.59,
          },
          unitPrice: {
            amount: 9640.52,
            currencyCode: "SHP",
          },
          status: "active",
          id: "<id>",
          createdAt: "1710807719430",
          updatedAt: "1741754428873",
        },
      ],
      quantity: 1978.72,
      product: {
        id: "<id>",
        name: "<value>",
        description: "hmph reckon drat",
        updatedAt: "1741762610075",
      },
    },
  ],
  payments: {
    id: "<id>",
    status: "REFUNDED",
    paymentMethod: "BANK_TRANSFER",
    provider: "SELCOM",
    createdAt: "1725229515596",
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
  createdAt: new RFCDate("2023-12-05"),
  customer: {
    id: "<id>",
    name: "<value>",
    status: "active",
    description: "throughout mixture scenario why grandiose",
    email: "Gregory10@gmail.com",
    createdAt: "1721880047624",
    updatedAt: "1741738573163",
  },
  address: {
    id: "<id>",
    customData: {},
    updatedAt: "1741734640244",
  },
  invoiceId: "<id>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                               | [operations.TransactionsUpdateTransactionsStatus](../../models/operations/transactionsupdatetransactionsstatus.md)     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customerId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `addressId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `productId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `currencyCode`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `subscriptionId`                                                                                                       | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `discountId`                                                                                                           | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `collectionMode`                                                                                                       | [operations.TransactionsUpdateCollectionMode](../../models/operations/transactionsupdatecollectionmode.md)             | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `customData`                                                                                                           | [operations.TransactionsUpdateCustomData](../../models/operations/transactionsupdatecustomdata.md)                     | :heavy_minus_sign:                                                                                                     | Any valid JSON value                                                                                                   |
| `currentBillingPeriod`                                                                                                 | [operations.TransactionsUpdateCurrentBillingPeriod](../../models/operations/transactionsupdatecurrentbillingperiod.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `details`                                                                                                              | [operations.TransactionsUpdateDetails](../../models/operations/transactionsupdatedetails.md)                           | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `items`                                                                                                                | [operations.TransactionsUpdateItems](../../models/operations/transactionsupdateitems.md)[]                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `payments`                                                                                                             | [operations.TransactionsUpdatePayments](../../models/operations/transactionsupdatepayments.md)                         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `createdAt`                                                                                                            | [RFCDate](../../types/rfcdate.md)                                                                                      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `updatedAt`                                                                                                            | [RFCDate](../../types/rfcdate.md)                                                                                      | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `customer`                                                                                                             | [operations.TransactionsUpdateCustomer](../../models/operations/transactionsupdatecustomer.md)                         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `address`                                                                                                              | [operations.TransactionsUpdateAddress](../../models/operations/transactionsupdateaddress.md)                           | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `discount`                                                                                                             | [operations.TransactionsUpdateDiscount](../../models/operations/transactionsupdatediscount.md)                         | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `invoiceId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |