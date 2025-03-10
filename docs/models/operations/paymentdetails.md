# PaymentDetails


## Supported Types

### `operations.One`

```typescript
const value: operations.One = {
  paymentMethod: "MOBILE_MONEY",
  paymentProvider: "SELCOM",
  amount: 3165.5,
  currencyCode: "TJS",
  mobileNetwork: "<value>",
  phoneSuffix: "<value>",
};
```

### `operations.Two`

```typescript
const value: operations.Two = {
  paymentMethod: "CARD",
  paymentProvider: "AIRTEL",
  amount: 6339.82,
  currencyCode: "SDG",
  cardLast4: "<value>",
  cardBrand: "<value>",
  cardExpMonth: 155978,
  cardExpYear: 426002,
  cardHolderName: "<value>",
};
```

### `operations.Three`

```typescript
const value: operations.Three = {
  paymentMethod: "BANK_TRANSFER",
  paymentProvider: "DPO",
  amount: 1035.78,
  currencyCode: "ALL",
  bankReference: "<value>",
  bankName: "<value>",
};
```

