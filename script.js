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

// ==========================================
// 編號：08
// 方法名稱：Array.prototype.reduce()
// ==========================================
// 關鍵字：將陣列元素累積計算成單一值
// 是否改變原陣列（mutate）：否
// 參數說明（傳入的數量或用途）：
//   - 第 1 個：累積函式 (accumulator, current, index, array) => nextAccumulator
//     - 函式內有四個參數，第一個是計算的值（必填），第二個是取得的元素（必填），第三個是該元素的索引值（選填），第四個是原本的陣列（選填）
//   - 第 2 個：初始值（可選）
// 回傳值：累積計算的最終結果
// 常見使用情境：統計總和、計算平均、將陣列轉換為物件、組合字串
// ==========================================
// 情境：組合字串、建立索引對照表（將陣列轉換為物件）

console.log("reduce()，將陣列元素累積計算成單一值，回傳「累積計算的最終結果」。");
console.log("");

const libNames = [
  '數學研究所圖書館',
  '物理研究所圖書館',
  '化學研究所圖書館',
  '地球科學研究所圖書館'
];

console.log("圖書館清單:");
console.table(libNames);

console.log("組成路線:");
const todayRoute = libNames.reduce((path, name) => path + ' → ' + name);
console.log("路線:", todayRoute);

console.log("建立索引對照表:");
const indexMap = libNames.reduce((map, name, index) => {
  map[name] = index;
  return map;
}, {});
console.log("索引表:");
console.table(indexMap);

console.log('--------------------------------------------------');

// ==========================================
// 編號：09
// 方法名稱：Array.prototype.reduceRight()
// ==========================================
// 關鍵字：從右到左將陣列元素累積計算成單一值
// 是否改變原陣列（mutate）：否
// 參數說明（傳入的數量或用途）：
//   - 第 1 個：累積函式 (accumulator, current, index, array) => nextAccumulator
//   - 第 2 個：初始值（可選）
// 回傳值：累積計算的最終結果
// 常見使用情境：從右到左組合字串、反向處理資料
// ==========================================
// 情境：製作回程路線（從最後一站往回組合）

console.log("reduceRight()，從右到左將陣列元素累積計算成單一值，回傳「累積計算的最終結果」。");
console.log("");

const destinations = [
  '數學研究所圖書館',
  '物理研究所圖書館',
  '化學研究所圖書館',
  '地球科學研究所圖書館'
];

console.log("去程順序:");
console.table(destinations);

console.log("組成回程路線:");
const returnPath = destinations.reduceRight((path, name) => {
  return path ? path + " ← " + name : name;
}, '');

console.log("回程路線:", returnPath);

console.log('--------------------------------------------------');

// ==========================================
// 編號：10
// 方法名稱：Array.prototype.sort()
// ==========================================
// 關鍵字：依指定比較規則重新排列陣列元素順序
// 是否改變原陣列（mutate）：是
// 參數說明（傳入的數量或用途）：1 個（可選），比較函式 (a, b) => number
// - 如果不使用判斷函式，預設會將元素轉換成字串，並採用 Unicode 來判斷，會造成某些數字的排序錯誤。
// 回傳值：Array（排序後的原陣列參考）
// 常見使用情境：依名稱、日期、數值等條件排序資料，製作索引、目錄
// ==========================================
// 情境：將圖書館名稱按照字典順序排列（製作索引）

console.log("sort()，依指定比較規則重新排列陣列元素順序，回傳「排序後的原陣列參考」。");
console.log("sort() 會直接改變原陣列，而不是回傳一個全新的排序結果。");
console.log("");

const unsortedLibs = [
  '地球科學研究所圖書館',
  '數學研究所圖書館',
  '化學研究所圖書館',
  '物理研究所圖書館'
];

console.log("未排序的圖書館清單:");
console.table(unsortedLibs);

console.log("依照筆畫排序:");
unsortedLibs.sort((a, b) => a.localeCompare(b, 'zh-TW'));
console.log("使用 localeCompare('zh-TW')，避免預設 Unicode 排序造成中文順序不直覺的問題。");

console.log("排序後的索引:");
console.table(unsortedLibs);

console.log('--------------------------------------------------');

// ==========================================
// 編號：11
// 方法名稱：Array.prototype.reverse()
// ==========================================
// 關鍵字：反轉陣列元素的順序
// 是否改變原陣列（mutate）：是
// 參數說明（傳入的數量或用途）：無參數
// 回傳值：Array（反轉後的原陣列參考）
// 常見使用情境：反向排序、倒序播放、回程路線規劃
// ==========================================
// 情境：規劃回程路線（把去程路線反過來）

console.log("reverse()，反轉陣列元素的順序，回傳「反轉後的原陣列參考」。");
console.log("");

const outbound = [
  '數學研究所圖書館',
  '物理研究所圖書館',
  '化學研究所圖書館',
  '地球科學研究所圖書館'
];

console.log("去程路線:");
console.table(outbound);

console.log("規劃回程（反向）:");
outbound.reverse();

console.log("回程路線:");
console.table(outbound);

console.log('--------------------------------------------------');

// ==========================================
// 編號：12
// 方法名稱：Array.prototype.indexOf()
// ==========================================
// 關鍵字：回傳指定元素第一次出現的索引位置
// 是否改變原陣列（mutate）：否
// 參數說明（傳入的數量或用途）：
//   - 第 1 個：要尋找的元素
//   - 第 2 個：起始搜尋位置（可選，預設 0）
// 回傳值：Number（找到回傳索引，找不到回傳 -1）
// 常見使用情境：檢查元素是否存在、找出位置
// ==========================================

console.log("indexOf()，回傳指定元素第一次出現的索引位置，回傳「找到回傳索引，找不到回傳 -1」。");
console.log("");

const searchLibs = [
  '數學研究所圖書館',
  '物理研究所圖書館',
  '化學研究所圖書館',
  '物理研究所圖書館',
  '地球科學研究所圖書館'
];

console.log("搜尋的陣列:");
console.table(searchLibs);
console.log("");

const mathIndex = searchLibs.indexOf("數學研究所圖書館");
const physicsFirst = searchLibs.indexOf("物理研究所圖書館");
const physicsSecond = searchLibs.indexOf("物理研究所圖書館", physicsFirst + 1);
const bioIndex = searchLibs.indexOf("生物研究所圖書館");

console.log("數學館的位置:", mathIndex);
console.log("物理館第一次出現:", physicsFirst);
console.log("物理館第二次出現:", physicsSecond);
console.log("生物館的位置:", bioIndex);

console.log('--------------------------------------------------');

// ==========================================
// 編號：13
// 方法名稱：Array.prototype.lastIndexOf()
// ==========================================
// 關鍵字：回傳指定元素最後一次出現的索引位置
// 是否改變原陣列（mutate）：否
// 參數說明（傳入的數量或用途）：
//   - 第 1 個：要尋找的元素
//   - 第 2 個：起始搜尋位置，從此位置向前搜尋（可選，預設陣列末端）
// 回傳值：Number（找到回傳索引，找不到回傳 -1）
// 常見使用情境：從後往前搜尋、找出最後出現位置、處理重複項目
// ==========================================

console.log("lastIndexOf()，回傳指定元素最後一次出現的索引位置，回傳「找到回傳索引，找不到回傳 -1」。");
console.log("");

const visitLog = [
  '數學研究所圖書館',
  '物理研究所圖書館',
  '數學研究所圖書館',
  '化學研究所圖書館',
  '數學研究所圖書館'
];

console.log("訪問記錄:");
console.table(visitLog);
console.log("");

const lastMath = visitLog.lastIndexOf("數學研究所圖書館");
const lastMathBefore3 = visitLog.lastIndexOf("數學研究所圖書館", 3);
const lastPhysics = visitLog.lastIndexOf("物理研究所圖書館");

console.log("數學館最後出現的位置:", lastMath);
console.log("索引 3 之前數學館最後的位置:", lastMathBefore3);
console.log("物理館最後出現的位置:", lastPhysics);

console.log('--------------------------------------------------');

// ==========================================
// 編號：14
// 方法名稱：Array.prototype.length
// ==========================================
// 關鍵字：取得或設定陣列的元素數量
// 是否改變原陣列（mutate）：讀取時否；設定時是
// 參數說明：這是屬性，不是方法，不需要參數
// 回傳值：Number（陣列的長度）
// 常見使用情境：
//   1. 獲取陣列大小（判斷是否為空、顯示總筆數）
//   2. 清空陣列（length = 0）
//   3. 截斷陣列（length = n）
// ==========================================
// 情境：管理今日參觀的研究所圖書館清單

console.log("length 屬性，取得或設定陣列長度。");
console.log("");

const todayPlan = [
  '數學研究所圖書館',
  '物理研究所圖書館',
  '化學研究所圖書館',
  '地球科學研究所圖書館'
];

console.log("【情境 1】讀取 length：不會改變原陣列");

console.log("今日參觀清單:");
console.table(todayPlan);

const totalLibraries = todayPlan.length;
console.log("今日預計參觀的圖書館數量:", totalLibraries);

if (totalLibraries === 0) {
  console.log("今天沒有安排參觀任何圖書館。");
} else {
  console.log(`今天共有 ${totalLibraries} 間圖書館需要參觀。`);
}

console.log("");
console.log("【情境 2】設定 length 截斷陣列：會改變原陣列");

// 截斷陣列,只保留前兩間
todayPlan.length = 2;
console.log("截斷後的清單:");
console.table(todayPlan);
console.log("截斷後的數量:", todayPlan.length);

console.log("");
console.log("【情境 3】設定 length 為 0 清空陣列：會改變原陣列");

// 清空陣列
todayPlan.length = 0;
console.log("清空後的數量:", todayPlan.length);
console.log("清空後的清單:", todayPlan);

console.log('--------------------------------------------------');

// ==========================================
// 編號：15
// 方法名稱：Array.prototype.includes()
// ==========================================
// 關鍵字：檢查陣列中是否包含指定元素
// 是否改變原陣列（mutate）：否
// 參數說明（傳入的數量或用途）：
// - 第 1 個：要搜尋的元素
// - 第 2 個（可選）：從哪個索引開始搜尋（預設 0）
// 回傳值：Boolean（true 表示包含，false 表示不包含）
// 常見使用情境：判斷列表中是否存在某項目，如是否已完成任務、是否有特定商品、是否符合資格條件
// ==========================================
// 情境：檢查某圖書館是否在今日參觀路線中

console.log("includes()，檢查陣列中是否包含指定元素，回傳 Boolean。");
console.log("情境：檢查某圖書館是否在今日參觀路線中。");
console.log("");

const visitRoute = [
  '數學研究所圖書館',
  '物理研究所圖書館',
  '化學研究所圖書館',
  '地球科學研究所圖書館'
];

console.log("今日參觀路線:");
console.table(visitRoute);

const libraryToCheck1 = "物理研究所圖書館";
const libraryToCheck2 = "生命科學圖書館";

console.log(`檢查是否有「${libraryToCheck1}」:`);
const hasLibrary1 = visitRoute.includes(libraryToCheck1);
console.log(hasLibrary1);

console.log(`檢查是否有「${libraryToCheck2}」:`);
const hasLibrary2 = visitRoute.includes(libraryToCheck2);
console.log(hasLibrary2);

console.log('--------------------------------------------------');

// ==========================================
// 編號：16
// 方法名稱：Array.prototype.some()
// ==========================================
// 關鍵字：測試是否至少有一個元素符合條件
// 是否改變原陣列（mutate）：否
// 參數說明（傳入的數量或用途）：1 個，測試函式 (element, index, array) => boolean
// 回傳值：Boolean（只要有一個通過測試就回傳 true）
// 常見使用情境：檢查是否存在符合條件的項目、驗證、權限檢查
// ==========================================
// 情境：檢查參觀清單中是否包含特定圖書館

console.log("some()，測試是否至少有一個元素符合條件，只要有任何一個元素符合判斷條件，就會回傳 true，如果全都不符合，就會回傳 false。");
console.log("情境：檢查參觀清單中是否包含特定圖書館。");
console.log("");

const checkList = [
  '數學研究所圖書館',
  '物理研究所圖書館',
  '化學研究所圖書館',
  '地球科學研究所圖書館'
];

console.log("參觀清單:");
console.table(checkList);

console.log("檢查清單內容:");

const hasBiology = checkList.some(lib => lib.includes("生物"));
console.log("有包含生物相關的嗎?", hasBiology ? "有" : "沒有");

const hasLongName = checkList.some(lib => lib.length > 8);
console.log("有名稱超過 8 個字的嗎?", hasLongName ? "有" : "沒有");

console.log('--------------------------------------------------');

// ==========================================
// 編號：17
// 方法名稱：Array.prototype.every()
// ==========================================
// 關鍵字：測試是否所有元素都符合條件
// 是否改變原陣列（mutate）：否
// 參數說明（傳入的數量或用途）：1 個，測試函式 (element, index, array) => boolean
// 回傳值：Boolean（全部通過測試才回傳 true）
// 常見使用情境：驗證所有資料完整性、檢查權限、表單驗證
// ==========================================
// 情境：驗證所有圖書館名稱是否符合規範

console.log("every()，測試是否所有元素都符合條件，只要有任何一個元素不符合判斷條件，會回傳 false，如果全部符合，就會回傳 true。");
console.log("情境：驗證所有圖書館名稱是否符合規範。");
console.log("");

const validateList = [
  '數學研究所圖書館',
  '物理研究所圖書館',
  '化學研究所圖書館',
  '地球科學研究所圖書館'
];

console.log("待驗證清單:");
console.table(validateList);

console.log("驗證所有圖書館名稱是否符合規範:");

const allHaveLibWord = validateList.every(name => name.includes("圖書館"));
console.log("全部都包含「圖書館」三個字嗎?", allHaveLibWord ? "是" : "否");

const allAreResearch = validateList.every(name => name.includes("研究所"));
console.log("全部都是「研究所」圖書館嗎?", allAreResearch ? "是" : "否");

const allShortName = validateList.every(name => name.length < 8);
console.log("全部名稱都少於 8 個字嗎?", allShortName ? "是" : "否");

console.log('--------------------------------------------------');

// ==========================================
// 編號：18
// 方法名稱：Array.prototype.forEach()
// ==========================================
// 關鍵字：逐一走訪陣列中的每個元素
// 是否改變原陣列（mutate）：否（但可在 callback 中間接修改）
// 參數說明（傳入的數量或用途）：
//   - 第 1 個：callback 函式 (currentValue, index, array)
//     - currentValue：目前正在處理的陣列元素本身
//     - index：該元素在陣列中的索引位置
//     - array：原本被 forEach 呼叫的陣列
// 回傳值：undefined
// 常見使用情境：
//   - 只針對每一筆資料做處理（顯示、紀錄、操作）
//   - 不需要產生新陣列、不需要回傳結果
// ==========================================
// 情境：依序走訪今日參觀的圖書館清單

console.log("forEach()，依序把陣列的每個元素「交給 callback 函式執行一次」，不回傳新陣列。");
console.log("情境：依序走訪今日參觀的圖書館清單。");
console.log("");

const dailyChecklist = [
  '數學研究所圖書館',
  '物理研究所圖書館',
  '化學研究所圖書館',
  '地球科學研究所圖書館'
];

console.log("今日參觀清單：");
console.table(dailyChecklist);
console.log("");

console.log("依序列出參觀順序：");

dailyChecklist.forEach((library, index) => {
  console.log(`第 ${index + 1} 站：${library}`);
});

console.log("列出完成。");
console.log("");

console.log("forEach() 執行完畢，原陣列未被修改：");
console.table(dailyChecklist);

console.log('--------------------------------------------------');