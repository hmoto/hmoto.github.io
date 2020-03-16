<?php
header('Access-Control-Allow-Origin:*');
session_start();
include './Base.php';

// $body = json_decode(@file_get_contents('php://input'));

/**
 *  获取用户openid
 *  构建原始数据
 *  加入签名
 *  调用统一下单API
 *  获取到prepay_id
 */
class WeiXinPay extends Base
{
    public function __construct() {
    
    }
    
}

$obj = new WeiXinPay();

$openid = $obj->getOpenId();

$prepay_id = $obj->getPrepayId(strval(time()),$openid);
// $prepay_id = $obj->getPrepayId($openid,$body);

$json = $obj->getJsParams($prepay_id);
echo $json;

?>
