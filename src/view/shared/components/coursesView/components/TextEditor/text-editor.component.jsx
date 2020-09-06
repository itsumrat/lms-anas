import React, { Component } from 'react';
import './text-editor.styles.scss';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FastField } from 'formik';

export class TextEditorFormItemNotFast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      [
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
      ],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  render() {
    const { form, name, label } = this.props;
    console.log(form.values[name]);
    return (
      <div className="text-editor">
        <ReactQuill
          value={
            form.values[name] == undefined
              ? ''
              : form.values[name]
          }
          theme="snow"
          modules={this.modules}
          formats={this.formats}
          onChange={(value) => {
            form.setFieldValue(name, value);
          }}
        />
      </div>
      // <CKEditor
      //   // style={{height:'200px'}}
      //   editor={ClassicEditor}
      //   data=""
      //   onInit={(editor) => {
      //     // You can store the "editor" and use when it is needed.
      //
      //     editor.editing.view.change((writer) => {
      //       writer.setStyle(
      //         'height',
      //         `${
      //           !this.props.height
      //             ? '200px'
      //             : this.props.height
      //         }`,
      //         editor.editing.view.document.getRoot(),
      //       );
      //       writer.setStyle(
      //         'font-size',
      //         `${
      //           !this.props.fontSize
      //             ? '2em'
      //             : this.props.fontSize
      //         }`,
      //         editor.editing.view.document.getRoot(),
      //       );
      //     });
      //   }}
      //   onChange={(event, editor) => {
      //     // const data = editor.getData();
      //     //
      //     {
      //       this.props.setAttachments &&
      //         this.props.setAttachments({
      //           attachments: ReactHtmlParser(
      //             editor.getData(),
      //           ),
      //         });
      //     }
      //   }}
      //   onBlur={(event, editor) => {
      //
      //   }}
      //   onFocus={(event, editor) => {
      //
      //   }}
      // />
    );
  }
}

class TextEditor extends Component {
  render() {
    return (
      <FastField name={this.props.name}>
        {({ field, form, meta }) => (
          <TextEditorFormItemNotFast
            {...this.props}
            form={form}
          />
        )}
      </FastField>
    );
  }
}
export default TextEditor;
