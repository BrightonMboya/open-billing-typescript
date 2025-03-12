# PricesCreateResponseBody

## Example Usage

```typescript
import { PricesCreateResponseBody } from "open-billing/models/operations";

let value: PricesCreateResponseBody = {
  productId: "<id>",
  type: "standard",
  name: "<value>",
  billingCycle: {
    interval: "day",
    frequency: 3015.98,
  },
  trialPeriod: {
    interval: "week",
    frequency: 4561.41,
  },
  unitPrice: {
    amount: 6832.82,
    currencyCode: "QAR",
  },
  status: "active",
  id: "<id>",
  createdAt: "1722229394917",
  updatedAt: "1741713270078",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `productId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [operations.PricesCreatePricesType](../../models/operations/pricescreatepricestype.md)                 | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `billingCycle`                                                                                         | [operations.PricesCreatePricesBillingCycle](../../models/operations/pricescreatepricesbillingcycle.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `trialPeriod`                                                                                          | [operations.PricesCreatePricesTrialPeriod](../../models/operations/pricescreatepricestrialperiod.md)   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `unitPrice`                                                                                            | [operations.PricesCreatePricesUnitPrice](../../models/operations/pricescreatepricesunitprice.md)       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `status`                                                                                               | [operations.PricesCreatePricesStatus](../../models/operations/pricescreatepricesstatus.md)             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `customData`                                                                                           | [operations.PricesCreatePricesCustomData](../../models/operations/pricescreatepricescustomdata.md)     | :heavy_minus_sign:                                                                                     | Any valid JSON value                                                                                   |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `createdAt`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `updatedAt`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |