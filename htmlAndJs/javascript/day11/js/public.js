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
/*
 * 功能：查找节点的所有子节点 但是儿子中不能有文本节点
 * function name ： searchChilds()
 * @param   obj  object
 * @return  objChilds object
 * */
function searchChilds(o) {
    var childs = o.childNodes;
    var arr = new Array();
    for(var i=0;i<childs.length;i++){
       if(childs[i].nodeType==1){
           arr[arr.length]=childs[i];
       }
    }
    return arr;
}
/*
* 功能：通过class类找到标签对象数组  window.document.getElementsByClassName("")
* function getByClass()
* @param string cname  需要查找的样式名称n
 *@return object Array
* */
function getByClass(cname){
   var arr = document.getElementsByTagName("*");
   var temp = new Array();
   //如果arr中有标签的类名和cname相等  就是想要获得的标签
   for(var i=0;i<arr.length;i++){
     if(arr[i].className==cname){
         temp[temp.length]=arr[i];
     }
   }
   return temp;
}



