/**
 * mock JS from elecV2P - zqsp.js
**/

const request = {
  "url": "https://kandian.wkandian.com/v17/Rvideo/videoCallback.json",
  "method": "POST",
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhY2Nlc3MiOiI0RyIsImFjdGlvbiI6InJpZ2h0X2Nvcm5lcl92aWRlbyIsImFwcC12ZXJzaW9uIjoiMy41LjUiLCJhcHBfbmFtZSI6Inpxa2RfYXBwIiwiYXBwX3ZlcnNpb24iOiIzLjUuNSIsImNhcnJpZXIiOiIlRTQlQjglQUQlRTUlOUIlQkQlRTclQTclQkIlRTUlOEElQTgiLCJjaGFubmVsIjoiYzQxMzAiLCJkZXZpY2VfYnJhbmQiOiJYaWFvbWkiLCJkZXZpY2VfaWQiOiI1NzE4NjM4NSIsImRldmljZV9tb2RlbCI6Ik1JKzkiLCJkZXZpY2VfcGxhdGZvcm0iOiJhbmRyb2lkIiwiZGV2aWNlX3R5cGUiOiJhbmRyb2lkIiwiZHBpIjoiNDQwIiwiaW5uZXJfdmVyc2lvbiI6IjIwMjEwODE4MTAzNCIsImxhbmd1YWdlIjoiemgtQ04iLCJtZW1vcnkiOiI3IiwibWkiOiIxIiwibW9iaWxlX3R5cGUiOiIxIiwibmV0X3R5cGUiOiIyIiwibmV0d29ya190eXBlIjoiNEciLCJvYWlkIjoiZTFkODhiZmJhZjRhMjEyNyIsIm9wZW51ZGlkIjoiNGQzMGM5NjczODkyY2U4MSIsIm9zX2FwaSI6IjI5Iiwib3NfdmVyc2lvbiI6IlFLUTEuMTkwNzE2LjAwMyt0ZXN0LWtleXMiLCJyZXF1ZXN0X3RpbWUiOiIxNjQwMTQ3MjYxIiwicmVzb2x1dGlvbiI6IjEwODB4MjEzNSIsInJvbV92ZXJzaW9uIjoiUUtRMS4xOTA3MTYuMDAzK3Rlc3Qta2V5cyIsInNfYWQiOiJYWWRWaV9YUFVPekElM0RMUTZiN3BYRjlfZnNoRk0wU2xKQzY5UkRfd0FNc1lRcnFzIiwic2ltIjoiMSIsInNtX2RldmljZV9pZCI6IjIwMjExMTI3MDEzMzUxODIwMThjNTMwMTllYjA0M2ZkNmQ1OWNjODgzNWIwMWMwMTNkOTEyMjVjYTNiYzQ4Iiwic3RvcmFnZSI6IjIyNS44MSIsInN1YnYiOiIxLjIuMiIsInVpZCI6IjUyNDgxMDI4IiwidmVyc2lvbl9jb2RlIjoiNjMiLCJ6cWtleSI6Ik1EQXdNREF3TURBd01KQ01wTi13MDlXdGc1LUJiMzZlaDZDUHFIdWFsSWVqbDY2YnRXYXd0M1d5aG55cDRMRFB5R2w5b25xa2ozWnFZSmE4WTg5OG5haldzSnVwWkxHbmRiR0VzcHlYcnJuTWFwcUdjWFkiLCJ6cWtleV9pZCI6IjNkNTU4OTA4ODY0ZWFiMzI2ZDIwOTkxZGI2ZTkzZTQxIn0.8c7evfhg9-v82JPZerecom7fF7GVVR2Sl75QGyevAvxmsU1JClpPmcTlsdZpDVq3C4Uow7G49sMlEzSLLXjlew",
    "Content-Length": "2404",
    "Host": "kandian.wkandian.com",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/3.12.2"
  },
  "body": "access=4G&action=right_corner_video&app-version=3.5.5&app_name=zqkd_app&app_version=3.5.5&carrier=%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8&channel=c4130&device_brand=Xiaomi&device_id=57186385&device_model=MI%209&device_platform=android&device_type=android&dpi=440&inner_version=202108181034&language=zh-CN&memory=7&mi=1&mobile_type=1&net_type=2&network_type=4G&oaid=e1d88bfbaf4a2127&openudid=4d30c9673892ce81&os_api=29&os_version=QKQ1.190716.003%20test-keys&request_time=1640147261&resolution=1080x2135&rom_version=QKQ1.190716.003%20test-keys&s_ad=XYdVi_XPUOzA%3DLQ6b7pXF9_fshFM0SlJC69RD_wAMsYQrqs&sim=1&sm_device_id=2021112701335182018c53019eb043fd6d59cc8835b01c013d91225ca3bc48&storage=225.81&subv=1.2.2&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhY2Nlc3MiOiI0RyIsImFjdGlvbiI6InJpZ2h0X2Nvcm5lcl92aWRlbyIsImFwcC12ZXJzaW9uIjoiMy41LjUiLCJhcHBfbmFtZSI6Inpxa2RfYXBwIiwiYXBwX3ZlcnNpb24iOiIzLjUuNSIsImNhcnJpZXIiOiIlRTQlQjglQUQlRTUlOUIlQkQlRTclQTclQkIlRTUlOEElQTgiLCJjaGFubmVsIjoiYzQxMzAiLCJkZXZpY2VfYnJhbmQiOiJYaWFvbWkiLCJkZXZpY2VfaWQiOiI1NzE4NjM4NSIsImRldmljZV9tb2RlbCI6Ik1JKzkiLCJkZXZpY2VfcGxhdGZvcm0iOiJhbmRyb2lkIiwiZGV2aWNlX3R5cGUiOiJhbmRyb2lkIiwiZHBpIjoiNDQwIiwiaW5uZXJfdmVyc2lvbiI6IjIwMjEwODE4MTAzNCIsImxhbmd1YWdlIjoiemgtQ04iLCJtZW1vcnkiOiI3IiwibWkiOiIxIiwibW9iaWxlX3R5cGUiOiIxIiwibmV0X3R5cGUiOiIyIiwibmV0d29ya190eXBlIjoiNEciLCJvYWlkIjoiZTFkODhiZmJhZjRhMjEyNyIsIm9wZW51ZGlkIjoiNGQzMGM5NjczODkyY2U4MSIsIm9zX2FwaSI6IjI5Iiwib3NfdmVyc2lvbiI6IlFLUTEuMTkwNzE2LjAwMyt0ZXN0LWtleXMiLCJyZXF1ZXN0X3RpbWUiOiIxNjQwMTQ3MjYxIiwicmVzb2x1dGlvbiI6IjEwODB4MjEzNSIsInJvbV92ZXJzaW9uIjoiUUtRMS4xOTA3MTYuMDAzK3Rlc3Qta2V5cyIsInNfYWQiOiJYWWRWaV9YUFVPekElM0RMUTZiN3BYRjlfZnNoRk0wU2xKQzY5UkRfd0FNc1lRcnFzIiwic2ltIjoiMSIsInNtX2RldmljZV9pZCI6IjIwMjExMTI3MDEzMzUxODIwMThjNTMwMTllYjA0M2ZkNmQ1OWNjODgzNWIwMWMwMTNkOTEyMjVjYTNiYzQ4Iiwic3RvcmFnZSI6IjIyNS44MSIsInN1YnYiOiIxLjIuMiIsInVpZCI6IjUyNDgxMDI4IiwidmVyc2lvbl9jb2RlIjoiNjMiLCJ6cWtleSI6Ik1EQXdNREF3TURBd01KQ01wTi13MDlXdGc1LUJiMzZlaDZDUHFIdWFsSWVqbDY2YnRXYXd0M1d5aG55cDRMRFB5R2w5b25xa2ozWnFZSmE4WTg5OG5haldzSnVwWkxHbmRiR0VzcHlYcnJuTWFwcUdjWFkiLCJ6cWtleV9pZCI6IjNkNTU4OTA4ODY0ZWFiMzI2ZDIwOTkxZGI2ZTkzZTQxIn0.8c7evfhg9-v82JPZerecom7fF7GVVR2Sl75QGyevAvxmsU1JClpPmcTlsdZpDVq3C4Uow7G49sMlEzSLLXjlew&uid=52481028&version_code=63&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl66btWawt3Wyhnyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLGndbGEspyXrrnMapqGcXY&zqkey_id=3d558908864eab326d20991db6e93e41"
}

$axios(request).then(res=>{
  console.log(res.data)
}).catch(e=>{
  console.error(e)
})