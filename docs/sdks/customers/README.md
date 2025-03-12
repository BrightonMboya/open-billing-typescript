# Customers
(*customers*)

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
  const result = await openBilling.customers.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpenBillingCore } from "open-billing/core.js";
import { customersList } from "open-billing/funcs/customersList.js";

// Use `OpenBillingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const openBilling = new OpenBillingCore({
  security: {
    bearer: process.env["OPENBILLING_BEARER"] ?? "",
    organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await customersList(openBilling);

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

**Promise\<[operations.CustomersListResponseBody[]](../../models/.md)\>**

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
  const result = await openBilling.customers.create({
    email: "Loyal79@yahoo.com",
    name: "<value>",
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
import { customersCreate } from "open-billing/funcs/customersCreate.js";

// Use `OpenBillingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const openBilling = new OpenBillingCore({
  security: {
    bearer: process.env["OPENBILLING_BEARER"] ?? "",
    organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await customersCreate(openBilling, {
    email: "Loyal79@yahoo.com",
    name: "<value>",
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
| `request`                                                                                                                                                                      | [operations.CustomersCreateRequestBody](../../models/operations/customerscreaterequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CustomersCreateResponseBody](../../models/operations/customerscreateresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.CustomersCreateResponseBody | 400                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

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
  const result = await openBilling.customers.get({
    customerId: "<id>",
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
import { customersGet } from "open-billing/funcs/customersGet.js";

// Use `OpenBillingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const openBilling = new OpenBillingCore({
  security: {
    bearer: process.env["OPENBILLING_BEARER"] ?? "",
    organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await customersGet(openBilling, {
    customerId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.CustomersGetRequest](../../models/operations/customersgetrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CustomersGetResponseBody](../../models/operations/customersgetresponsebody.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.CustomersGetResponseBody | 404                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

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
  const result = await openBilling.customers.update({
    customerId: "<id>",
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
import { customersUpdate } from "open-billing/funcs/customersUpdate.js";

// Use `OpenBillingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const openBilling = new OpenBillingCore({
  security: {
    bearer: process.env["OPENBILLING_BEARER"] ?? "",
    organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await customersUpdate(openBilling, {
    customerId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.CustomersUpdateRequest](../../models/operations/customersupdaterequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CustomersUpdateResponseBody](../../models/operations/customersupdateresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.CustomersUpdateResponseBody | 404                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |