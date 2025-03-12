# CustomersCreateResponseBody

Creates a new Customer

## Example Usage

```typescript
import { CustomersCreateResponseBody } from "open-billing/models/operations";

let value: CustomersCreateResponseBody = {
  id: "<id>",
  email: "Tobin_West45@yahoo.com",
  name: "<value>",
  customData: {},
  createdAt: "1717587837505",
  updatedAt: "1741750708014",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `email`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `status`                                                                                                       | [operations.CustomersCreateCustomersStatus](../../models/operations/customerscreatecustomersstatus.md)         | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `customData`                                                                                                   | [operations.CustomersCreateCustomersCustomData](../../models/operations/customerscreatecustomerscustomdata.md) | :heavy_check_mark:                                                                                             | Any valid JSON value                                                                                           |
| `createdAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `updatedAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |