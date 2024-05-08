# react-semantic-flex

react-semantic-flex is a library for React users.

how did you applied flex-related attributes?  
aren't you create style sheets and write class names, attributes, and import statements, ect.. ?

this will free you from troublesome work.

## Install

```
npm install react-semantic-flex
```

```
yarn add react-semantic-flex
```

```
pnpm add react-semantic-flex
```

## Usage

use `Flex` component and send flex-related properties which you want. (`display: flex;` is applied by default.)

```typescript
import { Flex } from "react-semantic-flex";

function Component() {
  return (
    <Flex flexDirection="column" justifyContents="center" alignItems="center">
      <div>hello</div>
      <div>world!</div>
    </Flex>
  );
}
```

by default, `Flex` is `div` tag. however, if you want to use semantic tag, please send `tagName` and tag-related properties. `Flex` will be rendered as the tag you want.

```typescript
import { Flex } from "react-semantic-flex";

function Component() {
  const inputId = "1";

  return (
    <>
      <Flex
        tagName="label"
        htmlFor={inputId}
        flexDirection="column"
        alignItems="center"
      >
        input label
      </Flex>
      <input id={inputId} />
    </>
  );
}
```

of course, you may want to styling `Flex` with not-flex-related attributes. `Flex` also support `className`.

```typescript
import { Flex } from "react-semantic-flex";

function Component() {
  return (
    <Flex flexDirection="column" alignItems="center" className="class-name">
      <Flex>1</Flex>
      <Flex>2</Flex>
    </Flex>
  );
}
```
