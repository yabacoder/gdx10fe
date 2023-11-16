import { useState, useEffect } from 'react';
import "./style.css";
import ExampleTheme from "./themes/ExampleTheme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
// import TreeViewPlugin from "./plugins/TreeViewPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";


import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
// import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";

function Placeholder({ placeholder }) {
  return <div className="editor-placeholder">{placeholder}</div>;
}

const editorConfig = {
  // The editor theme
  theme: ExampleTheme,
  // Handling of errors during update 
  onError(error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode
  ]
};



export default function Editor({ placeholder, editContent, setEditContent }) {
  const [content, setContent] = useState('');

  // function onChange(editorState) {
  //   editorState.read(() => {
  //     // Read the contents of the EditorState here.
  //     const root = $getRoot();
  //     const selection = $getSelection();

  //     console.log(root, selection);
  //   });
  // }

  const OnChangePlugin = () => {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
      return editor.registerUpdateListener((listener) => {
        // console.log('DATA', listener.editorState.toJSON());
        console.log('DATA', listener.editorState);
      });
    }, [editor]);

    return null;
  };

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder placeholder={placeholder} />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <OnChangePlugin />
          <HistoryPlugin />
          {/* <TreeViewPlugin /> */}
          <AutoFocusPlugin />
          {/* <CodeHighlightPlugin /> */}
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
    </LexicalComposer>
  );
}
