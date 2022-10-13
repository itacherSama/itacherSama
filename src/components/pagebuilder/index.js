import { GrapesjsReact } from "grapesjs-react";
import "grapesjs-preset-newsletter";
import "grapesjs-plugin-forms";
import thePlugin from "grapesjs-plugin-export";
import pluginTooltip from "grapesjs-tooltip";

export const Primary = () => {
  return (
    <GrapesjsReact
      id="grapesjs-react"
      plugins={[
        "gjs-preset-newsletter",
        "gjs-blocks-basic",
        "grapesjs-plugin-export",
        (editor) => thePlugin(editor, {}),
        (editor) =>
          pluginTooltip(editor, {
            /* options */
          })
      ]}
      onInit={(editor) => {
        window.editor = editor;
      }}
    />
  );
};
