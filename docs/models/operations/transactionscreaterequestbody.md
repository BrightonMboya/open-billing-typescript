# TransactionsCreateRequestBody

## Example Usage

```typescript
import { TransactionsCreateRequestBody } from "open-billing/models/operations";

let value: TransactionsCreateRequestBody = {
  items: [
    {
      priceId: "<id>",
      quantity: 9234.56,
    },
  ],
  status: "billed",
  customerId: "<id>",
  addressId: "<id>",
  productId: "<id>",
  currencyCode: "INR",
  paymentDetails: {
    paymentMethod: "CARD",
    paymentProvider: "FLUTTERWAVE",
    amount: 9838.54,
    currencyCode: "QAR",
    cardLast4: "<value>",
    cardBrand: "<value>",
    cardExpMonth: 389548,
    cardExpYear: 263767,
    cardHolderName: "<value>",
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