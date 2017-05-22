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
  Constant:{
    centerPos:{
      left: 0;
      right: 0;
    },
    hPosRange: {
      leftSecX: [0,0],
      rightSecX: [0,0],
      y: [0,0]
    },
    vPosRange: {
      x: [0,0],
      topY: [0,0]
    }
  };
  rearange = function (centerIndex) {

}
//组件加载以后为每一张图片计算范围
  componentDidMount() {
    //拿到舞台大小
    var stageDom = this.refs.stage,
      stageWidth = stageDom.scrollWidth,
      stageHeight = stageDom.scrollHeight,
      halfStageW = Math.ceil(stageWidth / 2),
      halfStageH = Math.ceil(stageHeight / 2);

    //拿到imageFigure大小
    var imgFigureDom = this.refs.imageFigure0,
      imageW = imgFigureDom.scrollWidth,
      imageH = imgFigureDom.scrollHeight,
      halfImgW = Math.ceil(imageW / 2),
      halfImgH = Math.ceil(imageH / 2);
//计算中心图片的位置点
    this.Constant.centerPos = {
      left: halfStageW - halfImgW,
      top: halfStageH - halfImgH
    }
//计算左侧右侧区域图片排布图片取值范围
    this.Constant.hPosRange.leftSecX[0] = -halfImgW;
    this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
    this.Constant.hPosRange.rightSecX[0] = halfStageW - halfImgW;
    this.Constant.hPosRange.rightSecX[1] = stageWidth -halfImgW;
    this.Constant.hPosRange.y[0] = -halfImgH;
    this.Constant.hPosRange.y[1] = stageHeight - halfImgH;
//计算上侧区域图片排布位置的取值范围
    this.Constant.vPosRange.topY[0] = -halfImgH;
    this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
    this.Constant.vPosRange.x[0] = halfImgW -imageW;
    this.Constant.vPosRange.x[1] = halfImgW

    this.rearange(0);
  }
  render() {
    var controllerUnits = [],
      imgFigure = [];
    imageDatas.forEach(function (value,index) {
      imgFigure.push(<ImgFigures data = {value} key = {value.filename} ref ={'imageFigure'+index}/>);
    });
    return (
      <section className="stage" ref="stage">
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
