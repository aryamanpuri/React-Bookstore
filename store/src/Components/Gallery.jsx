import React, { Component } from 'react'

export class Gallery extends Component {
    render() {
        return (
            <div>
                {
                this.props.items.map((item , i) => {
                    let {title, imageLinks , infoLink} = item.volumeInfo
                    return (
                        <a href ={infoLink}
                        target = "_blank"
                        key={i} className = "book">
                        <img 
                        src ={imageLinks !== undefined? imageLinks.thumbnail : ''} 
                        alt = "book image"
                        className = "bookImage"
                        />
                        <div className = "titleText">{title }</div>

                        </a>
                        
                    );
                })
            }
            </div>
        )
    }
}

export default Gallery
