# 【從 Hooks 開始，讓網頁 React 起來】台灣好天氣 - 臺灣即時天氣 App 🇹🇼 實作

## GitHub pages link
- [https://zoeguava.github.io/realtime-weather-app/](https://zoeguava.github.io/realtime-weather-app/)

## 主要資料夾配置

```
realtime-weather-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public ── 此資料夾主要放置靜態、不需要重新編譯的檔案。
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src ── 部署時會透過 webpack 將檔案打包成 js 檔案以供 index.html 使用。
    ├── components
    │   └── WeatherIcon.js
    │       └── 把 API 取得的天氣代碼轉換相應的天氣圖示。
    ├── hooks
    │   └── useWeatherAPI.js
    │       └── 向中央氣象局發送 API 請求並回傳取得的天氣資料。
    ├── images
    ├── utils
    │   ├── helpers.js
    │   │   └── 取得用以判定 light 或是 dark 模式的日出日落時間。
    │   └── sunrise-sunset.json
    │       └── 各地區日出日落時間。
    ├── views
    │   ├── WeatherCard.js
    │   │   └── 天氣資訊的主要顯示畫面。
    │   └── WeatherSetting.js
    │       └── 變更顯示天氣的地區。
    ├── App.js
    ├── index.css
    ├── index.js
    ├── reportWebVitals.js
    └── setupTests.js
```

## 作品來源

- 從 Hooks 開始，讓你的網頁 React 起來：
  - 鐵人賽：[https://ithelp.ithome.com.tw/users/20103315/ironman/2668](https://ithelp.ithome.com.tw/users/20103315/ironman/2668)
  - GitHub：[https://github.com/pjchender/learn-react-from-hook-realtime-weather-app](https://github.com/pjchender/learn-react-from-hook-realtime-weather-app)