wp.blocks.registerBlockType("ourblocktheme/singlepage", {
  title: "Single Page Placeholder",

  edit: () => wp.element.createElement("div", { className: "our-placeholder-block" }, "Single Page Placeholder"),
  save: () => null
});
