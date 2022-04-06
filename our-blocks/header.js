wp.blocks.registerBlockType("ourblocktheme/header", {
  title: "Header Block",

  edit: () => wp.element.createElement("div", { className: "our-placeholder-block" }, "Header Placeholder"),
  save: () => null
});
