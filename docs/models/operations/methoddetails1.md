# MethodDetails1

## Example Usage

```typescript
import { MethodDetails1 } from "open-billing/models/operations";

let value: MethodDetails1 = {
  paymentMethod: "MOBILE_MONEY",
  details: {
    network: "<value>",
    phoneSuffix: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                | [operations.MethodDetailsPaymentMethod](../../models/operations/methoddetailspaymentmethod.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `details`                                                                                      | [operations.MethodDetailsDetails](../../models/operations/methoddetailsdetails.md)             | :heavy_check_mark:                                                                             | N/A                                                                                            |