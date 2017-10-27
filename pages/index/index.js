let ctx;
Page({
  data:{
    pen:{
      lineWidth:5,
      color:"#cc0033"
    }
  },
  onLoad(options) {
    ctx=wx.createCanvasContext('myCanvas');
    ctx.setStrokeStyle(this.data.pen.color);
    ctx.setLineWidth(this.data.pen.lineWidth);
    ctx.setLineCap('round');
    ctx.setLineJoin('round');
  },
  touchstart(e) {
    ctx.setStrokeStyle(this.data.pen.color);
    ctx.setLineWidth(this.data.pen.lineWidth);
    ctx.moveTo(e.touches[0].x, e.touches[0].y);
  },
  touchmove(e) {
    let x = e.touches[0].x;
    let y = e.touches[0].y;
    ctx.lineTo(x, y)
    ctx.stroke();
    ctx.draw(true);
    ctx.moveTo(x,y)
  },
  penselect(e) {
    this.setData({'pen.lineWidth':e.target.dataset.param})
  },
  colorselect(e) {
    this.setData({ 'pen.color': e.target.dataset.param })
  }
})
