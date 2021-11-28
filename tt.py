import requests
url = "https://api5-normal-lq.toutiaoapi.com/luckycat/lite/v1/activity/done_whole_scene_task/?act_hash=90485abd3cacf666564152302dbf6fa5&aid=35&device_platform=android"
result = requests.post(url, {
     "group_id": "\/^703373623096985d{4}\/g",
     "scene_key": "article_detail",
     "is_golden_egg": "false"
}
, {
    "headers": {
     "Host": "api5-normal-lq.toutiaoapi.com",
     "sdk-version": "2",
     "x-tt-token": "00561061829fe3917687176aec69e0276c03de48b3a0df93795defc2c23708afac88142da1f9bfc6193d322eac5b06e0a94811a3ac063f74d9efe4e2b7d1dd8452e9d8b9be950e24d49ab47272814c96c764e0cba7f9ea67aaedf49eb15acfee8a335-1.0.1",
     "x-vc-bdturing-sdk-version": "2.0.0",
     "content-type": "application/json; charset=utf-8",
     "Content-Type": "application/json; charset=UTF-8",
     "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; MI 9 MIUI/9.8.22) NewsArticle/8.5.0 cronet/TTNetVersion:6be24b75"
}
});

