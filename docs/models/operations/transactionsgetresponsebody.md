# TransactionsGetResponseBody

Returns a transaction given its id

## Example Usage

```typescript
import { TransactionsGetResponseBody } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: TransactionsGetResponseBody = {
  status: "billed",
  customerId: "<id>",
  addressId: "<id>",
  productId: "<id>",
  currencyCode: "LSL",
  details: {
    total: {
      subtotal: 6813.31,
      discount: 1609.88,
      grandTotal: 4605.97,
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
            interval: "month",
            frequency: 246.14,
          },
          trialPeriod: {
            interval: "month",
            frequency: 2712.16,
          },
          unitPrice: {
            amount: 988.46,
            currencyCode: "ISK",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1710785415738",
          updatedAt: "1741745920756",
        },
      ],
      quantity: 5112.03,
      product: {
        id: "<id>",
        name: "<value>",
        description:
          "rowdy repurpose vice out focused concerning petticoat cloudy stunt",
        updatedAt: "1741741397084",
      },
    },
  ],
  payments: {
    id: "<id>",
    status: "PENDING",
    paymentMethod: "BANK_TRANSFER",
    provider: "STRIPE",
    createdAt: "1741250015470",
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
  createdAt: new RFCDate("2025-07-24"),
  customer: {
    id: "<id>",
    name: "<value>",
    status: "active",
    description:
      "athwart home naturally watery before consequently broadside standard stint",
    email: "Adrianna61@yahoo.com",
    createdAt: "1735905130777",
    updatedAt: "1741740701619",
  },
  address: {
    id: "<id>",
    customData: {},
    updatedAt: "1741748700520",
  },
  invoiceId: "<id>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                         | [operations.TransactionsGetStatus](../../models/operations/transactionsgetstatus.md)                             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `customerId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `addressId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `productId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `currencyCode`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `subscriptionId`                                                                                                 | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `discountId`                                                                                                     | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `collectionMode`                                                                                                 | [operations.TransactionsGetCollectionMode](../../models/operations/transactionsgetcollectionmode.md)             | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `customData`                                                                                                     | [operations.TransactionsGetCustomData](../../models/operations/transactionsgetcustomdata.md)                     | :heavy_minus_sign:                                                                                               | Any valid JSON value                                                                                             |
| `currentBillingPeriod`                                                                                           | [operations.TransactionsGetCurrentBillingPeriod](../../models/operations/transactionsgetcurrentbillingperiod.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `details`                                                                                                        | [operations.TransactionsGetDetails](../../models/operations/transactionsgetdetails.md)                           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `items`                                                                                                          | [operations.TransactionsGetItems](../../models/operations/transactionsgetitems.md)[]                             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `payments`                                                                                                       | [operations.TransactionsGetPayments](../../models/operations/transactionsgetpayments.md)                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `createdAt`                                                                                                      | [RFCDate](../../types/rfcdate.md)                                                                                | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `updatedAt`                                                                                                      | [RFCDate](../../types/rfcdate.md)                                                                                | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `customer`                                                                                                       | [operations.TransactionsGetCustomer](../../models/operations/transactionsgetcustomer.md)                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `address`                                                                                                        | [operations.TransactionsGetAddress](../../models/operations/transactionsgetaddress.md)                           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `discount`                                                                                                       | [operations.TransactionsGetDiscount](../../models/operations/transactionsgetdiscount.md)                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `invoiceId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |