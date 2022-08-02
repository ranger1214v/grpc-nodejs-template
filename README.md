# gcp-grpc-nodejs
 基於 GRPC 協定的示例

---
### 執行步驟
1. ``` npm i ```
2. ``` npm run build ```
3. 建立 server 端 ``` npm run start:server ```
4.
 ```  
npm run start:client -- --action=UnaryAddItem \
--name=ranger  \
--message=6666 \
--host=node-grpc-dnz3lqp74q-de.a.run.app
```
