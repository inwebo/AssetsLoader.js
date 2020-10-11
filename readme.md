# AssetsLoader.js

Asynchronously Load assets in the Browser with promises.

## Install

### Npm
```shell script
npm i @inwebo/assetsloader.js
```

### Yarn
```shell script
yarn i @inwebo/assetsloader.js
```

### Git
```shell script
git clone https://github.com/inwebo/AssetsLoader.js.git
```

## Use
```ecmascript 6
import {AssetsLoader} from '@inwebo/assetsloader.js'

const img = AssetsLoader.image('https://raw.githubusercontent.com/inwebo/Sprite.js/master/docs/assets/img/mario.png');

Promise.all([img])
    .then(([img]) => {
        // img const is available
        console.log(img);
    });
```