import apiFetch from "@wordpress/api-fetch";
import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Button, PanelBody, PanelRow } from "@wordpress/components";
import { useEffect } from "@wordpress/element";

registerBlockType("ourblocktheme/slide", {
  title: "Slide",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
    imageID: { type: "number" },
    imageURL: { type: "string", default: banner.fallbackimage } // localized script
  },
  edit: EditComponent,
  save: SaveComponent
});

function EditComponent(props) {
  useEffect(() => {
    if (props.attributes.imageID) {
      async function get() {
        const reponse = await apiFetch({
          path: `/wp/v2/media/${props.attributes.imageID}`,
          method: "GET"
        });
        props.setAttributes({ imageURL: reponse.media_details.sizes.full.source_url });
      }
      get();
    }
  }, [props.attributes.imageID]);

  const onFileSelect = media => {
    props.setAttributes({ imageID: media.id });
    console.log(media);
  };
  return (
    <>
      <InspectorControls>
        <PanelBody title="Background" initialOpen={true}>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onFileSelect}
                value={props.attributes.imageID}
                render={({ open }) => {
                  return <Button onClick={open}>Select image</Button>;
                }}
              />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div className="hero-slider__slide" style={{ backgroundImage: `url('${props.attributes.imageURL}')` }}>
        <div class="hero-slider__interior container">
          <div class="hero-slider__overlay t-center">
            <InnerBlocks allowedBlocks={["ourblocktheme/genericheading", "ourblocktheme/genericbutton"]} />
          </div>
        </div>
      </div>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
