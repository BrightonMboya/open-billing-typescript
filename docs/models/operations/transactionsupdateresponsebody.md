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
  currencyCode: "PEN",
  details: {
    total: {
      subtotal: 687.77,
      discount: 107.77,
      grandTotal: 9970.47,
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
            interval: "week",
            frequency: 2084.14,
          },
          trialPeriod: {
            interval: "year",
            frequency: 6520.13,
          },
          unitPrice: {
            amount: 5043.86,
            currencyCode: "MNT",
          },
          status: "active",
          id: "<id>",
          createdAt: "1729429796210",
          updatedAt: "1741547027002",
        },
      ],
      quantity: 1992.28,
      product: {
        id: "<id>",
        name: "<value>",
        description:
          "wisely red middle accurate repeatedly supposing ferociously where",
        updatedAt: "1741551527762",
        customData: {},
      },
    },
  ],
  payments: {
    id: "<id>",
    status: "FAILED",
    paymentMethod: "MOBILE_MONEY",
    provider: "FLUTTERWAVE",
    createdAt: "1736050141346",
    providerReference: "<value>",
    providerMetadata: {},
    methodDetails: {
      paymentMethod: "MOBILE_MONEY",
      details: {
        network: "<value>",
        phoneSuffix: "<value>",
      },
    },
  },
  createdAt: new RFCDate("2024-05-24"),
  customer: {
    id: "<id>",
    name: "<value>",
    status: "archived",
    description: "meanwhile even for meanwhile",
    email: "Lauren_Donnelly34@gmail.com",
    createdAt: "1726157167108",
    updatedAt: "1741535972157",
  },
  address: {
    id: "<id>",
    customData: {},
    updatedAt: "1741529966621",
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