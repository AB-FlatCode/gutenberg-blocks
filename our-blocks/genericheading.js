import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { RichText, BlockControls } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("ourblocktheme/genericheading", {
  title: "Banner Heading",
  attributes: {
    text: { type: "string" },
    size: { type: "string", default: "large" }
  },
  edit: EditComponent,
  save: SaveComponent
});

function EditComponent(props) {
  const handleTextChange = x => {
    props.setAttributes({ text: x });
  };
  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton isPressed={props.attributes.size === "large"} onClick={() => props.setAttributes({ size: "large" })}>
            Large
          </ToolbarButton>
          <ToolbarButton isPressed={props.attributes.size === "medium"} onClick={() => props.setAttributes({ size: "medium" })}>
            Medium
          </ToolbarButton>
          <ToolbarButton isPressed={props.attributes.size === "small"} onClick={() => props.setAttributes({ size: "small" })}>
            Small
          </ToolbarButton>
        </ToolbarGroup>
      </BlockControls>
      <RichText allowedFormats={["core/bold"]} tagName="h1" className={`headline headline--${props.attributes.size}`} value={props.attributes.text} onChange={handleTextChange} />
    </>
  );
}

function SaveComponent(props) {
  const createTagname = () => {
    switch (props.attributes.size) {
      case "large":
        return "h1";
      case "medium":
        return "h2";
      case "small":
        return "h3";
    }
  };
  return <RichText.Content tagName={createTagname()} value={props.attributes.text} className={`headline headline--${props.attributes.size}`} />;
}
