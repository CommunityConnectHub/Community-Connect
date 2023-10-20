import { Component } from "react";
import HomePgImg1 from "../assests/img2.jpg";
import HomePgImg2 from "../assests/img2.jpg";
import HomePgImg3 from "../assests/img2.jpg";
import HomePgImg4 from "../assests/img2.jpg";
import "./HPgstyles.css";

class HPData extends Component {
    render(){
        return(
            <div className = {this.props.className}>
                <div className = "fp-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="image">
                    <img alt="img" src={this.props.img1} />
                    <img alt="img" src={this.props.img2} />
                </div>
            </div>
        )
    }
}

export default HPData;