# PricesListResponseBody

## Example Usage

```typescript
import { PricesListResponseBody } from "open-billing/models/operations";

let value: PricesListResponseBody = {
  productId: "<id>",
  type: "standard",
  name: "<value>",
  billingCycle: {
    interval: "week",
    frequency: 1481.41,
  },
  trialPeriod: {
    interval: "year",
    frequency: 4783.7,
  },
  unitPrice: {
    amount: 4973.91,
    currencyCode: "NZD",
  },
  status: "active",
  id: "<id>",
  createdAt: "1714565305622",
  updatedAt: "1741768648941",
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