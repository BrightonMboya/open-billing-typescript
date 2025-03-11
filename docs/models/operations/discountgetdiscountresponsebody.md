# DiscountGetDiscountResponseBody

## Example Usage

```typescript
import { DiscountGetDiscountResponseBody } from "open-billing/models/operations";

let value: DiscountGetDiscountResponseBody = {
  id: "<id>",
  amount: "160.54",
  currencyCode: "SSP",
  type: "flat_per_seat",
  createdAt: "1724565490120",
  updatedAt: "1741618284963",
  restrictedTo: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `status`                                                                                     | [operations.DiscountGetDiscountStatus](../../models/operations/discountgetdiscountstatus.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `enabledForCheckout`                                                                         | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `amount`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `currencyCode`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `type`                                                                                       | [operations.DiscountGetDiscountType](../../models/operations/discountgetdiscounttype.md)     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `recur`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `maxRecurringIntervals`                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `usageLimit`                                                                                 | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `expiresAt`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `customData`                                                                                 | *any*                                                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `timesUsed`                                                                                  | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `updatedAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `restrictedTo`                                                                               | *string*[]                                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |