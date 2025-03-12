# Details

## Example Usage

```typescript
import { Details } from "open-billing/models/operations";

let value: Details = {
  total: {
    subtotal: 3183.79,
    discount: 1681.42,
    grandTotal: 5561.33,
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `total`                                              | [operations.Total](../../models/operations/total.md) | :heavy_check_mark:                                   | N/A                                                  |