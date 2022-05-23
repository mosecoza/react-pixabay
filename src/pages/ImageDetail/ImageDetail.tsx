import React, { FC, Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { ReactComponent as Star } from "../../assets/svg/star.svg";
import { useNavigate } from 'react-router-dom'
import { IImageDetail } from '../../utils/interfaces/images';



/**
 * @description In this one, a bigger version of the image, the name of the photographer, tags,
views, downloads and size should be displayed.
*/
const ImageDetail: FC<IImageDetail> = ({ image, loading }) => {
    const navigate = useNavigate()
    
    useEffect(() => {
       
        if (!image) {
            navigate(-1)
        }
    }, []);


    function renderUI() {
        if (!image) {
            return null;
        } else {
            return (<Fragment><div className="col-md-4 col-sm-12">
                {image.imageURL ? <img src={image.largeImageURL} alt={image.tags} className=" rounded-4 " /> : null}
                

            </div>
                <div className="col-md-6 col-sm-12 bg-light d-flex justify-content-start justify-content-sm-center flex-column align-items-start align-items-sm-center p-4 rounded-4">
                    <div className='w-100 d-flex flex-row justify-content-between'>
                    </div>
                    <div>
                        <p>
                            <b>{" " + image.likes + " "}</b> |
                            <b>{" " + image.tags}</b>
                        </p>
                    </div>
                    <div>
                        <p >
                            tags: <b>{image.tags.split(",")}</b>
                        </p>
                    </div>
                    
                </div>
                </Fragment>)
        }
    }

    return (<div className='row w-100 d-flex justify-content-center align-items-center position-relative'  >
        {renderUI()}
    </div>)
}

const mapStateToProps = (state: any) => {
    return {
        image: state.images.selectedImage,
        loading: state.images.loading,
    }
}



export default connect(mapStateToProps)(ImageDetail)


