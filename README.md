## License

MIT License

Copyright (c) 2021 shajunxing

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Homepage

<https://github.com/shajunxing/vscode-extension-different-ways-to-run>

## Usage

Right click in file editor, select a way to run current file in terminal.

## Introduction

In many situations, automatically determine how to run a script file by it's extension or something else is totally inflexible and not what I want. So I just put all the options I often used into one menu, which is simple, robust and very flexible. Hope you'll like it too.

Because vscode extersion lack dynamic mechanism, my code is ugly and reductant, each menu entry has to appear in three places, just as shown below.

*package.json*
```json
"contributes": {
    "commands": [
        {
            "command": "run",
            "title": "Run"
        },
        {
            "command": "run_qjs",
            "title": "Run with qjs"
        },
        {
            "command": "run_node",
            "title": "Run with node"
        },
```

*package.json*
```json
"menus": {
    "editor/context": [
        {
            "command": "run"
        },
        {
            "command": "run_qjs"
        },
        {
            "command": "run_node"
        },
```

*main.js*
```javascript
const runConfig = {
    'run': ['', ''],
    'run_qjs': ['qjs ', ''],
    'run_node': ['node ', ''],
```

It's so stupid, anybody has better idea, please tell me.