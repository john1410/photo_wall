import React from "react";

class Photo extends React.Component{
    render() {
        const {post}=this.props
        return(

                <figure className='figure'>
                    <img  className='photo' src={post.src}/>
                    <p className='description'>{post.description}</p>
                    <div className='remove-btn' onClick={()=>{
                        this.props.onRemovePhoto(post)
                    }}>Remove</div>
                </figure>

        )
    }
}

export default Photo