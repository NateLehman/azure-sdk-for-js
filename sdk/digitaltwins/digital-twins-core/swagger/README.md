# KeyVault Keys Swagger Configuration

> see https://aka.ms/autorest

```yaml
typescript:
  package-name: "@azure/digital-twins-core"
  title: GeneratedClient
  description: Digitaltwins Client
  use-core-v2: false
  disable-async-iterators: true
use-extension:
  "@autorest/typescript": "6.0.0-beta.17"
generate-metadata: false
add-credentials: false
license-header: MICROSOFT_MIT_NO_VERSION
input-file: https://github.com/Azure/azure-rest-api-specs/blob/1233f92f47db0cc4201cb4065180d9f4b67d2b6b/specification/digitaltwins/data-plane/Microsoft.DigitalTwins/preview/2021-06-30-preview/digitaltwins.json
output-folder: ../
source-code-folder-path: ./src/generated
package-version: 1.1.0-beta.1
```

## Customizations for Track 2 Generator

See the [AutoRest samples](https://github.com/Azure/autorest/tree/master/Samples/3b-custom-transformations)
for more about how we're customizing things.

### Replace eTag with etag

```yaml
directive:
  - from: swagger-document
    where: $.paths.*.*.responses.*.headers
    transform: >
      if ($["ETag"]) { $["etag"] = $["ETag"]; delete $["ETag"]; }
```

### Replace dtTimestamp with timestamp

```yaml
directive:
  - from: swagger-document
    where: $.paths..parameters[*]
    transform: >
      if ($.name === "dt-timestamp") {
        $["x-ms-client-name"] = "timestamp";
      }
```

### Expose If-None_Match header

```yaml
directive:
  - from: swagger-document
    where: $..[?(@.name=='If-None-Match')]
    transform: delete $.enum;
```

### Remove grouping

```yaml
directive:
  - from: swagger-document
    where: $.parameters[*]
    transform: delete $["x-ms-parameter-grouping"];
```
