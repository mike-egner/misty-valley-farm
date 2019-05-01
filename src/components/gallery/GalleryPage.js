import React from "react";
import InstagramEmbed from "react-instagram-embed";

const GalleryPage = () => {
  return (
    <>
      <h1>Gallery Page</h1>
      <div className="my-3">
        Our resident photographer and constant gardener, Judy Green, takes most
        of the photographs that have made Misty Valley famous.
      </div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-10">
            <InstagramEmbed
              url="https://www.instagram.com/p/BvegtOJA97H/"
              maxWidth={640}
              hideCaption={false}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
