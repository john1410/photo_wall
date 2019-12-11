import React from "react";
import prototypes from  'prop-types'
import Photo from "./Photo";

class PhotoWall extends React.Component {
    render() {
        return (


            <div className='photo-grid'>
                {
                    this.props.photos.map((photo, index) => <Photo key={index} post={photo}
                                                                   onRemovePhoto={this.props.onRemovePhoto}/>)
                }
            </div>
        )
    }
}

PhotoWall.prototypes= {
    photos: prototypes.array.isRequired,
    onRemovePhoto: prototypes.func.isRequired
}
export default PhotoWall
