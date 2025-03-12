# AddressesCreateResponseBody

Creates a new Address

## Example Usage

```typescript
import { AddressesCreateResponseBody } from "open-billing/models/operations";

let value: AddressesCreateResponseBody = {
  id: "<id>",
  customData: {},
  updatedAt: "1741732326552",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `firstLine`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `customData`                                                                                 | [operations.AddressesCreateCustomData](../../models/operations/addressescreatecustomdata.md) | :heavy_check_mark:                                                                           | Any valid JSON value                                                                         |
| `city`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `status`                                                                                     | [operations.AddressesCreateStatus](../../models/operations/addressescreatestatus.md)         | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `updatedAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `customerId`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |