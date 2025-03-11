# TransactionsGetResponseBody

Returns a transaction given its id

## Example Usage

```typescript
import { TransactionsGetResponseBody } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: TransactionsGetResponseBody = {
  status: "cancelled",
  customerId: "<id>",
  addressId: "<id>",
  productId: "<id>",
  currencyCode: "BGN",
  details: {
    total: {
      subtotal: 1654.83,
      discount: 6254.18,
      grandTotal: 6227.89,
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
            frequency: 1419.86,
          },
          trialPeriod: {
            interval: "week",
            frequency: 4274.61,
          },
          unitPrice: {
            amount: 9.03,
            currencyCode: "BAM",
          },
          status: "active",
          id: "<id>",
          createdAt: "1725289657208",
          updatedAt: "1741588957466",
        },
      ],
      quantity: 8766.82,
      product: {
        id: "<id>",
        name: "<value>",
        description: "drive frankly unblinking furthermore sightseeing",
        updatedAt: "1741637694699",
        customData: {},
      },
    },
  ],
  payments: {
    id: "<id>",
    status: "FAILED",
    paymentMethod: "MOBILE_MONEY",
    provider: "PAYSTACK",
    createdAt: "1715989994835",
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
  createdAt: new RFCDate("2024-04-22"),
  customer: {
    id: "<id>",
    name: "<value>",
    status: "archived",
    description: "aboard alliance dusk lovingly hm jellyfish modulo",
    email: "Layne.Stroman@gmail.com",
    createdAt: "1737751421769",
    updatedAt: "1741589164306",
  },
  address: {
    id: "<id>",
    customData: {},
    updatedAt: "1741574034605",
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