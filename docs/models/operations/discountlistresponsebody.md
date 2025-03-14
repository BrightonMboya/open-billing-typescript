# DiscountListResponseBody

## Example Usage

```typescript
import { DiscountListResponseBody } from "open-billing/models/operations";

let value: DiscountListResponseBody = {
  id: "<id>",
  amount: "618.83",
  currencyCode: "BSD",
  type: "flat_per_seat",
  createdAt: "1737740652990",
  updatedAt: "1741741053501",
  restrictedTo: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `status`                                                                       | [operations.DiscountListStatus](../../models/operations/discountliststatus.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `enabledForCheckout`                                                           | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `amount`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `currencyCode`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `type`                                                                         | [operations.DiscountListType](../../models/operations/discountlisttype.md)     | :heavy_check_mark:                                                             | N/A                                                                            |
| `recur`                                                                        | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `maxRecurringIntervals`                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `usageLimit`                                                                   | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `expiresAt`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `customData`                                                                   | *any*                                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |
| `timesUsed`                                                                    | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updatedAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `restrictedTo`                                                                 | *string*[]                                                                     | :heavy_check_mark:                                                             | N/A                                                                            |