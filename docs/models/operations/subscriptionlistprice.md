# SubscriptionListPrice

## Example Usage

```typescript
import { SubscriptionListPrice } from "open-billing/models/operations";

let value: SubscriptionListPrice = {
  productId: "<id>",
  type: "custom",
  name: "<value>",
  billingCycle: {
    interval: "week",
    frequency: 5010.63,
  },
  trialPeriod: {
    interval: "week",
    frequency: 3649.12,
  },
  unitPrice: {
    amount: 2609.04,
    currencyCode: "LBP",
  },
  status: "archived",
  id: "<id>",
  createdAt: "1718994221566",
  updatedAt: "1741742924939",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `productId`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `description`                                                                                                                          | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `type`                                                                                                                                 | [operations.SubscriptionListSubscriptionsType](../../models/operations/subscriptionlistsubscriptionstype.md)                           | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `name`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `billingCycle`                                                                                                                         | [operations.SubscriptionListSubscriptionsBillingCycle](../../models/operations/subscriptionlistsubscriptionsbillingcycle.md)           | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `trialPeriod`                                                                                                                          | [operations.SubscriptionListTrialPeriod](../../models/operations/subscriptionlisttrialperiod.md)                                       | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `unitPrice`                                                                                                                            | [operations.SubscriptionListUnitPrice](../../models/operations/subscriptionlistunitprice.md)                                           | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `status`                                                                                                                               | [operations.SubscriptionListSubscriptionsResponse200Status](../../models/operations/subscriptionlistsubscriptionsresponse200status.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `customData`                                                                                                                           | [operations.SubscriptionListSubscriptionsCustomData](../../models/operations/subscriptionlistsubscriptionscustomdata.md)               | :heavy_minus_sign:                                                                                                                     | Any valid JSON value                                                                                                                   |
| `id`                                                                                                                                   | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `createdAt`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `updatedAt`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |