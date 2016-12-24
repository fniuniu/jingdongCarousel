//京东轮播图
console.log('start')


//播放第i张图片
var changePlay = function(i) {
    $('.show-pic').fadeOut()
    //console.log('淡出');
    $('.show-pic').removeClass('show-pic')
    $($('.sigle-pic')[i]).addClass('show-pic')
    $('.show-pic').fadeIn()

    $('.circle-active').removeClass('circle-active')
    $($('.circle')[i]).addClass('circle-active')

}

//向前向后播放图片，index='1'or'-1'，i是第几张图
var playPic = function(index) {
    var numOfImgs = $('.pics').data('imgs')
    var numOfActive = $('.pics').data('active')
    //console.log('numOfActive', numOfActive)
    var i = (numOfImgs + numOfActive + index)%numOfImgs
    //console.log('i', i)
    $('.pics').data('active', i)
    changePlay(i)
}

//点击上下按钮更换图片
var bindButton = function() {
    $('.button').on('click', function(event) {
        var self = $(event.currentTarget)
        //console.log('self', self)
        if(self.hasClass('button-next') == true) {
            //console.log('1')
            playPic(1)
        }else {
            //console.log('-1')
            playPic(-1)
        }
    })
}

//当鼠标移动到小圆点上的时候, 播放那张图片，i是第几张图
var bindCircle = function() {
    $('.circle').on('mouseover', function(event) {
        var self =  $(event.target)
        var i = self.data('num')
        //console.log('i', i);
        changePlay(i)
    })
}

//定时设置
var timeControl = function() {
    setInterval('playPic(1)', 4000)
}



var _main = function() {
    bindButton()    //上下按钮
    bindCircle()    //绑定小圆点
    timeControl()   //定时播放
}
_main()
console.log('end')
