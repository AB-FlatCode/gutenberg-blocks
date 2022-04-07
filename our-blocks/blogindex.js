wp.blocks.registerBlockType("ourblocktheme/blogindex", {
  title: "Blog Archive",

  edit: () => wp.element.createElement("div", { className: "our-placeholder-block" }, "Blog Archive Placeholder"),
  save: () => null
});
