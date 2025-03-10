# Prices
(*prices*)

## Overview

### Available Operations

* [list](#list)
* [create](#create)
* [get](#get)
* [update](#update)

## list

### Example Usage

```typescript
import { OpenBilling } from "open-billing";

const openBilling = new OpenBilling({
  security: {
    bearer: process.env["OPENBILLING_BEARER"] ?? "",
    organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const result = await openBilling.prices.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpenBillingCore } from "open-billing/core.js";
import { pricesList } from "open-billing/funcs/pricesList.js";

// Use `OpenBillingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const openBilling = new OpenBillingCore({
  security: {
    bearer: process.env["OPENBILLING_BEARER"] ?? "",
    organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await pricesList(openBilling);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PricesListResponseBody[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## create

### Example Usage

```typescript
import { OpenBilling } from "open-billing";

const openBilling = new OpenBilling({
  security: {
    bearer: process.env["OPENBILLING_BEARER"] ?? "",
    organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const result = await openBilling.prices.create({
    productId: "<id>",
    type: "standard",
    name: "<value>",
    billingCycle: {
      interval: "month",
      frequency: 4174.58,
    },
    trialPeriod: {
      interval: "day",
      frequency: 690.25,
    },
    unitPrice: {
      amount: 7964.74,
      currencyCode: "XOF",
    },
    status: "active",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpenBillingCore } from "open-billing/core.js";
import { pricesCreate } from "open-billing/funcs/pricesCreate.js";

// Use `OpenBillingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const openBilling = new OpenBillingCore({
  security: {
    bearer: process.env["OPENBILLING_BEARER"] ?? "",
    organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await pricesCreate(openBilling, {
    productId: "<id>",
    type: "standard",
    name: "<value>",
    billingCycle: {
      interval: "month",
      frequency: 4174.58,
    },
    trialPeriod: {
      interval: "day",
      frequency: 690.25,
    },
    unitPrice: {
      amount: 7964.74,
      currencyCode: "XOF",
    },
    status: "active",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PricesCreateRequestBody](../../models/operations/pricescreaterequestbody.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PricesCreateResponseBody[]](../../models/.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.PricesCreateResponseBody | 400                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## get

### Example Usage

```typescript
import { OpenBilling } from "open-billing";

const openBilling = new OpenBilling({
  security: {
    bearer: process.env["OPENBILLING_BEARER"] ?? "",
    organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const result = await openBilling.prices.get({
    priceId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpenBillingCore } from "open-billing/core.js";
import { pricesGet } from "open-billing/funcs/pricesGet.js";

// Use `OpenBillingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const openBilling = new OpenBillingCore({
  security: {
    bearer: process.env["OPENBILLING_BEARER"] ?? "",
    organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await pricesGet(openBilling, {
    priceId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PricesGetPriceRequest](../../models/operations/pricesgetpricerequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PricesGetPriceResponseBody[]](../../models/.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PricesGetPriceResponseBody | 404                               | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## update

### Example Usage

```typescript
import { OpenBilling } from "open-billing";

const openBilling = new OpenBilling({
  security: {
    bearer: process.env["OPENBILLING_BEARER"] ?? "",
    organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const result = await openBilling.prices.update({
    priceId: "<id>",
    requestBody: {},
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpenBillingCore } from "open-billing/core.js";
import { pricesUpdate } from "open-billing/funcs/pricesUpdate.js";

// Use `OpenBillingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const openBilling = new OpenBillingCore({
  security: {
    bearer: process.env["OPENBILLING_BEARER"] ?? "",
    organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await pricesUpdate(openBilling, {
    priceId: "<id>",
    requestBody: {},
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PricesUpdateRequest](../../models/operations/pricesupdaterequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PricesUpdateResponseBody[]](../../models/.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.PricesUpdateResponseBody | 400                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |