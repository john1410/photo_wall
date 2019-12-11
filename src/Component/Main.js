import React from "react";
import './Style/style.css'
import PhotoWall from "./PhotoWall";
import pic1 from './Photo/jcob-nasyr-dfar2BIUomI-unsplash.jpg'
import pic2 from './Photo/joao-marcelo-martins-hFoPRRwjVgg-unsplash.jpg'
import pic3 from './Photo/jorg-angeli-utgDEz8xgBI-unsplash.jpg'
import PropTypes from 'prop-types'

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            photos: [
                {id: 1, description: "hiiii", src: pic1},
                {id: 2, description: "hiiii2", src: pic2},
                {id: 3, description: "hiiii3", src: pic3},

            ]

        }
        this.removeImage=this.removeImage.bind(this)
    }
    removeImage=(postRemoved)=>{
console.log("post removed",postRemoved)
console.log("post ",this.state)
        let newPosts=[]
        newPosts=this.state.photos.filter(post=>post!==postRemoved)
        this.setState({photos:newPosts})
        // this.setState((state)=>{
        //     photos:state.photos.filter(post=>post!==postRemoved)
        // })
    }

    render() {

        return (
            <div>
                <h1 className='logo'>PhotWall</h1>
                <div className='container'>
                    <PhotoWall photos={this.state.photos} onRemovePhoto={this.removeImage}/>
                </div>
            </div>
        )
    }
}

export default Main