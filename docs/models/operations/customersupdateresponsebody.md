# CustomersUpdateResponseBody

Update a Customer

## Example Usage

```typescript
import { CustomersUpdateResponseBody } from "open-billing/models/operations";

let value: CustomersUpdateResponseBody = {
  id: "<id>",
  email: "Haleigh.Nikolaus98@hotmail.com",
  name: "<value>",
  customData: {},
  createdAt: "1734948099355",
  updatedAt: "1741722536233",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `email`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `status`                                                                                                       | [operations.CustomersUpdateCustomersStatus](../../models/operations/customersupdatecustomersstatus.md)         | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `customData`                                                                                                   | [operations.CustomersUpdateCustomersCustomData](../../models/operations/customersupdatecustomerscustomdata.md) | :heavy_check_mark:                                                                                             | Any valid JSON value                                                                                           |
| `createdAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `updatedAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |