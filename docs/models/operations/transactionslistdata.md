# TransactionsListData

## Example Usage

```typescript
import { TransactionsListData } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: TransactionsListData = {
  status: "billed",
  customerId: "<id>",
  addressId: "<id>",
  productId: "<id>",
  currencyCode: "MNT",
  details: {
    total: {
      subtotal: 4137.68,
      discount: 1514.86,
      grandTotal: 1620.73,
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
            frequency: 9414.4,
          },
          trialPeriod: {
            interval: "day",
            frequency: 4608.03,
          },
          unitPrice: {
            amount: 1296.19,
            currencyCode: "AED",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1713839783952",
          updatedAt: "1741760001775",
        },
      ],
      quantity: 6981.17,
      product: {
        id: "<id>",
        name: "<value>",
        description: "concerning regularly stupendous anti",
        updatedAt: "1741711397548",
      },
    },
  ],
  payments: {
    id: "<id>",
    status: "COMPLETED",
    paymentMethod: "CARD",
    provider: "MTN",
    createdAt: "1714398057720",
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
  createdAt: new RFCDate("2023-01-28"),
  customer: {
    id: "<id>",
    name: "<value>",
    status: "active",
    description: "perfectly midwife loyalty descent and provided",
    email: "Glenna_Mante@gmail.com",
    createdAt: "1722610816066",
    updatedAt: "1741710059009",
  },
  address: {
    id: "<id>",
    customData: {},
    updatedAt: "1741767155481",
  },
  invoiceId: "<id>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                           | [operations.TransactionsListStatus](../../models/operations/transactionsliststatus.md)                             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `customerId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `addressId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `productId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `currencyCode`                                                                                                     | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `subscriptionId`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `discountId`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `collectionMode`                                                                                                   | [operations.TransactionsListCollectionMode](../../models/operations/transactionslistcollectionmode.md)             | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `customData`                                                                                                       | [operations.TransactionsListCustomData](../../models/operations/transactionslistcustomdata.md)                     | :heavy_minus_sign:                                                                                                 | Any valid JSON value                                                                                               |
| `currentBillingPeriod`                                                                                             | [operations.TransactionsListCurrentBillingPeriod](../../models/operations/transactionslistcurrentbillingperiod.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `details`                                                                                                          | [operations.TransactionsListDetails](../../models/operations/transactionslistdetails.md)                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `items`                                                                                                            | [operations.TransactionsListItems](../../models/operations/transactionslistitems.md)[]                             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `payments`                                                                                                         | [operations.TransactionsListPayments](../../models/operations/transactionslistpayments.md)                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `createdAt`                                                                                                        | [RFCDate](../../types/rfcdate.md)                                                                                  | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updatedAt`                                                                                                        | [RFCDate](../../types/rfcdate.md)                                                                                  | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `customer`                                                                                                         | [operations.TransactionsListCustomer](../../models/operations/transactionslistcustomer.md)                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `address`                                                                                                          | [operations.TransactionsListAddress](../../models/operations/transactionslistaddress.md)                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `discount`                                                                                                         | [operations.TransactionsListDiscount](../../models/operations/transactionslistdiscount.md)                         | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `invoiceId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |