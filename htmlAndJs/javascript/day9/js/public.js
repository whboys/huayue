/**
 * Created by Administrator on 2017/7/19.
 */

/*
* 功能：查找节点的上一个节点并返回
* function name ： searchPre()
* @param  obj  object
* @return objPre object
* */
function searchPre(obj) {
    var objPre = obj.previousSibling;
    //判断是文本节点还是元素节点
    if(objPre.nodeType==1){
        return objPre;
    }
    else{
        return objPre.previousSibling;
    }
}
/*
 * 功能：查找节点的下一个节点并返回
 * function name ： searchNext()
 * @param  obj  object
 * @return objPre object
 * */
function searchNext(obj) {
    var objNext = obj.nextSibling;
    //判断是文本节点还是元素节点
    if(objNext.nodeType==1){
        return objNext;
    }
    else{
        return objNext.nextSibling;
    }
}


