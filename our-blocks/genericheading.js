import { registerBlockType } from "@wordpress/blocks";

registerBlockType("ourblocktheme/genericheading", {
  title: "Banner Heading",
  edit: EditComponent,
  save: SaveComponent
});

function EditComponent() {
  return <div>Hello</div>;
}

function SaveComponent() {
  return <div>Our heading block</div>;
}
