# PaymentTerms

## Example Usage

```typescript
import { PaymentTerms } from "open-billing/models/operations";

let value: PaymentTerms = {
  paymentInterval: "week",
  paymentFrequency: 2586.84,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `paymentInterval`                                                        | [operations.PaymentInterval](../../models/operations/paymentinterval.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `paymentFrequency`                                                       | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |