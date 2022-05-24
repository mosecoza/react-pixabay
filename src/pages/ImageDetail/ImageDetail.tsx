import React, { FC, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { ReactComponent as Star } from "../../assets/svg/star.svg";
import { useNavigate } from "react-router-dom";
import { IImageDetail } from "../../utils/interfaces/images";
import { ReactComponent as Comments } from "../../assets/svg/message.svg";
import { ReactComponent as Likes } from "../../assets/svg/thumbs.svg";
import "../../index.css";
/**
 * @description In this one, a bigger version of the image, the name of the photographer, tags,
views, downloads and size should be displayed.
*/
const ImageDetail: FC<IImageDetail> = ({ image, loading }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!image) {
      navigate(-1);
    }
  }, []);

  function renderUI() {
    if (!image) {
      return null;
    } else {
      return (
        <div className="d-flex flex-md-row flex-sm-column justify-content-between align-items-center vh-100 vw-100 p-5 ">
          <div className="col-md-7 col-sm-12  image-detail-card d-flex justify-content-center align-items-center">
           
            {image.imageURL ? (
              <img
                src={image.fullHDURL}
                alt={image.tags}
                className=" w-sm-100 w-md-75 h-md-75 h-sm-50 image"
              />
            ) : null}
             <div className="overlay">
              <div className="tags">
                {image.tags.split(", ").map((tag, i) => (
                  <div className="tag" key={"tags-" + i}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 d-flex justify-content-start flex-column align-items-start p-4 vh-50 my-5">
            <div className="d-flex justify-content-between align-items-center flex-row my-2 w-100">
              <img
                style={{ width: "64px" }}
                className="profile mr-2 me-auto "
                src={image.userImageURL}
                alt=""
              />

              <h4 className="fw-bold ml-2">{`  ${image.user}`}</h4>
            </div>
            {/* <pre className="w-100 overflow-y-scroll">
              {JSON.stringify(image, null, "\t")}
            </pre> */}
            <div className="w-100 d-flex flex-row justify-content-between">
              <div className="interactions">
                <div className="mx-2">
                  <Likes className="image-icon" /> {` ${image.likes}`}
                </div>
                <div className="mx-2">
                  <Comments className="image-icon" />
                  {` ${image.comments}`}
                </div>
              </div>
            </div>
            <div style={{fontSize:"0.8em"}} className="bg-light m-2 p-2 d-flex justify-content-start flex-column rounded-2 w-100">
              <div className="d-flex justify-content-between align-items-center m-1">
                <h5>{`Image type: `} </h5>
                <h5>{`${image.type}`} </h5>
              </div>
              <div className="d-flex justify-content-between align-items-center m-1">
                <h5>
                  {`Resolution: `}
                </h5>
                <h5>{` ${image.imageWidth}x${image.imageHeight}`} </h5>
              </div>
              <div className="d-flex justify-content-between align-items-center m-1">
                <h5>{`Views: `} </h5>
                <h5>{` ${image.views}`} </h5>
              </div>
              <div className="d-flex justify-content-between align-items-center m-1">
                <h5>{`Downloads: `} </h5>
                <h5>{` ${image.downloads}`} </h5>
              </div>
            </div>
            <div  className="tags">
              Tags:
              {image.tags.split(", ").map((tag) => (
                <h6 className="tag" key={tag}>
                  {tag}
                </h6>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="row w-100 d-flex justify-content-center align-items-center position-relative">
      {renderUI()}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    image: state.images.selectedImage,
    loading: state.images.loading,
  };
};

export default connect(mapStateToProps)(ImageDetail);
