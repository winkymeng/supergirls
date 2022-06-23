
wx.cloud.init();
const db = wx.cloud.database();
const likeSleepCollection = db.collection('likeSleep')

// pages/manifest/manifest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[],
    placE:{},
    whO:{},

  },
  addLife:function() {
    var newData = {};
    newData.placE = this.placE
    newData.whO = this.whO
    this.data.lists.push(newData);
    this.data.lists = this.data.lists;
    // console.log(this.data.lists);
    likeSleepCollection.add({
      data:{
        placE:this.placE,
        whO:this.whO,
      },
      success:res => {
        console.log(this.whO);
        console.log(res);
      }
    })


    if(this.data.lists.length>4){
      console.log('你好');
      this.data.lists.splice(0,1)
    }
    this.setData({
      lists: this.data.lists
    })
  },


  num1change:function(e){
    this.placE=e.detail.value,
    console.log('第一个为'+this.placE)
  },
  num2change:function(e){
    this.whO=e.detail.value,
    console.log('第二个为'+this.whO)
  },


//添加
addList: function(){
  var  lists = this.data.lists;
  var newData = {};
  lists.push(newData);//实质是添加lists数组内容，使for循环多一次
  this.setData({
    lists: lists,
  })  
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})