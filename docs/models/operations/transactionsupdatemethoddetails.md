# TransactionsUpdateMethodDetails


## Supported Types

### `operations.TransactionsUpdateMethodDetails1`

```typescript
const value: operations.TransactionsUpdateMethodDetails1 = {
  paymentMethod: "MOBILE_MONEY",
  details: {
    network: "<value>",
    phoneSuffix: "<value>",
  },
};
```

### `operations.TransactionsUpdateMethodDetails2`

```typescript
const value: operations.TransactionsUpdateMethodDetails2 = {
  paymentMethod: "CARD",
  details: {
    last4: "<value>",
    brand: "<value>",
    expMonth: 5376.23,
    expYear: 1984.06,
    cardholderName: "<value>",
  },
};
```

### `operations.TransactionsUpdateMethodDetails3`

```typescript
const value: operations.TransactionsUpdateMethodDetails3 = {
  paymentMethod: "BANK_TRANSFER",
  details: {
    bankName: "<value>",
    bankReference: "<value>",
  },
};
```

