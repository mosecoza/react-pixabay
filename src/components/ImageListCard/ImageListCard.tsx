import React, { FC } from "react";
import { connect } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { IImageListCard } from "../../utils/interfaces/images";
import { getSelectedImage } from "../../redux/images/slices/images";
import { ReactComponent as Comments } from "../../assets/svg/message.svg";
import { ReactComponent as Likes } from "../../assets/svg/thumbs.svg";
const ImageListCard: FC<IImageListCard> = ({ image, getSelectedImage }) => {
    const navigate = useNavigate()
  return (
    <div
    className="image-card"
      onClick={() => {getSelectedImage(image.id); navigate('detail/' + image.id)}}
    >
      <img src={image.previewURL} 
      srcSet={`${image.webformatURL}180 300w, ${image.largeImageURL}_340 768w, ${image.fullHDURL}_960 1280w`}
      className="image"/>
      <div className="overlay">
        <div className="tags">{image.tags.split(", ").map((tag,i)=>(<div  className="tag" key={"tags-"+i}>{tag}</div>))}</div>
        <div className="interactions">
          <div><Likes className="image-icon"/> {` ${image.likes}`}</div>
          <div><Comments className="image-icon"/>{` ${image.comments}`}</div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getSelectedImage: (id: number) => {

      dispatch(getSelectedImage(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(ImageListCard);
