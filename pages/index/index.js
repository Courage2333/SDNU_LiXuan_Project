Page({
  onTapTeam: function () {
    wx.navigateTo({
      url: '../team/team',
    })
  },
  onTapShop: function () {
    wx.navigateTo({
      url: '../buy/buy',
    })
  },
  onTapMe: function () {
    wx.navigateTo({
      url: '../rule/rule',
    })
  },
  data: {
    recommendationList: [],
  },

  onLoad: function () {
    this.setData({
      recommendationList: this.getRecommendationList(),
    });
  },

  goToScriptDetail: function (event) {
    const scriptId = event.currentTarget.dataset.scriptid;
    wx.navigateTo({
      url: `/pages/script-detail/script-detail?id=${scriptId}`,
    });
  },

  getRecommendationList: function () {
    return [
      {
        id: 1,
        name: "《夜色杀机》",
        coverUrl: "https://dummyimage.com/1400x500/cccccc/ffffff.png&text=Game1",
      },
      {
        id: 2,
        name: "《逃生游戏》",
        coverUrl: "https://dummyimage.com/1400x500/cccccc/ffffff.png&text=Game2",
      },
      {
        id: 3,
        name: "《惊悚乐园》",
        coverUrl: "https://dummyimage.com/1400x500/cccccc/ffffff.png&text=Game3",
      },
      {
        id: 4,
        name: "《灵异事件簿》",
        coverUrl: "https://dummyimage.com/1400x500/cccccc/ffffff.png&text=Game4",
      },
      {
        id: 5,
        name: "《密室逃脱》",
        coverUrl: "https://dummyimage.com/1400x500/cccccc/ffffff.png&text=Game5",
      },
      {
        id: 6,
        name: "《谋杀游戏》",
        coverUrl: "https://dummyimage.com/1400x500/cccccc/ffffff.png&text=Game6",
      },
      {
        id: 7,
        name: "《谋杀游戏》",
        coverUrl: "https://dummyimage.com/1400x500/cccccc/ffffff.png&text=Game7",
      },
      {
        id: 8,
        name: "《谋杀游戏》",
        coverUrl: "https://dummyimage.com/1400x500/cccccc/ffffff.png&text=Game8",
      },
      {
        id: 9,
        name: "《谋杀游戏》",
        coverUrl: "https://dummyimage.com/1400x500/cccccc/ffffff.png&text=Game9",
      },
      {
        id: 10,
        name: "《谋杀游戏》",
        coverUrl: "https://dummyimage.com/1400x500/cccccc/ffffff.png&text=Game10",
      },
      {
        id: 11,
        name: "《谋杀游戏》",
        coverUrl: "https://dummyimage.com/1400x500/cccccc/ffffff.png&text=Game11",
      },
      {
        id: 12,
        name: "《谋杀游戏》",
        coverUrl: "https://dummyimage.com/1400x500/cccccc/ffffff.png&text=Game12",
      },
      {
        id: 13,
        name: "《谋杀游戏》",
        coverUrl: "https://dummyimage.com/1400x500/cccccc/ffffff.png&text=Game13",
      },
      {
        id: 14,
        name: "《谋杀游戏》",
        coverUrl: "https://dummyimage.com/1400x500/cccccc/ffffff.png&text=Game14",
      },
    ];
  }

})