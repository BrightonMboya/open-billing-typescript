# TransactionsListData

## Example Usage

```typescript
import { TransactionsListData } from "open-billing/models/operations";
import { RFCDate } from "open-billing/types";

let value: TransactionsListData = {
  status: "cancelled",
  customerId: "<id>",
  addressId: "<id>",
  productId: "<id>",
  currencyCode: "SLE",
  details: {
    total: {
      subtotal: 4905.49,
      discount: 6096.87,
      grandTotal: 2126.82,
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
            interval: "day",
            frequency: 3214.22,
          },
          trialPeriod: {
            interval: "week",
            frequency: 4446.25,
          },
          unitPrice: {
            amount: 9301.27,
            currencyCode: "CLP",
          },
          status: "active",
          id: "<id>",
          createdAt: "1729531099229",
          updatedAt: "1741649007529",
        },
      ],
      quantity: 1331.48,
      product: {
        id: "<id>",
        name: "<value>",
        description:
          "subsidy except fax hence optimistically militate rusty so after awkwardly",
        updatedAt: "1741577381799",
        customData: {},
      },
    },
  ],
  payments: {
    id: "<id>",
    status: "PROCESSING",
    paymentMethod: "BANK_TRANSFER",
    provider: "AIRTEL",
    createdAt: "1736102976729",
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
  createdAt: new RFCDate("2024-05-16"),
  customer: {
    id: "<id>",
    name: "<value>",
    status: "archived",
    description: "yuck playfully commonly",
    email: "Oscar.Lueilwitz15@hotmail.com",
    createdAt: "1740501614742",
    updatedAt: "1741593574551",
  },
  address: {
    id: "<id>",
    customData: {},
    updatedAt: "1741648565365",
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