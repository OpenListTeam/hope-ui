# @hope-ui/solid

A composable and accessible component library that gives you the foundation to build your next SolidJS application.

## Documentation

For full documentation, visit [hope-ui.com](https://hope-ui.com/).

## Installation

This package is not published to npm. Install directly from the `dist` branch:

```sh
# With npm
npm install github:OpenListTeam/hope-ui#dist @stitches/core solid-transition-group

# With yarn
yarn add github:OpenListTeam/hope-ui#dist @stitches/core solid-transition-group

# With pnpm
pnpm add github:OpenListTeam/hope-ui#dist @stitches/core solid-transition-group
```

tsconfig.json

```json
{
  "compilerOptions": {
    "paths": {
      "@stitches/core/types/*": ["./node_modules/@stitches/core/types/*"]
    }
  }
}
```

## License

This project is licensed under the MIT License.
