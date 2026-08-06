import {
  ClassicEditor,
  Context,
  ContextWatchdog,

  Essentials,
  Paragraph,
  Heading,

  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  CodeBlock,
  Subscript,
  Superscript,

  Font,
  FontFamily,
  FontSize,
  FontColor,
  FontBackgroundColor,

  Highlight,
  RemoveFormat,

  Alignment,

  List,
  ListProperties,
  TodoList,

  Indent,
  IndentBlock,

  BlockQuote,

  Link,
  AutoLink,

  Image,
  ImageToolbar,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageUpload,
  AutoImage,

  Table,
  TableToolbar,
  TableProperties,
  TableCellProperties,

  MediaEmbed,

  HorizontalLine,

  FindAndReplace,

  SpecialCharacters,
  SpecialCharactersEssentials,

  PasteFromOffice,

  Autoformat,

  Markdown,

  GeneralHtmlSupport,

  Mention,

  WordCount
} from 'ckeditor5';

import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';

import 'ckeditor5/ckeditor5.css';
import {useState, useEffect} from "react";

function App() {
  const [content, setContent] = useState('')

  useEffect(() => {
    console.log(content)
  }, [content])

  return (
    <CKEditorContext
      context={Context}
      contextWatchdog={ContextWatchdog}
    >
      <CKEditor
        editor={ClassicEditor}
        data={content}
        onChange={(event, editor) => {
          const data = editor.getData(); // HTML
          setContent(data);
        }}
        config={{
          licenseKey: 'GPL',

          plugins: [
            Essentials,
            Paragraph,
            Heading,

            Bold,
            Italic,
            Underline,
            Strikethrough,
            Code,
            CodeBlock,
            Subscript,
            Superscript,

            Font,
            FontFamily,
            FontSize,
            FontColor,
            FontBackgroundColor,

            Highlight,
            RemoveFormat,

            Alignment,

            List,
            ListProperties,
            TodoList,

            Indent,
            IndentBlock,

            BlockQuote,

            Link,
            AutoLink,

            Image,
            ImageToolbar,
            ImageCaption,
            ImageResize,
            ImageStyle,
            ImageUpload,
            AutoImage,

            Table,
            TableToolbar,
            TableProperties,
            TableCellProperties,

            MediaEmbed,

            HorizontalLine,

            FindAndReplace,

            SpecialCharacters,
            SpecialCharactersEssentials,

            PasteFromOffice,

            Autoformat,

            Markdown,

            GeneralHtmlSupport,

            Mention,

            WordCount
          ],

          toolbar: [
            'undo', 'redo',
            '|',
            'heading',
            '|',
            'fontFamily',
            'fontSize',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'code',
            'removeFormat',
            '|',
            'alignment',
            '|',
            'bulletedList',
            'numberedList',
            'todoList',
            '|',
            'outdent',
            'indent',
            '|',
            'link',
            'insertTable',
            'uploadImage',
            'mediaEmbed',
            'blockQuote',
            'horizontalLine',
            'codeBlock',
            'specialCharacters',
            'findAndReplace'
          ],

          image: {
            toolbar: [
              'imageStyle:inline',
              'imageStyle:block',
              'imageStyle:side',
              '|',
              'toggleImageCaption',
              'imageTextAlternative',
              '|',
              'resizeImage'
            ]
          },

          table: {
            contentToolbar: [
              'tableColumn',
              'tableRow',
              'mergeTableCells',
              'tableProperties',
              'tableCellProperties'
            ]
          },

          htmlSupport: {
            allow: [
              {
                name: /.*/,
                attributes: true,
                classes: true,
                styles: true
              }
            ]
          },

          link: {
            addTargetToExternalLinks: true,
            defaultProtocol: 'https://'
          },

          mention: {
            feeds: [
              {
                marker: '@',
                feed: []
              }
            ]
          }
        }}
      />
    </CKEditorContext>
  );
}

export default App;