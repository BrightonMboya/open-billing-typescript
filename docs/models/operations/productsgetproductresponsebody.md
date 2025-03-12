# ProductsGetProductResponseBody

Returns a Product using its id

## Example Usage

```typescript
import { ProductsGetProductResponseBody } from "open-billing/models/operations";

let value: ProductsGetProductResponseBody = {
  id: "<id>",
  name: "<value>",
  description: "oh delete near unscramble inside",
  updatedAt: "1741699836004",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `description`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `status`                                                                                   | [operations.ProductsGetProductStatus](../../models/operations/productsgetproductstatus.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `createdAt`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `updatedAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |