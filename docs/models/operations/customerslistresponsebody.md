# CustomersListResponseBody

## Example Usage

```typescript
import { CustomersListResponseBody } from "open-billing/models/operations";

let value: CustomersListResponseBody = {
  id: "<id>",
  email: "Kira_Upton@hotmail.com",
  name: "<value>",
  customData: {},
  createdAt: "1722813041251",
  updatedAt: "1741703037206",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `email`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [operations.CustomersListStatus](../../models/operations/customersliststatus.md)         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `customData`                                                                             | [operations.CustomersListCustomData](../../models/operations/customerslistcustomdata.md) | :heavy_check_mark:                                                                       | Any valid JSON value                                                                     |
| `createdAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |