# thaipost-api-nodejs
API ติดตามพัสดุ ไปรษณีย์ไทย Node JS

## การใช้งาน 
 1. โหลด
 2. แตกไฟล์
 3. เปิด cmd ในโฟลเดอร์ที่แจกไฟล์มา
 4. รันคำสั่ง `npm install` เพื่อลง package ที่จำเป็น
 5. สมัครบัญชีที่ [track.thailandpost.co.th](https://track.thailandpost.co.th/register)
 6. แก้ใขไฟล์ `index.js` ด้วยข้อมูลที่ถูกต้อง
 7. รัน
   
## การ import เข้าโปรเจก
 1. ลากโฟล์ thaipost.js เข้าไปในโปรเจก nodejs (แนะนำเก็นใว้ในโฟลเดอร์ lib)
 2. เพิ่มโคตนี้เข้าไปที่ index.js หรือไฟล์ที่จะใช้
```const thaipost = require('./lib/thaipost.js');```
NOTE: ตรง `./lib/thaipost.js` ต้องเป็นที่อยู่ของไฟล์ 
 3. ใช้โคตต่อไปนี้เพื่อเรียก Function มาใช้
```
thaipost.getPackage("โทเคน", "เลขพัสดุ").then((package) => {
    console.log(package);
    // ข้อมูลจะเป็นรูปแบบ json แบบ parse แล้ว
    // สามารถนำมาใช้ได้ทันที ไม่ต้อง parse อีกรอบ
})
```
หรือถ้านะไปรันใน function ที่เป็น async
```
cosnt package = await thaipost.getPackage("โทเคน", "เลขพัสดุ")
console.log(package);
// ข้อมูลจะเป็นรูปแบบ json แบบ parse แล้ว
// สามารถนำมาใช้ได้ทันที ไม่ต้อง parse อีกรอบ
```
 4. Good Luck !

## Required Packages
- Axios

เอาไปทำอะไรก็ได้ ไม่ว่ากัน
Happy coding! :)
