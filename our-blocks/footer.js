wp.blocks.registerBlockType("ourblocktheme/footer", {
  title: "Footer Block",

  edit: () => wp.element.createElement("div", { className: "our-placeholder-block" }, "Footer Placeholder"),
  save: () => null
});
