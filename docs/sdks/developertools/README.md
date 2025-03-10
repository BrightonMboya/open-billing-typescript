# DeveloperTools
(*developerTools*)

## Overview

### Available Operations

* [create](#create)
* [createPaymentProviderKey](#createpaymentproviderkey)

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
  const result = await openBilling.developerTools.create();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpenBillingCore } from "open-billing/core.js";
import { developerToolsCreate } from "open-billing/funcs/developerToolsCreate.js";

// Use `OpenBillingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const openBilling = new OpenBillingCore({
  security: {
    bearer: process.env["OPENBILLING_BEARER"] ?? "",
    organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await developerToolsCreate(openBilling);

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

**Promise\<[string](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createPaymentProviderKey

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
  const result = await openBilling.developerTools.createPaymentProviderKey();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpenBillingCore } from "open-billing/core.js";
import { developerToolsCreatePaymentProviderKey } from "open-billing/funcs/developerToolsCreatePaymentProviderKey.js";

// Use `OpenBillingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const openBilling = new OpenBillingCore({
  security: {
    bearer: process.env["OPENBILLING_BEARER"] ?? "",
    organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await developerToolsCreatePaymentProviderKey(openBilling);

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
| `request`                                                                                                                                                                      | [operations.PostApiKeysPaymentProviderRequestBody](../../models/operations/postapikeyspaymentproviderrequestbody.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[string](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |