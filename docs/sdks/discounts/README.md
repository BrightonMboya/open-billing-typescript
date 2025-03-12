# Discounts
(*discounts*)

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
  const result = await openBilling.discounts.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpenBillingCore } from "open-billing/core.js";
import { discountsList } from "open-billing/funcs/discountsList.js";

// Use `OpenBillingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const openBilling = new OpenBillingCore({
  security: {
    bearer: process.env["OPENBILLING_BEARER"] ?? "",
    organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await discountsList(openBilling);

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

**Promise\<[operations.DiscountListResponseBody[]](../../models/.md)\>**

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
  const result = await openBilling.discounts.create({
    id: "<id>",
    amount: 4865.89,
    currencyCode: "NZD",
    type: "percentage",
    createdAt: "1725593098493",
    updatedAt: "1741752773496",
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
import { discountsCreate } from "open-billing/funcs/discountsCreate.js";

// Use `OpenBillingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const openBilling = new OpenBillingCore({
  security: {
    bearer: process.env["OPENBILLING_BEARER"] ?? "",
    organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await discountsCreate(openBilling, {
    id: "<id>",
    amount: 4865.89,
    currencyCode: "NZD",
    type: "percentage",
    createdAt: "1725593098493",
    updatedAt: "1741752773496",
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
| `request`                                                                                                                                                                      | [operations.DiscountCreateRequestBody](../../models/operations/discountcreaterequestbody.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DiscountCreateResponseBody](../../models/operations/discountcreateresponsebody.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.DiscountCreateResponseBody | 400                               | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

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
  const result = await openBilling.discounts.get({
    discountId: "<id>",
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
import { discountsGet } from "open-billing/funcs/discountsGet.js";

// Use `OpenBillingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const openBilling = new OpenBillingCore({
  security: {
    bearer: process.env["OPENBILLING_BEARER"] ?? "",
    organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await discountsGet(openBilling, {
    discountId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DiscountGetDiscountRequest](../../models/operations/discountgetdiscountrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DiscountGetDiscountResponseBody[]](../../models/.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.DiscountGetDiscountResponseBody | 404                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

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
  const result = await openBilling.discounts.update({
    discountId: "<id>",
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
import { discountsUpdate } from "open-billing/funcs/discountsUpdate.js";

// Use `OpenBillingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const openBilling = new OpenBillingCore({
  security: {
    bearer: process.env["OPENBILLING_BEARER"] ?? "",
    organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await discountsUpdate(openBilling, {
    discountId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DiscountUpdateRequest](../../models/operations/discountupdaterequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DiscountUpdateResponseBody](../../models/operations/discountupdateresponsebody.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.DiscountUpdateResponseBody | 404                               | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |