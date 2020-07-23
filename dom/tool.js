//封装一个获取当前有效样式的函数
function getStyle(node, cssStyle){
    return node.currentStyle ? node.currentStyle[cssStyle] : getComputedStyle(node)[cssStyle];
} 

//封装一个兼容IE8以下通过className去获取元素节点
function elementsByClassName(node,classStr){
    var nodes = node.getElementsTagName("*"); //获取node下面所有的子节点
    var arr = []; //存放符合条件的节点
    for(var i = 0; i < nodes.length; i++){
        if(nodes[i].className === classStr){
            arr.push(nodes[i]); //截取所有的符合条件的子节点放入arr这个数组
        }
    }
    return arr; 
}

//封装一个拖拽的函数
function drag (node){
    //记录鼠标按下的位置与被拖拽物体的相对距离  
    node.onmousedown = function(ev){
        var e = ev || window.event; //获取事件对象
        //水平距离 = 当前鼠标位 - 拖拽物居左距离
        var offsetX = e.clientX - node.offsetLeft;
        var offsetY = e.clientY - node.offsetTop;

        //鼠标移动一直保持相对距离
        document.onmousemove = function (ev){
            var e = ev || window.event
            node.style.left = e.clientX - offsetX + "px";
            node.style.top = e.clientY - offsetY + "px";
        }
    }
    //取消拖拽
    document.onmouseup = function(){
        document.onmousemove = null;
    }
}