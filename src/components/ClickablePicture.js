import React, {Component} from 'react'
import '../assets/css/ClickablePicture.css'

export default class ClickablePicture extends Component {
    state={
        isClicked : false,
        imgSrc: this.props.img

    }

    handleImgClick = ()=>{
        this.setState({isClicked: !this.state.isClicked})
        this.state.isClicked ? this.setState({imgSrc:this.props.imgClicked}) : this.setState({imgSrc:this.props.img})
    }

    render() {
        return(
            <div className='box__img'>
                <img onClick={this.handleImgClick} src={this.state.imgSrc} alt='change image'></img>
            </div>
        )
    }
}
