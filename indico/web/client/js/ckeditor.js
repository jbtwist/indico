// This file is part of Indico.
// Copyright (C) 2002 - 2022 CERN
//
// Indico is free software; you can redistribute it and/or
// modify it under the terms of the MIT License; see the
// LICENSE file for more details.

export const getConfig = ({images = true} = {}) => ({
  fontFamily: {
    options: [
      'Sans Serif/"Liberation Sans", sans-serif',
      'Serif/"Liberation Serif", serif',
      'Monospace/"Liberation Mono", monospace',
    ],
  },
  toolbar: {
    shouldNotGroupWhenFull: false,
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      '|',
      'link',
      'fontColor',
      'fontBackgroundColor',
      'removeFormat',
      '|',
      'bulletedList',
      'numberedList',
      'outdent',
      'indent',
      '|',
      images && 'onlyInsertImage',
      'insertTable',
      '|',
      'subscript',
      'superscript',
      'blockQuote',
      'code',
      'horizontalLine',
      '|',
      'findAndReplace',
      'undo',
      'redo',
      '|',
      'sourceEditing',
    ].filter(Boolean),
  },
  plugins: [
    'Autoformat',
    images && 'AutoImage',
    'AutoLink',
    'BlockQuote',
    'Bold',
    'CloudServices',
    'Code',
    'CodeBlock',
    'Essentials',
    'FindAndReplace',
    'FontBackgroundColor',
    'FontColor',
    'GeneralHtmlSupport',
    'Heading',
    'HorizontalLine',
    images && 'Image',
    images && 'ImageCaption',
    images && 'OnlyInsertImage',
    images && 'ImageStyle',
    images && 'ImageToolbar',
    'Indent',
    'IndentBlock',
    'Italic',
    'Link',
    'List',
    images && 'MediaEmbed',
    'Paragraph',
    'PasteFromOffice',
    'RemoveFormat',
    'SourceEditing',
    'Strikethrough',
    'Subscript',
    'Superscript',
    'Table',
    'TableToolbar',
    'TableProperties',
    'TableCellProperties',
    'Underline',
  ].filter(Boolean),
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableProperties',
      'tableCellProperties',
    ],
  },
  htmlSupport: {
    allow: [
      {name: 'dl'},
      {name: 'dt'},
      {name: 'dd'},
      {name: 'div'},
      {name: 'span'},
      {name: 'pre'},
      {
        name: 'img',
        attributes: {
          usemap: true,
        },
      },
      {
        name: 'area',
        attributes: true,
      },
      {
        name: 'map',
        attributes: true,
      },
    ],
  },
});
