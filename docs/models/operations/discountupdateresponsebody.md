# DiscountUpdateResponseBody

Updates a Discount by ID

## Example Usage

```typescript
import { DiscountUpdateResponseBody } from "open-billing/models/operations";

let value: DiscountUpdateResponseBody = {
  id: "<id>",
  amount: "739.89",
  currencyCode: "UYU",
  type: "flat_per_seat",
  createdAt: "1726928668031",
  updatedAt: "1741723922819",
  restrictedTo: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [operations.DiscountUpdateDiscountsStatus](../../models/operations/discountupdatediscountsstatus.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `enabledForCheckout`                                                                                 | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `amount`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `currencyCode`                                                                                       | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | [operations.DiscountUpdateDiscountsType](../../models/operations/discountupdatediscountstype.md)     | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `recur`                                                                                              | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `maxRecurringIntervals`                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `usageLimit`                                                                                         | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `expiresAt`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `customData`                                                                                         | *any*                                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `timesUsed`                                                                                          | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `createdAt`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `updatedAt`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `restrictedTo`                                                                                       | *string*[]                                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |