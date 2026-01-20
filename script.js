// ==========================================
// 資料來源：https://data.gov.tw/dataset/89232
// 使用中研院圖書館名稱作為字串陣列，示範 Array Methods
// 每個範例情境可獨立執行並統一初始資料
// ==========================================

// ==========================================
// 編號：01
// 方法名稱：Array.prototype.shift()
// ==========================================
// 關鍵字：移除陣列第一個元素
// 是否改變原陣列（mutate）：是
// 參數說明（傳入的數量或用途）：無參數
// 回傳值：被移除的元素（若陣列為空則回傳 undefined）
// 常見使用情境：處理「先到先處理」的排隊邏輯，如參觀順序、任務列表、播放清單
// ==========================================
// 情境：依照計畫順序參觀圖書館，參觀完一間就移除

console.log('shift()，移除陣列第一個元素，回傳「被移除的元素」。');
console.log('情境：依照計畫順序參觀圖書館，參觀完一間就移除。');

const tourQueue = [
  '數學研究所圖書館',
  '物理研究所圖書館',
  '化學研究所圖書館',
  '地球科學研究所圖書館'
];

console.log('今日參觀行程:');
console.table(tourQueue);

console.log('開始參觀第一站...');
const currentStop = tourQueue.shift();

console.log('正在參觀:', currentStop);

console.log('接下來要去:');
console.table(tourQueue);

console.log('--------------------------------------------------');

// ==========================================
// 編號：02
// 方法名稱：Array.prototype.unshift()
// ==========================================
// 關鍵字：在陣列開頭新增一個或多個元素
// 是否改變原陣列（mutate）：是
// 參數說明（傳入的數量或用途）：1 個以上，要新增的元素
// 回傳值：Number（陣列的新長度）
// 常見使用情境：在列表最前方插入優先項目，如緊急待辦事項、最新消息置頂
// ==========================================
// 情境：臨時決定先參觀總圖書館（插入最前面）

console.log('unshift()，在陣列開頭新增一個或多個元素，回傳「陣列的新長度」。');
console.log('情境：臨時決定先參觀生命科學圖書館（插入最前面）。');

const route = [
  '數學研究所圖書館',
  '物理研究所圖書館',
  '化學研究所圖書館',
  '地球科學研究所圖書館'
];

console.log('原本的參觀路線:');
console.table(route);

console.log('臨時決定先去生命科學圖書館！');
const totalStops = route.unshift('生命科學圖書館');

console.log('路線總站數:', totalStops);

console.log('調整後的參觀路線:');
console.table(route);

console.log('--------------------------------------------------');

// ==========================================
// 編號：03
// 方法名稱：Array.prototype.pop()
// ==========================================
// 關鍵字：移除陣列最後一個元素
// 是否改變原陣列（mutate）：是
// 參數說明（傳入的數量或用途）：無參數
// 回傳值：被移除的元素（若陣列為空則回傳 undefined）
// 常見使用情境：取消最後加入的項目，如撤銷最後一筆操作、移除購物車最新商品
// ==========================================
// 情境：時間不夠，取消最後一間圖書館

console.log("pop()，移除陣列最後一個元素，回傳「被移除的元素」。");
console.log("情境：時間不夠，取消最後一間圖書館。");

const schedule = [
  '數學研究所圖書館',
  '物理研究所圖書館',
  '化學研究所圖書館',
  '地球科學研究所圖書館'
];

console.log('原訂參觀行程:');
console.table(schedule);

console.log('時間不夠，取消最後一間...');
const cancelled = schedule.pop();

console.log('取消參觀:', cancelled);

console.log('確定的參觀行程:');
console.table(schedule);

console.log('--------------------------------------------------');

// ==========================================
// 編號：04
// 方法名稱：Array.prototype.push()
// ==========================================
// 關鍵字：在陣列末端新增一個或多個元素
// 是否改變原陣列（mutate）：是
// 參數說明（傳入的數量或用途）：1 個以上，要新增的元素
// 回傳值：Number（陣列的新長度）
// 常見使用情境：動態新增項目到列表末端，如新增參觀地點、購物車加商品、播放清單加歌曲
// ==========================================
// 情境：規劃參觀行程，陸續加入想參觀的圖書館

console.log("push()，在陣列末端新增一個或多個元素，回傳「陣列的新長度」。");
console.log("情境：規劃參觀行程，陸續加入想參觀的圖書館。");

const visitPlan = [
  '數學研究所圖書館',
  '物理研究所圖書館',
  '化學研究所圖書館',
  '地球科學研究所圖書館'
];

console.log('原本的參觀計畫:');
console.table(visitPlan);

console.log('決定再加入兩間圖書館...');
const newLength = visitPlan.push('資訊科學研究所圖書室', '統計科學研究所圖書館');

console.log('加入後的行程總數:', newLength);

console.log('更新後的參觀計畫:');
console.table(visitPlan);

console.log('--------------------------------------------------');

// ==========================================
// 編號：05
// 方法名稱：Array.prototype.splice()
// ==========================================
// 關鍵字：在指定位置刪除或新增元素
// 是否改變原陣列（mutate）：是
// 參數說明（傳入的數量或用途）：
//   - 第 1 個：起始索引位置
//   - 第 2 個：要刪除的元素數量（可選，不填則刪除從起始位置到陣列結尾的所有元素）
//   - 第 3 個以後：要插入的新元素（可選）
// 回傳值：Array（被刪除的元素組成的陣列）
// 常見使用情境：在陣列中間插入、替換或刪除元素，如調整行程順序
// ==========================================
// 情境：splice() 的三種常見用法

console.log("splice()，在陣列指定位置刪除或新增元素，回傳「被刪除的元素組成的陣列」。");
console.log("");

// ==========================================
// 情境 1：插入元素（不刪除）
// ==========================================
console.log("【情境 1】在參觀路線中間插入一間臨時要去的圖書館");

const itinerary = [
  '數學研究所圖書館',
  '物理研究所圖書館',
  '化學研究所圖書館',
  '地球科學研究所圖書館'
];

console.log('原本路線:');
console.table(itinerary);

console.log('決定在物理館和化學館之間插入原分所圖書館...');
// 在索引 2 的位置，刪除 0 個元素，插入新元素
const removed = itinerary.splice(2, 0, '原子與分子科學研究所圖書館');

console.log('被刪除的:', removed); // []（沒有刪除任何東西）

console.log('調整後的路線:');
console.table(itinerary);

console.log("");

// ==========================================
// 情境 2：替換元素（刪除 + 插入）
// ==========================================
console.log("【情境 2】替換參觀路線中的某間圖書館");

const itinerary2 = [
  '數學研究所圖書館',
  '物理研究所圖書館',
  '化學研究所圖書館',
  '地球科學研究所圖書館'
];

console.log('原本路線:');
console.table(itinerary2);

console.log('決定把化學館替換成統計所圖書館...');
// 在索引 2 的位置，刪除 1 個元素，插入 1 個新元素
const removed2 = itinerary2.splice(2, 1, '統計科學研究所圖書館');

console.log('被替換掉的:', removed2);

console.log('調整後的路線:');
console.table(itinerary2);

console.log("");

// ==========================================
// 情境 3：刪除元素（從指定位置到結尾）
// ==========================================
console.log("【情境 3】刪除參觀路線的後半段行程");

const itinerary3 = [
  '數學研究所圖書館',
  '物理研究所圖書館',
  '化學研究所圖書館',
  '地球科學研究所圖書館'
];

console.log('原本路線:');
console.table(itinerary3);

console.log('因為時間不夠，刪除物理館之後的所有行程...');
// 從索引 2 開始，刪除後面所有元素（不填第二個參數）
const removed3 = itinerary3.splice(2);

console.log('被刪除的行程:', removed3);

console.log('剩餘的路線:');
console.table(itinerary3);

console.log('--------------------------------------------------');

// ==========================================
// 編號：06
// 方法名稱：Array.prototype.join()
// ==========================================
// 關鍵字：將陣列所有元素用指定分隔符號連接成字串
// 是否改變原陣列（mutate）：否
// 參數說明（傳入的數量或用途）：1 個，分隔符號字串（可選，預設為逗號）
// 回傳值：String（連接後的字串）
// 常見使用情境：產生顯示文字、製作 URL 路徑
// ==========================================
// 情境：將圖書館清單組合成各種格式的文字

console.log("join()，將陣列所有元素用指定分隔符號連接成字串，回傳「連接後的字串」。");
console.log("");

const libraries = [
  '數學研究所圖書館',
  '物理研究所圖書館',
  '化學研究所圖書館',
  '地球科學研究所圖書館'
];

console.log('原始陣列:');
console.table(libraries);

console.log("");
console.log("【情境 1】產生參觀路線說明文字");

const routeText = libraries.join(' → ');
console.log('參觀路線:', routeText);

console.log("");
console.log("【情境 2】產生換行文字");

const multiLine = libraries.join('\n');
console.log('多行清單:\n' + multiLine);

console.log("");
console.log("【情境 3】使用預設分隔符號（逗號）");

const defaultJoin = libraries.join();
console.log('預設格式:', defaultJoin);

console.log('--------------------------------------------------');

// ==========================================
// 編號：07
// 方法名稱：Array.prototype.toString()
// ==========================================
// 關鍵字：將陣列轉換成字串（相當於 join() 不帶參數）
// 是否改變原陣列（mutate）：否
// 參數說明（傳入的數量或用途）：無參數
// 回傳值：String（用逗號連接的字串）
// 常見使用情境：快速將陣列轉成字串、除錯顯示、隱式轉換
// ==========================================
// 情境：將圖書館清單轉換成簡單的字串格式

console.log("toString()，將陣列轉換成字串，回傳「用逗號連接的字串」。");
console.log("");

const libList = [
  '數學研究所圖書館',
  '物理研究所圖書館',
  '化學研究所圖書館',
  '地球科學研究所圖書館'
];

console.log('原始陣列:');
console.table(libList);

console.log("");
console.log("【情境 1】轉換成字串");

const str = libList.toString();
console.log('轉換結果:', str);

console.log('結果型別:', typeof str);

console.log("");
console.log("【情境 2】toString() vs join() 的比較");

const toStringResult = libList.toString();
const joinResult = libList.join();

console.log('toString():', toStringResult);
console.log('join():     ', joinResult);
console.log('兩者相同？', toStringResult === joinResult);

console.log("");
console.log("【情境 3】隱式轉換（字串拼接時自動呼叫 toString）");

const message = '今日參觀: ' + libList;
console.log(message);

console.log("");
console.log("【補充說明】");
console.log("toString() 等同於 join()，都是用逗號連接");
console.log("但 join() 可以指定分隔符號，toString() 不行");
console.log("例如：");
console.log(" join(' → '):", libList.join(' → '));
console.log(" toString():", libList.toString());

console.log('--------------------------------------------------');