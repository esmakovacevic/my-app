import { Editor } from "@tinymce/tinymce-react";

import React from "react";

function EditorText({initialState,onChange,initialValue,onEditorChange}){
    return(
        <div className="txt">
        <Editor
          tinymceScriptSrc={
            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
          }
          initialValue={initialState}
          onEditorChange={onChange}
          init={{
            statusbar: false,
            height: 300,
            menubar: true,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "anchor",
              "pagebreak",
              "template",
              "searchreplace",
              "visualblocks",
              "code",
              "nonbreaking",
              "directionality",
              "emoticons",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "preview",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor backcolor | link | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | image | template | code | filelibrary | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
    );

}

export default EditorText;

