# Details

## Example Usage

```typescript
import { Details } from "open-billing/models/operations";

let value: Details = {
  total: {
    subtotal: 3674.75,
    discount: 7068.72,
    grandTotal: 6495.34,
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `total`                                              | [operations.Total](../../models/operations/total.md) | :heavy_check_mark:                                   | N/A                                                  |