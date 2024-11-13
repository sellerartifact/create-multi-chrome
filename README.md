# create-multi-chrome

> Implement multi-instance opening of Google Chrome in windows (independent environment, independent cookies)

## Setup

Install the dependencies:

```bash
pnpm install create-multi-chrome --save
```

## Usage

```

import { genChromeLnkOptions, makeSync } from "create-multi-chrome";

async function run() {
  for (let i = 0; i < 1; i++) {
    try {
      makeSync(
        genChromeLnkOptions({
          filepath: `C:/Program Files/Google/Chrome/Application/chrome.exe`,
          storagePath: `E:/Program Files/GoogleChrome${i}`,
          linkName: `Google Chrome${i}`,
        })
      );
    } catch (error) {
      console.error(error);
    }
  }
}

run();


```

run the code above, you will get a new chrome instance in your windows.

<p align="center">
    <img alt="result" width="100%" src="./screenshot/result.jpg">
</p>
