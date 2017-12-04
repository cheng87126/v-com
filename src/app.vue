<style>

</style>
<template>
    <div id="app">
        <v-upload action="/"></v-upload>
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
            testSwitch:false
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
        'v-switch':SwitchOnoff
    },
    methods:{
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
