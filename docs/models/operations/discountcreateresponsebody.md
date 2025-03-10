# DiscountCreateResponseBody

Creates a new Discount

## Example Usage

```typescript
import { DiscountCreateResponseBody } from "open-billing/models/operations";

let value: DiscountCreateResponseBody = {
  id: "<id>",
  amount: "904.05",
  currencyCode: "PYG",
  type: "flat_per_seat",
  createdAt: "1720396163272",
  updatedAt: "1741576157934",
  restrictedTo: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [operations.DiscountCreateDiscountsStatus](../../models/operations/discountcreatediscountsstatus.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `enabledForCheckout`                                                                                 | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `amount`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `currencyCode`                                                                                       | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | [operations.DiscountCreateDiscountsType](../../models/operations/discountcreatediscountstype.md)     | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `recur`                                                                                              | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `maxRecurringIntervals`                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `usageLimit`                                                                                         | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `expiresAt`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `customData`                                                                                         | *any*                                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `timesUsed`                                                                                          | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `createdAt`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `updatedAt`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `restrictedTo`                                                                                       | *string*[]                                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |