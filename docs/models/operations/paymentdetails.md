# PaymentDetails


## Supported Types

### `operations.One`

```typescript
const value: operations.One = {
  paymentMethod: "MOBILE_MONEY",
  paymentProvider: "ORANGE",
  amount: 2871.53,
  currencyCode: "MMK",
  mobileNetwork: "<value>",
  phoneSuffix: "<value>",
};
```

### `operations.Two`

```typescript
const value: operations.Two = {
  paymentMethod: "CARD",
  paymentProvider: "FLUTTERWAVE",
  amount: 7396.33,
  currencyCode: "XPF",
  cardLast4: "<value>",
  cardBrand: "<value>",
  cardExpMonth: 277990,
  cardExpYear: 793282,
  cardHolderName: "<value>",
};
```

### `operations.Three`

```typescript
const value: operations.Three = {
  paymentMethod: "BANK_TRANSFER",
  paymentProvider: "TIGO",
  amount: 5802.38,
  currencyCode: "SLE",
  bankReference: "<value>",
  bankName: "<value>",
};
```

