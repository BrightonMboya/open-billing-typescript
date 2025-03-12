# CustomersGetResponseBody

Get a Customer

## Example Usage

```typescript
import { CustomersGetResponseBody } from "open-billing/models/operations";

let value: CustomersGetResponseBody = {
  id: "<id>",
  email: "Hildegard.Fritsch25@gmail.com",
  name: "<value>",
  customData: {},
  createdAt: "1710627593196",
  updatedAt: "1741707596610",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `email`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `status`                                                                               | [operations.CustomersGetStatus](../../models/operations/customersgetstatus.md)         | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `customData`                                                                           | [operations.CustomersGetCustomData](../../models/operations/customersgetcustomdata.md) | :heavy_check_mark:                                                                     | Any valid JSON value                                                                   |
| `createdAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `updatedAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |