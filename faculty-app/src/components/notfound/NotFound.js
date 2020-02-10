import React, { Component } from 'react'
import notFoundPic from "../../image/notfound.jpeg";
export default class NotFound extends Component {
    render() {
        return (
            <div className="notFound">
              <img src={notFoundPic} alt="notFound"/>  
            </div>
        )
    }
}
