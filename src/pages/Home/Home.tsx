import React, { FC, Fragment, useEffect } from "react";

import { getImagesAction } from "../../redux/images/actions/images";
import { connect } from "react-redux";
import { clearSelectedImage, setCurrentPage } from "../../redux/images/slices/images";
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
    getImagesAction(current);
    clearSelectedImage();
  }, []);

  useEffect(() => {
    getImagesAction(current);
  }, [current]);

  

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
      <div className="w-100 d-flex justify-content-center align-items-center "> 
      <button onClick={()=>setCurrentPage(current+1)} type="button" className="btn text-success btn-outline-success">Load more</button>
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
    getImagesAction: (page:number) => {
      dispatch(getImagesAction({page}));
    },
    clearSelectedImage: () => {
      dispatch(clearSelectedImage());
    },
    setCurrentPage: (page:number) => {
      dispatch(setCurrentPage(page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
