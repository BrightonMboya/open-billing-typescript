# AddressesUpdateResponseBody

Update an Address

## Example Usage

```typescript
import { AddressesUpdateResponseBody } from "open-billing/models/operations";

let value: AddressesUpdateResponseBody = {
  id: "<id>",
  customData: {},
  updatedAt: "1741733068571",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `firstLine`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `customData`                                                                                 | [operations.AddressesUpdateCustomData](../../models/operations/addressesupdatecustomdata.md) | :heavy_check_mark:                                                                           | Any valid JSON value                                                                         |
| `city`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `status`                                                                                     | [operations.AddressesUpdateStatus](../../models/operations/addressesupdatestatus.md)         | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `updatedAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `customerId`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |