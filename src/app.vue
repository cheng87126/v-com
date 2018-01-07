<style>

</style>
<template>
    <div id="app">
        <v-upload 
            action="/"
            v-bind:after-upload="testafter"></v-upload>
        <v-radio name="web" id="js-id" value="js" v-bind:checked.sync="radioVal">js</v-radio>
        <v-radio name="web" id="css-id" value="css" v-bind:checked.sync="radioVal">css</v-radio>
        <div>radio value:{{radioVal}}</div>
        <v-checkbox name="checkboxs" id="js-vue" value="Vue" v-model="checkboxVal">Vue</v-checkbox>
        <v-checkbox name="checkboxs" id="js-react" value="React" v-model="checkboxVal">React</v-checkbox>
        <v-checkbox name="checkboxs" id="js-angular" value="Angular" v-model="checkboxVal">Angular</v-checkbox>
        <div>checkbox value:{{checkboxVal}}</div>
        <v-input id="test" name="test" placeholder="test input" v-model="testVal" v-on:blur="validInput">text</v-input>
        <div>input value:{{testVal}}</div>
        <v-tree v-bind:tree-data="testTree"></v-tree>
        <v-button size="s" type="success" v-on:click="testModal($event)">test</v-button>
        <v-modal v-model="showModal">
            <div slot="header">标题</div>
            <div>内容</div>
            <div slot="footer">
                <v-button size="s" type="success">确定</v-button>
                <v-button size="s" type="error" v-on:click="testModal1($event)">取消</v-button>                
            </div>
        </v-modal>
        <v-slider v-model="testSlider"></v-slider>
        <div>slider vlaue:{{testSlider}}</div>
        <v-select 
            v-bind:list="testSelect"
            v-model="selected">
        </v-select>
        <v-play v-model="testPlay"></v-play>
        <v-rate v-model="testRate" style="font-size:32px;"></v-rate>
        <div>testRate : {{testRate}}</div>
        <v-switch v-model="testSwitch"></v-switch>
        <div>testSwitch : {{testSwitch}}</div>
        <v-progress v-bind:value="testProgress"></v-progress>
        <v-breadcrumb v-bind:name="testBreadcrumb" v-bind:current="2"></v-breadcrumb>
        <v-tabTitleBox>
            <v-tabTitle ref="title1" v-model="currentTitle">title1</v-tabTitle>
            <v-tabTitle ref="title2" v-model="currentTitle">title2</v-tabTitle>
            <v-tabTitle ref="title3" v-model="currentTitle">title3</v-tabTitle>
        </v-tabTitleBox>
        <v-tabContentBox>
            <v-tabContent v-model="currentTitle">content1</v-tabContent>
            <v-tabContent v-model="currentTitle">content2</v-tabContent>
            <v-tabContent v-model="currentTitle">content3</v-tabContent>
        </v-tabContentBox>
        <v-toolTip style="display:inline-block;" tips="This is tooltip">test tooltip</v-toolTip>
        <div>
            <v-timeline v-bind:timeline="{time:'2017/12/12',content:'timeline'}"></v-timeline>
            <v-timeline v-bind:timeline="{time:'2017/12/12',content:'timeline'}"></v-timeline>        
            <v-timeline v-bind:timeline="{time:'2017/12/12',content:'timeline'}"></v-timeline>
        </div>
        <v-colorpicker></v-colorpicker>
        <v-backTop v-bind:position="500"></v-backTop>
        <v-scrollbar style="width:300px;height:300px">
            <p style="height:200px;background:#eee;">test scrollbar0</p>
            <p style="height:200px;background:#eee;">test scrollbar1</p>
            <p style="height:200px;background:#eee;">test scrollbar2</p>
        </v-scrollbar>
    </div>
</template>
<script>
import Upload from './upload.vue'
import Radio from './radio.vue'
import Checkbox from './checkbox.vue'
import Input from './input.vue'
import Tree from './tree.vue'
import Button from './button.vue'
import Modal from './modal.vue'
import Slider from './slider.vue'
import Select from './select.vue'
import Play from './play.vue'
import Rate from './rate.vue'
import SwitchOnoff from './switch.vue'
import Progress from './progress.vue'
import Breadcrumb from './breadcrumb.vue'
import TabTitle from './tabTitle.vue'
import TabContent from './tabContent.vue'
import TabTitleBox from './tabTitleBox.vue'
import TabContentBox from './tabContentBox.vue'
import ToolTip from './tooltip.vue'
import Timeline from './timeline.vue'
import Colorpicker from './colorpicker.vue'
import BackTop from './backTop.vue'
import Scrollbar from './scrollbar.vue'
export default {
    name:'app',
    data(){
        return{
            radioVal:'js',
            checkboxVal:['Vue'],
            testVal:'testVal',
            testTree:[{
                name:'name1',
                children:[]
            },{
                name:'name2',
                children:[{
                    name:'subname',
                    children:[{
                        name:'subname1',
                        children:[]
                    }]
                }]
            },{
                name:'name3',
                children:[{
                    name:'subname',
                    children:[]
                }]
            }],
            showModal:false,
            testSlider:10,
            testSelect:[{
                value:'html',
                label:'html'
            },{
                value:'css',
                label:'css'
            },{
                value:'js',
                label:'js'
            }],
            selected:'',
            testPlay:true,
            testRate:3,
            testSwitch:false,
            testProgress:50,
            testBreadcrumb:['name1','name2','name3'],
            currentTitle:2
        }
    },
    components:{
        'v-upload':Upload,
        'v-radio':Radio,
        'v-checkbox':Checkbox,
        'v-input':Input,
        'v-tree':Tree,
        'v-button':Button,
        'v-modal':Modal,
        'v-slider':Slider,
        'v-select':Select,
        'v-play':Play,
        'v-rate':Rate,
        'v-switch':SwitchOnoff,
        'v-progress':Progress,
        'v-breadcrumb':Breadcrumb,
        'v-tabTitle':TabTitle,
        'v-tabContent':TabContent,
        'v-tabTitleBox':TabTitleBox,
        'v-tabContentBox':TabContentBox,
        'v-toolTip':ToolTip,
        'v-timeline':Timeline,
        'v-colorpicker':Colorpicker,
        'v-backTop':BackTop,
        'v-scrollbar':Scrollbar
    },
    methods:{
        testafter(){
            console.log('after upload')
        },
        validInput(val){
            console.log(val)
        },
        testModal(e){
            this.showModal=!this.showModal
            console.log(this.showModal)
        },
        testModal1(e){
            this.showModal=!this.showModal
            console.log('cancel')
        }
    }
}
</script>
