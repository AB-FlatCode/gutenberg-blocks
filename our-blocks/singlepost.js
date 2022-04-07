wp.blocks.registerBlockType("ourblocktheme/singlepost", {
  title: "Single Post Placeholder",

  edit: () => wp.element.createElement("div", { className: "our-placeholder-block" }, "Single Post Placeholder"),
  save: () => null
});
