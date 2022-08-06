import React from "react";
import Link from "next/link";


const ProjectGallery = ({ projectGalleryData }) => {
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row"
        >
          {/*<a href="#" className="col-md-3 popimg">
          <img alt="" src={projectGalleryData.gallery_new} />
          </a>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src={projectGalleryData.gallery_new} />
          </a>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/3.jpg" />
          </a>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/5.jpg" />
          </a>
  */}

          <a href="#" className="col-md-12 popimg">
            <img alt="" src={projectGalleryData.gallery_new} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
