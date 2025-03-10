# ProductsCreateRequestBody

## Example Usage

```typescript
import { ProductsCreateRequestBody } from "open-billing/models/operations";

let value: ProductsCreateRequestBody = {
  name: "<value>",
  description: "along rim woot minus",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `description`                                                  | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `status`                                                       | [operations.Status](../../models/operations/status.md)         | :heavy_minus_sign:                                             | N/A                                                            |
| `customData`                                                   | [operations.CustomData](../../models/operations/customdata.md) | :heavy_minus_sign:                                             | Any valid JSON value                                           |