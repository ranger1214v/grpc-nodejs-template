# gcp-grpc-nodejs
 基於 GRPC 協定的示例

---
## 初始步驟
   1. `npm i` 
   2. `npm run grpc-gen`  **編譯 proto 檔案**
   3. `npm build`
   4. `npm start:server`

## 測試方法   
 ```  
npm run start:client -- --action=UnaryAddItem \
--name=ranger  \
--message=6666 \
--host=0.0.0.0:433
```
