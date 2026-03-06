# Hide Assets Folder

A Typora community plugin that hides folders ending with `.assets` in Typora's file tree/sidebar.

## Why

When writing Markdown in Typora, generated or auxiliary folders such as `xxx.assets` can clutter the sidebar.
This plugin removes those folders from the sidebar view so your note tree stays clean.

## Features

- Hides folder entries whose path ends with `.assets`
- Works in Typora sidebar/file tree
- Automatically injects and removes style on plugin load/unload
- Lightweight: no external dependencies

## What It Hides

The plugin targets these selectors:

```css
.file-node-content[data-path$=".assets"],
.file-node-content[data-path$=".assets/"],
.sidebar-content [data-path*=".assets"]
```

So typical folders like:

- `note.assets`
- `images.assets`

will be hidden from the sidebar.

## Installation

### Install from Typora Community Plugin Marketplace

After this plugin is merged into the community plugin list, install it from:

- `Settings` -> `Plugin Marketplace`

Search for `Hide Assets Folder` and install.

### Manual Installation

1. Open your Typora plugins directory.
2. Create folder:
   - `typora-community-plugin.hide-assets-folder`
3. Put these files in that folder:
   - `manifest.json`
   - `main.js`
4. Restart Typora.

## Compatibility

- Typora `>= 1.5.0`
- Typora Community Plugin Core `>= 2.0.0-beta.31`
- Platforms: `win32`, `linux`, `darwin`

## Development

### Local Files

- `manifest.json`: plugin metadata
- `main.js`: plugin runtime code (inject/remove CSS)

### Release Steps

1. Update `version` in `manifest.json`
2. Commit and push
3. Create git tag (for example `1.0.1`)
4. Build plugin package:
   - `zip plugin.zip main.js manifest.json`
5. Create GitHub Release and upload `plugin.zip`

## Repository

- Source: https://github.com/RunwangGuo/typora-plugin-hide-assets-folder
- Release: https://github.com/RunwangGuo/typora-plugin-hide-assets-folder/releases

## License

MIT
