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