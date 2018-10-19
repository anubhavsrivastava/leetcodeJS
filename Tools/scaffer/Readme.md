## Description

This tool - scaffer creates a folder structure for a particular leetcode

## Usage

You would need leetcode problem url, eg https://leetcode.com/problems/search-in-a-binary-search-tree/
Command line usage

    node index.js "https://leetcode.com/problems/search-in-a-binary-search-tree/"

or

    npm start -- https://leetcode.com/problems/search-in-a-binary-search-tree/

By default it scaffolds into relative directory '../../' from directory of project. This is configurable under `package.json/rootPath`
