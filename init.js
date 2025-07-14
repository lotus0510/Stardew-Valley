// 星露谷初始化腳本
class StardewValleyInit {
  constructor() {
    this.gameData = {
      player: {
        name: '',
        level: 1,
        money: 500,
        energy: 100
      },
      farm: {
        crops: [],
        animals: [],
        buildings: []
      },
      inventory: {
        items: [],
        tools: ['鋤頭', '澆水壺', '斧頭', '鎬子']
      },
      activities: {
        farming: { level: 1, experience: 0 },
        fishing: { level: 1, experience: 0 },
        mining: { level: 1, experience: 0 },
        breeding: { level: 1, experience: 0 }
      }
    };
  }

  // 初始化遊戲
  initGame() {
    console.log('🌾 歡迎來到星露谷！');
    this.setupEventListeners();
    this.loadGameData();
    this.renderUI();
  }

  // 設置事件監聽器
  setupEventListeners() {
    // 農場按鈕
    const farmBtn = document.querySelector('.farm .activity-btn');
    if (farmBtn) {
      farmBtn.addEventListener('click', () => this.enterFarm());
    }

    // 釣魚按鈕
    const fishingBtn = document.querySelector('.fishing .activity-btn');
    if (fishingBtn) {
      fishingBtn.addEventListener('click', () => this.startFishing());
    }

    // 挖礦按鈕
    const miningBtn = document.querySelector('.mining .activity-btn');
    if (miningBtn) {
      miningBtn.addEventListener('click', () => this.enterMine());
    }

    // 養殖按鈕
    const breedingBtn = document.querySelector('.breeding .activity-btn');
    if (breedingBtn) {
      breedingBtn.addEventListener('click', () => this.manageFarm());
    }
  }

  // 載入遊戲數據
  loadGameData() {
    const savedData = localStorage.getItem('stardewValleyData');
    if (savedData) {
      this.gameData = { ...this.gameData, ...JSON.parse(savedData) };
      console.log('📁 載入存檔成功！');
    } else {
      console.log('🆕 開始新遊戲！');
      this.saveGameData();
    }
  }

  // 保存遊戲數據
  saveGameData() {
    localStorage.setItem('stardewValleyData', JSON.stringify(this.gameData));
    console.log('💾 遊戲已保存！');
  }

  // 渲染UI
  renderUI() {
    this.updatePlayerInfo();
    this.updateActivityLevels();
  }

  // 更新玩家信息
  updatePlayerInfo() {
    // 可以在這裡添加顯示玩家信息的代碼
    console.log(`👤 玩家等級: ${this.gameData.player.level}`);
    console.log(`💰 金錢: ${this.gameData.player.money}`);
    console.log(`⚡ 體力: ${this.gameData.player.energy}`);
  }

  // 更新活動等級
  updateActivityLevels() {
    const activities = this.gameData.activities;
    console.log('📊 技能等級:');
    console.log(`🌾 農業: ${activities.farming.level}`);
    console.log(`🎣 釣魚: ${activities.fishing.level}`);
    console.log(`⛏️ 挖礦: ${activities.mining.level}`);
    console.log(`🐄 養殖: ${activities.breeding.level}`);
  }

  // 進入農場
  enterFarm() {
    console.log('🌾 進入農場...');
    alert('歡迎來到農場！\n\n你可以在這裡種植作物、澆水施肥。\n目前農業等級: ' + this.gameData.activities.farming.level);
  }

  // 開始釣魚
  startFishing() {
    console.log('🎣 開始釣魚...');
    alert('來到河邊釣魚！\n\n耐心等待魚兒上鉤吧。\n目前釣魚等級: ' + this.gameData.activities.fishing.level);
  }

  // 進入礦洞
  enterMine() {
    console.log('⛏️ 進入礦洞...');
    alert('深入礦洞探險！\n\n小心怪物，尋找珍貴礦物。\n目前挖礦等級: ' + this.gameData.activities.mining.level);
  }

  // 管理牧場
  manageFarm() {
    console.log('🐄 管理牧場...');
    alert('來到動物牧場！\n\n照顧你的動物們，收集產品。\n目前養殖等級: ' + this.gameData.activities.breeding.level);
  }

  // 重置遊戲
  resetGame() {
    localStorage.removeItem('stardewValleyData');
    location.reload();
  }
}

// 當頁面載入完成時初始化遊戲
document.addEventListener('DOMContentLoaded', function() {
  const game = new StardewValleyInit();
  game.initGame();
  
  // 將遊戲實例設為全局變量，方便調試
  window.stardewGame = game;
});

// 導出類別供其他模組使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = StardewValleyInit;
}