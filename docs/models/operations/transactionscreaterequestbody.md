# TransactionsCreateRequestBody

## Example Usage

```typescript
import { TransactionsCreateRequestBody } from "open-billing/models/operations";

let value: TransactionsCreateRequestBody = {
  items: [
    {
      priceId: "<id>",
      quantity: 7562.87,
    },
  ],
  status: "billed",
  customerId: "<id>",
  addressId: "<id>",
  productId: "<id>",
  currencyCode: "LYD",
  paymentDetails: {
    paymentMethod: "MOBILE_MONEY",
    paymentProvider: "MTN",
    amount: 7018.41,
    currencyCode: "ANG",
    mobileNetwork: "<value>",
    phoneSuffix: "<value>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                | [operations.TransactionsCreateItems](../../models/operations/transactionscreateitems.md)[]                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `status`                                                                                                               | [operations.TransactionsCreateStatus](../../models/operations/transactionscreatestatus.md)                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customerId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `addressId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `productId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `currencyCode`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `paymentDetails`                                                                                                       | *operations.PaymentDetails*                                                                                            | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `subscriptionId`                                                                                                       | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `discountId`                                                                                                           | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `collectionMode`                                                                                                       | [operations.TransactionsCreateCollectionMode](../../models/operations/transactionscreatecollectionmode.md)             | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `customData`                                                                                                           | [operations.TransactionsCreateCustomData](../../models/operations/transactionscreatecustomdata.md)                     | :heavy_minus_sign:                                                                                                     | Any valid JSON value                                                                                                   |
| `currentBillingPeriod`                                                                                                 | [operations.TransactionsCreateCurrentBillingPeriod](../../models/operations/transactionscreatecurrentbillingperiod.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |