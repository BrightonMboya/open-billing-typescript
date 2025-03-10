# TransactionsGetMethodDetails


## Supported Types

### `operations.TransactionsGetMethodDetails1`

```typescript
const value: operations.TransactionsGetMethodDetails1 = {
  paymentMethod: "MOBILE_MONEY",
  details: {
    network: "<value>",
    phoneSuffix: "<value>",
  },
};
```

### `operations.TransactionsGetMethodDetails2`

```typescript
const value: operations.TransactionsGetMethodDetails2 = {
  paymentMethod: "CARD",
  details: {
    last4: "<value>",
    brand: "<value>",
    expMonth: 7140.54,
    expYear: 5165.56,
    cardholderName: "<value>",
  },
};
```

### `operations.TransactionsGetMethodDetails3`

```typescript
const value: operations.TransactionsGetMethodDetails3 = {
  paymentMethod: "BANK_TRANSFER",
  details: {
    bankName: "<value>",
    bankReference: "<value>",
  },
};
```

