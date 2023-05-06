/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

    // 使用微信测试号：公众号APP_ID
    APP_ID: 'wx3f08e7e54ef1ecb1',
  
    // 使用微信测试号：公众号APP_SECRET
    APP_SECRET: '52447c4f0d88c3cd6dfc340eefedf315',
  
   
  
    USERS: [
      {
        PROVINCE: '广东',
         CITY: '深圳',
          // 想要发送的人的名字
        name: '吴小小',
        // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
        id: 'oJ1KC6vD81_zhNn0Et7qkciNfLPY',
        // 使用微信测试号：你想对他发送的模板消息的模板ID
        useTemplateId: 'Q-yXFogDQ0BTx6xNmKpdWZUMyeR5594lIZZcJ_qgQO8',
        // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
        horoscopeDate: '03-29',
        festivals: [
          // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
          {
            type: '*生日', name: '吴小小', year: '2001', date: '03-03',
          },
          // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
//           {
//             type: '生日', name: '吴小小', year: '2001', date: '03-29',
//           },
          
        ],
        // // 我们在一起已经有xxxx天了的配置
        // customizedDateList: [
        //   // 在一起的日子
        //   { keyword: 'love_day', date: '2022-09-08' },
        //   // 结婚纪念日
        //   { keyword: 'marry_day', date: '2022-09-09' },
        // ],
      },
      {
        // 想要发送的人的名字
        name: '袁憨憨',
        // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
        id: 'oJ1KC6sI9s7o0N3lUOeoWcgsw2Gc',
        // 使用微信测试号：你想对他发送的模板消息的模板ID
        useTemplateId: 'uGNRXTU-HixiAL3yV05Y3MTACbcdhYZjZ-k8f3BpgU0',
         PROVINCE: '广东',
         CITY: '深圳',
        // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
        horoscopeDate: '11-16',
        festivals: [
          // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
//           {
//             type: '*生日', name: '吴小小', year: '2001', date: '03-03',
//           },
//           // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
          {
            type: '生日', name: '袁憨憨', year: '2001', date: '11-16',
          },
          
        ],
        // // 我们在一起已经有xxxx天了的配置
        // customizedDateList: [
        //   // 在一起的日子
        //   { keyword: 'love_day', date: '2022-09-08' },
        //   // 结婚纪念日
        //   { keyword: 'marry_day', date: '2022-09-09' },
        // ],
      },
        		
        
    ],
  
  
    // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
    CALLBACK_TEMPLATE_ID: '0jWAiB-LeJlsfIq3kv0zUT-UKwnLCtwwUO9REs3vgbg',
  
    CALLBACK_USERS: [
      {
        name: '自己',
        // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
        id: 'oJ1KC6vD81_zhNn0Et7qkciNfLPY',
      }
    ],
  
  }
  
  module.exports = USER_CONFIG
  
