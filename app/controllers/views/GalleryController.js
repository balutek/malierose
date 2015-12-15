module.exports = function ($scope) {

  $scope.pageClass = "gallery";
  $scope.carouselInterval = 5000000000;
  $scope.noWrapSlides = false;

  var slides = $scope.slides = [];

  $scope.addSlide = function (imgPath, text)
  {
    slides.push({
      image: imgPath,
      text: text
    });
  };

  $scope.addSlide("./img/20140704_144215.jpg", "img1");
  $scope.addSlide("./img/20140728_145228.jpg", "img1");
  $scope.addSlide("./img/20140730_082028.jpg", "img1");
  $scope.addSlide("./img/20140913_181602.jpg", "img1");
  $scope.addSlide("./img/20140913_181930.jpg", "img1");
  $scope.addSlide("./img/20140914_164111.jpg", "img1");
  $scope.addSlide("./img/20140923_145713.jpg", "img1");
  $scope.addSlide("./img/20141001_131749.jpg", "img1");

};