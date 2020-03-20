graphql-type-regexp2
====================

RegExp scalar type for [GraphQL.js](https://github.com/graphql/graphql-js).
Inspired by [`graphql-type-json`](https://github.com/taion/graphql-type-json).

About
---

fork from [graphql-type-regexp](https://github.com/kachkaev/graphql-type-regexp)

1. typescript
2. breaking change to use `/g.*b/` not `g.*b`, this will allow use flags

Install
-------

```
yarn add graphql-type-regexp2
```

Usage
---

In schema:

```graphql
scalar RegExp

# ...

type Query {
    things(filter: RegExp): [Thing!]
    # ...
  }
```

In resolvers:

```ts
import GraphQLRegExp from 'graphql-type-regexp2';
```

In queries / mutations:

```graphql
query {
  profiles(filter: "/g.*b/") {
    id
  }
}
```

The resolver will receive `new RegExp("g.*b")`, which is the same as `/g.*b/` (will match `github` and `gitlab`).

Example:

*   https://gitlab.com/kachkaev/website-graphql-server/blob/master/src/schema.graphql

*   https://gitlab.com/kachkaev/website-graphql-server/blob/master/src/resolvers.ts
