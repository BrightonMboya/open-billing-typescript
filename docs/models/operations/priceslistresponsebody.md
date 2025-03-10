# PricesListResponseBody

## Example Usage

```typescript
import { PricesListResponseBody } from "open-billing/models/operations";

let value: PricesListResponseBody = {
  productId: "<id>",
  type: "custom",
  name: "<value>",
  billingCycle: {
    interval: "month",
    frequency: 9619.37,
  },
  trialPeriod: {
    interval: "week",
    frequency: 2408.29,
  },
  unitPrice: {
    amount: 1002.94,
    currencyCode: "ALL",
  },
  status: "archived",
  id: "<id>",
  createdAt: "1731187660468",
  updatedAt: "1741578609351",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `productId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `type`                                                                                 | [operations.PricesListType](../../models/operations/priceslisttype.md)                 | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `billingCycle`                                                                         | [operations.PricesListBillingCycle](../../models/operations/priceslistbillingcycle.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `trialPeriod`                                                                          | [operations.PricesListTrialPeriod](../../models/operations/priceslisttrialperiod.md)   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `unitPrice`                                                                            | [operations.PricesListUnitPrice](../../models/operations/priceslistunitprice.md)       | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `status`                                                                               | [operations.PricesListStatus](../../models/operations/pricesliststatus.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `customData`                                                                           | [operations.PricesListCustomData](../../models/operations/priceslistcustomdata.md)     | :heavy_minus_sign:                                                                     | Any valid JSON value                                                                   |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `createdAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `updatedAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |