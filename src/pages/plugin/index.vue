<template>
  <view v-if="isLoaded">
    插件页面
    <button @click="jumpTo">随机跳转</button>
		加载完成
    <view>
		加载完成
      <plugin></plugin>
    </view>
  </view>
</template>

<script lang="ts">
import { Component,Vue } from "vue-property-decorator";
import Parse from "@/core/parse/Parse";
import {IParse} from "@/core/parse/IParse";


@Component({})
export default class PluginComp extends Vue {
    mounted(){
        setTimeout(()=>{
            this.isLoaded = true
        },5000)
    }
  isLoaded:boolean=false
  jumpTo() {
    uni.navigateTo({
      url: `/pages/plugin/index?params=${Math.random()}`,
    });
  }
  onLoad(options: {params:number}) {
    // 模拟两个组件
    if(options.params>0.5){
      this.createPlugin(<IParse>{
        name:'components',
        pluginUrls:["dev/je/document/down?fileKey=cZylkaZVdMjlQ73GJ0W"]
      })
    }else{
      this.createPlugin(<IParse>{
        name:'test',
        pluginUrls:["dev/je/document/down?fileKey=mwY03T9IkEp3P4Ght3S"]
      })
    }
  }

  onShow(){
  }


  async createPlugin(parse:IParse) {
    const plugin: Parse = await Parse.create(<IParse>{
      name: parse.name,
      pluginUrls:parse.pluginUrls,
    });

    plugin.initPlugin();
    window.test = this
    this.__proto__.constructor.component('plugin',{
        data() {
            return  {
                level:1
            }
        },
        render (createElement:any) {
            return createElement(
                'h' + this.level  // 标签名称
            )
        }
    })
    this.isLoaded = true
  }
}
</script>

<style></style>
