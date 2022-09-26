# gcp-grpc-nodejs
 基於 GRPC 協定的示例

---
## 初始步驟
   1. `npm i`  ( 若您的電腦使用 Apple Silicon 處理器，則需要另加參數 --target_arch=x64)
   2. `npm run protoc-gen`  **編譯 proto 檔案**
   3. `npm run protoc-reflection`  **建立 reflection 檔案，為此 proto 提供公開的參考**
   3. `npm build`
   4. `npm start:server`

---

## 測試方法   
### 建立 server
```
npm start:server
```

### 實測 client 端 API
測試 unary 方法
 ```  
npm run start:client -- --action=UnaryAddItem \
--name=ranger  \
--message=6666
```

測試 clientStreaming 方法
 ```  
npm run start:client -- --action=clientStreamingAddItem
```


測試 serverStreaming 方法
 ```  
npm run start:client -- --action=ServerStreamingSubList
```


測試 bidirectionalStreaming 方法
 ```  
npm run start:client -- --action=bidirectionalStreamingAsyncList
```
