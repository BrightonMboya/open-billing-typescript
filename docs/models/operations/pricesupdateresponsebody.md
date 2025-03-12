# PricesUpdateResponseBody

## Example Usage

```typescript
import { PricesUpdateResponseBody } from "open-billing/models/operations";

let value: PricesUpdateResponseBody = {
  productId: "<id>",
  type: "standard",
  name: "<value>",
  billingCycle: {
    interval: "year",
    frequency: 6360.61,
  },
  trialPeriod: {
    interval: "day",
    frequency: 1605.38,
  },
  unitPrice: {
    amount: 7963.92,
    currencyCode: "XPF",
  },
  status: "active",
  id: "<id>",
  createdAt: "1728885294912",
  updatedAt: "1741771725245",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `productId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [operations.PricesUpdatePricesType](../../models/operations/pricesupdatepricestype.md)                 | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `billingCycle`                                                                                         | [operations.PricesUpdatePricesBillingCycle](../../models/operations/pricesupdatepricesbillingcycle.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `trialPeriod`                                                                                          | [operations.PricesUpdatePricesTrialPeriod](../../models/operations/pricesupdatepricestrialperiod.md)   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `unitPrice`                                                                                            | [operations.PricesUpdatePricesUnitPrice](../../models/operations/pricesupdatepricesunitprice.md)       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `status`                                                                                               | [operations.PricesUpdatePricesStatus](../../models/operations/pricesupdatepricesstatus.md)             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `customData`                                                                                           | [operations.PricesUpdatePricesCustomData](../../models/operations/pricesupdatepricescustomdata.md)     | :heavy_minus_sign:                                                                                     | Any valid JSON value                                                                                   |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `createdAt`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `updatedAt`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |