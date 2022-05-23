import React, { FC } from "react";
import { connect } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as Bookmark } from "../../assets/svg/bookmark.svg";
import { IImageListCard } from "../../utils/interfaces/images";
import { getSelectedImage } from "../../redux/images/slices/images";


const ImageListCard: FC<IImageListCard> = ({ image, getSelectedImage }) => {
    const navigate = useNavigate()
  return (
    <div
      onClick={() => {getSelectedImage(image.id); navigate('detail/' + image.id)}}
      style={{ width: "100%" }}
      tabIndex={-1}
    >
        {/* <NavLink to={'detail/' + movie.id} className="read-more mt-4" tabIndex={-1}>view more</NavLink> */}
      <img src={image.previewURL} style={{ width: "100%" }} />
      <div className="movie-poster"></div>
      <h6 className="fw-bolder">{image.comments}</h6>
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
