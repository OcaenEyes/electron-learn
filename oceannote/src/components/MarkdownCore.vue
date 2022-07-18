<!--
 * @Description: .
 * @Version: 0.0.1
 * @Autor: OCEAN.GZY
 * @Date: 2022-07-16 09:50:07
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2022-07-18 14:26:03
-->
<template>
  <div id="editor" style="height:100%">
    <mavon-editor v-model="inputtext" style="height: 100%" :toolbars="mdOptions"></mavon-editor>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'MarkdownCore',
  setup() {
    const inputtext = ref('')
    const mdOptions = ref({})
    onMounted(() => {
      mdOptions.value = {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
      inputtext.value = '**# 桌面应用：📙OceanNote-dev0.0.2**\n\n++*👋本版本为测试版，功能还在优化中~🤔*++\n\n> 👋为浅度用户部署了[网页版](https://note.oceangzy.top)\n\n    1.文档新建、打开文档(拖拽文件打开、文件右键打开)、保存(---ps:网页版不支持---)\n    2.编辑、预览、一键清空\n    3.文档导航目录\n    4.标题、引用、粗体、斜体、\n    5.标记、上标、下标、下划线、删除线\n    6.表格\n    7.图片\n    8.链接\n    9.有序编号、无序编号\n    10.代码\n    11.流程图\n    12.数学公式\n     \n\n**# 关于作者**\n\n##### 👋 读书城南，🤔 在未来面前，我们都是孩子～\n\n- 📙 一个热衷于探索学习新方向、新事物的智能产品经理，闲暇时间喜欢coding💻、画图🎨、音乐🎵、学习ing~\n  \n##### 👋 Social Media\n\n- 🛠️ Blog: [http://oceaneyes.top](http://oceaneyes.top)\n\n- ⚡ PM导航: [https://pmhub.oceangzy.top](https://pmhub.oceangzy.top)\n\n- ☘️ CNBLOG: [https://www.cnblogs.com/oceaneyes-gzy/](https://www.cnblogs.com/oceaneyes-gzy/)\n\n- 🌱 AI PRJ自己部署的一些算法demo: [http://ai.oceangzy.top/](http://ai.oceangzy.top/)\n\n- 📫 Email: 1450136519@qq.com\n\n- 💬 WeChat: [OCEANGZY](https://oceaneyes.top/img/wechatqrcode.jpg)\n\n- 💬 公众号: [UncleJoker-GZY](https://oceaneyes.top/img/wechatgzh.jpeg)\n  \n##### 👋 感谢打赏~\n  \n  <img src="https://oceaneyes.top/img/alipay.jpg" title="支付宝打赏" alt="" width="140" >\n  <img src="https://oceaneyes.top/img/wechatpay.jpg" title="微信打赏" alt="" width="140" >\n'
    })
    return {
      inputtext,
      mdOptions
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
