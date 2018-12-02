<template>
    <div id="app">
        <div class="stage">
            <swiper
                    :indicatorDots="indicatorDots" :autoplay="autoplay" :circular="circular" :vertical="vertical"
                    :interval="interval" :duration="duration" :previousMargin="previousMargin" :nextMargin="nextMargin"
                    :display-multiple-items="displayMultipleItems"
                    @change="debug">
                <swiper-item v-for="(item, idx) in background" :key="idx" :item-id="idx">
                    <div class="swiper-item" :class="item"></div>
                </swiper-item>
            </swiper>
            <br>
            <label for="vertical">指示点</label>
            <input type="checkbox" id="indicatorDots" v-model="indicatorDots">
            <br>
            <label for="vertical">竖向</label>
            <input type="checkbox" id="vertical" v-model="vertical">
            <br>
            <label for="autoplay">自动播放</label>
            <input type="checkbox" id="autoplay" v-model="autoplay">
            <br>
            <label for="circular">首尾衔接</label>
            <input type="checkbox" id="circular" v-model="circular">
        </div>
    </div>
</template>
<script>
    export default {
        name: 'App',
        data() {
            return {
                background: ['demo-text-1', 'demo-text-2', 'demo-text-3', 'demo-text-4'],
                indicatorDots: true,
                vertical: false,
                autoplay: false,
                circular: true,
                interval: 1000,
                duration: 500,
                previousMargin: 0,
                nextMargin: 0,
                displayMultipleItems: 3
            }
        },
        methods: {
            insertViewport() {
                let meta = document.querySelectorAll('meta[name=viewport]')
                if (!meta[0]) {
                    meta = document.createElement('meta')
                    meta.id = 'viewport'
                    meta.name = 'viewport'
                    meta.content =
                        'width=320, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
                    document.querySelector('head').appendChild(meta)
                }
            },
            debug() {
            }
        },
        mounted() {
            this.insertViewport()
        }
    }
</script>
<style scoped>
#app {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
}
#app > * {
        word-break: break-all;
}
pre {
    max-width: 100%;
    white-space: pre-line;
}
.stage {
    width: 375px;
    box-shadow: 0 0 10px -4px;
    min-height: 400px;
}
.demo-text-1 {
    background-color: #1AAD19;
    color: #FFFFFF;
}
.demo-text-1:before {
    content: 'A';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.demo-text-2 {
    background-color: #2782D7;
    color: #FFFFFF;
}
.demo-text-2:before {
    content: 'B';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.demo-text-3 {
    background-color: #F1F1F1;
    color: #353535;
}
.demo-text-3:before {
    content: 'C';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.demo-text-4{
    background-color: #6AE;
    color: #fff;
}
.demo-text-4:before {
    content: 'D';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.swiper-item {
    height: 150px;
}
</style>