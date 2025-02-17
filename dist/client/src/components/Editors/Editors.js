"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseEditor = exports.QueryEditor = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Editors_modules_css_1 = __importDefault(require("./Editors.modules.css"));
const react_1 = __importDefault(require("@monaco-editor/react"));
const helperFunctions_1 = require("../helperFunctions");
const QueryEditor = ({ setQuery, selectedQuery }) => {
    const handleChange = (value, ev) => {
        setQuery(value);
    };
    const query = helperFunctions_1.querySamples[selectedQuery];
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Editors_modules_css_1.default.container }, { children: (0, jsx_runtime_1.jsx)(react_1.default, { className: Editors_modules_css_1.default.editor, defaultLanguage: "graphql", value: query, onChange: handleChange, options: {
                scrollBeyondLastLine: true,
                wordWrap: 'wordWrapColumn',
            } }) })));
};
exports.QueryEditor = QueryEditor;
const ResponseEditor = ({ response }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Editors_modules_css_1.default.container }, { children: (0, jsx_runtime_1.jsx)(react_1.default, { className: Editors_modules_css_1.default.editor, defaultLanguage: "graphql", value: response, 
            // onChange={null}
            options: {
                scrollBeyondLastLine: true,
            } }) })));
};
exports.ResponseEditor = ResponseEditor;
