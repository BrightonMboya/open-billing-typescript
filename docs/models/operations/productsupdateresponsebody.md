# ProductsUpdateResponseBody

Returns the updated Product

## Example Usage

```typescript
import { ProductsUpdateResponseBody } from "open-billing/models/operations";

let value: ProductsUpdateResponseBody = {
  id: "<id>",
  name: "<value>",
  description:
    "meh instead technician inasmuch sympathetically disappointment nor until",
  updatedAt: "1741544992073",
  customData: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `description`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `status`                                                                                                   | [operations.ProductsUpdateProductsStatus](../../models/operations/productsupdateproductsstatus.md)         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `createdAt`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `updatedAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `customData`                                                                                               | [operations.ProductsUpdateProductsCustomData](../../models/operations/productsupdateproductscustomdata.md) | :heavy_check_mark:                                                                                         | Any valid JSON value                                                                                       |