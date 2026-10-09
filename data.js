// 記錄以「里程」為唯一鍵，里程相同即同一筆。
// item.status: "done" 已施作 / "quote" 報價或檢查異常（未施作）
// item.cat: 項目分類，清單以此歸戶。

window.SEED = [
  {
    km: 61262, date: "2025-06-05", shop: "鑫揚汽車", no: "0114060503", total: 8400,
    items: [
      { cat: "機油", name: "機油 5W-50 全合成 5L、機油芯", price: 3000, status: "done" },
      { cat: "火星塞", name: "火星塞 SK16HR11 銥合金 ×4", price: 2400, status: "done" },
      { cat: "積碳清洗", name: "積碳清洗劑（含工資）", price: 1500, status: "done" },
      { cat: "汽油系統清洗", name: "汽油版清洗劑（含工資）", price: 1500, status: "done" },
      { cat: "避震器", name: "後避震器漏油", price: 0, status: "quote" }
    ]
  },
  {
    km: 68458, date: "2025-10-13", shop: "耐途耐", no: "1141013008", total: 5896,
    items: [
      { cat: "機油", name: "5000 公里定期保養（機油、機油芯）", price: 1999, status: "done" },
      { cat: "節氣門", name: "電子節氣門清潔校正", price: 699, status: "done" },
      { cat: "冷氣風箱", name: "冷氣風箱保養", price: 899, status: "done" },
      { cat: "煞車油", name: "德國福士煞車油循環", price: 1499, status: "done" },
      { cat: "空氣芯", name: "空氣芯", price: 300, status: "done" },
      { cat: "冷氣濾網", name: "冷氣濾網", price: 500, status: "done" },
      { cat: "變速箱漏油", name: "變速箱底殼漏油", price: 0, status: "quote" },
      { cat: "李仔串", name: "左右前李仔串異常損壞", price: 0, status: "quote" },
      { cat: "防傾桿橡皮", name: "左右前防傾桿橡皮磨耗", price: 0, status: "quote" },
      { cat: "避震器", name: "左右後避震器漏油損壞", price: 0, status: "quote" },
      { cat: "傳動軸油封", name: "傳動軸油封漏油", price: 0, status: "quote" },
      { cat: "輪胎", name: "四輪胎壓不足", price: 0, status: "quote" }
    ]
  },
  {
    km: 75306, date: "2026-02-03", shop: "耐途耐", no: "", total: 0,
    items: [
      { cat: "冷氣濾網", name: "冷氣濾網過髒", price: 0, status: "quote" },
      { cat: "冷氣風箱", name: "冷氣風箱過髒", price: 0, status: "quote" },
      { cat: "機油", name: "機油達保養里程", price: 0, status: "quote" },
      { cat: "雨刷水", name: "前雨刷水量不足", price: 0, status: "quote" },
      { cat: "節氣門", name: "電子節氣門積碳", price: 0, status: "quote" },
      { cat: "火星塞", name: "火星塞間隙過大", price: 0, status: "quote" },
      { cat: "引擎積碳", name: "內燃機嚴重積碳", price: 0, status: "quote" },
      { cat: "皮帶", name: "綜合皮帶已龜裂", price: 0, status: "quote" },
      { cat: "輪胎", name: "四輪胎壓不足、右前輪胎異常", price: 0, status: "quote" },
      { cat: "排氣管吊耳", name: "排氣管吊耳斷裂", price: 0, status: "quote" }
    ]
  },
  {
    km: 81724, date: "2026-05-08", shop: "耐途耐", no: "1150508002", total: 7797,
    items: [
      { cat: "機油", name: "5000 公里定期保養（機油、機油芯）", price: 1999, status: "done" },
      { cat: "節氣門", name: "電子節氣門清潔校正", price: 699, status: "done" },
      { cat: "冷氣風箱", name: "冷氣風箱保養", price: 899, status: "done" },
      { cat: "空氣芯", name: "空氣芯", price: 300, status: "done" },
      { cat: "冷氣濾網", name: "高效型冷氣濾網", price: 600, status: "done" },
      { cat: "電瓶", name: "電瓶", price: 3300, status: "done" },
      { cat: "燈泡", name: "小燈燈炮", price: 0, status: "done" }
    ]
  }
];

// 兩次施作的里程間隔若小於 min 標「偏短」，大於 max 標「偏長」。經驗值，可自行調整。
window.RULES = {
  "機油": { max: 10000 },
  "空氣芯": { min: 15000 },
  "冷氣濾網": { min: 15000 },
  "節氣門": { min: 20000 },
  "冷氣風箱": { min: 30000 }
};
