
# Markdown WYSIWYG Editor

A versatile JavaScript-based Markdown editor that offers a seamless experience by allowing users to switch between a What-You-See-Is-What-You-Get (WYSIWYG) visual editor and a raw Markdown text editor. It comes with a customizable toolbar, undo/redo functionality, and intelligent Markdown-to-HTML (and vice-versa) conversion.

![image](https://github.com/user-attachments/assets/c5c9b670-adcd-4e69-b630-8a15c7fef9cd)


## Features

- **Dual Editing Modes:**
  - **WYSIWYG Mode:** Edit rich text visually with familiar formatting tools.
  - **Markdown Mode:** Directly write and edit Markdown syntax in a textarea.
- **Easy Mode Switching:** Instantly toggle between WYSIWYG and Markdown views using intuitive tabs.
- **Comprehensive Toolbar:**
  - Headings (H1, H2, H3)
  - Bold, Italic, Strikethrough
  - Hyperlinks
  - Unordered and Ordered Lists
  - Indent and Outdent (for lists)
  - Blockquotes
  - Horizontal Rules
  - Tables (with interactive grid selector)
  - Code Blocks and Inline Code
  - SVG icons for a clean and modern look
- **Smart Conversion:**
  - Uses Marked.js for Markdown → HTML
  - Custom-built HTML → Markdown parser
- **Undo/Redo** support in both modes
- **Customizable:**
  - Initial value
  - Toolbar visibility
  - Toolbar buttons
  - Table grid dimensions
  - `onUpdate` callback
- **Keyboard Shortcuts:**
  - `Tab` / `Shift+Tab`: Indent/outdent, table cell nav
  - `Ctrl+Z` / `Cmd+Z`: Undo
  - `Ctrl+Y` / `Ctrl+Shift+Z`: Redo
- **Lightweight and self-contained**

## Demo

You can run the `index.html` file in your browser to see a live demonstration of the editor.  
Want to host a live version? GitHub Pages is a good option.

## Installation / Setup

**Include CSS:**

```html
<link rel="stylesheet" href="dist/editor.css">
```

**Include JavaScript:**

```html
<!-- Dependency: Marked.js -->
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<!-- Editor Script -->
<script src="dist/editor.js"></script>
```

**Create an HTML Container:**

```html
<div id="myMarkdownEditor"></div>
```

**Initialize via JavaScript:**

```html
<script>
document.addEventListener('DOMContentLoaded', () => {
  const editor = new MarkdownWYSIWYG('myMarkdownEditor', {
    initialValue: "## Hello World!\n\nThis is **Markdown** content.",
    onUpdate: (markdownContent) => {
      console.log("Updated content:", markdownContent);
    }
  });
});
</script>
```

## Options

| Option             | Type     | Default | Description                              |
|--------------------|----------|---------|------------------------------------------|
| initialValue       | string   | ''      | The initial Markdown content to load.    |
| showToolbar        | boolean  | true    | Whether to display the toolbar.          |
| buttons            | array    | default | Custom toolbar button list.              |
| onUpdate           | function | null    | Callback triggered on content change.    |
| initialMode        | string   | 'wysiwyg' | Starting mode: `'wysiwyg'` or `'markdown'`. |
| tableGridMaxRows   | number   | 10      | Max rows in the insert table selector grid. |
| tableGridMaxCols   | number   | 10      | Max columns in the insert table selector grid. |

## Public Methods

- `getValue()`: Returns the current Markdown content as string.
- `setValue(markdownString, isInitialSetup)`: Sets the content of the editor.
- `switchToMode(mode)`: Switches mode: `'wysiwyg'` or `'markdown'`.
- `destroy()`: Destroys the editor and cleans up listeners.

## CDN Usage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/celsowm/markdown-wysiwyg/dist/editor.css" />
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/celsowm/markdown-wysiwyg/dist/editor.js"></script>
```

## HTML → Markdown Conversion

The `_htmlToMarkdown` function (and helpers) recursively convert HTML from the visual editor into valid Markdown:

- Converts tags like `<b>`, `<em>`, `<h1>`, `<ul>`, `<table>`, `<code>`, etc.
- Detects code blocks and inline code
- Properly formats nested lists and blockquotes
- Escapes special characters (`|`, `_`, etc.)
- Handles `<th>` vs `<td>` to produce proper Markdown tables

## Contributing

Contributions are welcome!

1. Fork the repo  
2. Create a feature branch  
3. Commit and push  
4. Open a pull request

## License

MIT License. See `LICENSE` file for details.
