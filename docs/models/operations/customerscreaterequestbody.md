# CustomersCreateRequestBody

## Example Usage

```typescript
import { CustomersCreateRequestBody } from "open-billing/models/operations";

let value: CustomersCreateRequestBody = {
  email: "Rosina.Williamson35@gmail.com",
  name: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `email`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `status`                                                                                     | [operations.CustomersCreateStatus](../../models/operations/customerscreatestatus.md)         | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `customData`                                                                                 | [operations.CustomersCreateCustomData](../../models/operations/customerscreatecustomdata.md) | :heavy_minus_sign:                                                                           | Any valid JSON value                                                                         |