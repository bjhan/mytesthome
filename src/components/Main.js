require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
//获取图片的信息
var imageDatas = require('../data/imageDatas.json');
//利用自执行函数，返回图片的URL信息
imageDatas = (function getImageURL(imageDatasArr) {
  for(var i = 0;i < imageDatasArr.length; i++){
    var singleImageData = imageDatasArr[i];
    singleImageData.imgURL = require('../images/' + singleImageData.filename);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);

class ImgFigures extends React.Component {
  render() {
    return (
      <figure className = "img-figure">
        <img src={this.props.data.imgURL} alt={this.props.data.title}/>
        <figcaption>
          <h2 className = "img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
}
class AppComponent extends React.Component {
  render() {
    var controllerUnits = [],
      imgFigure = [];
    imageDatas.forEach(function (value) {
      console.log(value);
      imgFigure.push(<ImgFigures data = {value} key = {value.filename}/>);
    });
    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigure}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
