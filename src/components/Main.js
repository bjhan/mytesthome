require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
//获取图片的信息
// var imageDatas = require('../data/imageDatas.json');
// //利用自执行函数，返回图片的URL信息
// imageDatas = (function getImageURL(imageDatasArr) {
//   for(var i = 0;i < imageDatasArr.length; i++){
//     var singleImageData = imageDatasArr[i];
//     singleImageData.imgURL = require('../images/' + singleImageData.filename);
//     imageDatasArr[i] = singleImageData;
//   }
//   return imageDatasArr;
// })(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec"></section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
