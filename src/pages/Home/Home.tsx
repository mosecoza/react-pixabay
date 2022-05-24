import React, { FC, Fragment, useEffect } from "react";

import { getImagesAction } from "../../redux/images/actions/images";
import { connect } from "react-redux";
import {
  clearSelectedImage,
  setCurrentPage,
} from "../../redux/images/slices/images";
import { IHome } from "../../utils/interfaces/images";
import ImageListCard from "../../components/ImageListCard/ImageListCard";

const Home: FC<IHome> = ({
  imagesArray,
  getImagesAction,
  setCurrentPage,
  loading,
  current,
  error,
  clearSelectedImage,
}) => {
  useEffect(() => {
    if (!imagesArray) {
      getImagesAction(current);
    }
    clearSelectedImage();
  }, []);

  function handleMore() {
    setCurrentPage(current + 1);
    getImagesAction(current + 1);
  }

  return (
    <div className="container-fluid p-4">
      <div className="row">
        {error ? (
          <div>
            <h5>{error}</h5>{" "}
          </div>
        ) : imagesArray ? (
          imagesArray.map((column, i) => {
            return (
              <div key={"column-" + i} className="column">
                {column.map((entry, index) => (
                  <ImageListCard
                    key={"image-" + index + "column-" + i}
                    image={entry}
                  />
                ))}
              </div>
            );
          })
        ) : (
          <div>Error Loading Content</div>
        )}
      </div>
      {imagesArray && loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : null}
      <div className="w-100 d-flex justify-content-center align-items-center mt-4">
        <span
          onClick={handleMore}
          className="btn text-success btn-outline-success"
        >
          Load more
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    imagesArray: state.images.imagesArray,
    loading: state.images.loading,
    error: state.images.error,
    current: state.images.current,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getImagesAction: (page: number) => {
      dispatch(getImagesAction({ page }));
    },
    clearSelectedImage: () => {
      dispatch(clearSelectedImage());
    },
    setCurrentPage: (page: number) => {
      dispatch(setCurrentPage(page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
