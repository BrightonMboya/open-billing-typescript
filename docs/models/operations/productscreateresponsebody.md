# ProductsCreateResponseBody

Creating Product endpoint

## Example Usage

```typescript
import { ProductsCreateResponseBody } from "open-billing/models/operations";

let value: ProductsCreateResponseBody = {
  id: "<id>",
  name: "<value>",
  description: "although dishearten unaccountably unconscious notwithstanding",
  updatedAt: "1741512431163",
  customData: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `description`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `status`                                                                                   | [operations.ProductsCreateStatus](../../models/operations/productscreatestatus.md)         | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `createdAt`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `updatedAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `customData`                                                                               | [operations.ProductsCreateCustomData](../../models/operations/productscreatecustomdata.md) | :heavy_check_mark:                                                                         | Any valid JSON value                                                                       |