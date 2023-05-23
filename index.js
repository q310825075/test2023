//480*640
//576*768
//1440*1920  1430*1860   1910*943
//var vConsole = new window.VConsole();

function getQueryString(name) {
    const url_string =  window.location.href
    const url = new URL(url_string);
    return url.searchParams.get(name);
}


var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';


let screen_id=getQueryString('screen')
let test_id=getQueryString('test')
let res_id=getQueryString('res')
let dark_id=getQueryString('dark')

if(screen_id==null){
    screen_id='0'
}

let infor_box=document.getElementById("infor_box")
if(res_id==1){
    infor_box.style.display="block"
}else{
    infor_box.style.display="none"
}

let url="js/index_"+screen_id+".css"


link.href = url;
document.getElementsByTagName('head')[0].appendChild(link);


function onload_func(){
    document.body.style.display="block"
    iframe.contentWindow.document.body.style.setProperty('--Color8',  theme_color8[theme_x])
    iframe.contentWindow.document.body.style.setProperty('--Color9',  theme_color9[theme_x])
    view_size_func()
   // callout_func(0)

    //json_load_func()
    try{
        iframe.contentWindow.app.fire("rotate_active",0)
        console.log("内容加载完成！")
        window.NativeBridge.onload()
    }catch (e){}

    Auto_test()
}



const default_json="{\"0\":{\"male\":0,\"face_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"face_color\":[0,255,200,200],\"hair_style\":1,\"hair_color\":[0,76,107,170],\"eye_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"eye_color\":0,\"brow_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"brow_color\":[6,239,160,205],\"eye_ball\":[0,[0,0,0],[0,0,0]],\"noise_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"mouse_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"thumbnail\":\"./img/default.png\"},\"1\":{\"male\":0,\"face_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"face_color\":[0,255,200,200],\"hair_style\":1,\"hair_color\":[0,76,107,170],\"eye_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"eye_color\":0,\"brow_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"brow_color\":[6,239,160,205],\"eye_ball\":[0,[0,0,0],[0,0,0]],\"noise_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"mouse_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"thumbnail\":\"./img/H1.png\"},\"2\":{\"male\":0,\"face_style\":[6,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"face_color\":[1,255,200,200],\"hair_style\":4,\"hair_color\":[0,237,168,107],\"eye_style\":[4,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"eye_color\":0,\"brow_style\":[7,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"brow_color\":[0,224,172,105],\"eye_ball\":[0,[0,0,0],[0,0,0]],\"noise_style\":[5,[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"mouse_style\":[4,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"thumbnail\":\"./img/H2.png\"},\"3\":{\"male\":0,\"face_style\":[5,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"face_color\":[1,255,200,200],\"hair_style\":3,\"hair_color\":[0,16,16,16],\"eye_style\":[1,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"eye_color\":0,\"brow_style\":[2,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"brow_color\":[0,72,64,56],\"eye_ball\":[0,[0,0,0],[0,0,0]],\"noise_style\":[8,[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"mouse_style\":[1,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"thumbnail\":\"./img/H3.png\"},\"4\":{\"male\":1,\"face_style\":[6,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"face_color\":[3,255,200,200],\"hair_style\":1,\"hair_color\":[0,255,184,102],\"eye_style\":[3,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"eye_color\":0,\"brow_style\":[4,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"brow_color\":[0,255,184,126],\"eye_ball\":[0,[0,0,0],[0,0,0]],\"noise_style\":[3,[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"mouse_style\":[1,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"thumbnail\":\"./img/H4.png\"},\"5\":{\"male\":1,\"face_style\":[4,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"face_color\":[5,255,200,200],\"hair_style\":4,\"hair_color\":[0,18,18,18],\"eye_style\":[6,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"eye_color\":0,\"brow_style\":[8,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"brow_color\":[0,60,52,51],\"eye_ball\":[0,[0,0,0],[0,0,0]],\"noise_style\":[7,[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"mouse_style\":[6,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"thumbnail\":\"./img/H5.png\"},\"6\":{\"male\":1,\"face_style\":[2,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"face_color\":[5,255,200,200],\"hair_style\":2,\"hair_color\":[1,18,18,18],\"eye_style\":[8,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"eye_color\":0,\"brow_style\":[7,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"brow_color\":[0,106,158,230],\"eye_ball\":[0,[0,0,0],[0,0,0]],\"noise_style\":[1,[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"mouse_style\":[3,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"thumbnail\":\"./img/H6.png\"}}"

let iframe=document.getElementById("a2_frame")

function view_size_func(){
   const  dp = window.devicePixelRatio;
   document.getElementById("infor_box_1").innerHTML="屏幕大小："+window.screen.width+"*"+window.screen.height
   document.getElementById("infor_box_2").innerHTML="页面大小："+document.body.clientWidth +"*"+document.body.clientHeight;
   document.getElementById("infor_box_3").innerHTML="设备像素比："+dp
}



const a1_page=document.getElementById("a1_page")
const a1_box=document.getElementById("a1_box")
const a2_page=document.getElementById("a2_page")
const a2_box=document.getElementById("a2_box")
const a3_page=document.getElementById("a3_page")
const a3_bottom_box=document.getElementById("a3_bottom_box")

function page_x(){
    a1_page.style.display="none"
    a2_page.style.display="block"
    click_func("a2_left_btn_1")
    click_func("a2_box1_btn_1")
}

function load_iframe(){
        show_func("default_img", 0,"scale_only",0.5)
        iframe.src="file/index.html"
        iframe.onload=function(){
            iframe.contentWindow.style_func(screen_id)
        }
}

let back_x=0
function back_func(x){
    switch (x) {
        case 1:
            back_x=1
            if(a2_btn_1.className=="btn btn_enable"){
                alert_func(1)
            }else{
                save_func(0)
            }

            break;
        case 2:
            alert_func(0)

            try {
                iframe.contentWindow.app.fire("changes_func", 26, 0, 0, 0, 0);
            } catch (e) {}

            a1_page.style.left = "-100%";
            setTimeout(() => {
                a1_page.style.display = "none";
                document.getElementById("a3_middle_btn_1").click();
            }, 250);

            a2_page.style.display = "block";
            a2_box.style.left = "100%";
            setTimeout(() => {
                a2_page.style.opacity = "1";
                a2_box.style.left = "0%";
            }, 50);

            display_func("a2_btn_3",0)
            display_func("a2_btn_4",0)



            if(a1_x==1){
                apply_x=4
                a2_btn_2.className="btn btn_enable"
                a1_x=0
                a2_btn_2.onclick=function(){
                    add_x=3
                    save_func(3)
                    alert_func(4)
                }
            }
            json_load_func(json)
            click_func("a2_left_btn_1");

            setTimeout(function(){
                a2_back_content=[]
                a2_count_enable=1

            },250)

            break;
        case 3:
            break;
    }
}


function show_func(id,x,pos,y) {
    let temp_tap = document.getElementById(id)
    switch (x) {
        case 0:
            setTimeout(function () {
                temp_tap.style.display = "none"
            }, 300)
            break;
        case 0.5:
        case 1:
            temp_tap.style.display = "block"
            break;
        case 2:
            temp_tap.style.display = "flex"
            break;
    }

    setTimeout(function () {
        temp_tap.style.opacity =x

        switch (pos){
            case "height":
                temp_tap.style.height=y
                break;
            case "left":
                temp_tap.style.left=y
                break;
            case "scale":
                temp_tap.style.transform="translate(-50%,-50%) scale("+y+")"
                break;
            case "scale_only":
                temp_tap.style.transform="scale("+y+")"
                break;
            case "bottom":
                temp_tap.style.bottom=y
                break;
        }
    }, 50)

}
function display_func(tap,x){
    let newtap=document.getElementById(tap)
    setTimeout(function(){
        if(x==0){
            newtap.style.display="none"
        }else{
            newtap.style.display="block"
        }
    },0)  //125

}

let apply_x=0
let aplly_delay=0
function apply_func(x){
    if(aplly_delay==0){
        if(x==1){
            let outtempjson=""
            switch (apply_x){
                case 1: //定制应用
                    add_x=1
                    get_json[0]=Object.assign({}, get_json[my_face_x]);
                    break;
                case 2: //编辑应用
                    save_func(1)
                    add_x=2
                    get_json[0]= Object.assign({}, get_json[my_face_x]);

                    break;
                case 3: //背包默认,应用
                    get_json[0].thumbnail=json.thumbnail
                    delete json.thumbnail
                    delete json.faceId
                    get_json[0].content=json

                    break;
                case 4: //，添加，应用
                    add_x=1
                    save_func(1)
                    get_json[0]= Object.assign({}, tempjson);
                    break;
            }

            get_json[0].apply=1
            if(bag_x<100){
                if(bag_x<1){
                    get_json[0].faceId=1
                }else{
                    get_json[0].faceId=2
                }
            }else{
                get_json[0].faceId=0
            }

            if(my_face_x<100){
                //get_json[0].faceId=2
            }

            try{
                delete get_json[0].content.thumbnail
                delete get_json[0].content.faceId
            }catch (e){}

            outtempjson=JSON.stringify(get_json[0]);

            outtempjson=JSON.parse(outtempjson)
            try{
                delete outtempjson.content.thumbnail
                delete outtempjson.content.faceId
            }catch (e){}
            outtempjson=JSON.stringify(outtempjson);

            try{
                print_json_func("应用：",outtempjson)
                window.NativeBridge.Apply_Config(outtempjson)
            }catch (e){
            }
        }else{
            if(apply_x==4){
                add_x=1
            }
        }
        alert_func(0)
        aplly_delay=1
        setTimeout(function(){
            aplly_delay=0
        },500)
    }
}

let apply_window_man=document.getElementById("apply_window_man")
function alert_func(x){
    switch (x){
        case 0:
            show_func("black_bg",0)
            show_func("save_window",0,"scale",0.5)
            show_func("save2_window",0,"scale",0.5)
            show_func("prompt_window",0,"scale")
            show_func("apply_window",0,"scale",0.5)
            show_func("log_window",0,"scale")
            show_func("del_window",0,"scale",0.5)
            show_func("delete_window",0,"scale",0.5)
            show_func("reset_window",0,"scale",0.5)
            show_func("forbidden_window",0,"scale",0.5)
            break;
        case 1:
            show_func("black_bg",1)
            show_func("save_window",1,"scale",1)
            break;
        case 2:
            show_func("black_bg",1)
            show_func("prompt_window",1,"scale",1)
            break;
        case 3:// 定制应用
            show_func("black_bg",1)
            show_func("apply_window",1,"scale",1)
            apply_window_man.src=get_json[my_face_x].thumbnail
            break;
        case 4:  // 编辑应用
            show_func("black_bg",1)
            show_func("apply_window",1,"scale",1)
            break;
        case 5:  // 背包应用
            show_func("black_bg",1)
            show_func("apply_window",1,"scale",1)
            if(default_apply_x==0){
                apply_window_bg.src=apply_window_bg.src="./img/bg_"+screen_id+"_"+theme_x+"_1.jpg"
                apply_window_man.style.display="none"
            }else{
                apply_window_bg.src="./img/bg_"+screen_id+"_"+theme_x+".jpg"
                apply_window_man.style.display="block"
            }
            apply_window_man.src=JSON.parse(default_json)[default_apply_x].thumbnail
            break;
        case 6:  //删除 定制
            show_func("black_bg",1)
            show_func("del_window",1,"scale",1)
            break;
        case 7:  //删除 应用
            show_func("black_bg",1)
            show_func("delete_window",1,"scale",1)
            break;
        case 8:  //删除 重置
            show_func("black_bg",1)
            show_func("reset_window",1,"scale",1)
            break;
        case 9:  //保存2
            if(a3_btn.className=="btn btn_enable"){
                show_func("black_bg",1)
                show_func("save2_window",1,"scale",1)
            }else{
                back_func(2)
            }

            break;
        case 10:  //删除 定制
            show_func("black_bg",1)
            show_func("forbidden_window",1,"scale",1)
            break;

    }

    if(x!=0){
        console.log("弹窗：开")
        try {
            window.NativeBridge.alert_func(1)
        }catch (e) {}
    }else{
        console.log("弹窗：关")
        try {
           window.NativeBridge.alert_func(0)
        }catch (e) {}

    }
}

const clear_json="{\"faceId\":\"\",\"male\":0,\"face_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"face_color\":[0,255,200,200],\"hair_style\":1,\"hair_color\":[1,76,107,170],\"eye_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"eye_color\":0,\"brow_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"brow_color\":[3,223,170,197],\"eye_ball\":[0,[0,0,0],[0,0,0]],\"noise_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"mouse_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"thumbnail\":\"./img/default.png\"}"

const reset_json="{\"faceId\":\"\",\"male\":0,\"face_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"face_color\":[0,255,200,200],\"hair_style\":1,\"hair_color\":[1,76,107,170],\"eye_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"eye_color\":0,\"brow_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"brow_color\":[3,223,170,197],\"eye_ball\":[0,[0,0,0],[0,0,0]],\"noise_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"mouse_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"thumbnail\":\"\"}"

const clear_json_man="{\"faceId\":\"\",\"male\":1,\"face_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"face_color\":[0,255,200,200],\"hair_style\":1,\"hair_color\":[2,106,75,66],\"eye_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"eye_color\":0,\"brow_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"brow_color\":[0,116,85,66],\"eye_ball\":[0,[0,0,0],[0,0,0]],\"noise_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"mouse_style\":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"thumbnail\":\"./img/default.png\"}"

let json={
    "faceId":"",
    "male":0,
    "face_style":[0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
    "face_color":[0,255,200,200],
    "hair_style": 1,
    "hair_color":[1,76,107,170],
    "eye_style": [0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
    "eye_color": 0,
    "brow_style": [0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
    "brow_color": [3,223,170,197],
    "eye_ball": [0,[0,0,0],[0,0,0]],
    "noise_style": [0,[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
    "mouse_style": [0,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
    "thumbnail":"./img/default.png"
}

let get_json=[
    {"apply":1,"content":{"brow_color":[6,188,164,197],"brow_style":[0,[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0,0]],"eye_ball":[0,[0,0,0],[0,0,0]],"eye_color":[0,0,0,0],"eye_style":[0,[0.01,0,0],[0.01,0,0],[0.01,0,0],[0,0,0],[-0.01,0,0],[-0.01,0,0],[-0.01,0,0],[0,0,0]],"face_color":[0,255,200,200],"face_style":[0,[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0,0]],"hair_color":[0,76,107,170],"hair_style":1,"male":0,"mouse_style":[0,[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0,0]],"noise_style":[0,[0,0,0],[0.6,0,0],[-0.6,0,0],[0,0,0]]},"faceId":1001,
        "thumbnail": "./img/default.png"},
    {"apply":2,"content":{"brow_color":[6,188,164,197],"brow_style":[0,[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0,0]],"eye_ball":[0,[0,0,0],[0,0,0]],"eye_color":[0,0,0,0],"eye_style":[0,[0.01,0,0],[0.01,0,0],[0.01,0,0],[0,0,0],[-0.01,0,0],[-0.01,0,0],[-0.01,0,0],[0,0,0]],"face_color":[0,255,200,200],"face_style":[0,[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0,0]],"hair_color":[0,76,107,170],"hair_style":1,"male":0,"mouse_style":[0,[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0,0]],"noise_style":[0,[0,0,0],[0.6,0,0],[-0.6,0,0],[0,0,0]]},"faceId":1002,
        "thumbnail": "./img/default.png"}
]

let get_json_temp= [
    {
        "faceId": "",
        "apply": 1,
        "content": {
            "male":0,
            "face_style": [0, [0, 0.1, 0], [0, 0.1, 0], [0, 0.1, 0], [0, 0.1, 0], [0, 0.1, 0], [0, 0.1, 0], [0, 0, 0]],
            "face_color": [0, 255, 200, 200],
            "hair_style": 1,
            "hair_color": [1, 76, 107, 170],
            "eye_style": [0, [0.01, 0, 0], [0.01, 0, 0], [0.01, 0, 0], [0, 0, 0], [-0.01, 0, 0], [-0.01, 0, 0], [-0.01, 0, 0], [0, 0, 0]],
            "eye_color": 0,
            "brow_style": [0, [0, 0.1, 0], [0, 0.1, 0], [0, 0.1, 0], [0, 0.1, 0], [0, 0.1, 0], [0, 0, 0]],
            "brow_color": [6, 188, 164, 197],
            "eye_ball": [0, [0, 0, 0], [0, 0, 0]],
            "noise_style": [0, [0, 0, 0], [0.6, 0, 0], [-0.6, 0, 0], [0, 0, 0]],
            "mouse_style": [0, [0, 0.01, 0], [0, 0.01, 0], [0, 0.01, 0], [0, 0.01, 0], [0, 0.01, 0], [0, 0.01, 0], [0, 0.01, 0], [0, 0, 0]]
        },
        "thumbnail": "./img/default.png"
    }
    ,
    {
        "faceId":"",
        "apply":2,
        "content":{"male":0,"face_style":[0,[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0,0]],"face_color":[0,255,200,200],"hair_style":1, "hair_color": [1, 76, 107, 170],"eye_style":[0,[0.01,0,0],[0.01,0,0],[0.01,0,0],[0,0,0],[-0.01,0,0],[-0.01,0,0],[-0.01,0,0],[0,0,0]],"eye_color":0,"brow_style":[0,[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0,0]],"brow_color":[6,188,164,197],"eye_ball":[0,[0,0,0],[0,0,0]],"noise_style":[0,[0,0,0],[0.6,0,0],[-0.6,0,0],[0,0,0]],"mouse_style":[0,[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0,0]]},
        "thumbnail": "./img/default.png"
    }
]
let main_json
function save_main_json(key,value){
/*
    let temp=JSON.parse(main_json)
    temp.content.eye_ball=[0, [0, 0, 0], [0, 0, 0]]

    switch (key) {
        case 'faceId':
        case 'apply':
        case 'thumbnail':
            temp[key]=value
            break;
        case 'all':
            temp=value
            break;
        case 'content':
            temp.content=value
            break;
        default:
            temp.content[key]=value
            break;
    }
    let print_temp=delete temp.thumbnail
    main_json=JSON.stringify(temp)
    console.log("main_json：")
    console.log(print_temp)*/
}


let apply_json=[{},{},{}]
let log_window=document.getElementById("log_window")
let a2_5_box1=document.getElementById("a2_5_box1")
let a2_4=document.getElementById("a2_4")
let a2_4_right_box_number=document.getElementById("a2_4_right_box_number")
let a2_4_right_box_img_box=document.getElementById("a2_4_right_box_img_box")

let edit_x=0
function reload_func(x){
    let a2_box4_btn=document.getElementsByClassName("a2_box4_btn")
    let length_x=a2_box4_btn.length
    for(let i=0;i<length_x;i++){
        a2_box4_btn[0].remove()
    }

    for(let i=get_json.length-1;i>1;i--){
            let a2_box4_btn =document.createElement("img")
            a2_box4_btn.className="a2_box4_btn"
            a2_box4_btn.id="a2_box4_btn_"+i
            a2_box4_btn.src=get_json[i].thumbnail
            a2_box4_btn.onclick=function(){
                box4_func(this)
            }
            a2_4.appendChild(a2_box4_btn)
        }


    if(x==0){
        get_json = get_json.filter((item) => {
            return item !== null && typeof item !== "undefined" && item !== "";
        });
    }
    a2_4_right_box_number.innerHTML=(get_json.length-2)+"/4"


    if(get_json.length<6){
        a2_4_right_box_img_box.onclick=function(){
            main_func(0,0)
        }
    }else{
        a2_4_right_box_img_box.onclick=function(){
            TTS_func(1,0,'最多只能添加4个形象!',0.1)
        }

    }

    if(edit_x!=0){
        try{
            document.getElementById("a2_box4_btn_"+edit_x).click()
        }catch (e){}
    }else{
        try{
            document.getElementsByClassName("a2_box4_btn")[0].click()
        }catch (e){
            disable_func(a2_btn_2)
            disable_func(a2_btn_3)
            disable_func(a2_btn_4)
            callout_func(0)
            show_func("default_img", 0,"scale_only",0.5)
        }
    }

/*/
    try{
        document.getElementById("a2_box4_btn_"+my_face_x).click()
       // document.getElementsByClassName("a2_box4_btn")[0].click()
    }catch (e){
        document.getElementsByClassName("a2_box4_btn")[0].click()
    }*/

}
function callout_func(x){
    switch (x){
        case 0:
            iframe.style.opacity=0
            if(version==1){
                iframe.style.transform="translate(-50%,0px) scale(0.8)"
            }else{
                iframe.style.transform="scale(0.8)"
            }

            setTimeout(function(){
                iframe.style.display="none"
                try{
                    iframe.contentWindow.app.fire("changes_func",34)
                }catch(err){};
            },250)


            break;
        case 1:
            iframe.style.display="block"
            setTimeout(function(){
                try{
                    iframe.contentWindow.app.fire("changes_func",33)
                }catch(err){};
                iframe.style.opacity=1
                if(version==1){
                    iframe.style.transform="translate(-50%,0px) scale(1)"
                }else{
                    iframe.style.transform="scale(1)"
                }

            },50)

            break;
    }
}
let theme_color1=['#EDF0F5','#020203']
let theme_color2=['#FAFCFF','#17171A']
let theme_color3=['#EDF0F5','#37383B']
let theme_color4=['#EDF0F5','#1B1C1E']
let theme_color5=['#FAFCFF','#1B1C1E']
let theme_color6=['#E3E5E8','#17171A']
let theme_color7=['#FAFCFF','#37383B']

let theme_color8=['#FFFFFF','#E3E5E8']
let theme_color9=['#E9EFF7','rgba(233,239,247,0.5)']
let theme_color10=['#dfe5ee','#222327']
let theme_color11=['rgba(0,0,0,0.4)','rgba(0,0,0,0.8)']
let theme_color12=['rgba(60,60,60,0.6)','rgba(255,255,255,0.6)']

let theme_text1=['rgba(60, 60, 67, 0.6)','white']
let theme_text2=['black','white']
let theme_x=0

let border_color
let boxShadow_color
let main_color
let select_sd="sd_"+screen_id
let select_ud="ud_"+screen_id
let apply_window_bg=document.getElementById("apply_window_bg")

let main_colors
switch (screen_id) {
    case "0":
        main_colors=['#427BFF','#427BFF']
        theme_color1=['#EDF0F5','#020203']
        theme_color2=['#FAFCFF','#17171A']
        theme_color4=['#EDF0F5','#1B1C1E']
        theme_color5=['#FAFCFF','#1B1C1E']
        break;
    case "1":
        main_colors=['#48B5A5','#339586']
        if(test_id==1){
            theme_color1=['#d4dae6','#161519']
        }else{
            theme_color1=['rgba(255,255,255,0)','rgba(0,0,0,0)']
        }

        theme_color2=['rgba(233,239,247,0.6)','rgba(56,62,69,0.3)']
        theme_color4=['linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,0) 100%)','#151619']
        theme_color5=['rgba(233,239,247,0.65)','#1B1C1E']
        break;
    case "2":
        break;
}





let bubble_img=document.getElementById("bubble_img")
let window_close=document.getElementsByClassName("window_close")
function Theme_func(x){
    theme_x=x
    apply_window_bg.src="./img/bg_"+screen_id+"_"+theme_x+".jpg"
    main_color=main_colors[theme_x]
    border_color='4px solid '+main_color
    boxShadow_color="0 0 0 4px"+main_color
    document.body.style.setProperty('--Color0',  main_colors[theme_x])
    document.body.style.setProperty('--Color1',  theme_color1[theme_x])
    document.body.style.setProperty('--Color2',  theme_color2[theme_x])
    document.body.style.setProperty('--Color3',  theme_color3[theme_x])
    document.body.style.setProperty('--Color5',  theme_color5[theme_x])
    document.body.style.setProperty('--Color6',  theme_color6[theme_x])
    document.body.style.setProperty('--Color10',  theme_color10[theme_x])
    document.body.style.setProperty('--Color11',  theme_color11[theme_x])
    document.body.style.setProperty('--Color12',  theme_color12[theme_x])

    document.body.style.setProperty('--Text1',  theme_text1[theme_x])
    document.body.style.setProperty('--Text2',  theme_text2[theme_x])

    try{
        a2_tap.click()
    }catch (e){}


    document.body.style.background= theme_color1[theme_x]
    let a2_4_right_box_img=document.getElementById("a2_4_right_box_img")
    let a2_float_btn1=document.getElementById("a2_float_btn1")
    let a2_float_btn2=document.getElementById("a2_float_btn2")
    let a2_float_btn3=document.getElementById("a2_float_btn3")
    let a3_float_btn1=document.getElementById("a3_float_btn1")
    let a3_float_btn2=document.getElementById("a3_float_btn2")
    let a3_float_btn3=document.getElementById("a3_float_btn3")
    let back_img_1=document.getElementById("back_img_1")
    let back_img_2=document.getElementById("back_img_2")


    if(theme_x==0){
        a2_4_right_box_img.src='img/icon/day/add.png'
        a2_float_btn1.src="img/icon/day/a2_float_1.png"
        a2_float_btn2.src="img/icon/day/a2_float_2.png"
        a2_float_btn3.src="img/icon/day/a2_float_3.png"
        a3_float_btn1.src="img/icon/day/a2_float_1.png"
        a3_float_btn2.src="img/icon/day/a2_float_2.png"
        a3_float_btn3.src="img/icon/day/a2_float_3.png"
        back_img_1.src="img/icon/day/back.png"
        back_img_2.src="img/icon/day/back.png"
        bubble_img.src="img/icon/day/bubble_1.png"
        for(let i in window_close){
            window_close[i].src="img/icon/day/close_0.png"
        }
    }else{
        a2_4_right_box_img.src='img/icon/night/add.png'
        a2_float_btn1.src="img/icon/night/a2_float_1.png"
        a2_float_btn2.src="img/icon/night/a2_float_2.png"
        a2_float_btn3.src="img/icon/night/a2_float_3.png"
        a3_float_btn1.src="img/icon/night/a2_float_1.png"
        a3_float_btn2.src="img/icon/night/a2_float_2.png"
        a3_float_btn3.src="img/icon/night/a2_float_3.png"
        back_img_1.src="img/icon/night/back.png"
        back_img_2.src="img/icon/night/back.png"
        bubble_img.src="img/icon/day/bubble_2.png"
        for(let i in window_close){
            window_close[i].src="img/icon/day/close_1.png"
        }
    }

    let a2_box1_btn=document.getElementsByClassName("a2_box1_btn")
    for (let i=0; i<a2_box1_btn.length;i++){
        let temp_src= a2_box1_btn[i].src
       // temp_src=temp_src.replace(/sd_0/,select_ud)
     //   temp_src=temp_src.replace(/sd_1/,select_ud)
        if(theme_x==0){
            temp_src=temp_src.replace(/night/,"day")
        }else{
            temp_src=temp_src.replace(/day/,"night")
        }
        a2_box1_btn[i].src=temp_src
    }
}




if(dark_id=="1"){
    Theme_func(1)
}else{
    Theme_func(0)
}

let bubble=document.getElementById("bubble")
let bubble_text=document.getElementById("bubble_text")
let bubble_time=setTimeout(function () {},0)
function bubble_func(x,y,text){

    clearTimeout(bubble_time)
    bubble_text.innerHTML=text
    show_func("bubble",1)
    bubble.style.left=420+x+"px"
    bubble.style.top=100+y+"px"
    bubble_time=setTimeout(function(){
        show_func("bubble",0)
    },2500)
}

function update_bubble(x,y){
    bubble.style.left=420+x+"px"
    bubble.style.top=100+y+"px"
}
function print_json_func(text,jsons){

    let print_json

    if(text=="加载："){
        print_json=JSON.stringify(jsons)
        print_json=JSON.parse(print_json)
        for(let i in print_json){
            print_json[i].filePath="URL"
            print_json[i].thumbnail="URL"
        }

    }else{
        print_json=JSON.parse(jsons)
        print_json.filePath="URL"
        print_json.thumbnail="URL"
    }

    console.log(text)
    console.log(print_json)

}


//
let default_json_x=0
let bag_x=100
let version=0
function Face_func_new(jsons,x){
    print_json_func("加载：",jsons)

    get_json=jsons;
    version=x

    if(x==1){
        screen_id="1"
        show_func("bubble",0)
        document.body.style.background= 'rgba(0,0,0,0)'
        iframe.style.height="100%"
        iframe.style.left="50%"
        iframe.style.bottom="0%"
        iframe.style.width="100%"
        iframe.style.height="100%"
        iframe.style.transform="translate(-50%,0px) scale(1)"
        document.getElementById("top_bg").style.display="block"
        //json=jsons.content;
        json=Object.assign({},jsons.content);
        male_y=1
        callout_func(1)

        json_load_func(json)
    }else{
        if(default_json_x==0){
            default_json_x=1
            let a2_5_box1_text=document.getElementById("a2_5_box1_text")
            for(let i in JSON.parse(default_json)){
                let a2_box5_btn
                if(i==0){
                     a2_box5_btn=document.createElement("div")
                     a2_box5_btn.style.backgroundImage='url("./img/default.png")'
                     a2_box5_btn.style.verticalAlign="bottom"
                     a2_box5_btn.appendChild(a2_5_box1_text)
                }else{
                     a2_box5_btn=document.createElement("img")
                }
                a2_box5_btn.className="a2_box5_btn"
                a2_box5_btn.id="a2_box5_btn_"+i
                a2_box5_btn.src=JSON.parse(default_json)[i].thumbnail
                a2_box5_btn.onclick=function(){
                    box5_func(this)
                }
                a2_5_box1.appendChild(a2_box5_btn)
            }
        }


       // a2_5_box1.innerHTML=""
       // a2_5_box1.innerHTML=""

        if(jsons=="none" || jsons.length<3){
            for(let i=2;i<get_json.length;i++){
                delete get_json[i]

            }
            get_json = get_json.filter((item) => {
                return item !== null && typeof item !== "undefined" && item !== "";
            });

            for(let i in JSON.parse(default_json)){
                let a1_item=document.createElement("img")
                a1_item.className="a1_item"
                a1_item.id="a1_item_"+i
                a1_item.src=JSON.parse(default_json)[i].thumbnail
                a1_item.onclick=function(){
                    a1_func(this)
                }
                if(i==0){
                    a1_item.style.display="none"
                }

                a1_box.appendChild(a1_item)
            }
            a1_page.style.display="block"

        }else{
            back_func(2)
            main_func(1)
            setTimeout(function(){
                a2_left_btn_4.click()
            },350)
           // iframe.style.transform="scale(100%)"
          //  reload_func()
        }

    }


}

let face_Data={
    "f01":[83,0,0],
    "f03":[172,0,0],
    "f04":[148,1.5,0],
    "f06":[102,0,-2],
    "f13":[33,0,2],
    "f15":[108,0,0],
    "f17":[106,0,-2],
    "f19":[140,0,0],
    "f22":[70,0,2],
    "f24":[100,0,0],
    "f26":[107,0,-2],
    "f50":[48,0,0],
    "f57":[4,0,0],
    "f58":[180,-2,0],
    "f60":[0,0,1],
    "f64":[10,0,-1],
    "f65":[178,0,-1],
    "f66":[38,0,1]
}

// FRS_func(face_Data)
function face_data_func(x,y){
    let data= (x-0.25)*10*y
    return data
}
function FRS_func(face_Data){
   // log_window.innerHTML=JSON.stringify(face_Data)
   // show_func("black_bg",1)
   // show_func("log_window",1,"scale",1)
    console.log("人脸识别："+face_Data)

    let x=2
    let x2=-2

    face_Data=JSON.parse(face_Data)


    click_func("a2_left_btn_1")
    json.face_style[1][0]=face_data_func(face_Data.f01[1],1)
    json.face_style[1][1]=face_data_func(face_Data.f01[2],1)
    json.face_style[2][0]=face_data_func(face_Data.f03[1],1)
    json.face_style[2][1]=face_data_func(face_Data.f03[2],1)
    json.face_style[3][0]=face_data_func(face_Data.f04[1],1)
    json.face_style[3][1]=face_data_func(face_Data.f04[2],1)
    json.face_style[4][0]=face_data_func(face_Data.f06[1],1)
    json.face_style[4][1]=face_data_func(face_Data.f06[2],1)
    json.face_style[5][0]=face_data_func(face_Data.f04[1],-1)
    json.face_style[5][1]=face_data_func(face_Data.f04[2],1)
    json.face_style[6][0]=face_data_func(face_Data.f03[1],-1)
    json.face_style[6][1]=face_data_func(face_Data.f03[2],1)
    json.face_style[7][0]=face_data_func(face_Data.f01[1],-1)
    json.face_style[7][1]=face_data_func(face_Data.f01[2],1)

    json.eye_style[1][0]=face_data_func(face_Data.f13[1],1)
    json.eye_style[1][1]=face_data_func(face_Data.f13[2],1)
    json.eye_style[2][0]=face_data_func(face_Data.f15[1],1)
    json.eye_style[2][1]=face_data_func(face_Data.f15[2],1)
    json.eye_style[3][0]=face_data_func(face_Data.f17[1],1)
    json.eye_style[3][1]=face_data_func(face_Data.f17[2],1)
    json.eye_style[4][0]=face_data_func(face_Data.f19[1],1)
    json.eye_style[4][1]=face_data_func(face_Data.f19[2],1)
    json.eye_style[5][0]=face_data_func(face_Data.f17[1],-1)
    json.eye_style[5][1]=face_data_func(face_Data.f17[2],1)
    json.eye_style[6][0]=face_data_func(face_Data.f15[1],-1)
    json.eye_style[6][1]=face_data_func(face_Data.f15[2],1)
    json.eye_style[7][0]=face_data_func(face_Data.f13[1],-1)
    json.eye_style[7][1]=face_data_func(face_Data.f13[2],1)
    json.eye_style[8][0]=face_data_func(face_Data.f19[1],-1)
    json.eye_style[8][1]=face_data_func(face_Data.f19[2],1)

    json.brow_style[1][0]=face_data_func(face_Data.f22[1],1)
    json.brow_style[1][1]=face_data_func(face_Data.f22[2],1)
    json.brow_style[2][0]=face_data_func(face_Data.f24[1],1)
    json.brow_style[2][1]=face_data_func(face_Data.f24[2],1)
    json.brow_style[3][0]=face_data_func(face_Data.f26[1],1)
    json.brow_style[3][1]=face_data_func(face_Data.f26[2],1)
    json.brow_style[4][0]=face_data_func(face_Data.f26[1],-1)
    json.brow_style[4][1]=face_data_func(face_Data.f26[2],1)
    json.brow_style[5][0]=face_data_func(face_Data.f24[1],-1)
    json.brow_style[5][1]=face_data_func(face_Data.f24[2],1)
    json.brow_style[6][0]=face_data_func(face_Data.f22[1],-1)
    json.brow_style[6][1]=face_data_func(face_Data.f22[2],1)

    //json.brow_style[1][0]=face_Data.f50[1]
   // json.brow_style[1][1]=face_Data.f50[2]
    json.brow_style[2][0]=face_data_func(face_Data.f50[1],1)
    json.brow_style[2][1]=face_data_func(face_Data.f50[2],1)
    json.brow_style[3][0]=face_data_func(face_Data.f50[1],-1)
    json.brow_style[3][1]=face_data_func(face_Data.f50[2],1)
    json.brow_style[4][0]=face_data_func(face_Data.f57[1],1)
    json.brow_style[4][1]=face_data_func(face_Data.f57[2],1)

    json.mouse_style[1][0]=face_data_func(face_Data.f58[1],1)
    json.mouse_style[1][1]=face_data_func(face_Data.f58[2],1)
    json.mouse_style[2][0]=face_data_func(face_Data.f60[1],1)
    json.mouse_style[2][1]=face_data_func(face_Data.f60[2],1)
    json.mouse_style[3][0]=face_data_func(face_Data.f58[1],-1)
    json.mouse_style[3][1]=face_data_func(face_Data.f58[2],1)
    json.mouse_style[4][0]=face_data_func(face_Data.f65[1],1)
    json.mouse_style[4][1]=face_data_func(face_Data.f65[2],1)
    json.mouse_style[5][0]=face_data_func(face_Data.f64[1],1)
    json.mouse_style[5][1]=face_data_func(face_Data.f64[2],-1)
    json.mouse_style[6][0]=face_data_func(face_Data.f65[1],-1)
    json.mouse_style[6][1]=face_data_func(face_Data.f65[2],1)
    json.mouse_style[7][0]=face_data_func(face_Data.f66[1],1)
    json.mouse_style[7][1]=face_data_func(face_Data.f66[2],1)
    json.mouse_style[8][0]=face_data_func(face_Data.f66[1],-1)
    json.mouse_style[8][1]=face_data_func(face_Data.f66[2],1)

    json_load_func(json)
}

//
let text_index=0
let tts_test=document.getElementById("tts_test")
let speed=0
let text_timeout=""
let py_timeout=""
let hide_timeout=""
function TTS_func(action,direction,text,time){
    tts_test.style.display="none"
    clearTimeout(text_timeout)
    clearTimeout(py_timeout)
    clearTimeout(hide_timeout)
    py_func(text)

    if(text!=0){
        show_func("tts_test",1)
        tts_test.innerHTML=""
        text_index=0
        speed=(time/text.length)*1000
        text_func(text)
    }
    try{
        iframe.contentWindow.app.fire("changes_func",action+25,0,0,0,direction)  //d direction
    }catch (e){};
}

//
function text_func(text){
    if(text_index<text.length){
        tts_test.innerHTML+=text[text_index]
        text_index+=1
        text_timeout=setTimeout(function(){
            text_func(text)
        },speed)
    }else{
        hide_timeout=setTimeout(function(){
            show_func("tts_test",0)
        },2000)
    }
}

//
let point_save=[
    [0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],  //7 face 1 3 4 6 8 9 11
    [0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],   //8 eye 13 15 17 19 30 32 34 36
    [0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],  //6 eyebrow 22 24 26 39 41 43
    [0,0,0],[0,0,0],[0,0,0],[0,0,0],  //4 nose 47_56 50 53 57
    [0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0] //8 mouse 58 60 62 63 64 65 66 67
]
let p_points=deepClone(point_save)
function p_func(x){
    p_points=deepClone(x)

}

let tempjson={}

function resizedataURL(datas, wantedWidth, wantedHeight){

   // a2_count_enable=0

    return new Promise(async function(resolve,reject){
        var img = document.createElement('img');
        img.onload = function()
        {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            canvas.width = wantedWidth;
            canvas.height = wantedHeight;
            ctx.drawImage(this, 0, 0, wantedWidth, wantedHeight);
            var dataURI = canvas.toDataURL();
            resolve(dataURI);

           // TTS_func(1,0,'已保存配置信息!',0.5)

            if(add_x>0){
                tempjson.apply=0
                if(add_x==1){
                    tempjson.faceId=""
                }else{
                    tempjson.faceId=json.faceId
                }
                tempjson.thumbnail=dataURI
                update_func()
                tempjson.content=Object.assign({},json);

                let outtempjson=JSON.stringify(tempjson);
                outtempjson=JSON.parse(outtempjson)
                try{
                    delete outtempjson.content.thumbnail
                    delete outtempjson.content.faceId
                }catch (e){}
                outtempjson=JSON.stringify(outtempjson);


                switch (add_x) {
                    case 1: //add
                        edit_x=0
                        get_json.push(JSON.parse(outtempjson))
                        add_x=2
                        apply_x=2
                        edit_x=my_face_x
                        json_reset=JSON.stringify(JSON.parse(outtempjson).content)
                        try{
                            print_json_func("添加：",outtempjson)
                            window.NativeBridge.Save_Config(outtempjson)
                        }catch (e){
                            faceId_func("123")
                        }
                        break;
                    case 2: //edit
                        edit_x=my_face_x
                        get_json[my_face_x] = JSON.parse(outtempjson)
                        try{
                            //console.log("编辑："+outtempjson)
                            print_json_func("编辑：",outtempjson)
                            window.NativeBridge.Save_Config(outtempjson)
                        }catch (e){
                        }
                        break;
                    case 3: //edit 预览
                        apply_window_man.src=tempjson.thumbnail
                        break;
                }
                if(add_x!=3){
                    try{
                       // window.NativeBridge.get_config()
                    }catch (e){
                        setTimeout(function(){
                           // get_config() //测试保留
                        },250)
                    }
                }
            }
        };
        img.src = datas;
    })
}

function faceId_func(id){
    get_json[my_face_x].faceId=id
    let outtempjson=JSON.stringify(get_json[my_face_x])
    print_json_func("更新faceId：",outtempjson)
}




let save_delay=0
function save_func(x){ 
    if(save_delay==0){
        let canvas= iframe.contentWindow.document.getElementById("application-canvas")
        let dataURL = canvas.toDataURL('image/png')
        let x_width=350
        let x_height=450

        switch (x){
            case 0: //取消保存

                main_func(1)
                alert_func(0)
                iframe.style.transform="scale(100%)"
                add_x=0
                //json=Object.assign({},JSON.parse(clear_json));
                json_load_func(JSON.parse(clear_json))

                a2_btn_1.className="btn btn_enable"
                a2_btn_1.onclick=function(){save_func(1)}

                break;
            case 1: //定制保存
                update_func()

                if(save_x==2){
                    a3_btn.className="btn btn_disable"
                    a3_btn.onclick=""

                    a2_btn_1.className="btn btn_enable"
                    a2_btn_1.onclick=function(){save_func(1)}
                }else{
                    a2_btn_1.className="btn btn_disable"
                    a2_btn_1.onclick=""
                    resizedataURL(dataURL, x_width, x_height)
                }

                break;
            case 2:  //弹窗保存
                update_func()
                //add_x=2
                if(save_x==2){

                    a3_btn.className="btn btn_disable"
                    a3_btn.onclick=""
                    alert_func(0)
                    setTimeout(function(){
                       back_func(2)
                    },250)

                }else{
                    resizedataURL(dataURL, x_width, x_height)
                    setTimeout(function(){
                        main_func(1)
                        alert_func(0)
                        iframe.style.transform="scale(100%)"
                    },350)
                }
                break;
            case 3: //编辑应用
                resizedataURL(dataURL, x_width, x_height)
                break;
        }


        save_delay=1
        setTimeout(function(){
            save_delay=0
        },500)
    }

}
let reset_window_btn_1=document.getElementById("reset_window_btn_1")
let reset_window_btn_2=document.getElementById("reset_window_btn_2")
function alert_8_func(x){
    alert_func(8)
    if (x==0){
        reset_window_btn_1.onclick=function(){
            Delete_func(4)
            a2_enable_func()
        }
        reset_window_btn_2.onclick=function(){
            Delete_func(3)
            a2_enable_func()
        }
    }else{
        reset_window_btn_1.onclick=function(){
            Delete_func(6)
        }
        reset_window_btn_2.onclick=function(){
            Delete_func(5)
        }
    }


}


let delete_delay=0
let a2_left_btn_4=document.getElementById("a2_left_btn_4")
function Delete_func(x){
    if(delete_delay==0){
        switch (x){
            case 0:
                break;
            case 1: //删除定制
                add_x=0
                let delete_id=get_json[my_face_x].faceId
                delete get_json[my_face_x];


                get_json = get_json.filter((item) => {
                    return item !== null && typeof item !== "undefined" && item !== "";
                });

                a2_4_right_box_number.innerHTML=get_json.length+"/4"

                try{
                    console.log("删除：faceId="+delete_id)
                    window.NativeBridge.Delet_Config(delete_id)
                }catch (e){
                    setTimeout(function(){
                        // get_config() //测试保留
                    },500)
                }
                edit_x=0
                a2_left_btn_4.click()
                //reload_func()
                break;
            case 2: //删除应用
                add_x=0
                get_json[0].thumbnail=JSON.parse(clear_json).thumbnail
                get_json[0].apply=1
                get_json[0].faceId=1001
                //json=JSON.parse(clear_json)
                //json_load_func()
                setTimeout(function(){
                    click_func("a2_5_btn_2")
                },250)

                try{
                    console.log("删除：apply=1")
                    window.NativeBridge.Delet_Config("apply=1")
                }catch (e){
                    setTimeout(function(){
                        //get_config() //测试保留
                    },500)
                }
                break;
            case 3: //删除应用,重置，配置
                add_x=1
                if(male_x==0){
                    let temp=JSON.parse(clear_json)
                    temp.thumbnail=""

                    json_load_func(temp)
                }else{
                    let temp=JSON.parse(clear_json_man)
                    temp.thumbnail=""
                    json_load_func(temp)
                }

                break;
            case 4: //恢复上一次保存，配置
                add_x=0
                let temp=JSON.parse(json_reset)
                temp.thumbnail=""
                json_load_func(temp)
                break;

            case 5: //删除应用,重置，捏脸
                add_x=0
                json.face_style=JSON.parse(clear_json).face_style
                json.brow_style=JSON.parse(clear_json).brow_style
                json.eye_style=JSON.parse(clear_json).eye_style
                json.noise_style=JSON.parse(clear_json).noise_style
                json.mouse_style=JSON.parse(clear_json).mouse_style
                json_load_func(json)
                iframe.contentWindow.active_clear()
                break;
            case 6: //恢复上一次保存，捏脸
                add_x=0
                json.face_style=JSON.parse(json_reset).face_style
                json.brow_style=JSON.parse(json_reset).brow_style
                json.eye_style=JSON.parse(json_reset).eye_style
                json.noise_style=JSON.parse(json_reset).noise_style
                json.mouse_style=JSON.parse(json_reset).mouse_style
                json_load_func(json)
                iframe.contentWindow.active_clear()
                break;
        }
        alert_func(0)
        delete_delay=1
        setTimeout(function(){
            delete_delay=0
        },500)
    }

}

//
function album_func(){

    try{
        window.NativeBridge.album_up()

    }catch (e){
    }
    TTS_func(1,0,'打开安卓相册!',0.5)

}

//
let add_x=0
let side_btn=document.getElementById("side_btn")
let a2_btn_1=document.getElementById("a2_btn_1")
let a3_btn=document.getElementById("a3_btn")
function main_func(x,y){
    //show_func("side_btn",0)
    if(x==0){
        TTS_func(0,0,0,0)
    }else{
        TTS_func(1,0,0,0)
    }

    clear_history()
    switch (x){
        case 0: //形象编辑 市集
            iframe.style.bottom="-60px"
            show_func("a2_4",0)
            show_func("a2_5",0)
            show_func("back_btn_box",1)
            click_func("a2_left_btn_1") //市集
            display_func("a2_left_btn_4",0)
            display_func("a2_left_btn_5",0)
            display_func("a2_btn_3",0)
            display_func("a2_btn_4",0)
            setTimeout(function(){
               // display_func("a2_btn_2",0)
                show_func("a2_left_btn_1",1)
                show_func("a2_left_btn_2",0.5)
                show_func("a2_left_btn_3",1)
                display_func("a2_btn_1",1)
            },250)
            setTimeout(function(){
                show_func("a2_left_box",2,"height","130px")
               // show_func("side_btn",1)
                //.style.bottom="150px"
            },350)

            break;
        case 1: //形象定制 我的定制 首页
            if(back_x==1){
                back_x=0
                try{
                    console.log("配置：获取配置-get_config()")
                    window.NativeBridge.get_config()
                }catch (e){
                    click_func("a2_left_btn_4") //我的定制
                }
            }else{
                click_func("a2_left_btn_4") //我的定制
            }



            iframe.style.bottom="0px"
            apply_x=1
            show_func("a2_5",0)
            show_func("back_btn_box",0)


            display_func("a2_left_btn_1",0)
            display_func("a2_left_btn_2",0)
            display_func("a2_left_btn_3",0)
            display_func("a2_btn_1",0)

            setTimeout(function(){
                show_func("a2_page",1)
                show_func("a2_4",1)
                show_func("a2_left_btn_4",1)
                show_func("a2_left_btn_5",0.5)
                display_func("a2_btn_2",1)
                display_func("a2_btn_3",1)
                display_func("a2_btn_4",1)
                show_func("a2_left_box",2,"height","80px")
            },250)

            break;
        case 2: //我的背包
            apply_x=3
            show_func("a2_4",0)
            click_func("a2_5_btn_0") //
            display_func("a2_left_btn_1",0)
            display_func("a2_left_btn_2",0)
            display_func("a2_left_btn_3",0)
            display_func("a2_btn_1",0)
            display_func("a2_btn_3",0)
            display_func("a2_btn_4",0)
            setTimeout(function(){
                show_func("a2_5",1)
                show_func("a2_left_btn_4",0.5)
                show_func("a2_left_btn_5",1)
                click_func("a2_box5_btn_0")
            },250)
            setTimeout(function(){
                show_func("a2_left_box",2,"height","80px")
               // show_func("side_btn",1)
               // side_btn.style.bottom="190px"
            },350)

            break;
    }
    /*
    setTimeout(function(){
        show_func("side_btn",1)
    },250)*/


    switch (y){
        case 0: //添加
            add_x=1  //1
            apply_x=4  //4
            json=Object.assign({},JSON.parse(clear_json));
            json.thumbnail=""
            json_reset=reset_json
            json_load_func(json)
            my_face_x=get_json.length
            break;
        case 1: //编辑
            add_x=2
            apply_x=2
            json_reset=JSON.stringify(get_json[my_face_x].content)
            a2_btn_1.className="btn btn_disable"
            a2_btn_1.onclick=""
            break;
    }


}
//main_func(0)
function prompt_func(x){
    if(x==1){
        //show_func("a1_page",1,"left","10px")
       // show_func("a2_page",0,)
    }else{

    }
   // show_func("a1_page",1,"left","10px")
   // show_func("a2_page",0,)
    alert_func(0)
}

//
let a1_btn=document.getElementById("a1_btn")
let default_x=0
let a1_x=0
function a1_func(tap){
    let a1_item=document.getElementsByClassName("a1_item")
    for (let i=0; i<a1_item.length;i++){
        a1_item[i].style.border=""
    }
    tap.style.border=border_color
    default_x=tap.id.split("_")[2]
    a1_x=1

    a1_btn.className="btn btn_enable"
    a1_btn.onclick=function(){
        if(default_x==0){
            back_func(2)
            save_func(0)
        }else{
            add_x=1
            my_face_x=2
            json=Object.assign({}, JSON.parse(default_json)[default_x]);
            json_reset=JSON.stringify(json)
            back_func(2)
            setTimeout(function(){
                click_func("a2_left_btn_1");
            },250)
        }
        /*

        setTimeout(function(){
            add_x=1
        },250)*/
    }
}

//
let pSprite_id=[
    1,3,4,6,8,9,11,
    13,15,17,19,30,32,34,36,
    22,24,26,39,41,43,
    47,50,53,57,
    58,60,62,63,64,65,66,67
]

let male_y=0
let json_reset

function deepClone(obj) {
    // 如果不是对象或者是 null，直接返回
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    // 根据 obj 的类型创建一个新的变量，可以是数组或者对象
    const newObj = Array.isArray(obj) ? [] : {};

    // 递归复制 obj 的属性
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key]);
        }
    }
    return newObj;
}

function update_func(){


    for(let i=1;i< 8;i++){
        json.face_style[i]= deepClone(p_points[i-1]);
    }
    for(let i=1;i< 9;i++){
        json.eye_style[i]=deepClone(p_points[i+6])
    }
    for(let i=1;i< 7;i++){
        json.brow_style[i]=deepClone(p_points[i+14])
    }
    for(let i=1;i< 5;i++){
        json.noise_style[i]=deepClone(p_points[i+20])
    }
    for(let i=1;i< 9;i++){
        json.mouse_style[i]=deepClone(p_points[i+24])
    }



    try{
        iframe.contentWindow.app.fire("eye_update",json.eye_style)  //d direction
        iframe.contentWindow.app.fire("mouth_update",json.mouse_style)  //d direction
    }catch (e){};


}



function json_load_func(jsons) {
    json=Object.assign({}, jsons);
    console.log(json)

    show_func("load_img", 0)
    if(jsons.thumbnail=="./img/default.png" && add_x==0){ //
        callout_func(0)
        if(default_img_x==1){
            show_func("default_img", 1,"scale_only",1)
        }
        console.log(add_x)
    }else{
        show_func("default_img", 0,"scale_only",0.5)
        setTimeout(function(){
            callout_func(1)
        },350)

        let box2_1 = "box2_1_" + jsons.face_color[0]
        face_color[0]= [jsons.face_color[1],jsons.face_color[2],jsons.face_color[3]]
        let box2_2 = "box2_2_" + jsons.brow_color[0]
        brow_color[0]= [jsons.brow_color[1],jsons.brow_color[2],jsons.brow_color[3]]
        let box2_3 = "box2_3_" + jsons.eye_color
        let box2_4 = "box2_4_" + jsons.hair_color[0]
        hair_color[0]= [jsons.hair_color[1],jsons.hair_color[2],jsons.hair_color[3]]

        let box3_1 = "box3_1_" + jsons.face_style[0]
        let box3_2 = "box3_2_" + jsons.brow_style[0]
        let box3_3 = "box3_3_" + jsons.eye_style[0]
        let box3_4 = "box3_4_" + jsons.noise_style[0]
        let box3_5 = "box3_5_" + jsons.mouse_style[0]
        let box3_6 = "box3_6_" + jsons.hair_style

        setTimeout(function () {
            //show_func("a2_frame", 1)
            if (jsons.male==0){
                male_x=1
            }else{
                male_x=0
            }

            a2_enable_func()
            a3_enable_func()

            click_func("a2_float_btn4")

            click_func(box2_1)
            click_func(box2_2)
            click_func(box2_3)
            click_func(box2_4)

            try{  click_func(box3_1) }catch (e) {}
            try{  click_func(box3_2) }catch (e) {}
            try{  click_func(box3_3) }catch (e) {}
            try{  click_func(box3_4) }catch (e) {}
            try{  click_func(box3_5) }catch (e) {}
            try{  click_func(box3_6) }catch (e) {}


            for (let i=0; i<a2_box2_btn.length;i++){
                a2_box2_btn[i].style.outline=""
            }
            for (let i=0; i<a2_box3_btn.length;i++){
                a2_box3_btn[i].style.border=""
            }
        }, 0)

        for(let i=1;i< 8;i++){
            if(jsons.face_style[i]==null){
                point_save[i-1]=[0,0,0]
            }else{
                point_save[i-1]=deepClone(jsons.face_style[i])
            }

        }
        for(let i=1;i< 9;i++){
            if(jsons.eye_style[i]==null){
                point_save[i+6]=[0,0,0]
            }else{
                point_save[i+6]= deepClone(jsons.eye_style[i])
            }
        }
        for(let i=1;i< 7;i++){
            if(jsons.brow_style[i]==null){
                point_save[i+14]=[0,0,0]
            }else{
                point_save[i+14]=deepClone(jsons.brow_style[i])
            }

        }
        for(let i=1;i< 5;i++){
            if(jsons.noise_style[i]==null){
                point_save[i+20]=[0,0,0]
            }else{
                point_save[i+20]=deepClone(jsons.noise_style[i])
            }

        }
        for(let i=1;i< 9;i++){
            if(jsons.mouse_style[i]==null){
                point_save[i+24]=[0,0,0]
            }else{
                point_save[i+24]=deepClone(jsons.mouse_style[i])
            }
        }

        p_points=deepClone(point_save)
        update_func()

        setTimeout(function(){
            try{
                //iframe.contentWindow.app.fire("changes_func",26,0,0,0,0)  //d direction
            }catch (e){};

            let tempid=""
            for (let i=0;i<pSprite_id.length;i++){
                if(pSprite_id[i]<10){
                    tempid="0"+pSprite_id[i]
                }else{
                    tempid= pSprite_id[i]
                }
                if(pSprite_id[i]=="47"){
                    tempid="47_56"
                }
                let idx="Sprite_"+tempid

                try{
                    iframe.contentWindow.app.fire("changes_point", idx, point_save[i][0], point_save[i][1],0)
                }catch (e){
                }
            }

            if(male_y==1){
                TTS_func(0,0,0,0)
            }
        },50)

        clear_history()

    }
}

//
let limit_female={
    '01':[0,0.1,-1.2,1],'11':[-0.1,0,-1.2,1],
    '03':[-5,5,-5,5], '09':[-5,5,-5,5],
    '04':[-5,2.5,-2.5,5],'08':[-2.5,5,-2.5,5],
    '06':[0,0,-2.5,2],

    '22':[-3.5,-1,-5,5],'39':[1,3.5,-5,5],
    '24':[-5,-0.5,-5,5],'41':[0.5,5,-5,5],
    '26':[-5,1,-5,0],'43':[-1,5,-5,0],

    '13':[-0.5,0.5,-1,3],'34':[-0.5,0.5,-1,3],
    '15':[-1.5,2.5,-1,1.5],'32':[-2.5,1.5,-1,1.5],
    '17':[-1.5,1.5,-1,1.5],'30':[-1.5,1.5,-1,1.5],
    '19':[-0.5,3.5,-1,1.5],'36':[-3.5,0.5,-1,1.5],

    '50':[-1,0.5,-0.5,0.5],'53':[-0.5,1,-0.5,0.5],//
    '47_56':[0,0.1,0,0.1],
    '57':[0,0.1,-1.5,0],

    '58':[-3.5,2,-0.5,1.4],'62':[-2,3.5,-0.5,1.4], //
    '60':[0,0,-2.5,5],
    '64':[0,0,0,5],
    '65':[-1.5,2,-2.7,5], '63':[-2,1.5,-2.7,5],
    '66':[0,2,0,5], '67':[-2,0,0,5],
}

let limit_male={
    '01':[0,0.1,-1.2,1],'11':[-0.1,0,-1.2,1],
    '03':[-5,5,-5,5], '09':[-5,5,-5,5],
    '04':[-5,2.5,-5,5],'08':[-2.5,5,-5,5],
    '06':[0,0,-2.5,2],

    '22':[-5,-1,-5,5],'39':[1,5,-5,5],
    '24':[-5,0.5,-5,5],'41':[-0.5,5,-5,5],
    '26':[-5,1,-5,0],'43':[-1,5,-5,0],

    '13':[-0.5,0.5,-1,3],'34':[-0.5,0.5,-1,3],
    '15':[-1.5,2.5,-1,1.5],'32':[-2.5,1.5,-1,1.5],
    '17':[-1.5,1.5,-1,1.5],'30':[-1.5,1.5,-1,1.5],
    '19':[-0.5,1,0,1.5],'36':[-1,0.5,0,1.5],

    '50':[-1,0.5,-0.5,0.5],'53':[-0.5,1,-0.5,0.5],//
    '47_56':[0,0.1,0,0.1],
    '57':[0,0.1,-1.5,0],

    '58':[-2.5,2,-2,1],'62':[-2,2.5,-2,1],   //
    '60':[0,0,-2,5],
    '64':[0,0,-1.5,5],
    '65':[-2.5,2,0,5], '63':[-2,2.5,0,5],
    '66':[-1.5,2,-4,5], '67':[-2,1.5,-4,5]
}

let male_x=0
function a2_float_func(tap){
    let a2_box3_btn=document.getElementsByClassName("a2_box3_btn")
    let limit_active

    setTimeout(function (){
        try{
            document.getElementById(box3_id).click()
        }catch (e) {   }
    },50)

    if(male_x==0){
        for(let i=0; i<a2_box3_btn.length;i++){

            let temp=a2_box3_btn[i].src.replace(/fm/,'ml')
            a2_box3_btn[i].src=temp
        }
        tap.src="img/icon/day/a2_float_4_2.png"
        
        try{
            iframe.contentWindow.app.fire("male_func",1)
        }catch (e){}
        male_x=1
        limit_active=limit_male
    }else{
        for(let i=0; i<a2_box3_btn.length;i++){
            a2_box3_btn[i].src=a2_box3_btn[i].src.replace(/ml/,'fm')
        }
        tap.src="img/icon/day/a2_float_4_1.png"
        try{
            iframe.contentWindow.app.fire("male_func",0)
        }catch (e){}

        male_x=0
        limit_active=limit_female
    }
    json.male=male_x
    iframe.contentWindow.male_x=male_x

    for(let i in limit_active){
        let tempid_1='slider_'+i+'_1'
        let tempid_2='slider_'+i+'_2'
        iframe.contentWindow.document.getElementById(tempid_1).min=limit_active[i][0]*10
        iframe.contentWindow.document.getElementById(tempid_1).max=limit_active[i][1]*10
        iframe.contentWindow.document.getElementById(tempid_2).min=limit_active[i][2]*10
        iframe.contentWindow.document.getElementById(tempid_2).max=limit_active[i][3]*10
    }

    setTimeout(function (){
        clear_history()
    },100)



}

//
let a2_1=document.getElementById("a2_1")
let a2_3=document.getElementById("a2_3")
let save_x=0
let colors=document.getElementsByClassName("colors")
let a2_tap=""
let default_img_x=0
function a2_func(tap,x){
    show_func("color_box",0)
    show_func("a2_right_box3",1)
    color_box_x=0
    for(let i=0;i<colors.length;i++){
        colors[i].style.backgroundImage="url('./img/icon/day/color.png')"
    }
    if(x!=2){
        try{
            iframe.contentWindow.cam_pos_func(0)
        }catch (e){};
    }

    a2_btn_2.className="btn btn_disable"
    a2_btn_3.className="btn btn_disable"
    a2_btn_4.className="btn btn_disable"
    a2_btn_2.onclick=""
    a2_btn_3.onclick=""
    a2_btn_4.onclick=""
    let a2_left_btn=document.getElementsByClassName("a2_left_btn")
    for (let i=0; i<a2_left_btn.length;i++){
        a2_left_btn[i].style.color=""
        a2_left_btn[i].style.opacity=""
        a2_left_btn[i].style.background=""
    }
    tap.style.color=main_color
    tap.style.opacity="1"
    tap.style.background=theme_color4[theme_x]
    a2_tap=tap

    let a2_left_btn_img=document.getElementsByClassName("a2_left_btn_img")
    for (let i=0; i<a2_left_btn_img.length;i++){
        let temp_src= a2_left_btn_img[i].src
        temp_src=temp_src.replace(/sd_0/,select_ud)
        temp_src=temp_src.replace(/sd_1/,select_ud)
        if(theme_x==0){
            temp_src=temp_src.replace(/night/,"day")
        }else{
            temp_src=temp_src.replace(/day/,"night")
        }
        a2_left_btn_img[i].src=temp_src
    }
    tap.childNodes[1].src= tap.childNodes[1].src.replace(/ud_0/,select_sd)
    tap.childNodes[1].src= tap.childNodes[1].src.replace(/ud_1/,select_sd)

    show_func("a2_1",0)
    show_func("a2_3",0)
    show_func("a2_float_box",0)
    show_func("a2_3_float_box",0)

    try{
        iframe.contentWindow.app.fire("update_y",0)
    }catch (e){};

    try{
        iframe.contentWindow.app.fire("rotate_active",0)
        iframe.contentWindow.UI_all.style.opacity=0;
        setTimeout(function(){
            iframe.contentWindow.UI_all.style.display="none"
        },250)
    }catch (e){}
    save_x=x

/*
    //show_func("side_btn",0)
    setTimeout(function(){
        show_func("side_btn",1)
    },350)
*/

    default_img_x=0
    setTimeout(function(){
        TTS_func(0,0,0,0)
    },500)

    switch (x){
        case 1: //市集
            iframe.style.transform="scale(100%)"
            if(screen_id=="1"){
                iframe.style.left=""
                iframe.style.bottom=""
                iframe.style.width=""
                iframe.style.height=""
            }
            click_func("a2_box1_btn_1")
            show_func("a2_page",1)
            show_func("a2_box",1,"left","0%")
            show_func("a3_page",0)
            show_func("a3_bottom_box",1,"bottom","-120px")

            setTimeout(function(){
                show_func("a2_1",1)
                show_func("a2_float_box",2)
                a2_btn_2.className="btn btn_enable"
                a2_btn_2.onclick=function(){ //编辑-应用
                    add_x=3
                    save_func(3)
                    alert_func(4)
                }
            },300)
            break;
        case 2://3D 捏脸

            setTimeout(function(){
                iframe.contentWindow.app.fire("update_y", 1)
            },250)
            click_func("a3_box1_btn_1")

            try{
                iframe.contentWindow.app.fire("changes_func",25,0,0,0,0)  //d direction
            }catch (e){};


            if(screen_id=="1"){
                iframe.style.transform="scale(100%)"
                iframe.style.left="400px"
                iframe.style.bottom="157px"
                iframe.style.width="1470px"
                iframe.style.height="655px"
            }else{
                iframe.style.transform="scale(140%)"
            }
            setTimeout(function(){
                iframe.contentWindow.UI_all.style.display="block"
            },300)
            setTimeout(function(){
                iframe.contentWindow.UI_all.style.opacity=1;
                a3_back_content=[]
                a3_count_enable=1
                iframe.contentWindow.a3_func(1)
            },350)

            click_func("a3_middle_btn_1")
            show_func("a2_box",1,"left","-50%")
            show_func("a2_page",0)
            show_func("a3_page",1)
            show_func("a3_bottom_box",1,"bottom","0px")



            break;
        case 3://AI 生成
            iframe.style.transform="scale(100%)"
            setTimeout(function(){
                show_func("a2_3",1)
                show_func("a2_3_float_box",2)
                click_func("a2_3_middle_btn_1")
            },300)
            alert_func(2)
            break;
        case 4:  //定制
            main_func(1)
            setTimeout(function(){
                reload_func()
            },250)

            /*

            for (let i=0; i<a2_box4_btn.length;i++){
                a2_box4_btn[i].style.border=""
            }*/
           /*

            setTimeout(function(){
                console.log(my_face_x)
                if(add_x=1){
                    try{
                        document.getElementsByClassName("a2_box4_btn")[0].click()
                    }catch (e){}
                }else{
                    try{
                        document.getElementById("a2_box4_btn_"+my_face_x).click()
                        // document.getElementsByClassName("a2_box4_btn")[0].click()
                    }catch (e){
                        document.getElementsByClassName("a2_box4_btn")[0].click()
                    }
                }
             },500)
*/

            break;
        case 5:
            //背包
            edit_x=0
            my_face_x=0
            default_img_x=1
            main_func(2)
            break;
    }


}

let box1_x=0
function box1_func(tap,x,y){
    clearTimeout(bubble_time)
    show_func("bubble",0)
    show_func("color_box",0)
    show_func("a2_right_box3",1)
    color_box_x=0
    for(let i=0;i<colors.length;i++){
        colors[i].style.backgroundImage="url('./img/icon/day/color.png')"
    }

    box1_x=x
    let a2_box1_btn=document.getElementsByClassName("a2_box1_btn")
    for (let i=0; i<a2_box1_btn.length;i++){
        let temp_src= a2_box1_btn[i].src
        temp_src=temp_src.replace(/sd_0/,select_ud)
        temp_src=temp_src.replace(/sd_1/,select_ud)
        if(theme_x==0){
            temp_src=temp_src.replace(/night/,"day")
        }else{
            temp_src=temp_src.replace(/day/,"night")
        }
        a2_box1_btn[i].src=temp_src
        a2_box1_btn[i].style.backgroundImage=""
        a2_box1_btn[i].style.background=""
    }
    tap.src= tap.src.replace(/ud_0/,select_sd)
    tap.src= tap.src.replace(/ud_1/,select_sd)

    tap.style.backgroundImage="url('./img/icon/day/select.png')"
    if(screen_id=="1"){
        tap.style.background=main_color
    }

    let id_x=tap.src.slice(-5,-4)

    let a2_box2_btn=document.getElementsByClassName("a2_box2_btn")
    for (let i=0;i<a2_box2_btn.length;i++){
        a2_box2_btn[i].style.display="none"
    }
    let box2_id_x=document.getElementsByClassName("box2_"+id_x)
    for (let i=0;i<box2_id_x.length;i++){
        box2_id_x[i].style.display="inline-block"
    }


    let a2_box3_btn=document.getElementsByClassName("a2_box3_btn")
    for (let i=0;i<a2_box3_btn.length;i++){
        a2_box3_btn[i].style.display="none"
    }

    let box3_id_x=document.getElementsByClassName("box3_"+id_x)
    for (let i=0;i<box3_id_x.length;i++){
        box3_id_x[i].style.display="inline-block"
    }

    let a2_right_box2=document.getElementById("a2_right_box2")

    if(x==4||x==5){
        a2_right_box2.style.display="none"
    }else{
        a2_right_box2.style.display="block"
    }

    /*
    if(x==3 || x==5){
        TTS_func(0,0,0,0)
    }else{
        TTS_func(1,0,0,0)
    }
*/

    if(y==1){
        iframe.contentWindow.btn_func(x)
    }

}

//
function json_style(id,x){

    switch (id){
        case 0:
            json.face_style[0]=x
            break;
        case 2:
        case 3:
        case 4:
        case 5:
            try{
                iframe.contentWindow.app.fire("changes_func",id,0,0,0)
            }catch (e){
            }
            json.hair_style=x
            break;
        case 8:
            json.brow_style[0]=x
            break;
        case 16:
            json.eye_style[0]=x
            break;
        case 23:
            json.noise_style[0]=x
            break;
        case 31:
            json.mouse_style[0]=x
            break;
    }
    update_func()

}

//
let r=0
let g=0
let b=0
let face_color=[
    [0,0,0],//0
    [226,197,197],//1
    [223,188,164],//2
    [245,211,204],//3
    [255,200,195],//4
    [223,172,169],//5
    [193,145,148],//6
    [190,143,123],//7
    [167,126,134],//8
    [160,126,111],//9
    [170,117,108]//10
]
let brow_color=[
    [0,0,0],//0
    [193,177,152],//1
    [215,158,152],//2
    [223,170,197],//3
    [170,179,200],//4
    [167,134,99],//5
    [188,164,197],//6
    [187,200,189]//7
]
let hair_color=[
    [0,0,0],//0
    [76,107,170],//1
    [106,75,66],//2
    [199,164,212],//3
    [57,57,57],//4
    [224,134,153],//5
    [227,138,115],//6
    [241,241,241]//7
]
function json_color(id,x){
    switch (id){
        case 0:
            if(x!=101){
                r=face_color[x][0]
                g=face_color[x][1]
                b=face_color[x][2]
            }else{
                x=0
            }

            json.face_color=[x,r,g,b]
            break;
        case 6:
            if(x!=101){
                r=hair_color[x][0]
                g=hair_color[x][1]
                b=hair_color[x][2]
            }else{
                x=0
            }

            json.hair_color=[x,r,g,b]
            break;
        case 11:
            if(x!=101){
                r=brow_color[x][0]
                g=brow_color[x][1]
                b=brow_color[x][2]
            }else{
                x=0
            }
            json.brow_color=[x,r,g,b]
            break;
        case 8:
        case 9:
        case 10:
            json.eye_color=x
    }

    try{
        iframe.contentWindow.app.fire("changes_func",id,r,g,b)
    }catch (e){
    }

}
let a2_back_x=0
let a2_back_content=[]
let a2_count_enable=0
let a2_float_btn1=document.getElementById("a2_float_btn1")
//let a2_float_btn2=document.getElementById("a2_float_btn2")


function a2_update_back(tap){
    if(a2_count_enable==1){
        if (a2_back_content.length > 5) {
            a2_back_content.splice(-1, 1); // 删除最后一个元素
        }

        a2_back_content.unshift(tap); // 在数组开头添加新元素
        a2_back_x=0

    }

    if(a2_back_content.length>0 && a2_back_x<5){
        a2_float_btn1.style.opacity=1
        a2_float_btn1.onclick=function(){a2_backforward_func(0)}
    }else{
        a2_float_btn1.style.opacity=""
        a2_float_btn1.onclick=""
    }


    if(a2_back_x>0){
        a2_float_btn2.style.opacity=1
        a2_float_btn2.onclick=function(){a2_backforward_func(1)}
    }else{
        a2_float_btn2.style.opacity=""
        a2_float_btn2.onclick=""
    }

    if(a2_back_content.length>0){
        a2_btn_1.className="btn btn_enable"
        a2_btn_1.onclick=function(){save_func(1)}
    }
}

let a2_time_x=setTimeout(function(){},250);
function a2_backforward_func(x){
    switch (x) {
        case 0:
            a2_back_x+=1
            if(a2_back_x>6){
                a2_back_x=6
            }
            break;
        case 1:
            a2_back_x-=1
            if(a2_back_x<0){
                a2_back_x=0
            }
            break;
    }
    a2_enable_func()

    try{
        a2_back_content[a2_back_x].click()

    }catch (e){
        Delete_func(4)

    }

}

function a2_enable_func(){
    a2_count_enable=0
    clearTimeout(a2_time_x)
    a2_time_x= setTimeout(function(){
        a2_count_enable=1
    },500)
}


let a3_back_x=0
let a3_back_content=[]
let a3_forward_content=[]
let a3_count_enable=0
let a3_float_btn1=document.getElementById("a3_float_btn1")
let a3_float_btn2=document.getElementById("a3_float_btn2")

function a3_update_back(active_x,id,value){
    if(a3_count_enable==1){
        if (a3_back_content.length > 5) {
            a3_back_content.splice(-1, 1); // 删除最后一个元素
        }
        let temp=[active_x,id,value]

        a3_back_content.unshift(temp); // 在数组开头添加新元素
        a3_back_x=0
    }

    if(a3_back_content.length>0 && a3_back_x<5){
        a3_float_btn1.style.opacity=1
        a3_float_btn1.onclick=function(){a3_backforward_func(0)
        }
    }else{
        a3_float_btn1.style.opacity=""
        a3_float_btn1.onclick=""
    }

    if(a3_back_x>0){
        a3_float_btn2.style.opacity=1
        a3_float_btn2.onclick=function(){a3_backforward_func(1)}
    }else{
        a3_float_btn2.style.opacity=""
        a3_float_btn2.onclick=""
    }
    a3_save_update()
}

function a3_update_forward(active_x,id,value){
    if(a3_count_enable==1){
        if (a3_forward_content.length > 5) {
            a3_forward_content.splice(-1, 1); // 删除最后一个元素
        }
        let temp=[active_x,id,value]

        a3_forward_content.unshift(temp); // 在数组开头添加新元素
        a3_back_x=0
    }
    a3_save_update()

}

function a3_save_update(){
    if(a3_forward_content.length>0){
        a3_btn.className="btn btn_enable"
        a3_btn.onclick=function(){save_func(1)}
    }
}

function clear_history(){
    a2_back_content=[]
    a3_back_content=[]
    a3_forward_content=[]
    a3_back_x=0
    a2_back_x=0
    a2_float_btn1.style.opacity=""
    a2_float_btn1.onclick=""
    a2_float_btn2.style.opacity=""
    a2_float_btn2.onclick=""
    a3_float_btn1.style.opacity=""
    a3_float_btn1.onclick=""
    a3_float_btn2.style.opacity=""
    a3_float_btn2.onclick=""

}

let a3_time_x=setTimeout(function(){},250);
let cam_1=["01","03","04","06","08","09","11"]
let cam_2=["13","15","17","19","30","32","34","36"]
let cam_3=["22","24","26","39","41","43"]
let cam_4=["50","57","47_56","53"]
let cam_5=["58","65","66","60","64","62","63","67"]
function a3_backforward_func(x){
    let temp=""

    switch (x) {
        case 0:
            a3_back_x+=1
            if(a3_back_x>6){
                a3_back_x=6
            }
            temp=a3_back_content[a3_back_x-1]
            break;
        case 1:
            a3_back_x-=1
            if(a3_back_x<1){
                a3_back_x=1
            }
            temp=a3_forward_content[a3_back_x-1]
            break;
    }

    //console.log(a3_back_x)
    let tempid=temp[0].split("_")[1]

    if(cam_1.includes(tempid)){
        iframe.contentWindow.cam_pos_func(1)
    }
    if(cam_2.includes(tempid)){
        iframe.contentWindow.cam_pos_func(2)
    }
    if(cam_3.includes(tempid)){
        iframe.contentWindow.cam_pos_func(3)
    }
    if(cam_4.includes(tempid)){
        iframe.contentWindow.cam_pos_func(4)
    }
    if(cam_5.includes(tempid)){
        iframe.contentWindow.cam_pos_func(5)
    }

    a2_enable_func()
    a3_enable_func()

    a3_update_back(temp[0],temp[1],temp[2])
    iframe.contentWindow.active_range(temp[0],temp[1],temp[2])

    if(a3_back_x>=a3_back_content.length){
        a3_float_btn1.style.opacity=""
        a3_float_btn1.onclick=""
    }
    if(a3_back_x==1){
        a3_float_btn2.style.opacity=""
        a3_float_btn2.onclick=""
    }
}

function a3_enable_func(){
    a3_count_enable=0
    iframe.contentWindow.a3_func(0)
    clearTimeout(a3_time_x)
    a3_time_x= setTimeout(function(){
        a3_count_enable=1
        iframe.contentWindow.a3_func(1)
    },500)
}

let hsl_h=0
let hsl_s=0
let hsl_l=0
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let l = (max + min) / 2;

    let s = 0;
    if (max != min) {
        s = l <= 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
    }

    let h = 0;
    if (max != min) {
        if (max == r) {
            h = 60 * ((g - b) / (max - min));
        } else if (max == g) {
            h = 60 * ((b - r) / (max - min)) + 120;
        } else if (max == b) {
            h = 60 * ((r - g) / (max - min)) + 240;
        }
    }
    if (h < 0) {
        h += 360;
    }

    s *= 100;
    l *= 100;
    h = Math.round(h);
    s = Math.round(s);
    l = Math.round(l);
    hsl_h=h
    hsl_s=7.44*s
    hsl_l=-2.88*l + 288
    return "hsl(" + h + ", " + s + "%, " + l + "%)";
}
//
let a2_box2_btn=document.getElementsByClassName("a2_box2_btn")
let a2_box3_btn=document.getElementsByClassName("a2_box3_btn")
function box2_func(tap,x,y){
    a2_update_back(tap)
    for (let i=0; i<a2_box2_btn.length;i++){
        a2_box2_btn[i].style.boxShadow=""
    }
    tap.style.boxShadow=boxShadow_color

    if(y==101 &&color_box_x==0 ){
        let color=[0,0,0]

        if(x==6){
            color[0]=json.hair_color[1]
            color[1]=json.hair_color[2]
            color[2]=json.hair_color[3]
        }else{
            color[0]=json.brow_color[1]
            color[1]=json.brow_color[2]
            color[2]=json.brow_color[3]
        }

        let newhsl=rgbToHsl(color[0],color[1],color[2])

        show_func("color_box",1)
        show_func("a2_right_box3",0)

        color_box_x=1
        hue_slider.value=hsl_h
        document.body.style.setProperty('--SliderColor', newhsl)
        point_x=hsl_s
        point_y=hsl_l
        let tempx="translate("+point_x+"px,"+point_y+"px)"
        hue_box_pointer.style.transform=tempx
        hue_func()

        for(let i=0;i<colors.length;i++){
            if(theme_x==0){
                colors[i].style.backgroundImage="url('./img/icon/day/down.png')"
            }else{
                colors[i].style.backgroundImage="url('./img/icon/night/down.png')"
            }

        }
    }else{
        show_func("color_box",0)
        show_func("a2_right_box3",1)
        for(let i=0;i<colors.length;i++){
            colors[i].style.backgroundImage="url('./img/icon/day/color.png')"
        }
        color_box_x=0
    }
    json_color(x,y)

}

const position_point={
    1:['01','03','04','06'],  //face
    2:['22','24','26'],  //brow
    3:['13','15','17','19'],   //eye
    4:['50','47_56','57'],  //nose
    5:['58','60','64','65','66'],  //mouse
}
const position_female={
    101:[[0,0.1],[0,0.1],[0,0.1],[0,0.1]],
    102:[[1.248,-0.969],[-1.728,-2.339],[3.936,-2.531],[0,-2]],
    103:[[0.9,3.8],[4.4,-1.5],[5,-0.6],[0,1.6]],
    104:[[1.833,3.31],[-0.753,-3],[3.843,-1.172],[0,0.466]],
    105:[[0.6,0.1],[-2.6,0.1],[-0.8,-1.4],[0,0.5]],
    106:[[3,0.3],[1.1,-1.4],[2.6,-2.5],[0,-3.7]],
    107:[[2.1,1.7],[4.4,-4.3],[-0.1,-2.2],[0,-2]],
    108:[[2.3,-1],[-1.2,-5],[0.2,-1.6],[0,-1.1]],

    201:[[0,0.1],[0,0.1],[0,0.1]],
    202:[[-1.3,2.1],[0.4,-2],[0,-3.6]],
    203:[[-1.3,-0.8],[0.4,-4.7],[0.1,-1.3]],
    204:[[-1,4],[-1,2.5],[-1,-0.35]],
    205:[[-1,7.5],[-1.5,5],[-4,0.5]],
    206:[[-2.6,5],[1.9,-3.1],[0.3,-5]],
    207:[[0.3,4.3],[-4,5],[-5,2.3]],
    208:[[-2.6,-1.6],[-2.1,2.3],[-1.7,-5]],

    301:[[0,0.1],[0,0.1],[0,0.1],[0,0.1]],
    302:[[0,0.7],[0,-2.4],[0,0.1],[-1.6,0]],
    303:[[0,-0.5],[-2,-1.5],[1.1,2.4],[-1.6,1]],
    304:[[0,-2.8],[-0.1,1],[0.8,1.9],[0.1,1.5]],
    305:[[0.1,0],[-5,-0.8],[1,1.9],[-3.9,0.3]],
    306:[[-0.6,0.1],[-5,1.6],[0.9,1.9],[4.9,-0.3]],
    307:[[-0.6,4],[-5,1.4],[1.1,1.9],[-3.2,0.4]],
    308:[[0.1,-2.9],[-0.4,0.1],[0.8,-0.6],[4,0.8]],

    401:[[0.6,0.1],[0,0.1],[0,0.5]],
    402:[[0,0.6],[0,-0.7],[0,0.7]],
    403:[[-0.4,-1.1],[0,0.1],[0,-0.4]],
    404:[[-1.7,-0.3],[0,.1],[0,0.1]],
    405:[[-0.5,0.9],[0,0.1],[0,0.6]],
    406:[[0,0.7],[0,0.1],[-2.5,-0.1]],
    407:[[-2.5,0.9],[0,-0.7],[0,-0.8]],
    408:[[-2.7,-0.9],[0,-0.7],[0,0.7]],

    501:[[-1.5,0.1],[0,0.4],[0,-1.5],[0.2,2.9],[0.4,1]],
    502:[[-0.2,-0.2],[0,-1],[0,0.3],[1,3],[0.6,0.8]],
    503:[[-1.3,0.2],[0,0.5],[0,1],[-1.2,5],[0.6,-0.3]],
    504:[[-1.5,-0.3],[0,0.3],[0,-1.5],[1.4,5],[-1.5,1.8]],
    505:[[-1.9,-1],[0,2.2],[0,5],[-1.5,4.3],[0,5]],
    506:[[0.9,0.2],[0,0.1],[0,3.7],[2,4.2],[0.7,3.8]],
    507:[[-1,0.1],[0,-2],[0,-1.1],[2,2.9],[0.7,4.9]],
    508:[[2,-0.1],[0,-1.7],[0,-1.4],[2,1.2],[0.6,4.9]]
}
const position_male= {
    101:[[0,0.1],[0,0.1],[0,0.1],[0,0.1]],
    102:[[0,-0.9],[-1.6,-2.3],[3.9,-2.7],[0,0.2]],
    103:[[0,-1.2],[4.7,-3.4],[3.6,0.2],[0,1.1]],
    104:[[0,1],[-0.753,-3],[3.843,-1.172],[0,0.466]],
    105:[[0,0.1],[-2.6,0.1],[-0.8,-1.4],[0,0.5]],
    106:[[0,-0.4],[3.1,-2.3],[1.9,-2.2],[0,-1.9]],
    107:[[0,-1.2],[-4.8,-5],[-1.6,-3.7],[0,-2.2]],
    108:[[0,-1],[-1.2,-5],[0.2,-1.6],[0,-1.1]],

    201:[[0,0.1],[0,0.1],[0,0.1]],
    202:[[-1.3,2.1],[0.4,-2],[0,-3.6]],
    203:[[-1.3,-0.8],[0.4,-2.5],[0.1,-1.3]],
    204:[[-1,4],[-1,2.5],[-1,-0.35]],
    205:[[-1,7.5],[-1.5,5],[-4,0.5]],
    206:[[-2.6,2.8],[1.9,-1.3],[-0.6,-3.9]],
    207:[[0.3,4.7],[-2.8,5],[-5,2.4]],
    208:[[-2.6,-1.6],[-2.1,2.3],[-1.7,-5]],

    301:[[0,0.1],[0,0.1],[0,0.1],[0,0.1]],
    302:[[0,-0.8],[0.7,-1.1],[0,0.1],[-0.2,-0.7]],
    303:[[0,0.1],[1.1,1.5],[0.7,0],[-0.2,0.1]],
    304:[[0,1.6],[-2.5,1.6],[0,0.1],[-0.1,0.1]],
    305:[[-0.2,0.1],[-2.5,0.3],[0.8,0.4],[-2.2,1.1]],
    306:[[-0.4,2.8],[-3.2,1],[-0.3,-1.4],[-1.6,0.9]],
    307:[[-0.2,-0.2],[-3,2.2],[0.7,1],[-1.5,0.7]],
    308:[[-0.4,-0.2],[-3.5,0],[-0.2,0.6],[-2.5,0.7]],

    401:[[0,0.1],[0,0.1],[0,0.1]],
    402:[[0.9,0.4],[0,0.1],[0,1.6]],
    403:[[-0.4,-1.1],[0,0.1],[0,-0.4]],
    404:[[-1.7,-0.3],[0,0.1],[0,0.1]],
    405:[[-1,1],[0,0.1],[0,1.4]],
    406:[[0.5,-0.9],[0,0.1],[0,0.3]],
    407:[[-2.5,0.9],[0,-0.7],[0,-0.8]],
    408:[[-1.9,-0.7],[0,0.1],[0,1.3]],

    501:[[0,0.1],[0,0.1],[0,0.2],[0,0.1],[0,0.1]],
    502:[[-2.7,1.3],[0,-0.5],[0,2],[0,2.9],[0,2.8]],
    503:[[-2.7,-1],[0,0.1],[0,5],[-1.4,5],[-1.5,2.8]],
    504:[[-4.1,-1],[0,-2.6],[0,5],[-1.5,5],[-1.5,3]],
    505:[[-3.8,1.5],[0,0.6],[0,5],[-1.5,5],[-0.6,-0.9]],
    506:[[-2,0.3],[0,0.4],[0,1.2],[-0.6,0.9],[1.4,-1]],
    507:[[-2,-1.2],[0,5],[0,5],[-0.6,5],[0.4,5]],
    508:[[-1.2,-2.1],[0,-3.1],[0,5],[-2.4,5],[-0.9,5]],
}

let box3_id=""

function box3_func(tap,x){
    a2_update_back(tap)
    for (let i=0; i<a2_box3_btn.length;i++){
        a2_box3_btn[i].style.border=""
    }
    tap.style.border=border_color
    box3_id=tap.id

    let active_point=position_point[x.toString().slice(0,1)]
    let active_position={}
    if(male_x==0){
        active_position=position_female
    }else{
        active_position=position_male
    }

    try{
        for(let i in active_point){
            let tempid='Sprite_'+active_point[i]
            let tempid2='slider_'+active_point[i]+'_1'
            iframe.contentWindow.active_func(tempid,0)

            let xy=active_position[x][active_point.indexOf(active_point[i])]

            iframe.contentWindow.set_range(tempid2,xy[0],xy[1])
        }
    }catch (e) {
    }

    let x2=parseInt(x.toString().slice(0,1))
    let x3=parseInt(x.toString().slice(-1,))

    switch (x2){
        case 1:
            json_style(0,x3) // face_style
            break;
        case 2:
            json_style(8,x3)  // brow_style
            break;
        case 3:
            json_style(16,x3) // eye_style
            break;
        case 4:
            json_style(23,x3) //noise_style
            break;
        case 5:
            json_style(31,x3) // mouse_style
            break;
        case 6:
            json_style(x3+1,x3)
            break;
    }


}

let a2_btn_2=document.getElementById("a2_btn_2")
let a2_btn_3=document.getElementById("a2_btn_3")
let a2_btn_4=document.getElementById("a2_btn_4")

let my_face_x=100
let a2_box4_btn=document.getElementsByClassName("a2_box4_btn")


function box4_func(tap){  //我的定制形象
    a2_btn_2.className="btn btn_enable"
    a2_btn_3.className="btn btn_enable"
    a2_btn_4.className="btn btn_enable"
    add_x=0
    a2_btn_2.onclick=function(){alert_func(3)}
    a2_btn_3.onclick=function(){main_func(0,1)}
    a2_btn_4.onclick=function(){ alert_func(6)}

    for (let i=0; i<a2_box4_btn.length;i++){
        a2_box4_btn[i].style.border=""
    }
    tap.style.border=border_color

    my_face_x=tap.id.split("_")[3]
    bag_x=100

   //let jsonstr=get_json[my_face_x].content
   // let reg = /\\/g;
   // json = "{"+ jsonstr.replace(reg,'')+"}";
    json=Object.assign({}, get_json[my_face_x].content);
    json.faceId=get_json[my_face_x].faceId;
    json.thumbnail=get_json[my_face_x].thumbnail
    json_load_func(json)
}
//
let default_apply_x=0
let a2_box6_btn_0=document.getElementById("a2_box6_btn_0")

function box5_func(tap){
    let a2_box5_btn=document.getElementsByClassName("a2_box5_btn")
    for (let i=0; i<a2_box5_btn.length;i++){
        a2_box5_btn[i].style.border=""
    }
    tap.style.border=border_color
    default_apply_x=tap.id.split("_")[3]

    json=Object.assign({}, JSON.parse(default_json)[default_apply_x]);

    json_load_func(json)
    bag_x=parseInt(tap.id.split("_")[3])
    my_face_x=100

    a2_btn_2.className="btn btn_enable"
    a2_btn_2.onclick=function(){alert_func(5)}

    disable_func(a2_btn_3)
    disable_func(a2_btn_4)
}
//

function a2_5_func(tap,x){
    let temp_element=document.getElementsByClassName("a2_5_btn")
    for (let i=0; i<temp_element.length;i++){
        temp_element[i].style.background=""
        temp_element[i].style.color=""
        temp_element[i].style.boxShadow=''
    }
    tap.style.background=main_color
    tap.style.color="white"
    if(screen_id=="1"){
        tap.style.boxShadow='0px 4px 4px 0px rgba(0,0,0,0.1)'
    }

    let a2_box5_btn=document.getElementsByClassName("a2_box5_btn")

    switch (x){
        case 0:
        case 1:
            show_func("a2_5_box2",0)
            display_func("a2_btn_2",1)
             display_func("a2_btn_3",0)
             display_func("a2_btn_4",0)
            setTimeout(function(){
                show_func("a2_5_box1",1)
            },350)

            for(let i=0;i<a2_box5_btn.length;i++){
                a2_box5_btn[i].style.display="none"
                if(x==0 && i==0){
                    click_func("a2_box5_btn_0")
                    a2_box5_btn[i].style.display="inline-block"
                }else if(x==1 && i!=0){
                    click_func("a2_box5_btn_1")
                    a2_box5_btn[i].style.display="inline-block"
                }
            }
            break;
        case 2:
            show_func("a2_5_box1",0)
            display_func("a2_btn_2",0)
            display_func("a2_btn_3",0)
            display_func("a2_btn_4",1)
            setTimeout(function(){
                click_func("a2_box6_btn_0")
                show_func("a2_5_box2",1)
            },350)

            document.getElementById("a2_box6_btn_0").src=get_json[0].thumbnail
            document.getElementById("a2_box6_btn_1").src=get_json[1].thumbnail
            break;
    }
}

function disable_func(id){
    id.className="btn btn_disable"
    id.onclick=""
}

function box6_func(tap){
    let a2_box6_btn=document.getElementsByClassName("a2_box6_btn")
    for (let i=0; i<a2_box6_btn.length;i++){
        a2_box6_btn[i].style.border=""
    }
    tap.style.border=border_color

    a2_btn_3.className="btn btn_enable"

    json=Object.assign({}, get_json[0].content);
    json.faceId=get_json[0].faceId;
    json.thumbnail=get_json[0].thumbnail

    json_load_func(json)

    a2_btn_3.onclick=function(){
        add_x=2
        setTimeout(function (){
           // side_btn.style.bottom='40px'
        },450)
        main_func(0,1)
    }

    if(a2_box6_btn_0.src.includes("default.png")){
        a2_btn_4.className="btn btn_disable"
        a2_btn_4.onclick=""

    }else{
        a2_btn_4.className="btn btn_enable"
        a2_btn_4.onclick=function(){ alert_func(7)}
    }

    disable_func(a2_btn_2)
    disable_func(a2_btn_3)
}

function a3_middle_func(tap,x){
    let a3_middle_btn=document.getElementsByClassName("a3_middle_btn")
    for (let i=0; i<a3_middle_btn.length;i++){
        a3_middle_btn[i].style.opacity=""
        a3_middle_btn[i].style.background=""
        a3_middle_btn[i].style.color=""
    }
    tap.style.opacity=1
    tap.style.background=theme_color4[theme_x]
    tap.style.color=main_color

    try{iframe.contentWindow.app.fire("rotate_active",x)}catch (e){}

    let a2_left_btn_img_side=document.getElementsByClassName("a2_left_btn_img side")
    for (let i=0; i<a2_left_btn_img_side.length;i++){
        let temp_src= a2_left_btn_img_side[i].src
        temp_src=temp_src.replace(/sd_0/,select_ud)
        temp_src=temp_src.replace(/sd_1/,select_ud)
        if(theme_x==0){
            temp_src=temp_src.replace(/night/,"day")
        }else{
            temp_src=temp_src.replace(/day/,"night")
        }
        a2_left_btn_img_side[i].src=temp_src
    }
    tap.childNodes[1].src= tap.childNodes[1].src.replace(/ud_0/,select_sd)
    tap.childNodes[1].src= tap.childNodes[1].src.replace(/ud_1/,select_sd)



}
//
let a2_float_btn4=document.getElementById("a2_float_btn4")

function a2_3_middle_func(tap,x){
    let a2_3_middle_btn=document.getElementsByClassName("a2_3_middle_btn")
    for (let i=0; i<a2_3_middle_btn.length;i++){
        a2_3_middle_btn[i].style.background=""
    }
    tap.style.background="white"


    male_x=x
    a2_float_func(a2_float_btn4)
}
//

let shape_x=[
    [","], //0
    ["a"], //1
    ["o"], //2
    ["e","d","t","n","l","g","k","h"], //3
    ["i","j","q","x","y","z","c","s","r"], //4
    ["u","w","v"],//5
    ["yu"], //6
    ["b","p","m","f"] //7
]

let a2_float_btn2=document.getElementById("a2_float_btn2")
a2_float_btn2.onclick=function(){
    try { iframe.contentWindow.app.fire("ani_func",8,0.15)}catch(err) { };
}


//
let text_length=0
let text_time=0
function next_text(text_py){
    if(text_length<text_py.length){
        let x_a=text_py[text_length][0]
        let x_b=text_py[text_length].substr(-1)

        for (let l in shape_x){
            if(shape_x[l].includes(x_a)){
                try { iframe.contentWindow.app.fire("ani_func",0,0.1,parseInt(l))}catch(err) { };
            }
        }
        if(x_a!=","){
            setTimeout(function(){
                for (let l in shape_x){
                    if(shape_x[l].includes(x_b)){
                        //console.log(shape_x[l])
                        try { iframe.contentWindow.app.fire("ani_func",0,0.1,parseInt(l))}catch(err) { };
                    }
                }
            },100)
            text_time=180
        }else{
            text_time=100
        }

        py_timeout=setTimeout(function(){
            text_length+=1;
            next_text(text_py)
        },text_time)

    }else{
        try {
            iframe.contentWindow.app.fire("ani_func",0,0.2,0)
        }catch(err) { };
    }

}

//
function py_func(text){
    let text_py=pinyinUtil.getPinyin(text); // 输出 'xiao ming tong xue'
    text_py=text_py.split(" ")
    text_length=0
    next_text(text_py)


}

//
function MP3_func(){
    var mp3Url = "./img/test.mp3";
    var player = new Audio(mp3Url);
    player.play(); //播放 mp3这个音频对象
}

//
function hsltorgb(h,s,l){
    var h=h/360;
    var s=s/100;
    var l=l/100;
    var rgb=[];

    if(s==0){
        rgb=[Math.round(l*255),Math.round(l*255),Math.round(l*255)];
    }else{
        var q=l>=0.5?(l+s-l*s):(l*(1+s));
        var p=2*l-q;
        var tr=rgb[0]=h+1/3;
        var tg=rgb[1]=h;
        var tb=rgb[2]=h-1/3;
        for(var i=0; i<rgb.length;i++){
            var tc=rgb[i];
            if(tc<0){
                tc=tc+1;
            }else if(tc>1){
                tc=tc-1;
            }
            switch(true){
                case (tc<(1/6)):
                    tc=p+(q-p)*6*tc;
                    break;
                case ((1/6)<=tc && tc<0.5):
                    tc=q;
                    break;
                case (0.5<=tc && tc<(2/3)):
                    tc=p+(q-p)*(4-6*tc);
                    break;
                default:
                    tc=p;
                    break;
            }
            rgb[i]=Math.round(tc*255);
        }
    }

    return rgb;
}

let hue_slider=document.getElementById("hue_slider")
function hue_func(){
    let h= hue_slider.value
    let s= point_x/744*100  //x-56
    let sx=(100-s+(50*s/100))/100
    let l=(100-(point_y/288*100))//*sx
    let hsl_value="hsl("+h+","+s+"%,"+l+"%)"
    document.body.style.setProperty('--SliderColor', hsl_value)
    let temp_hsl_value="hsl("+h+","+"100%,50%)"
    let temphsl= "linear-gradient(to right, hsl(0, 0%, 100%),"+ temp_hsl_value+")"
    hue_box_1.style.background=temphsl
    let rgb=hsltorgb(h,s,l)
    r=rgb[0]
    g=rgb[1]
    b=rgb[2]

    switch (box1_x) {
        case 1: // 脸
            console.log("脸_RGB："+rgb)
            json_color(0,101)
            break;
        case 2: // 眉毛
            console.log("眉毛_RGB："+rgb)
            json_color(11,101)
            break;
        case 6:  // 头发
            console.log("头发_RGB："+rgb)
            json_color(6,101)
            break;
    }

}

let color_box_x=0
let color_box=document.getElementById("color_box")
let hue_box_pointer=document.getElementById("hue_box_pointer")
let hue_box_1=document.getElementById("hue_box_1")

//
let point_x=""
let point_y=""
function getCursorPosition(event,x){
    if(x==1){
    }else{
        point_x= event.targetTouches[0].pageX - color_box.offsetLeft -28
        point_y=event.targetTouches[0].pageY - color_box.offsetTop - 106
    }

    if (point_x<0){
        point_x=0
    }else if(point_x>744){  //x-56
        point_x=744
    }
    if (point_y<0){
        point_y=0
    }else if(point_y>288){
        point_y=288
    }

    let tempx="translate("+point_x+"px,"+point_y+"px)"
    hue_box_pointer.style.transform=tempx
    hue_func()
}

//
function click_func(tap){
   document.getElementById(tap).click()
}

//
function get_config(){
    Face_func_new(get_json,0)
}

//

let test_json=[
    {"apply":1,"content":{"brow_color":[6,188,164,197],"brow_style":[0,[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0,0]],"eye_ball":[0,[0,0,0],[0,0,0]],"eye_color":0,"eye_style":[0,[0.01,0,0],[0.01,0,0],[0.01,0,0],[0,0,0],[-0.01,0,0],[-0.01,0,0],[-0.01,0,0],[0,0,0]],"face_color":[0,255,200,200],"face_style":[0,[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0,0]],"hair_color":[0,76,107,170],"hair_style":1,"male":0,"mouse_style":[0,[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0,0]],"noise_style":[0,[0,0,0],[0.6,0,0],[-0.6,0,0],[0,0,0]]},"faceId":1,"thumbnail":"./img/default.png"},{"apply":2,"content":{"brow_color":[6,188,164,197],"brow_style":[0,[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0,0]],"eye_ball":[0,[0,0,0],[0,0,0]],"eye_color":0,"eye_style":[0,[0.01,0,0],[0.01,0,0],[0.01,0,0],[0,0,0],[-0.01,0,0],[-0.01,0,0],[-0.01,0,0],[0,0,0]],"face_color":[0,255,200,200],"face_style":[0,[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0.1,0],[0,0,0]],"hair_color":[0,76,107,170],"hair_style":1,"male":0,"mouse_style":[0,[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0.01,0],[0,0,0]],"noise_style":[0,[0,0,0],[0.6,0,0],[-0.6,0,0],[0,0,0]]},"faceId":1,"thumbnail":"./img/default.png"},{"apply":0,"content":{"brow_color":[3,223,170,197],"brow_style":[0,null,null,null,null,null,[0,0,0]],"eye_ball":[0,[0,0,0],[0,0,0]],"eye_color":0,"eye_style":[0,null,null,null,null,null,null,null,[0,0,0]],"face_color":[0,255,200,200],"face_style":[0,null,null,null,null,null,null,[0,0,0]],"hair_color":[1,76,107,170],"hair_style":1,"male":0,"mouse_style":[0,null,null,null,null,null,null,[0,0,0]],"noise_style":[0,null,null,null,[0,0,0]]},"faceId":1001,"filePath":"/storage/emulated/0/com.ts.facevoicewindow/thumb/1001_4d8baf0a-3e19-3467-a1bb-cca7098bc3b8.png","thumbnail":"data:image/png;base64,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"},{"apply":0,"content":{"brow_color":[3,223,170,197],"brow_style":[0,null,null,null,null,null,[0,0,0]],"eye_ball":[0,[0,0,0],[0,0,0]],"eye_color":0,"eye_style":[0,null,null,null,null,null,null,null,[0,0,0]],"face_color":[0,255,200,200],"face_style":[0,null,null,null,null,null,null,[0,0,0]],"hair_color":[6,227,138,115],"hair_style":1,"male":0,"mouse_style":[0,null,null,null,null,null,null,[0,0,0]],"noise_style":[0,null,null,null,[0,0,0]]},"faceId":1002,"filePath":"/storage/emulated/0/com.ts.facevoicewindow/thumb/1002_56826d61-9231-3c89-a23c-47933dd76975.png","thumbnail":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAHCCAYAAACnj6EiAAAgAElEQVR4Xuy9Cbhc11Umumo6p+a6o3Q1S5ZH2U6cwQYy0WqGQNNNA3kxOBAgHeDRBCdxBpskBMdNd0KSJglJh68fNHzN+3jQD5oH3fRrCE3iF5zJgRgnkm3FkjVf3aHuUPNcp9631l5rn31O1ZWuZKmi+G75k6/uvVV1Tq3a5z9r/+tf/4qA/WMjYCNgI2AjMNYIRMZ6NHswGwEbARsBGwGwwGsXgY2AjYCNwJgjYIF3zAG3h7MRsBGwEbDAa9eAjYCNgI3AmCNggXfMAbeHsxGwEbARsMBr14CNgI2AjcCYI2CBd8wBt4ezEbARsBGwwGvXgI2AjYCNwJgjYIF3zAG3h7MRsBGwEbDAa9eAjYCNgI3AmCNggXfMAbeHsxGwEbARsMBr14CNgI2AjcCYI2CBd8wBt4ezEbARsBGwwGvXgI2AjYCNwJgjYIF3zAG3h7MRsBGwEbDAa9eAjYCNgI3AmCNggXfMAbeHsxGwEbARsMBr14CNgI2AjcCYI2CBd8wBt4ezEbARsBGwwGvXgI2AjYCNwJgjYIF3zAG3h7MRsBGwEbDAa9eAjYCNgI3AmCNggXfMAbeHsxGwEbARsMBr14CNgI2AjcCYI2CBd8wBt4ezEbARsBGwwGvXgI2AjYCNwJgjYIF3zAG3h7MRsBGwEbDAa9eAjYCNgI3AmCNggXfMAbeHsxGwEbARsMBr14CNgI2AjcCYI2CBd8wBt4ezEbARsBGwwGvXgI2AjYCNwJgjYIF3zAG3h7MRsBGwEbDAa9eAjYCNgI3AmCNggXfMAbeHsxGwEbARsMBr14CNgI2AjcCYI2CBd8wBt4ezEbARsBGwwGvXgI2AjYCNwJgjYIF3zAG3h7MRsBGwEbDAa9eAjYCNgI3AmCNggXfMAbeHsxGwEbARsMBr14CNgI2AjcCYI2CBd8wBt4ezEbARsBGwwGvXgI2AjYCNwJgjYIF3zAG3h7MRsBGwEbDAa9eAjYCNgI3AmCNggXfMAbeHsxGwEbARsMBr14CNgI2AjcCYI2CBd8wBt4ezEbARsBGwwGvXgI2AjYCNwJgjYIF3zAG3h7MRsBGwEbDAa9eAjYCNgI3AmCNggXfMAbeHsxGwEbARsMBr14CNgI2AjcCYI2CBd8wBt4ezEbARsBGwwGvXgI2AjYCNwJgjYIF3zAG3h7MRsBGwEbDAa9eAjYCNgI3AmCNggXfMAbeHsxGwEbARsMBr14CNgI2AjcCYI2CBd8wBt4ezEbARsBGwwGvXgI2AjYCNwJgjYIF3zAG3h7MRsBGwEbDAa9eAjYCNgI3AmCNggXfMAbeHsxGwEbARsMBr14CNgI2AjcCYI2CBd8wBt4ezEbARsBGwwGvXgI2AjYCNwJgjYIF3zAG3h7MRsBGwEbDAa9eAjYCNgI3AmCNggXfMAbeHsxGwEbARsMBr14CNgI2AjcCYI2CBd8wBt4ezEbARsBGwwGvXgI2AjYCNwJgjYIF3zAG3h7MRsBGwEbDAa9eAjYCNgI3AmCNggXfMAbeHsxGwEbARsMBr14CNgI2AjcCYI2CBd8wBt4ezEbARsBGwwGvXgI2AjYCNwJgjYIF3zAG3h7MRsBGwEbDAa9eAjYCNgI3AmCNggXfMAbeHsxGwEbARsMBr14CNgI2AjcCYI2CBd8wBt4ezEbARsBGwwGvXgI2AjYCNwJgjYIF3zAG3h7MRsBGwEbDAa9eAjYCNgI3AmCNggXfMAbeHsxGwEbARsMBr14CNgI2AjcCYI2CBd8wBt4ezEbARsBGwwGvXgI2AjYCNwJgjYIF3zAG3h7MRsBGwEbDAa9eAjYCNgI3AmCNggXfMAbeHsxGwEbARsMBr14CNgI2AjcCYI2CBd8wBt4ezEbARsBGwwGvXgI2AjYCNwJgjYIF3zAG3h7MRsBGwEbDAa9fAtywCf/L618eyh+Yyt94yl4rEJyLxVDQWjycTeEKRbi9SatUdNxqLuK4DXq+XBId+teGfWCTeGfS7XvgB3Ui8k+5DceaH/1UtEokMvmVv2B7YRoAjYIHXLoWxReBPHnh9aio7ddcNd9x2R7vRuDO/beaWfn8wE4tGUpFILAIRiEEkwug6iHie50QAIpFoFAaDQRLg4ss1EoEODICB18DXAXQABsXBAM5GI/DZXq/zmT3/8i0nxvbG7YFsBEIRsMBrl8RVi8CXPvZAKhdN5d2pwhQkonmv3b4xApG9cTd5dywRPxR33Buj8XgscMDIZpbgRo/ZRPJKD1GPGwz48eprcQDw+Sh4/2vQ6x/tRr2FdCta3HbvW2pXLSD2hWwENojAZla9DZ6NwIYROPrw6x2Y2H93LJ/+0WR+4p5EMjkDg8jUAAb5SCSaikajmLMGn7/B91drMQq+CuDqg/MvFAAP+NcDBOQmwGA5MgDMik9EBoPf2/Ujv/S39mO3EbhWEbhaa/1anZ993essAk988v7ZeCQ9F3VTt8fjkR+JOe6r3HR2V8xxmAnwl5TCV3OJIXFgviH1/fAivJJlOZz9Kpw1KYeRmS+mwoD/qYcSEENkAP+91+t9YJ83943Ivff2r7OPwZ7Ot3kErmSFf5u/ZXv6lxuBL33sgV2FlPtagNgPOOnMISeTmYvE4tPReBwiiK4hgKWfBfA1vMwiRhLMvxtaieEfbIJWCOGsphj0zwNUA1MPQcAl8EUgHnj4tegNvL8a9CIf2H/v/acuN2728TYCG0XAAq9dG4EIDB5+OPq1nbWpVD99WywWeQ3EYz8ai8fvTKTTTtxNAha6AjmqAbrqnxcDXfU7/yFh0H0+yzEEzPpb/+c6Aw5QDgpoVabLCI3/QPD1PALngec1B4PBB6O99u/vve+hC3bJ2Ag83wg8n5X+fI9tn3+dReDoxx6YiiST70kk0z+QyGQOxhIJFHgpsA3TBkNZrkkrDFMKQTw2f2+CLwobrvwPEwnqBQI4HKQbRgKwwfsq2kEBrwZgD//0T4Dn/X49Vvv0Hfc+YotwV/5RbflnPp91vuWD90IIwNGHH3ZgunMjxCI/EU+6b3Ez2al4KgWRaCyEtcZSuSxq4WK0gg+6lwW5Q9yxfBJCJWz8yWhwJjoBAVpltfSNZLrM9zLdwJmvB4O+R//u9/vvbyXqH7nj3kc6L4Q1YN/D+CNggXf8Mb9ujnj0079ydzQW/7WY49zjZLLbiEqIIZWACe4wd+unoyZlYAJysJAWoBT0rzYA2w3B1AjXpqRnmwyvIS1TwCu0AqIxAiz/zGO+F2kH/ut5/U6/133kpje+94ObPJp9mI1AIAIWeLfYgvjHjz88EU90XhVLxB6KJZx7kLtNJNPM3Qp9y/nnRfjaIT438NhQlntJ0L1UMc7/kBjywz+48k+RFA1SUGOKwQTifh8G+NfDvwLOffC6vcVet33vLW/6tceu/OD2mVs1AhZ4t8gnf/TTD2ejke5bovH4T0QTiUOJdMaJu26wWKaT0VC2e1FqIcjXXjzLNQiFURluZBTgh0HZ/MCCv5Njj6irqSyeHx5UmYVUDQzCStkgQOzBoNeDfq8Lg36PANjr96HXbs97/e49t775EVtw2yLX0dV6mxZ4r1Ykr9PXOfapB3cOHOc+iMbeG3ecqXgyBQS4ESmYyYn7ADpEMxjZbECbe8ksN6ha0LBrgi6/RuCYF6Mdno/uVyNvUAExoqGClQ5GJoyqBwTcbhf63TZmvNDvdqHXan5+0O687rZf/tDqdboE7GldhxGwwHsdfihX45SwaBbb3rsvkoi/N5FK3Rhzk1HU3VInmZC1gU/fz3KD4KoZX0MHFkQ/X7cbUisEMmj5JpTVavAewRtrAEag3GCpXg7vu1EqrFvdQpIyaTPWmS9LzDykGjrQa7eg22j2u+3mb93+i//unVfjc7OvsTUiYIH3BfY5ow73G3PdQ04s9s6Y477BSaedWMIFiJrsaDAT9YFYQFGBrcgaNuZzzc6zYdBVWSz/pa2+LLdR9IR5TuFlKd8Lchq/1y8VfA4zt6M/XQRSE7DDhTbRohmdbPRCvq6XinFeDzPeFrTKZei1Gw/cXkx9MvLII0PuaC+wJWbfzlWIgAXeqxDE6+UlUIcbzWTeHo3F/3UinZ5JJFEWplQKJtAEt/w+yPo/97NT9dTg9/yC/JKhTJkeq8A2CNgmAPMxQ+dFL2gkt/7ivBjPy9EfamwbQL/XA+j3wev30FZSFciwUDbwSC5HO4BEApRWOUZ/6aRHNlRQi4UGX8DXGgzotfvtNjTW11Y6jfrhF7/t3x+9XtaDPY/rNwIWeK/fz2bTZ4a0wmCu/4pYLPrxhOvelUilCVCCrbshDtfAPgHlUTxrADyFj9XgyjSECcwEuKMoB1Q6hAE0BPBMJ0i2ejFtr5J29cHDrwKqKAmjf2Pxq8ftzFGIRPnY+tzC52ccKRpVdAwCMfLgeqdAiKwKbkbmq8+j24HG6srne53iP7/jLb9tmys2vXq35gMt8H6bf+5HP/3uuWgs+emYk/gniVRqKsaFs0C2qHf4QjeEtvXMpWpuN/w9A6nyZVAZbSAL1o83qQQ+Fv8umHWHKAr5DDZiFEhc4EG/0wEPC1uoLkCdLXeYQQTBNarOSb4iyMoNYhRDHD6Wymf9P+G2Ys78I7G4zubxnKipAr9S4a0D3U7nE81o5SHbXPFtfmFd49O3wHuNA3ytXh71uMmUd28kFv1Q3E1OxVNJ2jIHKQU+eogqGFIXhGkBM7MVABsFuEwVBKkIH9SHqIuQFVkwM1bnqjNKlmz1ux0YdDs6g5UsVH1lsEXgpZuC2fhh0hkmoG70iZhtxXQmQX0vZrn4Xx/biD0FvqQM8W9CLDMre73Offtf/8BfXavP3r7ut38ELPB+G36G3/yd9989iER/I+Y4r4q5SSc2RCuoN7UhN8vb59EUQ2hbjtt0RDR6zgjuNkAthLjgEYoDk84QnWwPgbXTAeRNvX7Xp1npcAxwDLI+2AlvPQLo+YYQ+GiHzuVi7cWi7WUA5ozb929QnW2S6RJnjP/FYsQPe/3+YgS8H9/7urf/3bfh8rKnPIYIWOAdQ5Cv1iGQy43s7N+fcJK/HnOdVDzhGAY2RoYnB5RMVn+vtLt6Cz5EMYSyODPbDQNsmF4YAraNOOUI6V+RLug0G9CpVQG7lOOOauZQhjxCHSh+lr7njNaUwgU44JCm2FSfDXHLF/tApJNNHmMqHvBnxO9y+7Dme/l7LNwJreENnun2+6+98b53nrtan799nRdOBCzwfpt8ljhWZzKX//W4696fcJMOZVdhYDUA13xbprLBzDgJ1ISvRdAj7BZw5skRxlZaZ8iGcsE/jgm0I24CANCsVaFTKUMEBgSk0WiElAWKnxXqwOBrhVMWCiGcyermCz5eYDWHCmha2DFqyYetI1WmS3/MNjcz89XeDop6EB8H7GzDG8ugj9Zm8IXF+IUfeMW9H29+mywze5pjioAF3jEF+vkc5uinH56LOYPfTiRTP+p74poVIyma8VGM7M8viCnkEdogwE+O4nFDP9OaXimWmRmmBsDgckIJF0q6OvUadOpViCdiEIsniJtVI4HMzFb4UoNCkKzaBFwTbE1dcADrzcKe8Quz0LfhB2LSDAp5A6OE6NeGrGwEANP77mB3Wxe8vvdfB17/72Lx+MGBF3kOYoPz/Uh0Pt7rlwaO14wO3MlBxHMiMbc6AGgO4t1WOlGv7WgeatvJF8/nqrm+n2uB9/r+fODof3zPoVjc+X0nmfqOGG7H9ZZ7RFY5okimsIa5WQY6KQip1+LWYUNqFfi5gmq/aGcU6gI/N+LYrtWhXcXMVvnZRmMxBbT4NZDZ+tSG9qAMFMh8znjkOTCfoNUYOuMPxSaQGY/KjvmJ0jAhr+MjrjGjjQuAovWlxBY72gwXM2quUOBLSgzUE9NmgjJ7hO5mJBIpRaLRJkSik5Fo1IlEIlWIQBMg0oII1CKDQWMAUITB4BREIieinveHe+59h82cr/PrdbOnZ4F3s5Ea8+OwA+3IbO9VTjLx5yQTQz53SAcbBhip6kvGJ51jF5FbBbStfmFNURAjAGxIp6sCg5ktFsiaa6vg9TqQSCJni00JeGz56isRwjyzViSMym7NzNY4p9HFw3CzyCigvTjdoGevjQJgs72YJW2mmY4qwHHhjcC3BT2SwXUV+OLNL640wsJpa25bPcJYaYaBjzcoR2DwHwZe5I+i0DtlQXjMF+RVPpwF3qsc0Kv1csd+530/GY25vxlPJbcjDzo8bodBVl+rIcUBqwHQX1dlsHixR7hYxZkmPjfE7Q5rdP0lMmSeMxhAr9eD5voaeO06ZbXUBRYzARePqY6timQ+laCBXdMX6s1slN0OPV6ASjfPhZez8X2Y/x35QYWVDkGe17d6kJ/LbLagobrp74vZrvg6YHsxKlBUc4sBvMZORG5AQU2x7w/sDQbLERg8HfEGH93t7fiMpSOu1hU33texwDveeF/yaFREy+Qeijnxh+NuiopPQ2PKQyY3fvaoMlYqpnHBSjcWaGWAIReT4pX2VAhmzAG5mZGJ9rENF5sFalVoltbATaeJTqBjIujisQjwBfSNZgbhbU2VgskRm1m2fqyRCYay3yDdEVrO+tvLXeaXAcCGfSQV2fBUubNNzNXRQhLjha3FqEsmykh3yHFR09gVmI0f+HKaUza4ZdITw+DIACK/2ev1Hr0Bds5bEL7k5XXdPOByV+R1c+IvxBNBr4VYLvu78YT7Q3HXdck7wJfySy5oJL8GiFKxSoGuzqYQpIaaDAw6gdUJZhaqM14TtMhURlkYdBt1aKwVVXZLGa5JJahMV5+HgLVWQQwDuw+cvueD32dh/MwA/qGWZDPrDy2MIbpkUwvHLKipT4A/CH62n/Hq4psxQsjMeAWEEXwHvS7xvq16A9xMRkvT8GYVjeCNS71f0zuCbmgYJAF4oTFIykZ+Eb2BNzg7AO8Ldhrypj7c6+JBFnivi48B4Min37cn7sT/MO44rxFNq25iDZlyaeAROoG9BVCeFWifpS2sWcAytvFmS+1QwYyNddibwOv1odusQ6VYhJQbZwmYMpXRmS2KcfF4BtiGvR+0Wxk/ZqQ3RCDj9YtrBgkRHLwZ5qEvKhvjD9vkyoOu6KHVsDkA9me2+fPbdAce+/giABP49nvE+barVUgkk+SNLBmwtGNLK7SaeIEFSoCo46jCJN0A/UkZ+jHKu2ItAvDWXnn1zw686ZHWdbK07WmMiIAF3utgWRz/P371oBeL/WXMSd4SSySYCA1lWUYGqttjCfjMQo3iU6WdVbwLFM4ZhTb8QaATzdS8+gHpNFvQWFuhBgc0pImRn6+iFOSrT2UYBT1JWYeaLszHjOB6jazW1ygP63G1AkLj6KhlPPo9qaeEClgbrYGRoBySl0lCvFHGa8jNyBlNu6V1EYvBSePYJeWUpvTW8jlJcq2KdcqGEmdrKu3zUAYsjR19rzWA/n+N9vpv23PvO9aug+VtT8EC7/W3Bo596lcPRFKxP4u5yZdg4UX/Eb2ohgkGEl0044yTu70UvSAZr9ntZfKrYdVCaCvP2Vm31YJ6uQSxXoe4W9oKi2OXcLdCYWiwlNdmYNOyMD9rvZwMlyF6RHbrA+doGmEU4G5UZBtBn9MHEPKY3AwAk2dPKOPV3/OsNjTUQYtKHB/U70OjWgU3mwM3nQE031E30RESO1kUHo4bahFlIY+lsw24pSm7SvC8I32v//MH/re3P379rXp7Rjbj/RaugWO/9+DOgZf6H04qdVc0FosEBySYF78CE120wgxJKwfMRgTmdEHZGWolAWW4PD1YF9SCmR8WzCorKxD3lO40jhmY5m9FpRAEdJ1Ja1J2GHyHVBIM1KO8f/2kXv4VpBr8hNhctmGgHQ2yF7OY9KF2yNQ3hMHDRjoKp4UUQsAjK52hApvqbkOTHfYHRvDtIe3QhUQmCziSScvuBICFL9dZOo8f6nVw5BA9HykIfG+BUfRsmTnwPNQBf6LSX/331i3tW3ih24z3+gn+E596cGfKTf5FPJm8G7fw/vY3dHELh0mFLMk+fW5VimdSUAu4Zhl0gumi5fsdRKDTaECrXoV+ow7xmFEso8zWOM4mWocDfgqBZo5gZj2kvx1SNfhZs/rEQhSFfIwBXbOAtP8ZjwTbTbIM/mFDTwgwQEEzHeVSqZpG6Ks0VUjmy3QAmbIzAGODRbfThdTEJETjCYM/V57A9JmLUoV3QQMPn++BhxrhZh0i8YSiKYT7Nf0kPK8/8Aa/14HBr9/4Y/fPRyL+/f36uRq23pnYjPdb8JmTeiGT+/NE0n1VNJGIqmGLoT/stkIXXSyu5Voq0+UMVC5I+mpqZYUnDFILmhsdDAAz3HpxGfrNGmlLEfyH9Lch20PdAadTT87EA7ykaXjuA+5IDa72mgirF0ywNTPzDbJbjbmh5WwqMwL0QTgrDmbQwT4V+Z3p52CqGuRzUyCsFQ1I4DIAKxCW0fDKwB2zVdL4YrGt1aLPI1mYUuDLN1hdvBQuXzTX8rpYsGOlhNdukT5YZ+DmmCIFxEe8vveL+1//ti99C5a8PWQoAhZ4x7wkMNNNOs4fx93kayjTxat8FPBSiylnuOEL0fA4EOmWUjPgx8k6XtOsXDJf5gN77TaUFs6DE4uQdwIBLvG4RocZYbd6vWFzHAWGozLXII87qpjmd5YN8bgBoDRntI3OgP3E9yIcbqCQFi7obfTh++858AjDHB3fu2S34fltyLn6fK/f/CAKBBlBhKCpGiy60GnUwRtEyKUtnlTeyjSWyMyCsbiJN0heM6pDjscZ9ZVUTZv6UAedD/Z0Pv1+cwCDh7zK2u9a1cOYL3wLvN+6gNNMtHTmz+OO+6qYk4j63KBxTgPl3BXhDFRpOhXNQFtPPWmBM9yL6XQN0FTgHoG1C/MQ7TYhhlSCZFe68UEVdnwFBAM5fREQ3pwWN1D4MuRqDNkBLfJFVQqj6AQzCdahC9MR3PJMACn3jg3yDH3vGyi+lFUgMvZdgaz6nYnjagoG/lHyLv0n3FRBFICZ8SK/68+CU0Mzm9CqVNXuI5GgFuxet8c3xQQU5nYAThdBICZVCZrey7HJoF1J1Wg6B1IZQnmIJI1B2Ot7LQDv4X2ve9tHvnVXgj2yzXjHtAYw03XjiT9Gna4Yl4+kGNAuEcE2jvye2v77BjPcHWZoc32XMWM+mNmRRqAAUK/WoL1WhBj06cLWVXSWhinpmQCtZHw+eG0uww1nwgZCDtEKZhYroBlCVLNLbfQUTP701PkGgJGPJ3hI4Mmx8CdqMp9D2EmyBLo5kbF54Nj8GzxNyXpDojQNvHxF+dpentMmel7KRAUkFdfbZ7qgU6sB7kaShQKgN4e8JtIRnUYTEukMxNNZwI7GRCZjNMuoGwO+Lg33RGN5nNyhDXyU0oG+R3rC8yA68N6429v5x7bbbUwAYDPeb02gj/72e/864TjfJzpdDbpmphSNKq7V4Pn09t/Q6yp6wc94Ca7EZSyQ5eJ12CMtbrdagYSDW1WmFkSGFsiY8ZUMs3Szs03zuKO8FDagFDhDHKIUNL6agBsE6eCnNFw489+zojwUbqoOuyGTG2m745Ze3NqjJAuBiiYRIyDha3i47Vfca6/fh1g0ivUxiCVTkEylFIdqyPnoOZhZ+g4Toyw1dMMDnRgDnwZf6mhDD98OdQV2anVwCxPgMLBqGgMnW2DbcbdLmTCeozs5A+nJKeX9wKk4AWy/S7PpsHAHg74u8qnfaSP3Za8P9x64962f/9ZcEVv7qDbjvcaf//FP3u+2Y9kPxBKJX4mj9IcyL1OCpP6NPycHsgQW0iTT5QYJcfjSLcB+W66vVpAslbM2z6Pta3WlCDGva2S53PygeWIik5lJMCRnpn/DJbneDUAzbFOpPSaCy25IjxumFwIPD3bf6ZoZSbqYU+AuMWo6QNlWt0vAhi22CFwU7xi+Du8SzMGWrNmVDBG376hrxjbfQSQKrutAq9mGVCEPNM05FicnNvrM+LOVz4+igrsI0QHLa8uEZKYHaFpyt0ca3Xa1gh6+kNs+B1FypBMjI3/d4PvCLLlVLkMPYlDYvoOyYdH20oQM5I+7LQW+XOjDTFe5p/XFuH2t3x/86IGn178QeeQRdQexf8YSAQu81zjMRz/1nh+OOvH/K+44Wdm+6m0oJ2fkeWAWUsxClzadkXHjIeMZVh7o7TPzi5XlZRigYgEBRooyphpCnmcYngeKaWYDhMi9DJ5XUQ/DdIEqxknfgyyvcKOGCnqgOBeQLRtcKmFpsNglNy56EW1M3odes0ndXQiWmj9nUA2OEDL9KvimI6myvJ7RlhuWaWELNfGyXZWptmp1AstULkseDAjIMTepaCI2D9LLjJJyoRsQALmbDW8KKC2r16BRLkN2ZhbcXIG11EZHG1Mcop7A9uNuvQ69QRQKO3ep41L2jq/bBQ89gemmw+3HUnDTmW//3KA3+JH9P/HAE9f4UrAvb0TAAu81XA5PfPKdh9xE8rGE605hgUz32BsZL25nMbOJYqbLNADRC9IgwcCr3cYYhKQ5Qm9F8eeeR+N12msrAF6PFAtUBRfVwkZjfQK+DaqQZvoq+MA3Qh6mEFSQ1N92mwoFAWhz4emfaW4gUMDT23cubPlGNWp7L74HmNn1mg2iCQK+v0YHmKg9qKmEM/mAb4TOxA0OVzhfAWD6zBC8jA41cSHz+sTBri8uki7aTaUgPTEJyWwW4qmU0fnHkzcY5NW4IFYlUNbbpewas148TmHXblVMo8+c6SQjhno9eR75/uI5JCemwckVCPBJ8UCqCaQd2r6kjTXGHnLC6hyORAeDH9xz7zvmr+HlYF/aAu+1XwNf/ci759KZ+F/EXfc7kLelrauZReEOMhZT/qyYkXLBywddlnZpAT27VJERjTH1l4tBuIWuLC1ApNsmxQKBuBToRO9LUrNQAc3IeMOAG/iegfJK9bicG/sgzRAdVHsFdat7elkAACAASURBVMHCgytFAShfW8zgWk0CQX0uAb5aBmZuYA6kM/JQzmHeHEyzc00TqJQ88BmOaIxA7hWHeHaxMaVWJxOczMQEfdX8OkvCVGZKMi8CYKRFECAxg0UAL+zZpzPYgKRPKAs8IW1BqbLoTrMJnXYXJvfuV74d5PGgOF9dcJMuOiUx42YP7zFv0L33wL0PLl77q8MewWa812AN4DTgwbb2R+IJ523af4GBVwA4RqBrZLoIvro5IuT8xa2jw3yu6tNHDWh54QIkogNAHllUEVKAE/MVX+cr0rCwMblBCQx1qo3Q7W6yeCYhDigFQrwtcw+6NqYAiTu8WG6F34enNughmdJeK00fukWah3YaQD+6o80o4BneDD6tEZgGoTgOE/S4SQKzSCXrUn8ry0Worq5BOpeDVD5HfDC2B2tlidACzEv3MTtttwEVDpltO8DJ5bXVprImUzyt+sM3czwPlrTh+qJJINUapGe3kxeE5nyJdsDMV9zNjCGdlPkO/joG3k9ac51rAAqhl7TAew1ifOSTD7037iT+Tcx1yVBXrP1kJAxyujEESNZs+nrasNuY4W+rZ6OJZaMC3dryErQr65BwOHMmagFdxMJcMEuuAt1o8jODKjBlWaNUDQa14PstcD5r0gsmhzsUYwZ4s4jGWILZGVb3VVtsXxcetbm7YQokY9/FA1jfmESLLLSCmc2aMjH9tvlGNGotyGw1ATvze8ocTXMcVgwYLmQIwjjsc31hCdaXizA7tx2SCMAoDcOiHPPuCKJIn+DOBbNepE9iySxk53YSDeXfLBg0pYCoOV+zUw4VEF3o1OvQj7kwuXOn2nHhDQELbu223/xBgBv4+19qkfLPWG+HawAMlmq4dkH9+iff/epYPPFnCdedlf55VSFX/fukXnAcPQKGaAbqtTdBFwGXO9D0WBgfcGmHidnUwjx0axVwUknF5+IFKhdyoGhmjGynSnvQftAsqimMkoxYIVPAg2ETxbMhlYIZbnlt4R68AXTaqvrex7bXATcNBJQcvmuXBllpn6WvYt6jFBqUNusbiCGPM6V2zHGE6WelfTWMx41Mkit5XLgzmiaYQpIMVDrXsOCGXDsBaqcFjdU1uHDyNCSTSSjMToGTxkKckqlRDcAbqBZgnlaBxbvJAzfSzoh4bfRFbtSh12pQmzFqfimDTqUps5VpJXrmm+dBu1aDaDID2ekZH3zbTe5yUxmzoXJAEO70Pe91B3/inf/j2l0l9pVtxnsV1wB2pg1c90sJx70FLwJfwM5ZL4DuTCIVQ8JhjwQfMP2ttO+rSwIx5mbFYLt04Tx4zRokUKLGoKs1v1SM8SViZieaWSjzf65Q0Adg8/sRbbZDWaMP0MTHBoptvvpBCxdoawzQqlUBum0CEBz9Tr60PI3Yn6IRclrj9+ZntyM4a82Bh7vwZIce5GsDW3bmP2m6A09J9r1veUuPW/URBcOAlZnm9CWb7MOg24N2sw6lhUUoF1dhem4bpLFZwk1CDG+akajieRF4Ua3QbEJ6ZjsB8wAtOqkWgFQSxkq5x2EHnBqo2aLDO/kJiLK+WGW5fWiWy5DIFiAj4Et0RpOya6WwCGa93sB7sg7wPXdYP9+riA7Bl7LAe5VC+5VP3p/PQPrPYq7zvcTr6kKaAl38i1mpn+0qqkF1pqm2YHMir3YZM+wcUYeJF8n6/Dx0q2uQRpG9oVwg0JICmlnVN5UQDEqbUi2EM19fJ6aiZoDPSC0uZ50acJF/pOJTHZqVCsQjA3XjYAUHtkQH4sC6Zf2eQpmtOjxzuEMZvkGf6M/C8MulLi5p28XiU5cy7m6rSZy52o4Lhzqgbi9RIeBnE2eaCMGQml54GofaebDRDd+ANE9MoI4KhA4snZ+H6vIKzM7NQjKX4+Kb8u4Q4xsE3vLKOszu3wduJqssIGNxnx8W7h9NjzBTbtSh22wQh4x+D5S4c/GuXq5AanIaUoUJVchDsMYipRofxNmw1vfi8z5Rj1YespTDVQKI0MtY4L1KcT3yWw++J+okHok71N4UUDHgRUvFNKYYcNSLVjGEdbp6SKQPKL4m1YOV+XnwqiVIptUgTEVTsEyJ1QsiNRuZ6YZG/oSpBV+14ANXwPhmCHDVe1W7c8x21aBL3cLFFzXylrW1VXBiUeqmU4Ar89qYyw6YustNhF/LkIIFi4xiAG/QIwYPS34K0rCA2XWrSX+pS6xRh3a9TuqDZq0BjXod6vUG2TR6RA2ppgyF2+o9xqNRiMdj+i+CLn6Pn6/jOvS5JNNpohCw0KlvtCzpU/IMBZTL8wtQml+Aub27wM2kySBH0UCKo8VzW1kswr47DkEinfUBHcGdJoGY7nMKZOnmUcMmjD7pgIU7xsy3huA7vQ0y+Tx4aKrTboHXbvoDOvnmQgVCzytBr3/4wE8++ORVukTsyxgRsMD7PJfD4OGHo0em6v8iGk/8BXWmiV5XTEmwLz4WU2qDRIIuLgJdUjGo7aUqHBnZnpHFiYcA8oWV4hLUlhchV8gz6BoURVgyNiLjDcrDDG+DoQYJE3QNnW4o4/VVCozGDI7iidDjLLJfr0Kr2YRUVo25oaw2cMOhCY+KouBhnVI4MwtmAXpBF9AUBx2WeclkX+wG61TLUFspQnVlBeqVKtQRaJtt6GIDhDeANm7XEVQdB/oMsOmky85siNsetFodaDZa0O50IMK+B5IF43Y95cQh7bqQTjqQTrmQSqfor5tywXFd0vRic0XMUbsculH1+7CysAT1tXWYnJmi36sRQKzJrlSg1erCjptvpLZlrfPGm63xeQekZjBQNEWtTJpgJ5NVaxI9HLw+tOpNyO/YTUNKydOBKQfd0aa9JEjf+9f1WO1f2qz3eYLEiKdb4H2eMf3ax99+m5NIfiaeSOyJxlG0rjIP/AdemLqY5jgadFVTg5pfJltrAR6ZmWaeFoJKubgEnbUVcLESztrf4ERhaSMeoV4IUQ3hhogwt6sAemPAlXPTzxPbSc5u8YIuLS5CIoHTcwe0LfebG8Toh6kVuskY2ltNl5i0iXgNm/plKYBJG6xqRvDabWhXy9BcX4VqcQVWl5Zh/sIyrNcakM1kCPxnZ6YIFDFbxXgmEnHAjQrlzLJ9V9Do++ngLoZlW+idi6Ddaneg1WhCD70d2h2o1etQqzeh3WzRzyNeH/KpJBTyGcgXcpAt5CCZ4WwYuVpaLwNYW1iC6noJpmanVaGUz6VSXIHctu2Q276NBmIqbbZku0H+OnwhI1eMmW+7UgY3X6B1qPjjHniRGGRmZhXVgnxyCzv+etpljZpTpK14AO+74b53ffB5Xib26ZZquHpr4Esfe2AqG0v8P3E38d3UYRSaf4Xgi1tNFM+TgB5779nUXCRflOHpbI8BRp+iUkNUV1ehvjQP6azKiIRekEGTeqS6KRXTGZF4MYTM0TWwDutzA63DIWpBPY2tFnnGG91kej1o12vQKq9DLBqBhKu2zb65OgLs6MkZyvSHbxw625edgKgWGFr0eHMl/qemilaTAKa2sgzrS0tQWi1Bvd6EZs+D3GQB9u7ZCZlMWkns+K/frMY3Ku1ZbKgVjBuQ3KzwLIR2wN2KPwla/YtiQ9Ml+pRx1moNqJYrUCtXIer1IJV0wHESdDNK53HeWoo+7ZULi2Rgk85lKHbYBFNeK8Gu224lmoHkhyGDI+K3terE8ITgmwbe+LvYyVheByeb43PrQbfTASebByeTo7Zikq+1sDjnJwyK/yZO/PSg03ntwZ9577NX78qxr2Qz3itcA9gk0Zus/8d4IvEm3KIS6OrJAKpSjJkLgW4SsxhUH0iThDnPDDMXyVbVFlT9UaDbqVWhtjSvJvzKpAhTy3oRP17fMtLQ6xp+C8MAa2a6w/4KQ63DlN33obSwAINOi7TECdcBYK8J3eZMmT0rLYRKCFhbqt+J65pPN/DyFFNv4iB7KqutlaGxWqQGBeRBF5dXoReJwI65bZCfKFBGm0YenPlm2ZoHFjzRMb70TEBU4uLLjH3vCPxcVfauTHwRbBHQRYbma4rFJU15M+D/cavfrjG33GjC2tIyTEwVwE2naXe0PL8E2WyG6An8HnnimQM3KOmhm/RvuFq1IudlNMJIN53RltyplKBVWofU5BSdp2S+7sQMxJ0E+Vsg+OIUC508+EoHzxt4//ngGx588xVeKvZpIyJggfcKl8WTH3vg+2OO+2fxRCKrNJim0bVHIEkaS5IKCejKeB2/My3IZYpWV0C3ArWFeYiRnSNqfw1OWBfSRsmt/EGXusf/Up1oAT/boOG3TKHQ1pNYr+r3oVOvQn21SMUlBz0JtMeESaGoLTH9jhQVskUOZri6QUIyXlEiCFC0mtBcX4HK8hKsoRxrrQTVWgM6HsDk7DTs2rkd0uSLIMeTryqbpnPn7DAoo1PG7n7GbVwSIWBWL8ALhl7PNEA3Rx6ZNA0/B8ESgZq8d9ECsgGr588T2BYm85BMJ2GluE4vnkolIZnJwPYb9tMgTDJAj8bA49HuZKqE2a96Q0YbtrqRmCZM6gbuQXN1GdBQBxUU0lWHOzC3MEWyObyZoSwNi3oqiTAkZtjIApEfvuEN7/7LK7xc7NNCEbDAewVL4ksPPJBK74t9KeG6d2Em6tvtscl0LAaJZNLIdJW8KDBLS2d+BhAxp4j5UbtSgvryBSrAKT8H5El9EBGawQcy35tAb4vlogx0cl16pI/ehuvsmBUWzOHW1tehtrQA6UyKOEllwjNCi4zgNJSR++83ALY0rJEzffEQIJ6yCpWF87Bw8jSceO4MxXB6ZgomJiYIrNIpHJPjA72mEwJj6JXSQhfvGLDohiDvUWIb8MHwF8dIuZyBw9LrrKkHJezzqQjiKJS3AtIjqKoonT8PZ46fgvVSFSYLWeLEF9drcOeLboWJue1aWYE6Z3wyxgtpCF/CpqiTmIvysRTd5H3DIqWeEBczzLYbxSU6J8ykMetFAE7kJ8lNjbraWGImNQrR97LK4RvRTuS1B95kvRyuADKGnmKB9zKjiNL5Jz/2wLtiCecjKIlS2QHrPPt9AiHM/pBiQF5OtQP7/rpqGx4qKHH2JGbeCLrVxQsQT8SZ2/MzXckehRdVYMJNBKL5NfW81Bjhd3MNTZIIZLpGs4TZ3cYV+DbqRGtV6Nar5DvgZ7i+SgHfX6D5wRglJMAnxTQqJErWpqVMSCW0iCteO3cWls6cg3KlDuC4sH/fLnBZFUA3MnPyMkvTfODl8xAADsj0hPdmHbDwpIZmWj7XwPLQVpn4U86g2RBYa3XDVxRl7vh4f/aamrPWhsbaGhz7+yfgi19/FnJuAmYLOZidm4E9+3aRnUI6m1Y3cARbY+CpyTezyaQu6FJTjuMqHxAaE6T8HaSbrbGyrIA7FlMm8BCB5NQsFfrwnMhaE/0cuEgsma/n9Tt9r/+6m3/qvbaj7TIxY9TDLfBeZhC/8uH7dydd928TrnuLtARTxstTDHSmy8UQAV3qytKZGVf2OSNVCialE+1UK1BdOE+goh2tjExXj3PfkNuVLXyI1w3pdwXwhnW8nN3KuHB2BVs/fx4G/Q5NYoi70vRgTDxGEBVKQcvCmFoQikG3MxsZtHCJOG23WYfa0gVYPnUanjt5FnK5LExOTUKukIM48+MEuMa/xfNWxddvQqEbXFgtQcAp+mgj8xf2wNy2MzWw0fKQBDbcraYzTnFox6zTNNRBrS25hami4MKJ5+AP//yzcNvuWbjl5v0wu32WCm702ROA+jduadIwdcwi6dPH0G5nOFVDDUyNJ1HGp1QZmOnWlpbIyB1vANi9ht1uWMAj/ryD59VgsDbpBtzN9T934xvf8z2XecnYh4+IgAXey1wWX/vI2x9MpJwPox5XaR8Vt4ucJ4IuCefRjFrMx8XUPOA8xtkSZ1hqOwgkg0LQxWxEga6p8/XH/fjFOMODYVTnlmn5GJ4KLNpd8S/QygLc8qubQLfdpswTi1jZqcmhGXCqWcLPcHUmaxZ/WLWhdboEaHxBk4dBm3S22AK9fOYsFJdXyUBmbm5WKRE4O9Nga8aV6BveTfAwUNkBqKGdkumL2TnTDZRl8/8kizV/xom/qBeCS0QyWPOn3JunqRIy7VWYHPLwJckbZrxshFNeWoITR4/Bjp3bITs1QRyszlilA063CBumSbTL4fcnp2Lw4irG6ljIKYvRPgJwr9GAeqkEqVyGgBfVC5ltO+nGJf7GZJ4uKh1jYobX815y85veZ5sqLhM3wg+3wHsZATzykfsP9uOJJxPJZKCghqCLWzUnlVaWf2TNGGPNJYKTtAQbHVra4Ftxge16FSrnz0I0GlE0BXO6NFHW5Eo5091QQnYpLwPZ2sv22igsiTkOFljKxWUCxGQqCQ6OG4/7U47Drb2a9qBROoYrGt9sRPYkhiyA2W2rCbjtXTlzGk4/dwZa3T7s2rkNMtksZdWxhLLNFDWHZLpaGYJbb+6S842BQo5sYuhjKDlUtIPAq5eA39usQMech2e4k+mHqUcxwHJmq43TufDGShd1k2ZDGi6w9dpYMFyHZ48cgwM37Vetw7x+fPkYK2HMNaQ/Y2OKBxPzeqAnt6mLvaY5ABOBvVWrkY4XXwqLbk4mD25hkm4U5OPQbikHsz5lutx6jF4V/f904xvf9/OXcdnYh9qM98rXwNGHX++0sjt/N+G6P40aTDFOkYzXz3aVXldzcpqbE26XK+gyYgZlRr0urJ88TheCuvCwM8kvCElThdbtaumVye0qrlcrBwhcNnDmEl5Xd4kpFQMCAxrX1JcXqfEhlcuxDtdwTmOuVGWwIdNxLRET/a6iH0jny7PPOrUyVBYXYPHUKZKBdQYAe/fuouyWQBZbcFE2h+22cgMyC5MCQJJVa12u3z4baHE2UwtGTJ5eJrCpFoUGVtIB+ICqAdj34w2AsoxRF4cykRSa32vfXgVgkoWi9SN6Vpw9fhr23nQAUvm8KshSl6P4Kgd9mukzFlon/PnSG5E3bFAcCJzkD8zOZ502FRVb1RrVESi7jUQhMztHCYNyR0OuF+fT8bQPX152MjJoHz74M4+cvfKryT7TZrybXAOPf/At3+Uk3f+ZSCYnRERPFxHrdVW2q7qOsKiBGaJU+tXcLUNiJTtTLnogvYBbeswsSTokXLAeSGm00g7pXw01Q2C6hHC9sqVmzlcyXmxm0CY0qn21VlyG2moR8lMTSgKn6RGjmYHBWmXcpgaZvydgVhy2clJTF30XXbnOnIRvPnkUGs0WdXJNTk6QdApjRppn8TYQblPGFpFrWQxAKxPEJjKsTx7xYY7KVI1MVgzEZVutDM5D2atw8Nr+UbJh31BcKQh8TlR02PQztIc0fqcAsEvTIpqVKixeWIKDt98Kbg4bJbgwprldvBn5XLpP57CMkPnzgJGQkcKTVwXTDtqgHVuFcdIFFjFrNercw5tBamobjSpCrhdNgjDrVcCrzp/asAder9/vv+7Wn33/f9/kpWMfZjPeK1sDf/L618duePnO/+ak3B9CLa3aMkqleABOJkWSHPFjiMbYdYz5R58H5R59zrXwNVBWVD57ii6uBIrk2ZvVz3iD7bRBLayv1x1liBNukFCP8V+PMuLBgDqsqsuLpFbIz0wb8jAxsRnRXRco7imKgW4wrJeVWWJIKdSLi3D+6adhtbgG6WwWpqYKFCvJbAlwObuV2XN+UdIAfaFcZNCmdDgYxUnJXEVloOgC+bxkvpnvNCaaVgFDMiKnMeq9YEOM6gXXLeGKNkFA4gxZlC18M0XKKIaAyTFWjRcR2gnRiHXqDOtDs9Ekv4idBw9QfUBnu9wwo9rK1V/JdtXUDfOGaxoKhTTE2sDImO9G2a/yP8asG3l25IHj6SwkC5N0npjtIhVC44LoBupnvp7nfeHmn/3VV1/Z1WSfZe5LbDQuEoG//9Avvy7mJP5vJ5VUEyVUKyVdOMjHOum04mVJwqO2y6oCbTZMqIzQ/IOLe/30CVrcSFXQRRewRvQvMN0EMDLjFf9doy3YKJqpHagU5/xROPgesDNu9expyOazypQ7HqfsPOAjEW71NRshNDCo96bGzGBRpwOt9RVY+OYxOHf6HEzk8ySPcl0sQLr8fpXkTtqg6Su+Hn0VvpizarOld9RnZW7xeWyQmuaA9octaljAWWjtRgO6rQ502miSgyDbA/RewIwfv6c2WQDo9bBpgGe9kUcDezXg504gq7Yt+G98HHrg0vfoPNb3oIfF0kEEOok0dGIOxDoN2JmOwfbpPLUMq8d6NCoedzrTO7aRQxntnLDphukGFYuQp0dg12FSD+G2cJ928Kkx9mHo9cjjF20wUU2C8UGj9cz2ncpDgqwjOwS+dIPh3Z0y2/E6sUHsVQff9J6/t8BxZRGwVMMl4valh9885aQzjzqp5IvI3JyGA/oGOAi6qNuVYogY4GhPBl3VF9BVIcfFjFwqyqdI90sFLEOvy1yedqEaMpLxJ0n4s9T4GIZ2NgC6os0l/9YeNNZWYfX8GZjZuYMLgnKjkAxXXNMwuzLafkUuRooGxeNSVsSifORxV8+cgvPPHodWuwfbt8+SXSLx4NLNx25txIWTB0HQIlI3iJjpAWGclLa4VUE4026bvGjb1SqNvEHNcYfMahBsm9BudwhMaecdUTaOffRaGETAi0ShF0UDGpcyd8CsdBCBQTSuRGExoY4S9Dw8BSpKoSoDO/jabfA6TbKM9CBKx4glFWdNuxr0seh0oDh/GrLtCuydTsNUXnlHrJdr5I42lUcfjhi4pMN1wE0lIZ3LQmpiAtws3hQz5Mer1ojRfm24uZkcv9Zr60qi4qjFG1o+Kxr/jh7EzRp0qlWaUIw+DsiD0wh7tI7sdYl+8YtsNCDz92863f/5yCOP8MiOKwOgrfosC7yX+OT/4YNv+Zmo6/4nJ+nGZXsp3C4CiZ/tcncZFdP8kepibi5FJgEpnCS7fuqEUkMg6CKnx1me2WDhm7oYXWth5YL2qjU0vEaWK22lZOqCN41uG5ZPnoR4FCAzUeAR8CpL15lm2KZSRuxo4xtl2q12AJjhor9rE8rzZ+H00aeh2WwRh5ulAY9JdXOiXYHic32nLd9IR9Mg+jMx9AO6D0ENwcRtcqdRo1HojXIZKmvr0EYv3TZ66fYJZDuDCPSiDkAqDxE3AxEHHcnkc0IpGvPxepKz8jXWHD6Xqsz5dTE280EAJkMcLZDgIqIxAFOyWqUqU/RGG7f3rTp01xaJ/05kcnBwu0tZcKfbo8wSnc2atRq1RCfR3c1NQH5iAjJTk5CamCSrR5xagc05gQJneOCn7LBMfbIUAylzxUaOLllDIuWAux+8IeOQTHzPMvW4jwY6SNeQaxlzvV7/tBfxDt/2pkdOb1XwfD7v2wLvRaKH2W4ilXrcTadv1H4MKIDv9ymb0dkuTQtWwyYl0/WNYpjnk+Nwtrx+5jno1mtkkII0hQCs/mrMWlM/4y2lYV0oet6NxuAoXhBHfPtZIlbRV0+fgtxEjjIp1YCA9AKCjlg2hrW5BjfMMi66gciWvt2E+toKXHjmGVg8fwGyhQLMzE6Dm1JZbsxFnwllZ0nTGgLaW/ZUEL7WiJOiLtQFjzxku1aFZrkEjVIJmtUqeeu2mi3o9QcQiTvQgyi0YinoO1kANwNuJgcueuHijoIzRZKlsb4Z4yqgiiBqAqyygFQGOPQ4Bi/qluObD70Oa7HxXNUEEPVHmcIbPgr8PW3b+fhIVbWrJUjXTkMmj169ah3QfLUuDr7ELL4F9VIFKutraiZdLAbpQh4KMzOQ3bZdZae49oT/Fqe7Ib9ew39D25YixaKaOfo0kr5GM9pQVoZrUtlGMtfLg0eZaiC6wfN6/+K2Nz/yN88HgLbqcy3wbvDJY0Ft34tmPp5IJ+/H/vhwtosZnGS7atSL4nb9bNfX7gYuxAGQmTn6D+BrEK/KTQjkpCVKBu1Axhe3If1SFzv+PMjtil2jUlGwuoBlYnjBLJ09A9CoQW5aXVgBfwWz1VeM2c1GCBHxG0bvyONie/Pys8fg5Defo04z9JRFgxdyZSOVAndfmTclY2JGIPxSCMIfkq1ig9QetdVVWFtchlpFaU/xxtfzouClC+C5eYBkBgaxBFECmNEm0KAI/zpowYg+yMidq+IfASyCEgOwgKDaZTD4+sZiGjw1MKM3glad+OY6eHOTLjLtZxxaW1IXkLVERkOtFrTOHYVCok03wriLGmZlqiQ3NwI/tL6s18m3t1GukOogW8hCYcccZGfnIIG2j4ZfhrbalMYZvglo/wjKzLnIhyoHbBdGeqZWQW6FbCRVUVLd9EjhILsb7o7zBoOP3vrmhx/cquD5fN63Bd4Novd3D//vh1Ip52+dVHKHme3ixYJbZcl2VRaXUFkHm8WoC1xpX/V2nEEFCz0rJ44BblnxNaQjCwFXgFdAQKkhjOJJQEkgOl3fi0FJvKS7SW2ZCcO6XShdOAdeq0nbVZWZ+9VyoUO0RMy0bpTXpGkZPNKIt/rIUZ/6+pNQLtdg955dkMoqwPUpBWOYp0iixLOWEzBpl5YJu8gpNkvrUC0Wobq2DuX1Mo3iidCuwoWuW4BIfhac/JRqIzYaSkjVzMCIv0PgJfA3fB1MgBWgxRhpTlk8eOmH/lB1nR2bN0TD8Y04bslwEYT5+drDQbJ3AS1qHe5R80KjtAaNI5+FXCELqVweHIxjUskTxcNZew/jaJ868tZ1QLOierkM+ckCTOzcBenpbRCnNcXG82brtmi/JSPHrwy+SBNhoQ0dyrqNKnRQYpbJqenGKC0js3TVUCEZL3sOf+3Wn3/k5c8HgLbqcy3wbvDJf/nX//Un3XTylxOOE1EjXri4MBgQPaCzXTYmD2S7xvBKJWhXc7tQjrR2+iTxkljB1mbhcjGbX/VIIH9SQzDTDWe7qjhldo6RCqjXg5UTz4LjxMDNq5FB4huBIO1n2Vw8462qkixx1x1ftKoFzR9P1gAAIABJREFUtUvFmNWTx+HssycgX8hDtjChJidIhivKDvEf5veiu6r8DTmdHxrv1NfXoLxchKXFZWpVjmAHVX8AXnoSovlZSGQnyU8gkUxRNotSNMlgA6YxkQjd1GgWmkjWmGaQLFd78+oskHgCTSfQ6ZkAjN/ijUp+blAIvteF4dog2S/79WqJG/KjMjaIeHHllYBZ7/w/fgGixecgg368mQwk8zlqqEAqAbW1eNOhKcScgaKZDdICCL7V9XWI9LqQn56E/I6dkJ7ZRsU9GS2l1oRpCKQsLcW5TIFol1QMyNN36hXod7pqZhupdzDjblE7sdQ3iP7p9zv9SGXHHT/38bWtCqBX+r4t8I6I3GMP/cJet5A4g+AoNAFKyLDYIPIxB2dgOdIsIRSD4UIm2alsW70BNNZWCHiT2Yzyr+Utq19UM7WaLP9ig5wh317Th4EAWwGq+O9Kn35p/jxE+m1IFiYCvga+NjQE7KKIkIyYCzRU0e52oFUpwcLTT8HShSXYsWcXZFD0bxTNghy34ZegAqmKe5jpYcvw+hpNjFhfLsLqaonwKYGAkcxAJDsD7uxu0jYjyBLYcvaKoEpdbpLtiu8E37iECqCMWKYAC68rYGt8Pr5yZMTlEJ5CYRbTzLUzwlRHtxzLFN/QrDbcPZE3b7sNpdUV+Nrn/hoSzXWYm0jB9ESWVA1ptL/EG1sOu9rU3DW6obLJDik4alVolMqwML8AhVwKZnbvgsKe/TTSPaCCkBsGvyetdcbPFhUpTDmgnhuz3ng6Q7sFdZ6o9W0HZGVI+cBg8AO3/cK/+cyVAtBWfZ4F3hGf/Bcf/oUPJDPJh6nAwMUwXHyYNmA2QvIvkUOZto9at8vZp4AuNik0m1A8jhRDhLg87c+rW4OlRdgfT2Nu/RX3a3ZqGb62onslsT4qf5SWdun4s+DEAdKTSC9IU0eQYjBnvWm/WuoSU8bl1MPFNoYofTtz5CnwIhHYtmPOjwNmlDqT9k3HxftBTdb1qHsNJyGUlpZhYX6RmgcIhAcRiOWmIbltLzjZCRpJgwMiBWCJKkDjIM5y6Xt8z9oMnikBKZzxDQ0zX8pyzbbiUNaqs1j++dByMOkGswAoYC9PYOAN+DjIeHhRNbD2WysDWI4mXWzFhQX46pe/BMXlRchEe/Ad+yZhaioP6UIBMtPT1NxA04bJjjRKWmnMfEmR0KhDo1yCcnENuSWY3rUDJvbdQIUy4n5Nvl7eh3zlIqlkvai66FTK6kaYztBnh4U+pIFUQVWpG3BatNf3PnT7L/7b925VAL3S922BNxS5f/jAL6Q7scijqXT6HrzYNc1A7mMuAS+ZURPnqDSowu0qTlbNFVNbVeZEPQ9K586QbjaVyxJoE6eoJ+0qsFJm3aOBd+jCoQwuqgFPbY+j3GHUg9Vz5wA6DchOT/ugy4DqqxdUAc43JI+QhlVV5/Hc0VegS0WXtTOn4NQzxyA7MQnbd81BHPWmelqy6cHL5C1RM+qCbVXKUFouwtpSEVaWV6Hd6UISL2g3SzRCem4vpDNZnjUWUzSB4UpGAMzgGzCUR/gRHlxA2MiCh8zixRjIzGI3AlxeF7pgZgDsRhfNpUDXNxZX4IUZI2WT3S7NQcMW4vlTp+DoU0/Bmfl5qNdrcM+eHNy2awYmZychNzMLyclpxb+iOx5y7khXkESN5XWVCsW506yTPnvqwA2QnJhm6ZnRem6+b+0W16NdDTadoEFSq1yG5MSkum+isRFqertMN/C5DzzvsaNT3zx8771/ih0n9s8mI2CBNxSoL7z/5293kolHnXRqlnbH0rEzGNCIbuJ2jW4r2lpzsUr5CZgDK5W2E7fUyIlitV+rGESWFOpU07pdozvJdyKTziQBatUdJ5V5KVCde/ppcGMAhW1ocM2j5M2x6poLNluBEfixKKO0vtTyy6qF+aNHYXl5FfYc2EfbXwJcgyZR48p5KQ086KHVI+pQV1ZgcX4BisV1unC7PQ8ShW2Q2bEf3PwkJHHgouuqIhjzwWrQoz+tQ//bVBMYMjAqkAn/aoKuQT8ojOHzMwpiAR7XyGYVK+//GQLfDS6usJuZv5X3x0LJSHjyPRDgZa4XwReLZedOnoTjx4/DhWIRStUKFByAH3rRHrLKzE7PQGpqBhJZ9HVI0s1XKQ+En61Bs1wmJUitVIap7TMwfcONkJrepsFXT7LWLde+nwPeaKljDXcn6ytUrE2k04a6oe1redX5Hxt4ncN3vOWji5vEHPsww8rIBoMj8Nj7f+6nk5nkHyC3SBlfX22pEBwQeMUIR9qDzanBksHqYGJ3U7sNS888RVNjMVvWGduojHdUcS1AMRhzyni7TZ1j2GVEhbQOZbrdahkm57brjJT435jodLn9NKwTZimSVK6xyIIeC2ePPgXVZgduuu1mv71XhPqSNXEnHArwq1gkK66Sr+56pQbRRBIS6RzECrOQ33kAUtmcknqh3CyG1o8Jld2iOgS/1zcxln8xyGo9baDJhCkGAdyNaITQ1tosiI2UfoU1xSYIG/+W5gnfTVL9K8DtGjRDIOOVRgQusvVQMoZZb6sFpZUVOH/6NJw9fx4WikVYq1QgAX34wTt3wU37dkB+dhZSk9PkrUCNFNhpx6PakTvv0LRnBb5YrNyxazvMHrwJUug+Fmi6MPx85WYrXG+7Be3qOu1WkvkJuq2iugHXM41/1zeNfjHi9Q7f/ssffsqCyOYjYDPeUKwee/jn/r9MLvfdaHKC2Qn23uNCS2bSBJxal8oNEyrbVV1n4UwCL7T1s0gxFCFFGYrSk/rZot+Db2a6wdFAJrfrT+KV8fAD3cjgweLJExBpN6GwbUZRIXocuOJ16XVHGZcz6FI2hlKxTotsKp898jRtV2e2zWpApEYOHlVE3CQWdioVWF9egWJxjcaZd3oeRHLTCmjzk5DCNlRspGDLR+RqySCHbx6S1Zp0Asm3jI4yKYBpqZ1p/G4CrkEn6ExXst8woG70c4NWGHkpmT698gBRMCjk9QFYCmu8c5KaQZjnJa0ug2+zXofihQuwMD8P5xcWoLi2BuvVKnG3//S2HfCyW/dCdmoG3MIE6XdpwgS1Mg+0vwJOMkGv38rqKly4sAQ33LAXZm65FZKTs9rMSDd/SGFQ5GKU9eLI9zo011ZofeP0aJS/UZENjXOo2Ix0Sa8/8Lx/dudbfsM2Umwed7XU8zKe8sJ96Gfe9cYDuXz6JOpRfZG7cpVC4CT3KARcanvlvnlpmhAHKbra1bWH2QJmu2lsm0VJUKjYIwbega415npHTnNg4b8WypO8SIngK0tLlKFipksOZ0KBGCY2o6ZFKE6XuWwE3VYdVk+egDPHjsOOA/vImJxM0PXATNXD36pWibddXSxCcXUdWj2ASCoPicltMLn7ILmQ4S5B1Aj4VQOtqBKEt5WsVugLE3BNna4p/xoBvBsBbYAqMCmFEBBvmlIwwDZwNWwAvuLZbH4NUA4IaKxwQPBFlUNlfR1WFhZgYWEBFpeXobi+DuV6HVrtJnz3TdvhlXfeALmZGWohTmTzpAbBFmIxt8FCZrtShmapBNXVNaiWSrDj4H6YufEWcHIT/uRl3r0o2zW2tmRpGQ6/xAYZ6mbLZn11A/K8QpXgufe673/RWz/6b1+4yHD135nNeI2Yfv59P/PryUz2Vx3XYfcx5b6P22KUgIlXqoAv6SRFqxoGXm8AS998BvqtBhmKK+ctP9tVgvzgGPQhjwapREuHWqAzSbWnIgiij25zDcfzTPGATZa3DY1bN0fH+H7BOtNtNWDlxDfh5LETsOfgfkhnMkxRKPtILK7gRVgqrsDyQhFq9QbUWj2IzeyGws79kClMUWaLHLhobZFGIBmYWSDjWEg3mc5sRZUgUi9DW6u1ugK+RoGMAnGxgln4sfyZjyqcbfoSC3j68rPMTJczX7qBC6jJmCjfVDzI8zLXi5QDmvuUV1ehuLgIS8vLsFQswmq5DGXU7jbqcNu2NLzuNS+ByW0zkJ6eJTBFuRneIJVvBjZaYAtwFVrlEhXcup027L75Rpg8cDNJxVTx0Xerk3H1ynsDi2xt6DfrUC8ua59okrF1MOPlwiC5nPW/cOdbP2xtIje9eHy7+st4ygvzof/z/p/MZwvuo5lC7qV4QZpqBlQiiAMZZbqoZsCqPsnHDEMcNqHBBY0etwtHvw4I4thwgdkmZnwyZdjsFjMzXjPT9YtqiiIgn1/uRlL2sH3KqtdOPQeTO+d4agFKraT4ZQyj1GoL9rdl9QJSKdivj8WUlePfhPlTp2Hngf1k36imUnh0AeK0AsrCllagUm1Asx+BQW4GZg7eTg0UOrtlGoF4W74pEX8rAyqZQhDO1u/O4waGEWArPglDBbIQoJq/12wBg3Jg1YalYKMes5llHgbfsOm6ZMDs+xDIfKVoK1wvZY6qoYKyXuxoQwqnWISVYpHAd3l1FVZKJSjValCuVuAHb98Fr33FXZBBtcPUNDjpHA3IVF4PqtsM/Z7JSGh9HZbmF8B1E7Dn0G2Q23OAvSG4cUYXR9m7mMzasVW4QXRDr9kCJ5Nh4xxsMUYLTaXM6Pf6xRe/9cPbNhMy+xgVAZvx8kp49L1vvMNxU4+mspkZ5beLLZ1ohhNTs7B0k4CSUelONe29y25VVHGJQGN1BVaeO040Aw2uDIwiVx1mgcYJLSNjDlW0pzgXV4xluJtMaBCsZM8/8zRMzmDnmNpqIi1Ambh0zzGnS91LzEPj79SECNT7ohypAUvHnoH502dh1/694CZdigo1OZTLsL6yBuurJShX61AfxCG3+2bITM1CZmKSABqVCZq3ZcCVQhlms0IxmJpaAtMQjWB2lJkZrm5wMDPVMD+7EYUQ6kCTFu5RALBpqiHM8ZoeE6PA1wBe4XhVRxh526qbG5mTK/BF4EUAbjebUFlbg7ViEZYFfJnvRdqh36zAQz/2apjbvYvA181PQAztI7npAaVhVGzDrLdagfraOqwsLkFhsgA7Dx2C9Pbd7Irnt7Zr03g8Ny0tK0FjZQXcfE5pelFB0ekYwNvtv/itH41bUN18BCzwcqw+9+BP/1J2Mvdp5aGqNKh4YeCobZGQKUtDNu42xm6Lu5d5H1t45mnoN2rkJKUr9SaHSTSAMY6cDFpkRLqY5bCZCxrAyLaQzbZJwXDmDET7HchMT/G4IWPyhYxSHzLRVlmwAl2l0V0+fgzOnzwDuw7sA9d16H3jFrWyskpTI0rlKpR6MUhu3w/bDtwMKTT3QbCVYhnLwQINDxfJcHUGKzeDsFcC0wmBTDfsoTCqmSH0M724N1ApBNQNm79mFBdqPn6DzDdAMbC6IQC8DLq01hB4KXv0s170+cWsFykHzHoXl5ZgaWUFVksl4nsrzQbcOe3CT/3gK6Ewuw1S06jxzSt/B/yMqVCK/gtoflOl3RF+posLS7DnwF7YefudkJycUVpwTTnwZA06JyyyqSkV1cV5atfGmxOOp1fqBrlZ9KHbjE68/Fc+XL6cMG7lx1rgFeB9788+lS/kD8n2muZMRbCoxsYvyFMy8BKQGo0T4gZGL4V+4N0OnPrq45CdyJM1omqw8LWpooAQdcOGVANzyLrJgRUMeJGiNrhWXIQ8NkjQVGNTTxyn+WRRnn2mGiSE00Xdp1IvIL2wdOxpWF1egW07ttN5YidUDU1q1kpQq9VhrVyH/uRumNx3M6SxiMN8LdotkhSMaQThcKldN9zsIFpb46tojwPmNOG2XjOrHfVvkyK4SGZ7UYC9iHRMA8MoFYMpG5MHhr0ZTG7XAF5duDWBV7wbhHLAzLfdhlazSV4MmPUuIfAWi1RoQ7qhgllvpwn/6jW3w+2HboT09Ax1t5HKAQusEFEGNwi+9Sq0qygzKykFyuoa3PKiQ7DtlkPgZAs8E1DBgZ44QcCqRgQ1iot0c8DGGZRX0kw2pBukMNht3f7Sd33q6a0Mppfz3i3wAsDfvP3eV6by+S+ksxl22VcZL4IK+jXoIYwhNQNxvEw1CHODmeT6+fMkI8vPTKlmCxN4hXKQjJdUDEbnl1AMKP8Slyn2ecUsSywCi6dPQX4iD4kUTq5QNoL+nDIp2rEaATNraY7Ai73XpSxo6ZtPw9L5C7Bjz24y8MEsF71f67U6GZlXOgDR7QdhYidmwgpoAyoFoRWEy5VWXlFviArDAFzTF0FLwxhAAwU0yYLN38m/TcA1fxb6+YbUwcUyYL56Ahlt+IoyM1wTlEPFNZ3xGpIyATZtESngK51sIxQOdc56l5eXKetF4F0rlwl8q40G3JyLwk//wHfC1M6dkJ6aAQeVKI7yAqEhlR00uWlAp45ZbwXq6+tQXFiGvufBrS9/CUwcuAlilM3K+CZuqCDgVdIy7GSrFZcgmc1RZt4j/rejMnT623n5y971ya9dDvhs5cda4AWAz7zzvk9PTE/9Ejp1ySBLBN5kOk1twsp1SzJemVogGaby3aULipoYunDu61+HWMSDNLuBSdOEmh7Mo9JlOKT2pjVahrlop4A0qiZ/0bXg0QysxRMnIJtxiXtWE42N7jQZf66pBgFdpfOkOVuY6T7zFKyvrsHE1CQMOm2olytQr9bUSKBGCxrJGcjsuRlSWUWVUHeZFM6k6UEAV2gFyeoNv91A44PprSD/3gh0mW5Qvw5PSPbtGinwZrFsMxnsqOLaJlAg3CjhJ7r8m0sArz/3zJ/ZZ3K9kj2aXC8pHOp1KK+twQoW2FBaZhTZKo0GNBs1+LFDO+DVr3w55LdtozZfMtRhyoEoATTjQaPzCk7sUBKzEyfPw00374f9L30ppGZ3KEN8yeRlMjFRH2o80PqZU+SYRvUPmsemsl5qfe72vu+l7/7E324ijPYhtrgG8JfvvG8m6ziP5iYKd0h7MIIugik2TdDW2gBeBDlNNUhhjfgx1WaKusn5o0cgW8iRmsH0FtA6Xh73riv75gRZBC1SJbBagpUSdG7dDpQWFwFnmhVmlAeDmnwhKgZjZhoV61hFgZ1NeEHhRdRqwPKzz8DimXMwPTtNQw5r5TJ02lgs8aDWBejPHIT0zJxSKiDoSvGMO8y0YiHkoRBoIza8EwIuYmw2bk7NoCxYANRo6R0yFt9sQS2cEYcu9UC2Ic0DowB7BMUwits1O9UIuPgubGa8GnTZoSxgrK9NZ3yJlgm+WGSrlUqwvoJNKkUoMs+L8jKkG6rNJuS8Frzp8F1w46GbIT05RW5mKH/EtYGxJs+NJhfaKmVorJegvLoGxfUy3HnPS2DbLbdDPJ3TLeMAaiy9nlDRaZO6Ac2e8AZMLeCtFknL8GYNfe9nX/Kuj/+BRdXNRWDLZ7x/9c4fv7tQKDyacNyMGuaHU2L74OrBjMxlGm5kJI0ywFGlCeo2tn7uHKydOQ352Wl200IKgF2yhHLQvgmG54K08CJXiwU8fozM68ILp10uw/lnn4Ud+3bRJFoB3eCMN59moOwaLzyakKsKLZX5s3DiH78OExM5aCOlUG9QJowjxlf6aUjvuhHcdFZ7KBD4Gjpc9d59qZjcWMJTGYS7Hfpq6nCNfwd0uAKCI4B2FF87SkZG2DvqGthMRnyxa2dEk4TOEk3A1ZmjoeM1KIfwRBPdySZUgyEvw4aKRrUKlVIJVpeXYQUz3rU10vWWsJGlXod6vQqv2J6Bf/5P7obZfXsgmS+Ag05mPGkE1Qg9LJShjSTKy0olqJfKsLy8ArmJPNz08pdBdtd+NWVa2eL4Y+jJLrJFvC5qxvHGS3PtUK6mud7+O1724G99fHOwYx+15YH3b955368VpiYfkekKJO9Bs/NUUmV6IiMj8OGuNV1cU7IsqXJjlnL6iSfAiUeGaAZdXEPu1lAzBLrWGCiF26XXZnUFZqZnnzoKs3MzpKekzJvcwZQ7GkRVB1pANkbVaqVgQJ4OmyyOP/64Gr+ORRfMVCACLS8CZWcasnOo31XSMBmZI8Uzs4gmErFAES0gj1PUiwZdlo6ZagahEGgBIidsUgYbAG8YYDdqgNhwUT9f0GW8CGe4Q8B7qYxXsl6juGa2EGt1g5jnYJGt0QDkeksIuJj5osxsfR1W0Y2sUoFqswGZTg1e97Kb4WXfgdreGXCzOZKX4brFP3jzxknM2FiBs+ua5QpU18uwuLwCh+66A3bceRc4+UmmbpRREo5gUnaRyOm2iScmU3SmGzqNBisxeh96+UOftPaQm7ynbHng/exDbzyTm8jv1RIyzyPdKU5UIKcsGR/DW3o96od5TTOvwsLF8ce/ArM759SQx1EVfj1yx7R/5CxVwBR1tgwSlI12O7B+/hwVxIhi4Em9OOBRCnfKi8EAXi7MqYJch4xzTnz1cSgXV0gOFI/GyBt4tZ8Eb2IXpNEtjH2GaWwOuoZhZsvm49oL1+BztZ+CdlpTTRDS+KG1uqZczADZoWLaCOWCALRCcrVcNw24VwloA9fSKM3uCGMcoRbCX6WTTQxztPsdN1SIrEzAl/wbWN3QwK41zHKR7+WsF0GXOtrquHupwivnMvDaV78Udh68geam4V8y0kG6AQt42NFGTRU4OLRMcjWUDLY9D17y6lfAxAFlhqSQmmeykcZYzV1D0Mbn4/sirXGjIXTDJ+5+6FMPbBJ3tvzDtjTw/re3/NhrZrbNfD6eQO2uGu/T73vUbYZFNT2wEYHOyHhV84TiVQUQkA+bP3YMGivLMLF9Vtscyky1cMY7NNU3huNqHJotJiN+ZFoDGp6cPHIE9tywlygGv2WZuV1jfpoe14MNFBE1+gdlYwtPH4FTTz0DvW4PMikX+oMIrAwy4Gw7QK3BMqOMWn5lbA5TCpLtEq0g7b6GLSRl3AZ3Gzay2bAZYlTn2UVageVq3dB7wQDna3ZljwDeDe0gtf+B+CAo2sGkGUx1g2rdNnx6yZSmQ11syKc2kFKoVKCC4IvZrvwtl2G1WoVqow5zkTb8sxcfhLvuuQsyU1NkopPgpgo6FgI5GacrB7NmpQrVcgXW1sqwc/9uOPCyuyGJFpI0nZqBl4pzCnhR992uVSAijnSNBqDeuN/r/ek9v/If7r1mcX+BvfCWBt7PvOsNfzAxOfHTcjFImzB2bmHGGnd5WKKALo/6GZaRKe3us19+HNJpFzJ59mYw9ay6w80fox5om0WHM5KeqWIIJRyUobTh5JFvwGQhC5mJgmrgCBXU9FRhMcRhQTx1RrWbsHb6BDz52FcgEQFwEnHoegCr7nbITO9QXDZmt2zVqD0WQhpdE3AJgKX5wZz6YOhwiWYQGiGkShiZ6Y5QJoxsAQ7REIS1PiJvfHnKuBsZSsl0gJlJi6vYJa/xkF73SqgGopDEu4GLa5pu4E42kWphAQuBF7PLer1OWW8ZW4dLJaIcsI14vVYjB7NopwHfvbsA3/nSQ+TLkMhkwcmgM54/KZsAtNlQWS/KyxDMS1WoNVvw4u+6G6ZvPqR8HzCyaDeJut1um9YSTTsu43QK1fSB5u1oZdnvdT97z698+nsvGTv7ALXktmoc/uTNr53asWvPowkn8SLdgtvv09ZdgZETyHgRFIXjVQMjZZyKkjNUV1fg7De+AdPbplWLsOEtqygHVWSjTFdPnvDlZWqihZHtYvdctwO11RUonj0Nc3t2QwyBX9s94uuJNM0Y58MATxd1pw3VpQtw9LEv0mjwRCwGDS8K5dQcFGZ3EI9LI9B5FLtjyMWoIcIAX2n31aBrOIhpEBbgFb9e00HMNLExwFNAOEAhXAyETcphM4DLj5eFPkqVEKYuzMnAI6+PjSwgGcwlA76YqkHbQxp8r7QQhw3SkW5AcEPwRcvIWrUKNfRxQO8M5Hox48W/lQo0W014UT4K33XrPrjtrkOQmZ6hIhsOzFSm6TxVpNUkyqBZKlPhrlmrw+paGfJTE3DoVa+EzNxupetl4FWNFE2SlWFxTrwauq0mtBpN3El9MX66e/jlv/M73a2KKZfzvrcs8P7lL75+1/TOqUej0ehNul8ex/swEIl+12+e4FHlRquwjPbBgBdPPgelhQWYmJ1WEjJjdI1uoDDVDJKd4mMpg1WtyGiSQzcCFKk3G3Dh+LOQz2fJhF0P1zTNeahYh9yuUjCQxSPpdbvQLq3B8a98GVYuLBKfu96LQ3diL2QKkwS2CLz0lQtqku1qc3LmeLUOWTd/sM+EMf3BLKSZEzPCrmImwG5WLjaK091UlmuAbmCiBF8h8rMhUN6gU01fWBtlvBfR8YblZJsCXh4LJDwvbukp661WoY4ucdhIUSpRkW2FgRe53mloweGDc3DH7TfC9gP7KePFKRIkLUM+uq/04F0alFmjrBfVLahQWFwtw13f8TLYfseLiRumBgxxK2u3SI6Iz8MiHYI43gxatTr6S3yl2W0ePvzIf25dDgBt1cduXeB96xtump7JPRqJRHaZ+l0CIqQazMIaNU+EPBqwF54zHFyYz37lq5BJO6T91ZIrzAq1baQ/UUHpXbmFGL/SKCFHjfHhlk2UfpUXF6lbaGbXDp7xpsx5xI9XmeHwjDdUNSRYOoYj05s1OPPEP8Cxrz8FaceBSiwL3uQeSKbSpFpIMuDi+yQFg5Hd6mm+RjtwuJAmnG7A2MbIdPF9mFyvbOlFvTAy0w1lpyOLaSHPhoteuOE24ktc5Rs1SASedjE52WUAr+Z5QxkvFVN5wkPYrQyBETNfzHoReFFeto4SM+R60cwIs+BqFdqtBrxmLgMvvXU/7LvlBshMTUMilWY3MjUQFakxLJR1mg1oVaoEnmgbuVquweTUBNz8ilfSuCDSp+P5oFsZ8bwN4nnRj5kaejodaFaryEM/2e61EXhLWxVML+d9b1ng/au33fei/GTu0Wg0MqUMcVhGlnRJ0SCFNZKTETAqgxxVJEMZmRpmSXKsShme/uKXYMeeHVoFENa6+r4MPuDSOB6mGCgbQTDnAgteFOefeQZmdswS36w71Pj49HpGUQ2LcpjtKpkP6nXPwROf+zz0Ol1qfLNxAAAgAElEQVSop7ZBLz0JqbQqoqHJDbVDG/yuBl6zK83sSAtluwF9rjlm3eR5pftsFM1ggqzJAZtUQliVEO4420i1cJU708xMl26M8oNw6/DVBl7OeLVVJGa8yPU2m4AKhyqCLWe8BLooLatWCXwPpAC+77Y9cMNN+2Bq1y7medXNnVS6CJooLSP3sho0qzXKeLvdHhTXSvCSV34nTN54qxonb4x/R6oBb+rID1PhFoG3UsXnHmm0Woe/90P/5+rlANBWfezWBd533fdduWz20Wgk6qoRP33a4ieTSTW2XDheBl5lBYmaWZVxsvCUgPLc08egsboMk7PTenYYevYqv14BWvZkoMKUGMlwswS3dtLUWJ5EUF5aBK+p3M0UOJvTjFWmKxQDnVNCSYCQe+vWK3D8y1+E0yfOQSU1C7HcDOlziVpwHAJcAV5Tr6vVC0yT0HsOtQFT5iu6XAFcGTY5yuTGBMGwXtcA2VGDJy9bvWAA8ZUs7EtmvKaigXc76sulW4Y37FwzM17Dt0F73WJLLltFykw2BN8mAi/qetGpDEGXM15sqFipVCDWa8H3H5iGF92yH+b274XUxITykEbtN64zzKypaIdcb4OaaTCbxvV86vwSHDy4F/bf813gZLFFmGesoW8DFebqpAPGtYY3BWw377Ra3/S6rcOv+eAfLmxVML2c930l6/NyXv+6fezn3vPG73bdJFINERpD3lfTqUcDL2a9OLpGeSKo2WqEGnTHP/LYF2B2Mk+ZstAMwvEGXcl85y40Nkf5mKIZmCLgtl4cVrjw7LMwtX3ayHZ903WfYuCiGgJkNM6jWVqwdvI4PPbo41BzZ8gmEEFX/hKHjX8x20UlA+uUTaohzE9rL2FRMiC3y+CLF/HIOWghJYPCWF5umzEwN7PZUGZ7KfObK13Umymqjcp4TeANtAszOJsSMqGSRlINFwFeynqRQsIx7u22ohuqVSijwgHlZQy+OKGiWC6TtOzOfAxedQtmvfthYscOGtQqXY50HlhHwKId0g3I8TablAn3BwOYv7AM93zfYcjt2o99jzxxgmexoRStUtaDL+vrJWg3W6c6Hhz+nn/3e2eu24v+OjqxK12j19FbuLJT+cv7f/wnJ6fzfyjbLrGBTBLVIBkvyslcKjKoKQoG8PJhcYT2ma//I0zPTCnQ5UxX9LtaeaAzR5Wpko0j9tITfRGn/Stm3WhmsnbuDAy6LchOTnHhTYGuei3xY2CqgewgJdvtQKu8Bt/4/GPwxBLQvLQ0Gv0kEpBiWkEKatIKbJrfhNuByZPCoBhi5oRf5HBZxywmQSIh098L1SC0wgi1AoVxxGieUdnuZgpqmzUzH7VqLpnxCpCGqIYNgVcyZNMIPTx1+FIZLxukU4HNmESMdAPyvJj1VtC9jIEXM17ke9dqNUj123B43yTcect+2LF/L6QnJ9U8PtxxYTCJ61XdbNiB1mk0qbkGP9cTp+fhlkM3wZ6X3K2kaNLB1m1DD6cYG8DbKFeQ+jjb6bUPf99v/NHJK7sit9aztizw/r8P/Pi7JyYKH1Eda6hV9CgjS6YMqgGzQaQaqG2Yi2vUEYYtsWq7tnj6NNQWLkAODc8RdNnLQGe8ZO9oFNOksMYFO7FrxGVHnUDVMpTOn4UczU/zh1b6fgwKgJEPxiyXfFeJG+6T1Gfx2NPwua8eh65boAJaOpUi1QJm8gjA+O8A6HJhTZuYC69rGOCo+XBmp53S6I7qUAub34SB1WwNDvzOoB026kxTewy/g23UpXqlwHtR0A1TDAzAPv4OUw1aSib+tqGvQxkvT6QggOM2cXL9Mv150RGMh2GiT69kvVUcBYSZL1IPDLxIN6B5zl2FGHznjTvhhoP7YHrXTpKVqYYX9AlRWvFeu6N0vZj1djr080arTc02t74Si2yzADRtu0sSxx41X5QoW8bnIz9cK1UW25324df+5h8f21oQemXvdssC71+9477fzOez76CZY0w1ILgI8Ma4eUKpG1yiBJCzVRkD20ACwOmjT0O03YBkOuWrGQR8hwzQmWogjayrQBMzWNZXYuZRuTAPkUGPprpKhi1KhqCtJMvHsPiB3C7ORVsrwhOf/zI8U4pCMp2lLBf5XJNmEKqBBlKaaobwuPURaoywy5iZ4Q6pFAyXscsdRHnRbPcaAO8lM90NuF1NO4zieKVDDR8kGS/5hqoi7oZUwyjgDRXZSFZmFtnQQAeBFgtrXGRD4EW/3hR04Xv2TsKtN+yGXQf2QhaN82XiBPPTqHDotdqkcOg0WwS8Pc+DhflFuPM774GJAzcqmaIYo7ea2qkMi7moiCivrJd6Xu/w93/0j568MijaWs/assD71+94w3/J5jM/rrqFFMeLjQ4IvDiKPe4kyMRcqRrYk5cLbAIkqJc98cTXIRUbkARND3XkuWeaUggDMBXL0LJP+OIIFTrQbHrl9CkoUJHOL6hJQU+UDOTJwC5mCH5UiGnUYOGpb8DfPH4covntpFwQwCXeWmRjzPFKcwRxu+zHYMrgAh7C7L9gNkpQDPgGJJIyhYkh79wQt6sfY1IMITC9aFFtI+C9AiXDZQNuiGJQia+hEDb1vSbwyr8vBryS8XISoFuHTbcyGYTJsjIqsmFDBXo4YMswAy/yvNhMgeqGerMBL5104GUH5mD//l0ws3sXjbLCtSTnLh2SyPF2Wm3aPeHn/+yJM3DzLQdh110vpVZ1mrfW66ibfGmNTNXx+kHaY315teR1+oe//xMWeDdzC9mywPs37/6pz6ZTyX/qkUBcAS9KrdAoJpFyFegGgJfnrZGigf13+x6cfPJJSCaivnUiD8KUqbrm+HcBYgTyCBbV2AwHLwDMdssX5sFrNSAzqSrQBMzGZAkNuNQsoawp6VrutKC+vAhf/NwX4Ww3R5kugq0uqvG/w7yuNEoEnMdCs9JM9zQpol3Mi0HTB6bCINTmO1RkuxjwbpKCCC/2zSzsKwLei0yfMF9vqGtNQPpSGa9MHebM1xyCiWuU2ocReDnrRZP0BrcSI99bxoIbtg+za9l6vQ556BHXe9P+nbBjz07IzcwoIxyykFAZOHG92PqrfBeIWirVFO97+2teDcnJaSqyEfXRQbOcKtRXVoj7xfNZWVhe7fQ7h3/o4396ZDPAs9Ufs5n1+YKM0f968I1nkkmHXMl4RDUknARRBmQHaWa8zPGSnpeaHDCrUxMhnvuHr0E6xZ4O3Gbra3gRHGXWmuJmKdNlJQOpI9iur1Vah5VTJ6GwTV0UVJxj+dpQUY2nTtCkYDLBqcHpf3wSvvD0Evz/7L0HlFzneSV4K+fQ1bmRI4lAgEHMWYFaiVYyBUkje2yvZXmsaEm2bHnWa1v2Ou7ske1xGI2TrLGPz1heK1KiRFGQKJEESRAZjW4A3UAHdO6u7sq59tzv//9XrwrVACTZc462u3maVaiu+Oq9++5/v/vdr+6PiLZL4DXga9iuZDK0TpLQSWemxVkcDLYgHEtesDkaLDA27NawTXOpmfCNWsRaddtrpo+t5t3Ve+n1NN7rgq1Nv71q/E9LR9tVNjL7Y1sDcjTwyjyzG8nlNZJDSz4vgVdsZQTefF5msvFXMhxYbCPwMqNXgy8zHDL5PO5IeHHX9n5s3NSPzoFekbL4PVoTVypVaaqQYPNyWbR0ForPD4/i1vvuRnzzNmVDYz2EBbZCHumZGZEf+Ji5yemhSqHy6ON/8bmZ/18Cxr/xh1qTwPvPhw654lt9ab/fG7CAt1oVmxWB14TjiA5qL67RBylB0arAUytXcO6559DR2SGFMDJmFRtpK7KZhgcTIO6lQ8IrUoGRCdgJlJqZRimTQriT7ggzWcK4GbSTwWQ+SAg72W5NfJXp6St44dkXMV4KIRAICtMl+AaCQUtisNiulhZkioSRGdoEm7e1kOnOtKaOtNaJEa3TJMwO2yZ1rPGnxm74wxTWmmSMNgfKDYHuDQJvk/VstcQyDbAmr9liwYb1tlxyyW+lldlTymxFNha/GBNZIvhS59VyQ6FQUMDLjjbKDtmsFNqo9XI8ELXe125O4OZtA+jZ0IcI9zPxfrNopld9MrxSeXN5guBKaHTsCjZv2YiB/QdkBShxkMxtIPDOzUqBrVoqY25m9hsrY+U3vuNzn1O+zPWfa26BNQm8f3rowe5bdu2YI4DYNV7GQQrwiszQ0Hgl9EZcCCr8xjA57qDnjxxBrCOufL4azFYDXjVCiJMjVBhOvU7wLqGQWsby5IToxJLJ4FFTHphUpgprOmSHDNkU5qjtMjwlm8LlV47i6dMzCMS6VEFNAy8LaxbbNcU0XmqWa8DXyCLmsil9zO5o0Ay3HfC29ei2jmS3SwrXaP1tl0omD22RJFbds1djxdfLYLCBrlxtfYGWzjTrz+2mC9v13xuxk1Hjtfl47fGQ9mB0K7dBSw4EXoakC/AyPIfMl6PfWXDL5SQknaw3Vyhgb8SFu7f1YvuWAST6e+GPhFVhV0c8WlODKxWRELhaW1hKw1Gv4qa77oQ/nhDglTFCxTyyc7Nq/E+xhIX5hU889kf/8IfreHtjW2BNAu9/O/Savftu3npWdayps32lWgU9vGryhNZ3W+xkDalBwUB2eRkzQ+cQjISEPYidzGK8BE3t19VBOPQD07srEwH0Ds8lW25hHvNjlyWTQaxrNpnhqunBOp1MPJglst0JPPvMC7hSjYq0YOm7BGCTPqaZu7DeNglkTdkSbOzQWbtNNjLDbM2kiRucArxa00STDNECqKsW164jM9ifs10K2Q0dEnYN1/6A600WbpUZfgDgtTJDdEyklVKmGS8bKKx8XpvWK9YyrfMavTdF9kvWm8lIGzFB2FUt4+GBCPZu6cPApn7EurtkX+cw1bpEP/KXnXIcgaUKbOl8EfPTszhw9x2IbtisA9U5uy+P9PwsKvkCKpxmUiy/+a5f/4sv39A2Xr/T2oyF/Pt3v/6123ZseFqWWBp8qfOKJmrl8OquLk6SEKaqMxu0Lkvg5ODJ5MQ4fEHVgmvFKApjNe22Wuf1ePXkV+VmIHDTP1xmytTUpETtxXp7tMzQYLz24pykj9GGRt8uhw3m0hh75Si+c2YaVX9MPLutRTXTJmzsY2ZEuyms2TMlBIDbZDJYDNe0COvL1eakrVY8a2KsN8J4WwHZJltcl+3eCLtdjdGuArgWC27nZGgFXhsLtmIi7fqubpywp5Q1MV5bkc3u5yXjJThS47WKbARe5jdwCkWhIHovQdf8MrmMwJstFDDgd+CRLV3YtqkXPQN9CMajcqI1khv1WhbQzAojUyji0sVxHLxjP7p37BJioNraC8gvLSG3nBTALpdK77v3Nz7939Yx9ca2wJpkvF/+0DveG42G/rud8VZrVWXBkskTDcZrabwEXrJN3a1FRrU4MYns/KyaVtEEvEoiMPGQLMhxh7VGbutONXYJFZeTmLlwAbHOuNjYRCOW7AV9adLIJGpSZfZabPfKBE69eBRnkk54/CEBXmMjs0sMJne3aXClTYtukhpswGuKaFe5GG4UeDVwNiWS2ffLNh1r6iG23bJd/sL1mO+N7fuNe90AyzV3XlXb/QGB1/LzagIgGirb1/VlUzavnsFmmigEeEsl0XnJegm8lBwIvFkCbS4ngCsDMan95nJgri6HYu7b2IWB/h509nUre5kmAmS7lA7IePk9VGp1vHhsEHce2I3+PTfDH4mp2gKbfVIrWJmZFvJSKpR+/4FP/tX6zLUb3PfWJPA++bF3/VY4EPhNid+jq4GV2lpNQIs6L4HXyjAQBqy9vAK81MRkHYmZ0VGU0ylLE7YXq6zONXEguKVP3uVXmajCWHlgFQpIzU5LYS1ON4PVHacZswZdcTUYtstR7dWKFOKmTp/Ei6cvYdERlaKakRloiaPMYAdc49c1E4ObAnFaxrSroHaVwWB3MJhEsqbuNAOu9hyGFuC0M91WUG2n217T1dDCgm9wP29/N1tRTHfQtgVjC3RbWfS1QnOuwXjp/5aCW2txjYzYMF0zoUIX2cw0CiuzoVi03A0sshFwKTeQ+Qr7JfByLDyZL8GXKyvKD/k8Eu46XrO1E5v7utDd24kYC21ej2pb15Y1dq1JHIfbje+8fAb7Nvdh+4F9Eqwujh5On8hmsDA2LvcrFyuffuC3/+oXfqjvYw09eE0C75c//M6/jYQD/7ss4WyRkNK1Jlm8ivEK+ApTpdygGiSMBYzAOT18XoKhrWKcNZtNj0AngOmMBzfzUH0BFYgjnWpVyUPlEEvac4JmXBDjJwm4VuA6mXMjxYz7Jm0/melJjBw7ju+O5eEPq/ZgAV6ePJhApvN2pUVYs/GmoPMW9wWXm6ozztnQeG1TJqRJwjZRQvJ4TRbDaqE3LYzXLF9Nzq6Vt9sqKbQy2n9r1rsaw20gbFsIaGqW0Az3WhGRrYE5xkq2GvCaAZhmEoUZBaTsjpXGr24blskUdDfk8ygyOEcX2QzwiuyQy4mdLJXNSqFthYBcLOLebj9u3diN/t5OJLo7EYiG4XQ4QV87XQp8PZISl9uFlwZH0eFx4eCdBxHq6ZX9U/bffA6L4+NyAikVy3/90O/8zXvXEHb+UB91TQLv13/5J77g9bjfYkDXSiYj8LYwXpm91gS8KkiaB9XkmbNEwYYDQpwPCjgV41UAKsDMMduc9qp9wKwM07s7N3IR4VhYZAarqKZZshV6rtku/y2JUrkMZofO4JWTIxgrBiyma4DXAl1dVCO7bSqqtcgMArp2765tkKV9iKUdeK0OtXadanYgbaPltmW93y/4/iByQ6sPt/XQaaMLr5pYdq1AdDsoG0tZu6yG1sGXLTPYDABbTRT2iRQ6C5ds12ohtjNfMmAOyMzlxNFAvZfuBpEc8nn4UMXDG6LYPdCNvr4uxBJxWelRcjCaMl+fPzPLaYxcGMejj9yF+MAGzY7rMvwyeWVKbG2VYvk/PvR7f/cPPxQaraEHrzng/fQdd3h2P7b/cL1ev1861vTSjmBAfVcYopXTwGnDBnjp4TUz0dSSbPLsWTjqtSbgpQ1NGKrxxhLkfGxDDomVjE0P/KkU2W02i6kLF9C3ZaOaHGx8wBqwTauwynXwCuMk283OXsGVwXP4zvACqt5Ik5vBNE4YPdeaLkHw19OD7YE4lr5rGK+5vMbUYJlkbJMY2mYrXKtzrVUuWKXQ9m8qOVwPdG0a7arSQgsjXpXt3ijw2rvY9Lgn8fG2xEPa7WQmm9eEoxN05ZeeXj0GnrKDSA+UHciE83mRG8h6DfiWyiW8KuHD1o4wNvYm0NvbhXAsAk7crpFYaInDsN5/ffoF/Ngjd6J3+1Z4ZBCmWnktjk/wtauldHnLaz712StrCDt/qI+65oD3T3/iDdF9G3sOO1C/XWm7NJBXZYnt9Xpkia4GXSqpQQFvAAzNUTYwNdySy7zp4WELeEU71bPLVIeaZr5kvP4gRGrw+LSNrCbjU6aGhuFz1+GPRPT9NfhqxitRkNR9GdLjcsl7JdtNXh7B8NkLODFfg9cftGQGOjKsbjV73q7NQibeXdNhpwdyWoy3VWqwuRgUVuochpYhlqtZw1a1krV6cleLi2wttNkAe1VP7zXcDFf5cleRFq6Zy3utwJxVAtGtBgpquK2xkIYJm6wGrf3awfcqV4O9yGYaKUxwjm6qKBCECcA24KXmKx1tZL3ZLO7o9KHT50JfRwQ9nXF0dScQoreX5EDeD9uJ1Xv+5ktncPvOTdi272bV9aanYDOwP5tcGX7od//u5h8KidbYg9cc8H7qrY/Eb7lp82GnA7dWuWMx+ENXcFVWrepWE9DldZvUoApjapOViyVMDw0JDrPV2ONVbggztcFMrJCONs45C4SleKZyUqoorSzj0qmT6OnvUfKEBmoW0VQqmWHAzOxVurDIE0vzmLtwHi+eHsMcIgjokHPj4TVNEzyBiMSgW4Rbi2qrBuLYNd42wCtg2sJ4ZYNcS1K4HqP9QYG33cEqJ8b2EHu9FuAfhukqknuNSRQ2gG1KJ7MDr2a6ltZrj4c0CWUtMZGmg83qZNMALGHpmgXn2FKsf8l8zSj4bSEntoc9CHg96I6H0dkRRTwRRyAU1O3BOkWtXsPx4cuIuLXO29GhTyBV8bInZ2b/7NHf/+yH1hh2/lAfd80B76ffdEdwx569nLV2l/h4WUxgFi+g8mr9tnHnLLQ1Aa+KcCTIcNrrzPnzUmASgNbyhJEMTHA6PcBuzjoTRwOBVwWNcIjl7MgFJHqVm8Hc32Q0iH9XbvdJIA7BhJmpmZkrmDw3hG9cSMMXDDfYrq1bTbJ3dVFN9GWt8bZ21hmmy4BzlZSmcndNkc0+V02wtRVw7dGP10ohux4w61141Y61VYptrTsvYc/ctiq7bSMpXBNwr1WI+3462eztw7a0MmMnM35exTR167BxODAM3e5uMOOA2EShcxvMJVmuFaCjWa9IDtR7i0VktMWMTRURlHB7px+Vah2JSBCdsRCisTCisajIbuaHx8jUXBLT0/O4564DiPf16c7Lmgy9nL8y9Y7X/MH/+NwPhURr7MFrDnh/85FH/PffueGw2+W+R+as6ZAcHqgEXp+wXDJej4AXp1G4CL5c7kuOqVpuF1IZ8d+63E51P7GcNZirSA3icvDBEwrD5SPwshpcl3bL5OQkMvMzysqjIyDVBAs9243X5TXZMMHoxwrKmRSSY6N44eVzGM37EGSnGpsmdCiOSSPjexHGq50ZfF7jbGgNPLc3TRjAFRuZcTS0xj/ag3Faw3FWSyFbBXjlZpt8cK1utnaM+vs+Vq/FhNv97Qb9vW2jIW0Ab08qaw1Ibwu8RuO1J5XJBAibu8FERGqpoUyHg2a49PWKv9cAr9Z8KTuQ+dJSJh1tqRW8uj+IoMctBbWueBgd0TDC4SCC4ZAcA9zfKXssp3M4OTiC+27fi75tW6SpiDJEpVBIp5eXHr3n1/7yle/7+1jDD1h7wPubcN6f/YnDHrf7IUoMysdLyaEOj8ctUoNYykTfbQFeCbYh8DqRW17G9IULogs3xsErmcBIB5QmWIhwB8Nw+QMaQGsSqbc4dhnlXAZh5jyYhDAdjiOz3dj9Jpm9XhXIUymjtLKI6aFhPH1qCgWHso9Z2QwtgecyQdiE4OjJwVcNszRuBl1QM75dybBgfbveYL8ShcmiC4Pj4QBZskOIOMNU1CqgSXJoJx+0jltvAW7zeAuQ7aDchlFf97i9TvfaVfawBvVVS+nWFxD/LVRLbd2JelUVwsTz7GI+sXIDi11Mg6fb61LPY8/kbbnO52hivDbJwTBde3aDdK/ZBmCS7bKZgkBrFdv4bw2+hvESjOlwIPiymWJ+eRm7Y27s6wwjlSuA33p3RwQdsTBCwQD8oaAU2/je8sUyvvniadx981bs2LsbvnBIrd7KlUpqZemN9/zqnz993e9j/Q7WFlhzwMtP/o1f/onDHo/7ESU1qKUdd37uZGoQJBms0nctqYGMloCoE7rSiwuYGxnVQK3yHaS1mIUry1bmgScYhIv6Lq1k4kqooJhKYn5khOUJhOOxJuA1eRCi9TK3VwZhqunBhaU5jJ46i28PL8LhVQ0TplNNws7tgyx1LoNou7q4RmlBwJfhO+ymo+Zco0bN8fFk42ya0LPdoEbDWGPsRVZoHDmNQpvWNh0EoLrgs9NtinA6QbOVCZunaQXe6/h1V+toW/V4/n4ZbhNL1ScZaSrgsEc2PBBAuR2MpbAFmhXC2oBWvbM6eGJn9gGhrYpqtQKPxyUylxSppMagRq5bLcSrsN6r/Lza02ukBtF6TTsxu8u0rUz03lJJim0EXgIwfb0d3ipu6wqBiQ2zyxkEfW50xhTzDYVD8Af9Ij/xBPu9UxfRHfTh1tv2IdKVECld/Ly5/G8d/Oh/+eQ6rt74FliTwPvUR9/9VZ/f8wZVOVada9R5hfF6CLhK55VJvAFlJxOpgUUu0TpdWLoyheSVSdWowPvowpoAG/N0Bey0vhsIwukxwFtEfmkRk+fOIRINSRqZAmwVBWm61yzglfZiMosSsnPTuHDyLJ4by8LtVf5d+6SJVv+uyAsEVDgRDEfh9YXh8QSsAHa3dmmIP1eYvGnXbYCsAdhGLoMmtjqTuNnPy6fgk9R1228NTm9dscGWbjaL1bboxNdkva2M+cb38waDvQFJoVJkGA23BRtdlBxS161tjQJay/QJ670oVqzht4k2K5lBgzNXDvy3w1zSWUMGXRKAlmkPbWxlRm6QwBzbAExKDSa7wYAvL3k7GS+1X5EeyHoJvMWiOBvK5Qye2L8Jc9NzIi/NJVNIhIOIhQOIhYMIhYMylYX7x0omjxPnLuHRew6gc+OAjAMiIFfLpeFbPviH666G72N/XJPA+9VffOc/BYOBd4nUoH2TlXIVHq/SQhXosrCmwFcaKDhpmEUuAQon5i6PIT0/p7y/BF4zNNKwXYIuC1zBkGoV9vjkmGOnW3Z2BiOnz2DDlgF4JLFMF9dE61Vh66L1srDGbAi+x1IRqakJnDl+Fq/MVJpahC1t18Z4fcxuCMXh8Ubgo77Mg9l0nwlrVyAr/2mnRnNnmgFRDbRtGhYMYHN7KHasLzU7tmayuapwex1w8D3Y2K61810PfFtA+wfZaa/VCKGgkL5Uhr8wh0AxdiUPaJngKrlAA6+9omc/8DTAmpsU3iuGbABY/0tPgtCALa9ZgdPD1QP3T6XtmrmAsjprcTYQXE1+g4CtKbqR/eosB/p5BXi124Hgy462pdQC3v/oQbz48mns2tiNiYUVdqEhFvIjEvAjGPIjHApKch/3k5cGL+Hmzb3Ytnu7ZDxIN56E+Vd/Zv8Hf//vvw/sWdN3/UH24R/5Dfbkh9/x56Fw8P3Kp6g0Xu64qvrvVmCqHQ0N4DVxjmrW2PT5C6Lzyow2k2hm01TJXOn/paOB+q44Gmo1lDNpAdBL54axddc2S5ZQDgbFlFXLsGrYgAbeSk4gDS4AACAASURBVCGHlfHLOPLyWVzKeiUQR3J3bdoupYZgOI5YRz98vpDk+RpgVYxTMdkmdwK/TacGYPljwxmg7twSWmMDTtMybAGwZT/T7cUmQlKeow6XD3B7b1APbgXodg0Z19kTrwe2DSgESvkSyhku+Zm3rMFR9GwlMQhYNjU8KH1bsFQ2U+NQErbb1lZhgFwzYgPagsqKUhuAFjLMTeWsweFmMHlFCmACwHbg1aAro3tsoCvSgwFeA7pabhCHA/N76cxZmMFH33w/Dh9+Dtt6EgKyF6fmCKSIh4MIB30IBVhL4DHhxWIqi5VkGvtv2YV4d5dywMhkitrRWj73+v0f+9TSjzxA/C/4AGsSeL/0gR//VDQW/YhIDdooTtZAjVc5GzTwSnaDYbw24HU4cfnUKdRKJfgCmhXrGW1G3xWZgUMzWVjz+kWrJVspLi9h6fIlTFwaw449O7W+qwFXj3xXHWwc/8NOObWck4Lc6AUcfvkikvWgOBpE1/V4JJ8hHEkg3tGHcKSraVmvlv4trFUvm5tjHdXin6xG3b3N42w7pAJbp9jpBMhdOrtBwFb/TYp2OmjHQUZZgT/ulpWFldPQov/KK7djuN8H623XUdZ0LLU0QRB0M/M5KajycwtwsrHGKnLZA22UNGD+1mDwmtC2+Igb78UGtgLM+kvgakPfST6ieYD9pEcQdlOKKKMOBcDCem3Th4X1amnBznjt2m8T69WM9/LUBD7ytgcxdPSEMPyB7g4EQwEMjl5BNldARziAaCiAYEBNNXF73bgyu4juRAybd2yFNxiQ79LpdJaqlcoH9r//9/76fwFu/ci/xJoE3s+/762f6uiIN4CXTLRUlpZaWmjEjmUYr9Z4TUiOAgwHLr58FC6no8F42SghljJTzPLCEwrBxVZh6rsuF6qlIvKL8xg7OwgXaugc6Gs0T2hpwUooEyuZTjJjw0Uqidnhc/j6sQnUfCr0nAlkTCXr79+JSLRbNDdhH2aIIRm9oWRWtoBZ7jaYmsI0w3Y1+LZb/tt3d91SrLzABFuCrJJhCN78N4PhCbzKLaFYdQ1VhLsCcHvUJA+F8RrsW4trxrpmY7/Nb0E9/ir/7mpuhjZdZ5VSBUsTSVVwlCJSY/R6taKKYmZ7WvnNYu1SWc7NzRrNKwbre2hiv7Z/yBtvfHYl9egTILevBOlTvlHSED8p5QeHm7GNGnhbtF6RHDQAW4U2/rtSEalBwnR0wY1FtuGxS/iFx+9BdX4W88kUAi4nOjqisvpbTGcxPbcEV02xX4JvIMAiswsLyxls374JHT1d+sTr4vZbqVfK79zzvt/7+o88Mv47f4A1CbxfeN/bfjXeEfsD5aFUxbVSqQyPBbx0NqikMmG89PLK5IjGhOHR4ydlJIo0K0jDgmozNs0QHIdN/67bHxINl0cO5YLM7AzOvngUmzb3IxiL6oKaKqqpohyZLvVddUnGy6p3YXEeU2fP4MmziwiFo8LKI+E4BgZ2IRTqUAtVzcQICIoNVVCpqpQptWQmqKjlsUWs9A5mwEsAUphsAywbBLkBlHyYy+WUbeJ2q6kV9pHwTLUyv9btTqe8r2CHD+FOjp1pfr7WbAarcLcK8FrALety/VytoNvy71Y2nJxJIj2bke9PLZkbLhdVyNIga3y0+jY6E9jCbdqBTdHMrBeUNExrmeqObGi85jM35Al1fmmcoHgCsBwoZtu6VXKcOu/X4PKWUKvrxgptLTMWM5nLpmUGYbxajiAQ29uImVx2buwyfurVB9HpqAjjn5qeh7NaFi8v24d9wSAmrsxiYvwKgl4PohG6aXyS51AolbF951aE4lErm6QOjFcq5Sdu+YXfPfrvjF0/0k+/JoH3X9/3ll/tiMf/QDiElhpotSGAiNSgNV5xNWipQdisyWpwOCWS0VGrwR9U4Oxl8c2voiNlygPHxIt/N2SNYS9nU1i5MoGhYyex46YdUpSzHA1svhDnhHI4ODz69fRstdzcFM6+9ApemXcK2Hd1bkRvz1Z4mP8gbacqQFtmcvGX018JvOx6kgNfHfyK0SmJxV7wUfpvg3FZ04VteGaAkVICgYZsjJIKdXErA0IDsAIO3k53h1vZ2Nwqh7jmrGLLLVs02W3sgqsC8TWmVVzz6GvXAGG/rV7HyPGLQMkBl0dNYaC2yW1HwJVROK2AW6kIe+Q2FsZrshfsLcNqx1JWxdYgHP36qrCpCpIi11j5xw7ZZlLklQaYRtu3DFPl9hUHCjXzChyuhvRg/L0CvGS+xmpmrusYSYKvtBHncrgwMYHXH9iIvf0dqkDs8yO3kkImlQIdyMFIWPbT+flFnBochc/pEK8vwTdfLMn3un3XVvjDIbnu4HdcrY2nFxfeftev/cXLP9Lo+O/45tck8H7lA0/8dCga/gzpgxl2STZAYLBrvNzh2gEv2cmFV47BUauK1OAjyMrkCp8VlEM3A/Vdty+g9F0u9VaSSI5dxtDpQey7dW/D7ysygx4vpK+r5gkVykNHQ3pqDC+/PIjRtAd9PVvR3bVFlsY8wKVrSRdWBHyZpVqvQWZjelyIdoTgC6ocCjomfH6vSAHeAPMcmEZVR7nEMd0E6irKRYI3x7nQB8oqeRnFfFEsdzKfrqzAXIo81RpcThfcBFodhSmga1YPZs4b2TylEK6a3Q7sf3D/qjqvWm3bLGg/BPBeS+/lSeDIk8/D69D+bIYf6cKVgBbHnROAtZ4qf2MHYaUiWqe0Vzudkk5HJsoTEOWBSDwiMgu3dyAUEPbq9bMT0mtdpze4VOA2rUphT2xZlSoyqQwWZ5ZQyjHovCrgrDoROcRUrcTITMWlAsDtq8Pt4/eh3qcZDSTvX+8TBoT5/k1HGy1mBN7L09OIOPP42Tfci0I6g1AigRInVThdmBkZRSQaRoAhTi4n0slllKs1TExMw+10SE4IwTcSi2Drjs3SwUnwZY2iVCiMpGeTr7////rvNKyv/7RsgTUJvF983xM/HYmFP0PmYMb/0ELDpfNqGm8T44VDAS/ntIU4py2gvbxK4+V9vQRdOhoIvJwaUSkjtziPudERTI6OYff+m/QsN9V0IUMwjbNBJAcmkqkiFC1oy2MjOPzCEMrBbdjQt101Y5DVVqqqW4ksp1qGx+tAJB5AKByAnwWRoOrCsyYf60QyAQ2dwds64sewXWUPUwAobJB5EWTQFRUsRKAu5IuYHpvC7JU5LMzMy/0EjFz0RJO5qUkY/DUjhPbcvQcbdm602q8bSoIu69m132vowNdju6uBrr1j7cKJYZw/OiQnD25rEy5uTmYCtnU1BqdroBsbtm5A94ZehCJBObmQgbJYyL8rAG6E9NhDc+wOC3sLscWYbVkOBONiroB8No/lxRUsTC0iOZsUUiCTRoJBNaJKtiltemUEo0rGscCXzNxWbOPnMADMfYXAS1fD9Pw8Tp0/h0+9500oZFIId3ZJsLo/FMLYhVF4HHWEohEJzsmlM3KCKBTLGBwaRTQYQL5cxonxOdy3bzv23rxNSIgeA1/LpdPfu+vX/vzhddS9egusSeD9wnvf8vpoZ+wpNd69ofGyDVYBr1eGXpLtUucVjVdLDUZ3vHTqDCq5nHT2cCS8l9YxSg0aeH3hiDBeJ7vCXG7JLs3Nz2Lq/Hkszc5h2007bMCrmi6U1KD8u3KdgM06di6DxYvn8Y1XxuDwbkNXoksKLdaSt16BzwfEO3lA6tH0XOJrb7EAhImDtIWeyzRhWyaDGV1vAa/x/eoilykEWU0VhpnqSy7N52bmMT81h8nLV5BP54QdO9mMWqtJJ1S0M4Y7X3M3QpHQ6hpvu4kWbQpwNwS8LdJC02PqdeTSWbz4zReRnF1ELptTRUC30rljnTF09XVjYOsG9PR3C5trfbwAp5YWrL+1hKRfBbr6/gaYRQO2p5fZutbM5OFcOoeJkUkszi6jWqrC62Ghi0VKD7KZDLbu7ZGoZ2M144lDLGbG48tLDb4GeAm+80tLeProUXzg9Xdgb18CvlBQVjVqZqATZ145hf6+Lslu4Peez2SFZAwNX8ZitgxvvAvLKyvIpVewsy+O3Ts2IRiib9wlr58vFO575Hf+9oV18G3eAmsSeP/lvW95fUci+pRojlJMqQljJOAY4DWFtdbimmkZJvCWslkE2NMeDIBj4Y3UwKYIbySqp06ojAY6Ggi8E4PnkE2lsGmHChqx2ovNME2dv8tUMu68PDhpJZseGsSzZ+aQKUURCyeky8nhrCAcdsHv94jBneySS2AyL3qATbtw0zBLPb5daYWNMBxtCdIFHL3MbwFeo8G2LXrZq/MajHigU6JgcwrZFpfdPIBVpb7F0WAHcVsKmrr5aiZ8PdBV2NZwELQG2ViAqQEvs5JBIZcXiUDYpLSPm/xl2/O0gqx+I9d6fuN8sDNg+/tTHmGb9s7rkiOi0vNUAwXblmsoForIZvKYn1rAzPi80vFRwT2PHFSt71pqMpKD6P0m18EGvOJuyOexkk7jmaNHcVNfGD//2jvl8ZS4+PqhRAdGzg6jnC8g0RUX22KOwOvzIZkuwLHpAHq27BDwzywvYXluGsvjF+HOL6GvKyrvrVquPP6GP/3nr64D7zrw4h9/5o239nYnjhNkzfgfAq8JQ5egHN0KvBrwjp48rYHXj0AoZEkNkggWCMIXjaqMBh1+znHYufkZjJ8ZlBSpga0bFTs23t2mS58Vfs6DspReweTgOTw/vISa0w+3mzYyN3xcxuumD+78LPDxMwn46mYOeoE5gkjl7zacByYC0nhxBXht7Ndk7gro2eMgDUCuIgHY2fBqLgV5Cv08sjuuxnDbAK7FFOy+XrNPtxbTjH2sjdOhXXPFVaE5qzxfW2bb8h5an78VdJuA17gjdNFTQJgh/XUNvqKtS2iEsrFJ0U6dzJaTaZHIAgGv/I3yk8gNWqs2xVZ74ZUuB8pTLLJxGObzJ08ilUnid3/y9UCxKN7ccqGIUEccy4tLOHd6GJs39CAYCYkuzX2pXHchevA1CMYTsmqSkB62JjOAZzn5rdnvfukfuzojj1cKtQ+/47NfWZ9M0XLmWZOM9x9/5nW39nT1HPf4eGZvMF4DvGSKytngV4BqpAamk0kKjAOXTp9FMZUSthsMB61GCwKpNxiCLxoTDy9lA9Fp8zlk52Zw+cwZYRX9WzaqSr9mvaptWLsatLtBpAYCbyqJy6fP4uWRFTh9AXjc3sYUYbcHXg8Db9wqg5fhPpIToW5zunQOhNF2yTavM0XYmias2aaw/Gvk7V7FXk1hzACnDWSbZIoWALaYtN2/awdf+/Ndg0K1aruraa0NrGxpM7NNCLa/zHWBuYUNr8qCDaDbX8ee1yvsV4MuZQcd2G/CnMSiZtwWekyPRJxW66hIbq8NfCk5aBZslx7o4iH40t1w5vx5HD8/hN9452vQG1L1AOnk9PllP3rhuVcQC3jR3Z2Q1Qdfo+4Lo+++H5OcaQJ9IZtFJp1GOpUimZl/4pd+qeefDx1yveNzn1OD29Z/mrbAmgTez/7Hx7b19nSNcnluFddKZalMGwuPTHK4BvCODw4hu7QkUkMgHLKkBgG/EIE3LoyXbgX+UKfNzk5j5ORpySzYsHmD0o1NJKQprpnCmiU11FBaWcLwsdM4OZEX7VmKVWI3UtGPvK5Gy6tfM3XCDM+UqErRdrUXVDda8H2YhgcpommANUWwJiBsXfJfg422Pq4tozW7oc29sNrrrepwaDmYG4231vpfrljFrBZgtLNOfUd1cS0Atf3tRop39ue96rntlj7tKVf5EPRaqwAnIQZGdpCmDTJh1dihpAUV5G+0YHGd8G/G4WAyfHWXG+sCVoOFZr2T09P46pEX8LMP3YL79m4T9ir7bKmMSGcCi7NzePmVQWzf2CtSUc3tR+zmO9G57SZVjCwWkV5exsz0tMgXoVAIU7OzBz72qU+dXsfb9ltgTQLvpw+9NrZlU9cyixMGeGmZ4o/EQXL2mu5ckyotZ66xcCZ5vCprYHxwGJnFBQFeLsHobGBxTULRQ2F4Y3HReCWjgTtxNo309BWcP34KwXAAvexaE+Al02WUpJIXVBOFyuFVGm8NxeQCzrx4AheXOO3Cp2bD6QhLj8cvjR8m9NxJ5svn4G1mgKaY8FWBTQGtrZtMOxcE3ERSMKE5RudVUkDrT5POuxoI2zViPkFLN1wTU7axXIsVt5MgzPO0AV3rplZtt5XB2otfrUDaTp6wd7y1NmTY/t0qrbQJ9G32TttCeFROg+qEM5pvo2VZ2fgsANZALCFPFaUBy9BW3fyh0vYaNjiZUqwnWFjWMluOw0oqha9+73sIuSr4jXe+WuQE7guUDkJRdrG58dxzx4UdbztwB3be/3r4QmGRMwjSZLrjly4JoIfCYTkJjE9NvedX/ut//dt14F0H3qYt8LWPvKsSDAVc9qwGXhfG69NDL7VH92rgdWJ88BzSC4sIBP0IRcOW1CDacDgCX0wzXpdHF8hSArynXzqGnp4EOnu6FPAaqxcbMGyFNYbkCPBWqygk5/GdbzyPDGIiJSjGq+1anHAhRTWtF4t/VgGvmmihTffa+qSsYy5l2tdFLtOSKkzXllammCo13kYXhX1RvlrRq20RzgD8NbIYjHXNAuhrAK/gb7uwcjuQtlvSt2l0aGWi37c00fKZuM10Y3bzUScdLOYmDbD6/Upmr/67XOqQdTJfM3RSLmVAK2UFk1qmGmfEx8u/y+TsKiq2eW1NwGuzlZkcB7YQf/foUbw4NIQ/fOcjGOgIywlCyEgdiHYlMDMzj0VnAvsfekxnWpARl7C8tISRCxfEWTHQ3w9/MAgC+cjY2Md/49Of/i/rwLsOvC3A+865UDjUbRivaQoQV4PWeJnFK4zXrvEKgDgxeeEiktPTYukJE3jZbEGZIRDQwNuhGa8Kx2GBLD01iSPPHsHunZvUyB9btoO0JBvWawJyNPCya+273zmBnCMEr5smegIvAVjJDRLII51vij1TfpCgc11QI9DSwUFtV8BVGhkU6yWoSsqYXDaiI02SmcmmMEE711qGtwPiq8BU8oyv1oylE9bcbv97S5aBfIntCmst8oD6p72l13b9OizXRB2203StXIjVtGe+36vCyfQNFnM2bdsmN0O9N/OrWrt1i7cwWeNqMMU2XmqpwQCsgLECaQt4Teu4rfuOEoSxIYpXWec3nB0exlMvvYTX7d2Idz9w0GruoIuio7sTZTbUJHYgseuAmnhdqSC1vIxzZ88KAHPVlUgkEO/qwvz8PE6cPfueP/jsZ9cZ7ypnnjUpNXBbfPUj7xwKh0M3cQdXxQe1NBNHQyvwynh3ldVgmg2uXBiRMHT6eAm8lBpkVhvjGiMR+KIJuOjjpYdXxvYkkZqaxPPfeR779+1ChJMn9Fw01bXGX9VCbLrWCJRkNivjo3j68Bn4Ih3wsp2U70/PefNyurEOUFcz39zSRaYmFWu2K35dM8ZHXTearkoW00BosVKVCSBMmD+G8V4LsGx5CVcxXluxzQ7EhrUahtsEyPbHtJEprgLf1SQAm8xwlZ3LfJ7W+7T4cJsYcasm3aboKNuM8RH6oDMxkWpoki1OUuQFA8qa8Qom63Q0sZlpTVcmYDS0XQFZ6VYjAFe07UwDL4GWTJlxpwLcWo6wyQ9WS7EeDzQ+OYkvPvssgh7gtw89ilImIx+CdkDqupTTMq44em59SD4V5YWR4WG5TvJB4OXxEevowOXxcbxy6tTjf/rP6zay1Rj/mgXeJ3/xHccjkfCtIjUwnUznGkhbphn/Y0kNOgjd09BICbyLk1fEmxpmmIhuL1bAG4UvlpCR7pJKVi5Ju3DqygSe/dZzuOP2vQjFotpORm1X5TRYrJf6roeRkBzpXsH8uTP43vFpBIIhEGgVK9fRldKS65VOMQXayjImBTUyW810G8Br9F2yXRWEo/p4tcar83oVGFLzXZ1hGvYrM8ZsVXkDigZk7UxWmK3Rcw1r1Lq5df+WzrVVLWqrBOOsJhWsyoBtuq51nxaduOk92POLjTOjNY+3gdYN+LVAVrNbDbD21xS23JSnoQBXgo00+zV6rwpFbwe8qoWYLrWKyYzQGq+JkzT+XpPbO7+wgK88+yymF+fxf7zpXiS8bimU5XIF+HwexDticGw8gM6d+2Wc0IWhISnqCujqKdZ8TkoNyWQSX/r613v+7mtfm1+XGtalhqYt8OSH3/HtSCz8sNF4JaOA+bq0kbUFXhVaYzHei6NYnJiU4lo4GpLONZEb2M4pwEupISx6KpsnCsuLArzPfPN7uP+eg9L/znFCLpNoRsbLaRQSht6IhKyVi7h45AjOT1a044KZEJqVU2bwe1QugpMWMvbJO5WuK+3AlBQUECtma1wNDkBycjW4ikVOg7BJwLK1CyvuZk9IN1xVhU5awKE7sEzDgB1g2+q3GoDtgeoW+7WDczu54RpHdDvgNe/RSBBN97EX1Oy2Lv0a7Ri82gKmsaP5zRh9lyBqPyEpAG2M/7FLC6q41pAkjNQg7gb5dShdV2vBxtFAIDWMliBMmYH+X5EcSJhl+KYaI8Tim5U7oQdmmtZoMthvHTmCl8+fx8/dfRP2burGpYkZJPbcDU8pI2OAem99AOVKFReGh2XYaWdXl+x73D50zRB4ua/NLi5efNcv/dKuddBdfQusWcb7lQ8f+tdoLPI2IoeRGthEQcZrgtAJpMrVQMbbDLwzlycwOzoq7ZHhiGqg4Ch4jkOhlcwU18ga2TzBHN7lyXEcPvwCHrzvdpXmZDRe3S5MqcGE5TDfQYF2AcefeRbzK7rgJ64L/SvjhTwqztJJy5gbLmbiaolBJV+pYpoBVglXEW23me0KOHPaBf/OllkHQdoEo6uiW9OPTWdVoZMNkGlicHbJwN6IYbvdbl+z29ossF6lk2213bqVtRqQbbrdAKz9xNHCfNtKJvKi9rKemS9noXRDqxWpgB1nSqPlBAtLy7WaJoTKKkeDCjuzCnANl4MGXjmxmSD2xtgqVVQzskNZgS+BFk55Sl5T4KtktVbwNS3EJ86cweFjx7CvM4gn7rwJmUIJ2x54E/zxLgHWcrWKi8PD8uk7OjoQkvAcdn/WpF5A4OU2LpfLf/PYe9/7c+vAuw68V22BJz986K8jsch7+AfxPkpQdEkaE+yxkMJi7VkNsix2Ym58QtKbmNYvuaUE3mBQwJegS8bLSEgBz2IeuYVZjJ0bwtDpc7jzzgPwhezAq1LNpIFCCmScWKFkDY6AP/7MEazkPfDTo0sfr2TgKm2X48NlZJHTw7nAFliaopgUzARkG2ArgOY2YOxU7JcAbZorOCGCr28KcgRhFQRrbUeBWksS0HjRZoS5eUAruNp13SaJwca0WxmzXcK4JujaTgKG4VrM08Q4thTe1PLeJpm0aLlN9jkbOBox15JkzDYg2FZqjDsTOYDAKKCrYyKhx06p21SxTE2l0MArJwG9jWVghQpDV8CrM36571LL1U0UEmVZYVwlWW8dNYcGXocKOBLWy0t7Z5tOLGORbWx8HM8dP45qehGP7t+FDZ0R7LjnNXBFeyQ8fWpiQuoH9OmSkNBTLvkedXXyMVGZxULhd1//n/7Tr68D7zrwXg28Hzr0R5FY5OPcYRQLqKJQKCqPLJmurXNNAa8admmkhpkxBbwhAm84JG2W1LcoNfhjHfCygUKA14FKPo/8wixmLl7Ey0dP4v57bpMwEmHSIjFQ3+V15euln1clkzlRXFnCC0+9CIczAj8tZCzguVhAUx1pbrcGTIIuR4/zoNSLYAnXJphK44RuF2bbsAZUATKnA3Wt58p1bil+ToKvhxoxiyaUMFyoa43bWeNjDD1r8D8+j2iRGjTMhAZxArQpsJkOuaZL426wNOfm3Ajhm6u4GlolhiZ3gp3h2jJymwDZOAu0tNEAWyOzNMx0IjPI5+S2UJ+ZaXUEWbDYxUvGc5YrwnoFnHh3K4xeP5cufNX5mGpN2cgI2kxEk71WrzZEJuL3ZTR3BaYilcl2V8CqxgJVQVGizvQ9viT3cZEcFFA3xVzqhgp2si0uLODi6CgG+nrQ39eH4PIl9Oy5DamqH6mVFUTCYZEWaJkkA5amHRMcpJPrpBsum/3ZN33oQ3+3DrzrwHs18H7w0CfCsfDvizVGt1Tm8wU9w4wSQ6NzrRl41QEwMz6JmQsjCngpNRBwgww/D8Efj8Mb7YDLF5TX5eSJ3NwM5kcv4rkjJ/HQ/bcjEOF0Cg28ovVq8BXg1UzC4UR+aR4vP30cXmcEPvHouhXwOqnjqhxYVrUVYtISpmxZ0pTBnAYv084ItrzuVnICdWDT/qzB14CZYIMOZxFAEemBwzfdcDDPV1vVrsY+BeAWw9RLYqVVKpCW19CM1p6AZtiwsrU1oijtgGw9vrVZw/bNriop2BiwndXKdZMMZkC3qUNPT2PW+rYs/W3arjnJiLWrTJAtAwRasttajYMi9LmNaxFmJ1NOYIK8Bm0TjMP7s0jGfAXddVYvlVQQe1nLFPLFKu+1OnHy+TjmiRBLfHahSmZLgGVspwFe7h9OB6pkxiI92OQGzXyNzruyvIyFhQXctGcPHLUKvPPDqEV7kPV0YPOWLSr7uaiaKyT6UzfomJMXj6NcNlvPZbNvfMsv/uJT68C7DrxXbYEvfeDtH4nGIp9iULgKEKkgnyuIYyAg2i5jIX0q5NwwXoKPtNs6sTg9g4nBIS01hITBMr2J7cL+WEI615jFy4OznEsL8M6cP48XXjmLh+67Tcb+UDaQzjUdoN6wk6koSR6g+YU5HHvmBPyOKHxONzzsQiOwciSQgBCZVE3ek4qkNNm7nGJBwHTJpRTcxCmhHyMj2ZWPV8BY+5MVywPqEqauGJVsH2YH0Afs98Ph81ghPqruph9zVeSBLjPZwM2ysemJCyYVzbrUjJf3MzGV7dwOrczXYrsmXtE2GcIAg8WA2zBeYay27jmrecRa+zd2IWUJls04IQAAIABJREFUU9otwbJeLKGWL8BRqcHFQpP2SVvyjj75NDzQJgZSyQuKsGqmSxAua4miVEG1VEGtVEatwmGWRfW6qOtBqOq75Aqn7naqXybhEd8dVdSIzQRkpy6yaelBVnh6WomRHZhWllxaEta8Zds2lPNZBJdHkfdGEd2yD509PQK84vvN5eR90LdO5ssfcQaVSmykyOUKhUff9uEPv7QOvOvAe9UW+MoH3v6uUDT0T/TtGuDNZfMyRYBTJYS9XgW82tVA4J2ZxcTZQSmuhcJBKZZxPpXXAC+lBl9AhdxkViSnYWpoGC8cG8Qj99+GcDymphBrN0NDbjCMV4WgE3hPfPMEggjD62TxTOmtLmMBcyuNV0K49YFX1MWcImfJUcNDVRXUDCPlBAWHAx6HC16HU359Ilu44aYEEuVIehb69ABIXSBi736ZhRq/Bw45GfG9elRBzqb/NuaOtQCvYb6mZdkuJ1ij4Vs8xlYrsxqTY7e3WSzd7uG1abWtNjdzIjHuAuvf+vFNxTTNfBVYqv/Ja5vlPdloqYR6vgDki3BXIeODVFs2mSiZZwWVQgGVYhFVTpuoVVGs1VB01CVPocpQGzJjkXjU8ztqdXjhgo/fKaeEOFxwwyFjeKjfVvg8pYrSjPVJjwDPk6IAr8dJWEbNqSSIGi2JLl46UOV1WSE1Woolt5chN4WCsN1wJIJEZydK2TQ6ilNwdAwgtnU/gpGImjrCjN1MRpgvgZefV4CXz5HL0YI2XcjlHn3LRz6iTL7rP223wJp1NXzpQ29/LBwKfp3MlvouCwPZbE4cAgReJu43AS/ZqWUncynGq4GX6WSBMAcDsmst3NB4vQE5oEqpZWSmJ4UhHz11Hg/ceytinbSbGeDVMoPIDSywBayIxtzCHE4/fRKBeghuPQSRoEsGKzICbTwAxpYWcHJ6HKMLc0jzYBfQraJcrQj4ikxh+V6VHFGu1eDlwEqHC0GPG5vCcezp7MW2nl50xOLw8GTC6QMdcXj8AdEruWAl+BbrVSDkhzPgl4Kg08EJDs36q5EeGgMhdQFL673WXLdW0G1NT2u1lrXIDXZt10gdRuJoKpq1Bo7bdN8mBi0ar5lJpzVsW+GNvmwCbi1fhLcKuGucqszZPy4B2sLSCkorKZRSaWk0ODc3haGFWUyklpErl1DS9i4PGag+GRm3XoapYC4FvJSU6JWNBoLYv3kr9m7YhG3dvXBTCi4WUSHTlqKcKpBSQuJvjXq8i6yXAOxCzUNG7ELVRanB1DTUrDbj583nctJxRosYNdzcShIbvWn4e7YivHmPkAqT98skMv4yRIp1D1kVVSrIZTIE3tF0ofDoOz7ykfF1zF1nvFdLDR869HAo4D8cCAUdZgfMpLPC+jgyh8BrWcTI7jTw0htL5pWcncPY6TPCeNnVoxLKFPAG4gl4IjG4CLwMuUklkb5yBeNnB3H0zAU8eO+tiHclLLeEspVpy5oU2TgOnswJyC7MYujp0/DWgnDrqb7c2VfKRTmQj0+N48jli8KOOoNhdCcS2NbXj/5EJzr6+wTcv/HMEZwbHxd/p0zdcLlR5tRjHtjSgOGCy1FHuZBGMZdGpVzE1kAI9/Zvxk29/ejvH0BkoBf+rk4BGJWYVUO+WkKFskMooId00jtscz9owGwqetnYpV12MEVLc5saCd8I9GmX32CYpfXlmo4z+4DJlmGTchKwA3DLntEo3Nn8tiJbKCmAjK+Wz8OZK8JTp6zghlM/Z2FlBemJK5iZvILRhVl8a/ISLuUy8Hi5P8XhDUbhcHlRo7xAk221BBbVnOWS6PRuuLBr82Y89uq7UM/msDS/gEvTU7g0N43FpSUsZTNysrx75248tGsvNkRiCLu8EgdZd6pWOWrydQ7uJAAzVpQs1+NEzetG1e0S4LUzXtPBxqyFpaUlhKNR2e5zVyZw9/YonPEBhAZ2C7EwwMvwHGZKC+PVYf1sG+aAzHwud3IlnX70J37t15LrwLsOvFdtgS9/4NC9gaD/cDAS9ElxrVxBOpWRTANqvFcBr4TYKIZJbTS1lMTI8eMIBW3AS1eDAd4wgdcvjKSomycunR7E0bMjePjeW5Ho6xbgNZNdLalBdF8DvA5k5qcx9u1hoEy/rgeZagWfHz6B8wtzWMpl4Xe58eotu3Bw3350HtiLUF8vHEElExBE/vKv/gee/e5LqFSKAorscvMxqN3nRygUQyQaQyQSlRMIw4GY5VrM5pDLprA0PQZncgYHu/rwyPabMLBpI8Ib++GPxeAQ7Vcx36LbAQT9SjaRgl/DiSCOCUUnG6PQyfJaXAt24DWgawWzc5u3Zjy0cTa0Fs7UWHXT+aVOFlexb1urs5JztSdZrquOMf5PFbrKAIPAC2V4OB5H6/0l5tBOXsHMlUl8ZfAkBhfmUIkk0LlhB0LhGPzhsHivWfQq5AvIZrPIZtLIZlekCyyfz6JQyKNaqYlN8OGH7sT7f/6n5HWp79Y5dWJqBgtnBvHC8WP41uiwSBQ9kRh29/bj3bffhyCnRvD+LtUcQ4Zb83hQp8zAgaZ+jzBeChr2yclmKCZzdFOplNghU+k0kE/jnpu74YptACJ98t3SPsbtSeClfMIahRSnqe8WCuJ8yOfzXz+2uPjGT37ykw3byzoCX7UF1qzU8JX3HbrDF/YeDkXCEelpL5WRIvBKmr8CXmGwujFCEsoIZmLrccnEVY54533paqBLQe4fiQjjdRN4Pcz7raCwuICViTGMnjmHlwZH8Mi9B9Ez0KeAl3kNBHUpsPGSr+NTPl44kJmdwtizF4CqB5dSS/iHUy9jLpMR2WFXRxfe8+Dr4N+/G9i6QWXu6qYJftNf/PI38D//5cuiLdJYxAYLry+ICJlSIoFoPI64XEbEEufz+lUxsFhGqVxCOrWMxakrmLxwGs5cCm/etgt3bduBns2bERrolwIgddSSE8g5a1J0k88itjtdhdd5D6Zt2CowsZhlkxikuGbAWDNd0bMN89V/sySBawGvDXDbSg52v645KehDw4C18sUp8BWGWKS8UIS7VIPH6LLVqgDi7MglHL18EV+8dAFlXwi9W3aja8MmxOIJNR3YTy3UhXKliHwuj/RKFivLSaRXVpBZXEIqtYx8LosKGTAo/Tjxk//hbXjzj73W0otFM6bGOjmN1Cun8Vff/BouJOcFgPuiMbzn7oexq7tP3A5SbKPW6/Wg7nWhRtD3ewSUq3U14NUKR6d/vVAAHQ2MfZRCa60GTyWP23Z2wNO9A85oH1KLiyInBKNRueQ2USdaZpGo50glk8jm83/8xEc/+tF1rL32FlizwPv59x+6NRTwHA5HI3HKAWS8qVRaDn6j8coQSwFf3b1GV4AG3lwqjfNHX5GmBsZCsvggGm80ikCsE+5IVAFvpSwe3uTYJVw4dQ7Hzo/jwbv2Y2BTvxTi2gKv16ekBjiQnpnExPdG8Y0LI3jm0nlkSyX5Rh/fsRcP33UPXHfshyusJt6qajr1RiemZ+bwO7/3x1hYSEoUA2UKt5snlDDiXd3o7OtDoqsL0WgUkYAfnfEodm7fiGg4hLnFJC6Mzcg8rvRiEnNzc1icmkRqbgxb3HX8h70HsXXjZkQ2bxFppeoASj4n8tUKHH6vZBdT+rDsYzaAtVipLbPB0no1uJoWZ+vSnhnc4jxoJzOYopphuBbTbXUztPTjmffG+6vMBDVKR1wF7GqsOODKcUQUUM5kkBkbx9DYJXzuzHFcLlURTGxEon8D+nr6EOnuRDgUQn93B3ZuGYDP68aV6XmMTkxjJVtAOp2Wpf3i9DSW5+aRzaZQKpH1susM6OrqwCf/z49hoL/XcpeoJL06qlyRPPcKnnnhe/jKxbOyCcI+H/63PQfw5r23K1+xlhfqPi/qAR+qfq8qtOnhrtZEYhbF8nlxNBQ5Fy8YRFcigVouiV09bmS8/Qj3bZZi2sL0tLwWR13xO+NxYRonWFhjWlkul3vb23/5l7+wDrzrwNt2C3z5g0/c7PV5Cbx9vAMZbzqdEZajgDcgOyEbI7iDicarM3LJeLmjDb90FB6XA+FoBMFIWEZic8hloKMT7jCB16umC89OIzk+hgtnzmFw5ApuO7ALW3ZskYKFGpDJQZl+9RpkvKaBAg6kpibwmX98Cl8cHBK/PpnuY1t343X33If8rXvA6EpxIzDonB5PzXj/7C8/g+89/5Iy4nOIJwNN/BHEOhLo6O0V4I2GwjK3ze924+De7bjvnoOIRMJSZHz52CBODV1GupDHYnIZyfk5LPFzTF+GI7+CQzftwUO796FzwyZ4uxLCqEpuh4z7dpL5ajZk5UQIELdIDqaxwu7ttULaTZqavlwlu6EJeE3XmJYUJEi8ndRgkxMs5mHCaUwEo4lUpP5aLMFD32q+AmehjMLiIpYmJvCtoVP48oVh5FwBRLo3oqOnD4meHnQlOhHy+RANBnH/Xfuw5+bt8h0x0/bwd49hfG4RnHvGeWcLc3NYmp5BMjmPXDaNUqmopvw6XXjdax7CL7z3J3VWQ8NfLaBZLAHfewVPPvcdfOPyeeWOcABv238HHt93m7SSV31uwO9FPRhA1Ufgdai2YVtQOjXeXC6H5OKitAT39/ejd2AAs5eHsH9jEIXOfdLEQVbL1cDywoK4aFiAo9TAH76f7MqKSA1LKysbf/rXf319xtp1zjxrlvH+y88/cXM47DkciUUV8PJASGeFEQT8PgToVCDo6jbgVuAlAzj34stw1muIxBrAyyGXfhbXROP1iS6YnZ6UnIaRs+dx6uI4Duzdjh27ton2ZyYTK+BlN1tAeTS11JCcHMOv/MlnMLKQkpPCnf2b8La77kXh4B6RNVgc44QAGeGuQXd+YRG//InflsQ1hVcOSTMLRzqQ6OxGZ28fwtQdnS4EA0EEgz4cvGUnHrj3NulOSmeyeOGlkzh2+qI4I0q1KhYXFzA/M4Pl2VmklxfgqaTx2MZN+PF9tyO8cQN8G3tR9/tQZDGxUhLw5cHJJg+V+6uLZS1Le/7T0nRtxTQx6WupwXp8m6jIJl3WBrxNEkM7IG5zYKjYRT1qh44Qgi6zZumRrtXhyBZRmpyV7/ILZ47hqbHLKDiCCEQ6EO/uRndfPzq7u+F3ecTPm4iHRc/fu2eX2BSnp+fwzHdexvjEnCzry/UacrksFmZnsTg/i5WVBVmyk2nXag74/F586o9+E709XaqzWEc9mhb3SiaD6ndexv988bt4aVqZCLxuF952y6vwxltul5NhnUMwQ0GQ+aruNe3L1pkN9N7SjbC4uCguhZ07d6KjuxujR5/Fvh1dcO18EIVMBrlUSqQ2Xmd7PfVenly5nXnspJaWsLKycuXHP/axjets9/pbYM0DbzQWs4B3eTklINUEvDJBWOfx2hgvjeaDz7/ImH5EYmEEoxFhvEwma7ga/CI10EqWpMY7eB6nL05gz+4t2H3zDg28TBijzmtGDNEhYKQGYGH8En7lT/4elxfT6A6F8fEHXoeFnZvg6ulEQOavqZhIWpCkY83pwle++gz++V++IgeqNEjQq+vzItqRQFdvP6KBMPw+t8RMhmQ4ZhUD/d2461W3o6szgbn5ebxy4iymZzLIE2zYHeV0YCmZxOLsvLSWFgs5uEuLeMNAHx7fcxvi2zfDt6EXNY8XhUoJFVSFEanKt2o8EceD0WqN99am7ZqGCTvg2kfQG01YNTc0fuwBPbzVXlRrZbzWv1uOjSbQZXZHuSTLa1e9DjeccDK3dmIWi8MX8OT503hy/ArK7ig83oDo5ImeLnR2JOCCEz6XC4GgD8FgHbu2bcbBg/vh9/lxcWQUJ06dRSpTRa6kfK/FUhWpQhZzM1ewsrggxTcTqMPv7dDb3oi3P/FGNWfN6Ly6xV08uPMLcL50Cr/9zJNYKebF2cDX/8Tr34ptGzagFgmiHg6ixnhSyXVQRdEKB2IyoJ+ThrXsEY/FsGnLFlkRjR/5OrZv3wD/TQ9Kw0QhnVaFtUJByARXa6awxudYWaJWnfr8oY9//MevDzvr91gH3ngL8GI14LW5GmgpczgweOQl0fqiZLz0u4rvlRpvBzxsoPAGBHjJeJfGxzA2fBGnLoxjx9YB7Nm3S0VDkjlQauDMNgF4BbxiTK8Dc5dH8Ct/8lkk8xV88IHXoDMWx+jmHkRYxKP+LKN/1FRhsYrV6vjUn/0jhi5OyEmE3UsELHboxTsiiEYi8Ds9iIQYclJDwF1FwO+F3+9HgkvkYEiq2smVFRTzbpSrXmQKRSAYQs0XxcJSCisLyyhmsyhlk3CvnMePDfTgdTfvRWj3Vri7ulF1OVAol0QPJ+slM1Jpa5r1atlAWoRtnWrW9GPj47Ux3ibQNY0U+vhtAl5bUE87AG7y9TblCCv91LT/kgnS4uXld12uojI/h5VzF/G1M6fw1NQCSqEtcAdj0iIeTcTQ1RGFq5wB8jnRzL3uMrz+MkKBoJzM+B0lk4viHMgXKyhW3SgWnUjnCijWKljmNl9aQaWoANEpIQt13LxzE375oz8FN725ZOOiOysXTpkB+4UCEmdGMD4+jj97/ltIFfKyytne04uPPP4EQn3dovHy6ao8gUpCmdKuyVyp77LIx++8r6cHHZ2diHV2YuT5J7H/jjvg3XRAOtJKdDLwkoy8VhPg5XdCEM6l0yIzLC8vf/Td//k///E6rF5/C6wDrwZe2oWWl1ekhZNshSAqwCZ+Xh2Sw0YBapW6U+viiVNIz80pVwABtxV4fUFpvc1OTyA5fhnjF0aF8W7s78b+W25CIBrRzga2JwfgCgTh0lIDl+gEicVLI/jutwfRldiAmzdsxFh2BRcjXgHeICModUSkkRqKxTL+4jNPYWahKE4Jdp+ySu4O045WgTufQdDlQDBQQ9Bbh9/MlyN4666rKpePdGMUS6jU/SjUE8jWwui9eTfKbgey8yksXVlEeWUF1dISqpNH8P5d27B16xb4d22HIxxEhb5gVr7dbqnq02YGel7NJAy7S8Gm8ZrW4Vapwfh7LcZsK4wZn3DbzrQWT2+TnUz/zQyRVKNzaBtTk3ippzsZWpPOIjs4jPHLY/i/B4fg6b8T8DAIKYrYQCfC3TG4K8DC8DBCrgz8rmV4nUUEOCXEBNKbMCayTLLnUgX5sgu5ghO5ClAJhVEqu1FOl6T5xeOgzbeI/i4/Pvxzb0SARTIJwjFdZ1VxnrDjrHd+Bb11N0ZmZnBxYRq5Qh4Htm5HV3eXMF6yXYJ2tc4siAbjpURA4F1OJgVUN23aJJIJJYexZz+PfQ88jFp8q5g7yP5pGSPwkunyPtyWfByLaqmVlWQul3v0XZ/4xMnrw876PdY08IbCnsOxeKzPVGaXky3AGwzImd2KhWTRS4BXVewnzl/E7MgIYvEoQmS8LLARgOMd8ERUOhlbO9NXLmN5YhyTFy9hcGQSXZ1xHLz1ZmG81JDJej3+oAW8LreykyngvYjsRAUdfZvFrnV+cQ5D1SLCobCK59Oh6BJYwsmwxSr+6ctDmFuuoUpzvdsFTywAR8QD5HLInD+PsC8FjyOFkM+pwIFj4jkFQ/yyqs2XB3ipVBaNtxg8iBx6MHDbVvRsimB5KoWJoVkUl9KolfJAKYXuiafxM7tvRmDHZvg29QEstjEwhvqynwNE6flU44jkdXQhUEm+zeE4TT5eG0u+auy8YbwmR7fFtWCKa1ZWQ8ukDCM7SBqYhNOoBgmCLq0F3BqOYgW5S+PIXryMzw6dw1jXfah7Y3B6AvAmItiwuw+xjXHMT6xg5vhlhJxz8OVOidtFmlO09i4pZqgLy1TAW0S2WEcFcWSKMURu3o06u8NSRZSSBTiqFbiqZfTGnfjJt+5BgHqtjfGaYBtOidhYrGJTPIF6mX7aIkrFPMr0HrNpwqssfxKMzv8kDL0qUgM/JzvWlhYXRbbatHkzwvG47Hcrx59C7947UO/YIqsvbhdhveWyeJK5iuH2pad3ZXGRjPnlTKXy6E99/OPZdVi9/hZYs8BLV4Pb2w54IZODOWeKdrJ2wGu0yIWpGYwcPyFLeHb8CPCKxqtjIQMhOVgyk5eQ1MB7bvQKIuEA7rhjvwTl8PldYlkLKeCVRg2l8fJnfuQ8sjNAvG8jfLEo5lIreGFhRlh4MBAQiUB1nxF4XShVavjSs3OYTzlQqADFch2e7jBC/TFkk2ksv3IWQc8s/KUxKd7QZ2oeTw+z02GCcZhRTPAtopK4F1n3bkR2dWD/wQSuXF7CwvkFFBazcDuq8DorcCcH8drSJHYNbIRv92a4OmLSNcWJBZ6AF15+NomXNMCrB2/apQYjQehciVY7WWtojtWUYQdeE5Kj9dDWpgpr6oPRgs0wSelKq0hjQLlUlI40xjpWF5eRPX0eF1hQK0dQ6zqIct2DSt0Ff0cYid3d6N/eiXMnlpC9uIRg5Tw8K0fg8/BkxqKn/pwOlwV6qmmhgGKhjLx/K/LlPnS8ai9CHRFkplZQms/A73Ei4HagJ1bHWx/pg8/LxBsV/UjwJgAyyrGQy2NPMIKeRJcUAkuZnDDhEpm72ykFNUoT3EQE3orOnhZ9lxGO7FhbXERvby96BgbEKkb/dmDmFHyb9wPhHmG4dDWQ7RJs6VeXOFVjRVtYQDqV+uShj3/8t64POev3ELKxVjeDAd44pQaGOFcqWF4i461bwGtcDarRQUU4mlxbVunZvTb43POIx6PKUsYCW4Suhg41gcIfEp02PTWGxdERTF0ax/nLUxJoc89dB2Tumnh5OTYoaIBX2ckEeOt1LIxcQGoaiPdvQBZVHLs0hEI4LnowQdcaesmUM5dTgPapI2nMZWoCvPliDe6OEAL9CaQWMlg4PoKwdwKB9El4fGyo8EsegIuVeD0OSJigHKBVlCsl1DrvRK7jTkQGQnjVXV2YHE8iNbqM3FIerloFHmcNvcEVBIe+jldHe+Hd0g//lgFxaVRqdTg9TrHlyagjgi8bPczEYzvwGu3Wbi/T9zNRhE1arw6jaWW0dv+uSSSz7iPVN5WPK4yYvzKFV0sMDLShJQ5OVHJ55EcvI3PxMp5ZnMLS9ocwn+9Auc5kODcCiSAi2+LYuK0Lx16cQ2Yqh+DyS3AtHVWskPKN+Zw6l4GvIxN7y0WUi1XkY7ciU9qM7tu3I9YZQnY6iUoyh6DPCb/Hgf6IE4/fF4OPjRBmgKXJ0GVSWCaDhfNDePCu+9EdT6CczaNYKqBMScLBmWvM362qVUydQ11VYU2Yd7EohTV6eAc2bED/xo2iyV8eOY/t3mXUem4CAh3ibRddWUdC8qTP7UbgzaZSLLbmlzKZm3/6E59Yz2e4QUBd08DrMYxXjy1hcaMZeJWPdzXg5c545MtfQyLRAN4A7WQxDbxkvHUHMlfGMH/xPGbHp3BpcgblOnDf3QcQisdkEgWf3xMMN6QGaRlWyf583OJkBc5oHEfHh5CvlBDt3gAHp1xotmtGvXMJzxyAp15YwXSqjlyhpjTeWBCevjgy+Srmjo4hHEjBe+UL8Li5ZHTBTR2Seb1aQmlUz1UBx7PhEWTjd6Fzkw+33N6J5HQKmak08qkckC/DVavhwIYaunzzCH37RfT0D8C7ezN8HR2SC8GzjyegO/TkBKGBV0cKXpW7a4DXBtAGeJs0Xnv+b2tRTQeMK5xtHvNub5Qwuq5k4ZJJFosqM7dSQ3F5BdmzQ5gaH8fsHfuwWOzCmSkVNuMIeBGMhhDcEEXHQBxnjy0gOV5AMPUSKtPPqm2r2b3ke2iGXauWVWGrxJNaGeVNP450IYreV21GOOBCeWYZ1ZUCvC4gFHBhIOrA4/d3wO1SiWfc5zienXIF9dnU1BVcOHVMTsJvfs0b0RmJgxGP5Rp9JQRbFtLUaCFhy7ZISOrDUlhLpdDV3Y2tO3fKPjV57iS2J+qodt+Ecl01DTGJja8tLe4ej5pgTH03meRwy8+/5UMfWncz3CDornnGq4A33idTIsoVLC0sKTsZpYZIWPl4dR6vhJbTX6vBwMQsvvTVryMU8CHC7rUYHQ0xBGIMQo/DFQjLV5G5Mo7Z4XOYmZjG1OwCkrkiHr7vVkQSHQK8ZLueUBjuQBBOkRo08NZqmL0wjOHzSxgrZlGoluX9hf1BhDZuR43z4fSBYMZrE9ReOpvG4BQ9olXUGHoe8SEwEJee/cHDYwiH6nCN/L+ol+dVqLoAhMrqJbuhykuNt84uKocXvr1vRdq5DTff1oFNW0NYnEphZWoFjlIFzlIFjjJw324nbtoWwbE/+Uvs7+qHd/cmBPv64PAHBHjJ8sW9wQKlnmjBXGE1F64lAN10sBGA9fY2+bxWkU2Jw2pXb9c4YdisPZ/XALAEkCsHg0zu1aBLpit5DNU6qqUyCrOzyJ4awqmZSWz5qXdidDyHIxfrALvC2Jzg8yA6EEfnhjgmLmdw4XgSkfollIa+CFe9LDnI0sGng4OUR5iuhYoAoMPbg+quQ0hnHdj/6k1wlqvIT62gli7BWakhHHJj3wYX7j8Qt+xkZKqUKsTvm8tj7MRRTC3MyuehI+UND7wWHZGYsNuqNEyoke/8T1grPxsT66gz68IadeJ4Rwe27tghReLpUy9i+6YY8oENqDh94l6QQZZsxDFNE6WSvI+VpaVqOpV605s/9KGvfR+4s+bvusYZr1cV11zKFrM4r4A3GAwgwPwFaaBgLm9zy7BKKFOWshOHvwN3vSrAS+mAwOuPxtTMtWBEAe/UOKYHz2BmYgZzC0nMpXN44FX7kOjrUd1uobAAr4tygwZek/o0NTyIp44Oo+zyqCwDHSDe2zWAcicj/FRhTMa7S8HKhcnZIr49SJ2vjir9syEvAn0hRLqjOH3kCorJEpzp4yhffhYeR02CgVTgi3p+CVsh6yNTiu+Ab//bUCx5cP/rtiASBFJLWaTnsyisMLugCkemgLc+HEck5MFzv///4Na+zQht74dv+yb4vGH2K8NFZi0j7BVjkinI9gbrs+YuAAAgAElEQVQJ7ee1wnN0B5slSdg62uyB5Y1wcdXZ1SQhtBvxI4Cr55YRkPTEB8kf4C8HNpJVMrxmdBzZoUs4k5rDlncfQiZbxpe/lwI3AotW/rgf0e4wIp1hZPLAkW+MwesrozT4RThWRiUfmScXmXunmbdq+2WwvAuebY+gFr0d/oQXB+8ZQGo+jfxsFvVsGe56DT63E687EMCmPoYt8XE1ATv+yuj1S6MYvnhOhd5o6cTv9ePxB1+LjkRC4kKtkfB0IJDtkqmWCbxFeY7lpSVh0LFYDFu2b0ckHsfF57+Bg7fuRtrRiVJdBRTx+cmG2UQhoVLUk8l4l5YuJbPZR5/44AfH1jyafh8bYG0Dr897OBZrA7yhgFVco+vAhNmwBVgYmAZeAsC5l46inFpBOBZG2M54I3G4QxHRhGknmzh5AjOT01hMprCQyeP2fTvRu7FPORsIvuEIXCywScuwSn0ii5m+MIynXh5E0WE601QWg8/rQ6J3M6qcZKGr5xJOI7qnA5//7gpSpRpctMYlggh0BuCJB5FaLuHE02NwhWtwXPo2KrMn1SBMfi6rMYExKzXA343A3seRwgAGNoXxwMMbUCuUUMgUUMgUkV0uoZIqYMBXx6vvjCKXzuD03/w9tsW6kNiyCZGdm+DliHtmB3uYIcxBngp4GdgjwzUNq10lFN3owYbxWsDcjvGayMfWkBybpivZN/J3pe9K1KEBXWG/ZZEZyvkCcpfGsHJpHJOZZYRf96hkcXz7WAYzRSc8MT9CcT/8UT8CkQCcfh+e+84kZieyiDimUBj6GhyFBT2kUgW400vr0Ezc3XcrsP3VqGWduPWxzYjFvKgsF5BPFlBI5lHJlRD3OXHoEaWxytKeTJkWMOrQ8/O4MHgS+UJegNMAc9AfxOMPP4ZYR1yKefL5CMra/1uW5pCyAG8um5XCGrcpMzs2bt6MaCKBKy9+HXtuP4DlWowWZvnh9menpei9XCFUq8KYlxYWPuOZmHjvo5/8JHF+/ecGt8CaBd4vfPDQLQGf53A0Hu2kt5QsYHFuUTFeAm8kBD/jE1kU0ili7YB37NywOBbYRBGKRxG0pIYY3MxfdXuQZdDNK0cxNTGN5VQGyXwROzf3Y8uOzaAm7AuH4Q1F4CbjpZ/XG1AaL4CFi+dx9NhlTJSLMlNLxv7ogk1PtAOeng2o8v3JjDUG5agJDsPjRZwYL8MX88HXEUDF60Yw4ofD68WZE9MYH0wi4CuhNn8C1flB1EspiXp0OOuouwJwxjbBv/lBVDy9cHvduPuxLYiGnHCVyv8fe28eJVl+Vgfe2Pc9cqusvapXqaWWAbFoDAhkwAIkGaZbcMBGg4ERwmAWH5sDPofB4xnb+BgYnWN2WUJgBm2MZGvfSmqp9727tq6lq7KW3DMjY98j5tzv+/1e/CIqs6oQ3fyTWTqlrM6KzIp4Ge++793vLvBxOdTuobnVQWergW8/FsVcLoDS1Wu4+KnPimng6N13o3B4PyLRuNQPaQccJ1078ZopWyrkR9m7bkbvpKzMy+g16gfvPW6yF2yzhLc0MyHjbkiOcq068XqPM1SDLIyoAOjQoNBBdekals5fQKPWgP91r0F8ZhpLpT4eu9hCJJ9APMu8gjAQDgntU20M8MTnF6QhItRbRevq1zGoXIO/39J+CdYtRdIITL0Wgek3oNkO4/Br8njtG2YBaXZoI9jto7PVQnurgzccCuOeQxFvmhWagVK3Wh0bF8/h6uqiLMkIvJxmyfV/7xv/IQ7M75fFmg3EsTI0Poa/LVVRN441XrjZPMEFWzyRQOOlR3Hg3rux3o6jP9T3E3W7VODI8ZH2Cx+q5Hc3Nn7wH7/73Z++TbzZe5g5ArsWeP+/97zj/ngsTuDNSotDt4v11Q25oivwjjjebYFXNK8+LF1ewNJLZ0XL6028lJOl0ggm0sJnNlYWcfnJx7F4dRk1bp17fZGq3XffnWKioPY34gEvJWUj4F27eB5nn72Ktj+MS62SKRtQiRKphVQ8heLcYTQSMZWUmWbhRquPLzxfwyAaRTQTRS8SRCgeEi3w0B/EuTPruPr8MgIBH8JowN8poderYkjwjhSAQB6tlg/x6STuf9N+5HIRoNNFhJGBRjjf2Goj1u3gO45HySZg7elnsXXqLALJGA4eP47i/nlEaQihRlgKGjn5hmVCF2pDpl2n6sdQHWOtw25mg1n+2YhJG1p+Qw6vyKdM4Plkbbub5yBONZ1yBVDM7fygw41/E5XVNaxfWUCvVEV3pojIXXfIBPjwuTpa4Qji2ZholLt+Pzp8PZEwSlsdvPDIVTTX6ojRYzAoYdDelAbiUCiFQSSHDhLSh3no/lncdU8RfvbZEeyZ89thcL7WCX3f6xKIR3SpJoDJ3Ih6A9cunMF6aV0AlwoJPndaxb/3W/4X7J8/IG5FaSCWQBy1GuuSjaaLrk7NXMyZDF6GQdGQM7dvn1yQ/CtnMH3kCFYbUbljo+2blJjo3Tsd1fX2ethcXb2wEonc/eCDD5q5eA9Xb/cI7GrgTcTiJ1IGeMnxrhngTSQYfGI4Xk6T20y8MpH6fNha28DFp55CJpNCUibeLGLZDMLJjAJvKIzm2hJefuxRXL+2jFazLSK+Wm+AN37Ta4QXjjBSMpmWiTdII0WUwKuxkOuXL+DFJy8hGs6gOuxigeCLoTf1EnxnUnmkpvahkYxr55fhFS8sNvHi8gCxfAzDWAhdMgrSOqwc68pKDVdeWEFlrSFV4AKGMhL6EIoHMX08hzvunYaf1THtLqLMLRgORMUw4Fa+0sLrZv0oJnzSKVb56iMYNJoI5VOYOngIuelpmZS0Xl5Db5TnNZIys3iyBgpZsk1QDhL8Y6mQiYog+ya/AXjtYs1ROnj6XRP3SOWCTsKmEp3cLpdtvC2nRZjFjaUSytevo7W8ji6rc+6/V2qO1qo9PLfYRzAdhT8SlL4zcult8tSMX+z5cOHMKtYulNBr9SWmkb8IhryryE7Fceh1s5iZTUoDhSwxuz2EGK3BO4nNFl4z7cOxOXWrCY3Aix4n3euXcXVtSfTRwvf2egK6b3rdt+DYgcPSQCFNw1JAqRSDdbwJeFNJ0e6g3mhIBi8BmLnMDE2aYqFlt41Y4yqS07Oo+KfkeWvYkZoo+L3482g1m8Nqufwz3/WTP/nfbhds9h43OgK7GHgfuD8RD59IZ1NZXtUZC7m2tiGpUiyvVKrBZPHuCLx+CUQ//8QTSCXjUmBJiZioGjjxShh6GOxNO//1h4RqEDcXfNhsdfDt33QvkrmsoRtSCFLZEFW6Qat/fNi4/DKeffwCwuEUkuEoSv02LtRWNYmMVUCmHTgeieLI7GG0szm0Q2aKhA8vLXVwqe5DLBMVGVTfK0AMiMCfwdu1ehuDdh/D7hDhoB/xRBjhOKvkA2h1+yL0Z/14hMBN2O/00al3cHdmiEM5+Qy6K+vAMy8KnxueyiE7N4dUoSDTkg3npmuNLchqb6akbEQx2Gofu+CzAKyv0wC3Q0l4igbdWnmZtXScjcVBOnIypRlsVKRZsAkPahZrzBM2VARBplWporq0jM7yOjrNNmpH54FiTi4il9a7OFMaIpRgRx6r1X1oD3xCq0RjYcTYv9YdotPsoVHvgtyqL+RDMBpCMhmBz6etFn465IZDDePpD9Eot3Ao1seds6rj5muJ9oYI16o4+/IZVBu1UU4DO/AGQ3zn69+IOw4cwcD2rElfnCaRCWjLslSNF2KuaHckkpJRkGwIyWaziIbD4oT099uYijYQSOTQTczr+4wuSlnKdQU5+L2btdpqtVJ581t++qdP7wHq3/4I7GrgTcbD3sRLL/ra6qbcenPitRyvCP8lyCYiIEpAtEBAZUOdgeiPP45kLIIkw3KyWQHeSFonXi7KmptrOPfQV3B14ToGfdaIA5V2F69/7R3IFPNCNdB4IcoGLtjI8wbCMhmXrl7GUw+/hEAogUQ4hlg4gvKgjQuVValcF9ODVLWrIuHumcMI54uox8LoUU409OHUcg9lH2mGoNTCNJk/wBogTnHwIRoOIBsNIRZk47DWjbd6fTR7fVRbfTTb5Dz7iAZ9MukOW33sj/Vw13SQlbXorayj99QLGjWZTyNazCOWzYq8jsdMviEnaqEaSDvoMSTw2mwGeesaA4VQCROpZV52g814cBLKbFbDDcYJF5DNuTFqGCYImwmX6o1+VxZR2jrBl9VDp1ZHu1pFZ20TrbVNUQHUj+zHMJ+RKffscgfXGgH4YgH4QwG0e2wapg07iHQ8iBhrpEK8uPnQI1j1hyi3e3IxC7Lpg2E4NOywrqc3wKBNA3EX98wE5AIXHgDhZgvtjTWcvnZebb9Gx8tJN+gP4k33fTMOzeyXnyvDiThd2wuPTLz8n5RRavEp6YpWqy1B7FulTbkwFvJ5MdFEIxH0W1XMpfvoh3NAek4Djhigzq45w5kzVa1aqTy+dvHiWx787d+u/e1hZ+8r9oDXUA18Q66vbMBP4E0mRqoGoRqoP3WC0E0LBd+QtGyeffRRxMJB4Xhl4s1y4s0gROCNxNDa2sDZL39JgJe/CJClVgf33X0UecY7pilBIydMLW/SC8rh47auLeCph89gGIgiFokhHokhGoqgjQHObl5DrdvSPFvLj1LnG45htjiLbHEO5ZAPTb8f18t9XKoHZDrrEVh4svv8CPl9SMdCSIVpUaVfS7W8zIqtdfqotfqotblM6wvFMGz3cEfej4OcdNst9M6+jMjGlnC5kUwS4UIGYU78ogZRPTInYgFao99VHtrW+ugFw5OIucA6qed1l3B6IL0JzCux3JHblVltZKawsjIpvjR8cJ90A5HXJwskannFQszGYCaylbfQqjdRTsXQOzQPBIO4Vurj3CZrjwLS6BuKBJCIBpHix3BAAtQlSxdDtPpDUZpUmx10+e+QeugPpP2ZvPLRJDCf9iM6HKA48KO8sYKL115Grd1Q0JWple6zHvLpHL7jtd+MfCojnC7t2X0WXsqUO1oeknxV4FVFBCVgzAIuVyoET61zN8DLP3e3VrEvB1T6CfgzsxqGwyNHdYSRszGNbPH69f/wwK/92m/sQeg3dgR2N/AmSDWkhWqwwMsJklQDk8Zs9Y+E5BgNqgCGLHkUOBgkc+bhR2QaFNuwAG9OcnlDbKGIxtHa2hTgvXzpqqoS/H40uz0cODiH6dlp+RoWSNK9JsAbM2HoLNVcuoonHzqFvp/dXVHJdeXUy340/vvnNxexVt+SRCsPwMx7IRNP4fj0QfijUVm+LTWBF0t9tBGCP6yLrWjYjwxdWLT1skF4qE3hHG4qrR7KzS4azT76rZ4Awl1FYDrUga9UQejKkhg4wkxlS8QRYNtwkk3LablDILerA+TQKBrGKQPhbgU/9cKhdIPGWHrqBle/69S+30A1TOTwKhALpHpUhKUkFEms7lepB+lWE264b3RfMjoq+DabGDZa6HL6rdbQrjbQbLdQTUbRnypgtRvES6tDtBiYHmG4fBAZXsxiAQTExKDXiM5giEZ3gDJbLNp90Un3uwPE0MV9xTDmIkNEW234Wi1cWLmC9a0NXZI5Obzkc4/OH8H9d7xGlqky4RJYCe38R0gtyNcoUBPw+9Rz97oC2O1WG7VmQxLJmq0WisWiUA1UynDJVl26hLsOpbHS5h1YRjl6XhjEVt2XUJ2N9fX+X3/iE/d+8NOfPveNwc7eV+1a4P3Uex64P5wwVAOBl51SQjXcCLyyXHOB12zkSTXwpDj18CMIDXoe8MYJvDLBEngT6JRLOHviS3j5woLc3vPfaLS7mNk3jX3zs0jksmK6INVgrcPSQuH3o7p8HU9+5UX0fFFZcoSjEc1oCEWktocnX6vfw/m1q1gub+g7WojK0Zubj4uFIkgnM4jH0qgFErje8GO140OLfGQshEQoiFDIJ11j/AZMJduqMZGKdTdbSPU2kB80UPT5cTCRkWqbYIButLDYZwOcbiMhqZoJhnnhoH1ZgU9pAtUhq4qBCzMjrzINGSPwHQGvUA/GMGL1vva/LSfsZvGOaAQz2QqfO8EBW87XAWQBXqPtFbrBTNOc/oUjpba33cOg2cKAQTGcWJstsdESxK5UN7HcamHFF0UlUMAgmkEkFkI2GZJGCLn0+EQxhoaYH7qI8ucfAmbiQyQHFXTaDVRrZdRaGnJjAdfyvHxKh+cO4p6jd8nPUW7/zaROl5ptqLCPV+1uH4z4tMDb7XRF98tqp7X1Nfkes3NzktFM+ofce+3yi7jzjn3Y8M8Jraaaa/1ZMiSnWa/jyWef/dQjv/M7b/8Ic3f2fn1DR2DXAi/LLkccr18WDhurm8I7JoycTCZe8rvbheRwSjNc5MUXTqKzuSZUAxdsMvESSDn5EXhrZbx04ks4f/ZlhAXgghIuPjVVwPwBAm9O6AmCbihOI4VpoSCHvLqIx088j96QoKuNtTRPhMIKwgReyXwNhlBt1rGwvojNekVOYFv6OAZOBnjioQjirJ/v9dBo0Q01QMvnQ0eq1/2I+oZym5wIBzGTK+BwYRapWEKziAmegYC2CfOkDPpEMuYLh8SlxrsBmSh13hTLrBhP5JipAcQCJ0Fe/l50roZ2EEpB9b1uPq+dhMe/Xpc9Y8oGs0CTzAVDL2iAmfs4M/ZalYNHUSiIKcesE7lMygTkjhZf+hg60+2rkYDcp/SR9VGuVnB1bRnLpXVUaTShYoFhO4OBBKqT1okHaX6hmSSEdq+LarM2RrN4ZzEXbv6AZEJPZYu48+AxFHIFDFhkKfSByWBgGI5JZ9N4S9NUYSdeTu3GrcYMBwIvaYa19XVxq7FjjZOuzZWovPQYjtx1DJXI/huahBkLubq62nviuefe+u/++I+/8A0hzt4XebPRrjwU48AbkKSmceBVAwXr3T3gleofggItwwo+BI6lSwtYOfcScoWs5JnG8zkzwWYQiCfRa1Tx0le+jHOnzktMYDQSRqPdEZvxwUPzSOYVeGmiCCUIvHGt//EH0FhfxmNffg6dfkioBgnGYQYvywb5W4LQR4HbVAt00Uez20aj08JmpSy3rDWpD1erqJ2mCCwC4qEQErEksumsxAsmYwnhk5nVyxB1PdX1owAc/0hawizNyC8KrWCoA1piFXEVTMckYgZ8R0AryOzwvNrBNikrc0NyxDloJmXFxRGdYPW7OtBSVGX/fgS8dhmnCKuGClIN4mazlUR8WuY1yAVAR0qRf5Ei8IkSTekC9/vYNDQuwXj8O70uKrUK1jbWUCqXJIe3wam20xaQtPQQKSzafVPJFHKZHPK5AnLpLKhW4d0Nj4fQClQoiImBgGqWg0Y+J5+3Sgb5qBZh0e92umi3W6xfx/rGBqq1Gubn54Vq4HvJGm+2Tn4Vh++7H83orD4/oyqRGMpWCy+cPHn2saeeevMHPv3p5V0JHK/Qi961E69QDfHwiWQ2neWtFLWNYqAwE680UJiQHAu8on8VnlFBVwAYQLVcwblHHkGewJvLIiHAyzD0NIKxFPrtBi489BWceeGs0Ays2mlTVhYI4o47DiNVUOBVLa9JKRMON4DW5ioe+eIz6PS0ySHMCMmoAV4GqNOCSwAm7cDJlw4x3tYzf8FMmSLdMtOp8NLdjtdMLLSE1v/KSSt/JA5ZkFVoGr9lV6mvgB/1v/JnmTr16+z2W9GRoKr0xYi7NZU/5t+V6dZzo40mYtvRpkBLVYSjgrALuZ2Ad+LzSr2MXof3Z+9xhpYwFISddF2Lsh4a8aCZ+ncFY/5W/bPNWTWnFS9QfF38vO7s9HWaxxII7S2+8NGe/lj1xXo9YKKu0s7Cs/K/zaLL2oSFHrGuO2uckJofG4zD7N0OWuSlazUsLa+IoeXw4cOiRLF0QrvVRGT5eaSO3IdubMpbXvIHyx0Ik8w+8slP/uYffvSj//crhD+79tvsauANxUIiJ+Obn4J5Ai/BgSE5lJONA69pzLWKBgd4CViPffLTmCrmkMplkMjnpXeNygbmNbDC5fKjX8fpZ0/KGy0ei8iUtUVlw73HkCpQfmUWcmbitQllrdI6Hv78k+j0AhJaHokytCeqNAOB2OQfhCIhDaAhV2cTwGzQDMHPBuFYQ4LIsVTmJbAoU6bhh3VQVGA1dIEZYY0jTD8rN/JKCqvrS4DC3t6b7yE8rf12Lp1gpuGbLdc4bUtwGe8wXEA2E7GJk95ugTaags1FwQFUSzuMgbFDQ9gJ1qKCu/gTILZ/QUAl6Nqp3kzeFlj1GOrC0Pvn7URtOXhzjIVjtuBruHGrtnABVmMsOdnqMtAuvbx2ZNM2IVSETLzWIkyaoYXN0hbWNjdEQsaJl3dQvGvixLt85RKOp1voZI9iENaAJ3ONkNCgp559tvnVJ56Y+8gXv1jetYj5Cr3wXQ68XK6lsrz69zo9rK+uG+BlLCSBV/vWtIQyYiZJbczVfAGdxPj7yS98GdlYSNxrSQKv2IYzYqJg79rC44/g1FPPC1Al4wySHmKlXDNa3gLiOdX+igSNbQ2mhaJd3sSX/+fXMBwqzaBUA4FXG3zlN8E3EhZHmHB1XIiIO02txbLYEveYNv26ul+rsbV8qj3ViA/2zeGBrJkO7e30GLdq/05u8W3+rfK3FrRHk68eM+FQ5Y/2oyK/nYDVGjwBuBJd6XLEenHwqIUxt5rChj6f0eO2n3zN4/glRq86Ak5zwdBnp8/ZOQF1ipVVnGC2vX6RirnhBDNSL3f5qQBr6Q79s12c2SAf/WhC22XqNaDLdDV+Xi58+lHoBfm8yWagdrfdlqXayvoamu02Dh08KGoGto/Ihdrvx+rZZ3DP8WlUgjMSB6moq1eIrVJp+MWvfe0//6f3v//fvELYs6u/zS4H3tCJVCaV5e05Q3LWVxzgJdVgii4li5e/xTyhCyUFXgUG8r0vv3gK3dK6mCgEeHN5RNKayzvsD3H1qUfx3CNPCfAl41HhWVe2anjdvceQmSLwWl7YAC+VAYEA2pUSvviJhzAcRnSxFtGFn0y8BnglnJqOMJl+NQ/BUg5chskSzFAPHldqc3AJYrZ23dHFGvZgBFxyDpqpzFMGWIrBTL8W4DzaQW+t6dJSENOULnvLPQLcEZAq+6BTsv69s4wbswyPdLwWIDyAHeN2HUD1wNdQDhawLQo6SzrR2LoctZ1eHfD15njvRXmf8V7nDeji8dEG1Cyt4y0EXecdl2UmYUzkXCp3G/to6AfJ3DU/nxG3q9m95JNbrY4s1ZbWVqWvb35+nzozDfBy4r365JfwD779DdjoptCDOufsxfXsSy8tPfTUU295/yc+sedUewUuGbsXeH/5gftDAQu8IQ3JMcAbi9mJl51rdK6ZlmHDk7o8L0GCv5cXFrBx8QLS2bQEnMfyBeV5Mzl5Ay89/zSefuhRqTxMxuMCYmuVOu46dhD52SkFXhoPqP2le02iIYNoV8v4wsdPYNDXCvYIq8NFVsautIi66jzg1UlXgJeyNeGkR3yvXDD4eXPrLtPoxLRpRsOxaUdPPjvJGh5Ch8gxLnjscR5HbPnb0bQofxJzhENz2M+NTcCvFPDaG+bRNK7DnLkg2CWbBV7D43qMrbkgWX5WP46PvWOTsJ10RxzL6J7dJKnZ7AhRf/BC4XC8spw0WRKWz9V6Ihd4RzSDtiTrMk3canQT0gBC7S6XYpx2W02srW9Ijfz8vn1IJZPeHRSpBr4f2xeewOHX3YfVZgxDX8DjiOnY+x+f+9wHlweDn/7IRz6yJyHbA95v/Ah8ygBvMpPMclLcCXgt1SCW4WBo1EAh2/kR5cCm1SvPPStKBS7YkoUCIpk8wumcgNvq6efx5ImvyS1iJpWQJ75erWNuuoB9h/aLsiHKWz8PeDnxBtGpVfCZj30Bg35EOGelGyIjVYNpdaCywVIMbHuQUklac0VqpqYPuWCIXddRDbg8r514nVtMb5o0h9oFKzsNjcnVXO7SUQiM5GN2Ch6Bl4DwmJxsRDm4VIO7nPPAT5+geZoO5WB45/GX4lAO5i88ufOEJM2bSARfLb0wohx0gDdys23oBzPY6/Oy38MBeL1qGa5cFnQ66YoO13K4lkLg8syEtgvFYKZeXbTpf1uKwUZb0iwhzcBSAd9GpV7F4vKKvH9mpqdFycK+PuF4IxG06zVEyy9j6shRrHZS3vPgxHzy9Onm488885q/+PznL33jZ9zeV7pHYNdOvB/+2Xfcn0nFT6QIvOFtgJfuNUM1WOeatiZozoDIyeS3poHVymUsPPsMYsxsyGaQLBYRJfBmsvAFQtg4dxpPfvGrcuuXTWnEHmU+zSFw993HkDQLNnF9xZNaARQIoduo4VMf+gz6ArxxbT4WjlfjFVmbTnOHLEgkfpFLNg0aJ92g+QhKjyjw2hzckVtM5VujW3cLpN4bRQDCcrWu6sEEzjgUg6gjDBg6Hg5z6+3Yg+2tu50KHT2vt6wylTkjznfET7tAbsdJ1yyhnK+dyS02G4phxKMY8BtxmZaf9qgGD0HNdG6XZXK4VNXivQT3GJk9pRwPH4/e6FQjWI545omlmq0jMqDrUQsOwHqcrgfQqmAgYPM9JfZgA7xsIua0W9rawlqphH2zs5LJwPcLaQbSDbxAU2teCGwB0TQqvpxcCGgvXt/YGL546tR//j/3uN1X9Mqxu4E3HT+RSt8e8DIOUMNdDPAaAwVBlTxqs97EpaefQiTgQzKXQbJQRCyXQzhTEE1u6eVzsoDj4/LZlAe81XYXd999FKliAXF65iVOMikZD5xW+60mvvw3n0WlrpZOnihCNxBsSTlQRkYXmQCvho1L7KKZeHXJ5gKvTryeJVeAxF1uERI8GYJDOajcbDRdWp3siAdUoHUAxvKk5i3rSalGSDWSVzlZEwpmE/kNhpqwz9vSFR7oyoTrQL1HG4woBXe6veEscikAGVOlL8I+c49ZUJbBTOhjk65DPXiTvgFrZ5Mmz0Em25Hxw5ORWT0u/z+epooAACAASURBVN6mrJkWZJsVPJpwzWRsFmmi6zWga3MZer0uWGhZqdewtklzUEBcagzEUf13WOt8uEsob2Bfpof6MIFqL6J9aqUSlpYX26FB6y2/8N4/+forijy7/JvtXuB9zzvuzzCPN5XMcjE1STXEOPFyuqSrh29OAd4RiIkyQEwUCmq0Y7781JPw0zqcyQiQxrJ5RHJF+CMxlBcu4unPfwnlchXFfFq2yJxcSo0Wjh3Zj9zstMjQIumciYdktm4Y/W4bT37mS7iy3EY8rkoLT88boWVYAVjKJGnwsE0UkgKm+l0PeGXBppU7GkRuJ1ClHqxUSowR4xiqM6yZbO205k2UnvyJ2ih3zvUQ15t4LaiOnXfbcKhW8SCPn1RiOLpfHV4t1SDPclzBYBdq3iVjNN16o6r7nCcB2MKv1YQZLtp9HZaKuBHM7WHU5aM5iHqMjMFjTELmGCHGgNcBZE/lIBOwUTGYHAWWWAroMl9Csnq7aDQaKFXKMu0mYjFxwgm9YKgGanj5q7O1grsPZ3BxqYl6PyS1QL5BC8f3JfrFROTNR3/8V7+2y7HyFX35uxZ42UDBIPRkKpllfQvfqGvLG3KSc7lGmiGWGJVdCvBy2g0pzzsJvDyXrp85jcb6GhLpFFJTRcTzBUSyBQnKqV5bwHNfOiFa4amCeu0JGM12F7liDjPzszIlsxo+ZPvXQmGJJ3ziM1/A5WtNaZGNytRrZGVmseZJysxUbmt2hNu1pZJi8XW4XkuVeBPvaNklC7edgHd01+4pHqwudhvI9d6s3rR7k7fviDOl0MI+H0de5srIPDPCCOxHFwKLcSpr2wb+bnwWYnTY4RUY84N3SCaWZ6OTyP5p4vs4+l7v4uVxyoZqoC5XXHDmozfxahuyBVn5aNsyDP3AyEer56UenZMuwZcSshqn3dImllZXkU2nkUwkZEkragYDunxdvcoqvum+A3ji9LrEV87nwziyL4NI0IdmvfGjd/7Ev/qbVxR5dvk32wNeD3h70jLME0OBNzYuJ3MmXo00NL9NWhknmK2VFSydPSVhOempKQHeaG5KVArsXTv90EO4srCI6UJGHGw8H1udLhKpBGbnZ5GampIpmcArDrZwVJYmT372c7hwuYE4LwYytcQRMZMLp3VLNYwmXs28FWokZLhdcr1OE4QnhzPAO5JvqZxrHHj1bWLnttGCzdHQusLUnU4qC243ATmP33VVDqLaM229ExSEPC8PMCeXbCOnmTxkp3e7AdKbUhGG/jCrtrHv5QKvw4SPZuybAK88dy+gx7Ykm8wF8rzGAix0hHWsGcuwgm3PgO7Ai36U+EfmMrBFuFrB4rVLWFlZQixdQDaXR8JkM7gqjX51BW9+03343CPncO+RIg7tLwowE/T73c6vHPrRX/r9XY6Vr+jL37XA++F3v+ONmbhwvHGdeCeAlxXvSWOgkFpr1cZKpux2wMtEr0YD5x55WJQN6akiEgTewhRCySyaGyu48PDX8dKZi5guZiUoh+ccO7AG8OHAoXmkZ6Y9npeZDf6wZqGe/cqX8dSpDZlWCLqcesnz0sXG3IagVLwbE4XD7aqqwVUzjCp4RtkHGkjjBdQ4KgdFl9H05s5xuoDz/s8Eyzi30y64Opyud7ttAHNMJWHAbWSscGMirW7a2G5dc4KnP1bgsk9LVBeKzKOTxp1WtzM43PT0sgs2+yCrUbZcrpm07V97T8RctgwH7U3mRsVgzRM61TrWYU8mNmpE1o643shAYRZq/BwBl1QDdbudVlvqfda3NlG98CwCnRo6vhBWh1H0I0nEojFpneBEy962YrCN7/yHb8Dm+iaKM1PSfC1LZE7bvd6/O/CO9/zWK4o8u/yb7Vrg/euf+eFvy2VSpBqiNCPwTetOvFQPcOrlZDnG8dq8BqmuYaODzWzQzNLzjz2CkB9IF/JIcMFWKCKcLqJbL6t77bkzyGVTiLKby4jmN2tNHDt6ANnpKSSKRUSM440LNgLi9ScfxZceuYxEIol4nNzzaOJVIwUlQVyu8eJgtLyG2/WAV4LItU5ovEpHuV6bSSC301anOnFy2EwGhRFX5WB1DLd5NhlAtEsl96v4nSTFzEsqU6pBw96tVdhICSw37F0DnPQxN1/C+QdGE7W181o++yZUg4ezFmAnAXj8BmGMaDCyMZm9dwReW0fkfDQqBdHz0hhhXWumWt1mMwx6JiVNlAwMbu8I8LabLVTrdSwvX8Xw+hmEfAOETCRnuTdENBxCOhxEhA3QAT9CqRSOv/4+ibpkrGkoEZfjzWaOYa/3h/vf/vPvuc2f7t7DbuMI7G7gzaZOJJPJKKdGym8210sChqQaonHleQm8dK1JkIgoBNSUIPIsUQsEjQlBgff6qVNolUtIU9lA6iBfRCQ3hX67hetPP4Ezz52UdLIEbcMSKDPE6mYZR48dQG6qiOTUNCLS2Zb12oaXX3ga//MzzyObzSPGqVf0vDF1Ho052LRIUikGZ7lm6BAPcE3CmqUblK+eVDe4BoFxs4C3zPImu5uxu6N3oZ0+RzkKpuXXtegaJcQoCN0nW3fN8DVOQU9ZIJeJMR2vzTcQY8LktKtXlYlYSie4xvz9TufNTjz12HLNuQvwpnvzOddZZ9UNMpWbJZnnFLP6XTPxSlCOTLojLtdahiWakks1aQ/uoNtip1obzUYTG5USNi+dQri+hmDAjyB5fr9f7rZsS7U0U/PzySSO3/ca+XcY2MS7KAlA73Ux7Hc+tP9t7/mx28CTvYfc5hHYtcD7sZ/54W9LZlIn4sl4lCoBLihKm1tSQBiLE3gdjpfmCSsnk2BoWnApy9JFGzW9BAAC7+a1a9i4dFG0vKQbCLyxwrTc7S4//zTOPv28QEUqrSYKSoDWyzVMFbKY2T+H9MyMLNhovJB4yEAI62dfwMc//hiS6bwUEhJ8STWwbkcyGxzw5fPklCuTrzFM2NzcHYHXPH83JWwMZBytrblpNvfUE5PuTssp82b0gNcWTlpLqq1jJ+iax4pgi1VEJpbQ7zM5Ew74Wm2syz2rrVkzE0bc70hs68roPC3wNrTFdufPtsDLr73huuN8wrj+xtQW1h7svX7znOVqYaZbR07mGSWE2x2Br12qiUONSoYOgbct8Y8ss1xaXUbv8jMI+xmTHJBIUgIvP/I3jy2Bl9z/MJ7EHffeKYMFL/zcHYjyotch+H5h/9t+/vtuE1P2HnYbR2DXAi+phkw6eSKRiEc53RIAa+WaTAoCvFxiceKlZdgDXlONbtQNOvmqgULuKAcD1DY3cf3kC7IwSxWV540VZ+ELhbF+5kW89MTTIkxPp5Py47Htr9V2D8ePH0J2btbkPOQky5cnwtal8/jER04gGMsK8Ma5mY5z4o1LTCRpBk6+fJ6aTBYcVahbysEaKJzW3pHzzlINE1yvC7jOwt6lHLz3mOVTt3vTTdhkvYB2G9ptlkY2fIffgvVhdjHIC4jI30z1j2p43X/ITOS23FG2/hpP6WkaxkLW3fxfRy88QSlMvpTbBl6fwy1bqsE5BsrpjmgRWzOvk6+qGFSva+vn1SosNfA8VizG5JQrf+a02xE5I4GXLRHU7m6Uy1i/fAqh8pK0ngjYynFU4A3JLkCVLlIhlEjh4JEDiCRTUlvFqivJKO510e93nj7wwz//zbeBJ3sPuc0jsGuB97//8x96Yy6VOJFIxuMEWU5HjXoDlXIVcQIv+80IvIm4qAYsf6oWXLNkMxZizeVlTUwfrVpNrMORaBipfF6sw7HijASc00Rx7tHHUa3WkM2mzZ3oUGiO9XIdd955CDk2AnApl80L8DKlrL6yiE/85SfRC6Q84CXdEKW8LBaXIHROvUGp3VGeV/S8coEwjb52yWZBzElXk1t4oU9drtcAkjzLG3W9NyytxtQFE+8+x8wglliz5bfSKM2ZtXGHmtLFKVJt2gQHnd5l2ePk+3pPyy7XTPIXb70lmavTNU9ds4C1ekjBZ2TEGFl/tzN4jMH75JLQUBOTE6/ArgqMPaOE/EGe3zjo2mWaArGddp0Lhw3FkQp6QzfI51SzS4pBaIZOVzJzGVZel2l3Ce2FFxAadhEKEFwd4OX0G9KqH9IO1IBH8wXkZ6cRS6YkVY+LZJG2EXi73UsH3vbuo7eJKXsPu40jsGuB9/0/8Zb7ZorFE/FktEDg5UnHIsCN9c0R8JJLNcCrzjAaFCzVoJyvNVAo1TBAr9MWB1vQB6TyzGwoIlYkb1tAbfEKzj38sPwbuVxGHGQSVt1TuuHggVkU5/fJgi2aLSJIPW84itbGGv7mAx9Fx5/RrGAxUsQQi5NyIN2gXK8klEkNvUkoMzpej2qw0ZC2Ep5TpIS6j9QDevttLcTGVuy+kRxZ1g3yK2tkGHv8uLLAcpp22h+7deaGXoCkIxbbaCKhag0T+uM1E9vn52YoGOB3AanNkkpW6Bj33vhScZup1wKp+fgNT7w2rdjSDNa6bKZfmezdbIiJEHRZpNlQdKvhJcj2VFLmTrp6vEwKWbuNVrOJza0trF49D9/6ZURkolXQ5RJN6QUFXZl8+Z4OBJDdP49MIY9QLIEwJ152xfEi2WO1Uaez/4ffbXIibwNV9h5yyyOwa4H3ve/4jmPHDh84kYjHDpDjJS/KqWFtZUMUB2JSII9K4DVGBW/qtVRDUN+0LL0k7aC3gT1cefEF9OpVYx0uIF6YRrQwg/bWBi58/WtYvLoowBsKBz3grdSaSGVSmDs4j9Q0l3KUoWXE9dZv1PCJ9/0Vyl3V8aqygROv/rcAb4yUg6Ub7FSuE68XC2lu12XiMxOvfjRmBed2XJ1sE8C7jf52bPL92wKvMQIIkJjf7UZDQrcJCFRvyLGXyVcnd0s3WOWFO4RKBbpdNMltd1NuvwPMtohERmoOQ1nI97Jg67n1nFSF7SZcT/Vhzi3heF2RsEsz2D+Pl26axHjDQ7sSMlYm0QpMy7CTRmYDz7tWs6tKhoFZqPW6fZl2STNw2mXmbvnc44gM+wiHg0o1MB5UwJdAPAJeTr69ITB/5x2qW+fEm0zp+3oEvNhqLkVe++Bvd26JKHsPuK0jsGuB9/ff9q0zxw8fOpFMxO9h4AynRE4O62ub8ka1wEuOVwovJbc0IqWOOkGaiZd0g0kp0+zUHtavXMHmlUtIZTNIFYqIk26Y3odeo4mFx7+OhfOXROtL9YT468kv15oIxyKYO7APmZlZxIvTCPGWLxqXhcun/vi/YaUeUQNFVK2fsaTK3fgcI1FSIkbP6wXmGKrByZiQll+TJ2wrdSzw2vQvuyyczHCYfEfdQDcQgAw4j0uqRmDkTby2G8yCLkNZmk1UNjclZieeSmkYkBSNRkRVYnMytPdulAwm390EhXPRxEr2bqctzdEEcr6eWColP0N+HcGHn3NLMy0Ae69xO42vmzGxw1Rs+COPRvImW1dOZkNynAxePS5KMagzTbMYCMB9TsAy8XY1CEem0AEGXdXudsnxtjuynyhXq1i6dApDTrvMZDCt1px4FXB18pWJl8Wr4TC6gyEOveZeuQOLpjIIJ5MqlaTqhv9Wt41uszJ35MF/vdezdluweusH7Vrg/Y8PfFPmeH7/iUI++wZOQ8FwUG75y5tl4dqsLVcCaVh4KY/R6EXlTUNgcI58NCeyuIx6fTQrZVx+5imVlOXzSOSLSMzul+977anHceHFM4jHI0gkE+pM6vdRb7bRGwyx/+A+WbAlijMIZ6hsSMht9+ff9wEsrA8Rj3HK5TSuk6+aKSIIc9EWjiJIykGq6DWjwV4oLGhpSpkz8VoQkwHX3n47DQ9OhsMk47CtxXa7JZu7WDLyKX4tLzg2xpB3Cpza1hYXEQoExXbNBaKGveuFT7l1I+UzWmMPdPl9DVUhtllu+Nkz1mhIyWemWDT5xIbjdYHXgPgNy7NJ8J2YgHeSl3lhQi7HO0YtjKgGVWBYSZmNfxzpdi0VowoGTrzkdfXOSgwTfJ10qrVaqDUa2CxtYP3skwj3WzLtekoGA7wEXw94pSYqhG5/gGNvuB+Dbkd2CyEHeGW51mmh22y+4ciDv/LcrSFl7xG3cwR2LfD+1gP3hu9KHT0xN1P4DqoCuNkl31otV6UYkMoGqdlh64MBANegQG6Xm18u22x2A8VQcvL3urjw2KNeRCQ528TsAUkpWzn5LC4885xMNGwl5klHAKJzbnWrimNHDyK/bxbJ6RmEswUEY0kBxK996KM4eX4TyUQKcWMXFsmbaUIWrpcgZW/Naagwel69UIxu1V1Z2Sjektyuae81AOz1izm34WNvqu3CZSb4XfufAi7OYslecFzg5e3zxvKKgGaaVUimVy4UonOQgEGqQT/K8xbPg0lHM4oAAaReR6febheNWl3AJ5HL6YKOx8SjWhyedyxfd+LUcYwa8jc7AbB70fFer5u7awDXSyezoGuDzxV4LcerbcJGuUDgNZpdTrqyWJMLDDN3u2g2GqjWa1hZuoLWlZOIBv2GZlCgFf0ul2lMsBNpGRdrDFbSC9n0HXeIgiEhTsukLDRl2ScLvBbQ733P/rf/wonbAZW9x9z6COxa4OWh+ct3vfVj83NTP8LbLb4B+atRa6Beq6ukzGhkOfVK0wMXa1Y1QCCTKSw8ahym00e87V2sXLiA1taG1L0nCnkkZ/cjlMqieuVlnHv0MVQrVeSLCgZyEvX6WFkv4eChfcjPzSI1O4dorohgPCVg8+SnP4vHnnhZaluSomYwHLTheAnCFngJvuxgUxOFVTZYdcOof00pBjv9UtngAJE1VLic5g7WX8+mO0LZcXzmf00Ar0y8Jn9AX7/+rpa2sLWxgcJUQaYxoXl4cRO+WWuM9MJhloCiklBFhH0zSwOD8J89acaNp9OICZiYY+BK6hyO16o6djxtbgHA3tdNyOdGFxxytyZOU6Zco2SwizSTwWBzGTTqkVyucrtCowi3SzBkClln1DDRqGOrUsHy2ScQ6lSFZgiTShBqwbjT5L9VRqalqIyHVMVINJVEgpRYrogQY0mDtLTzIkCAbwODzjv3v+1ffPjWkLL3iNs5ArsaeP/0nW957/Gj87/INx/fhPzVarZR2arItKoTb1hu6zULgVyjBo77rKyMU6/R8nIZxZNJAGRtFasXzyGZ0fLLxNQMYlNz6FTKuPTo17FydRHJtPa68STi1LtVriGZTmL24DzSs/vEbhxMZGSqPvPww/j8559GPJZEMsbMBi7XLL+r1IMtwLTUiASge2E5hiM106+X1eDRDjefeG/gQB2QnVQ3bOtjmwReo2G2C0nhurtdoQaWr15FKpOWi4vw6fAh4OO0a4GXbkHTycbnIWYDk+BFE0aA2cEQ22ytUsH0/v0qCXSAd3xJt03+g3v27DTh3iSDQq81th/JGjrciXcEvLpM09egBgqj2TW5DOpYIwCS21XQ5bGShRqLLFtNVBt1LF+7hMbCSUTFChwU4BVawZgnCLrC65pJV4OUaLYJCmWV5Hs0n0dI9ONBs+AzwNvvvGv/2//Fn98OqOw95tZHYFcD7x/+6Hf9yl13HPpdCZqhNMxIyrZKZbH1ShANzQlm4vWkTSZoXDS9FniNxlTCpvo9tKtVXDv5IqJspMhlkShOCd3Ak3H15HO49OJJMQVk8hnZYmu4SRdbjRaOHz+MzPw+xMnzpnPwh8K4euoUPvr/fh6RaBKpeAIJhuXYDjYCMOkHLtdYCyT5Eo59mLfYzOr1QnNsJu9o0WZbhq19mAWYnnLAmQonqYZtQXcHB9uYhtWG5FBO5xkBdKIrra+jWasJ3cBf7XpTPk95GakfT29sAsn5fUXD2qjLBM/XT46b03M6X0A6l9PXbjS82pk3Mk7cQKlsc96MXXgmJ1/z+BuOxQ2aXdM8YQwUYpDwcnVtIpnSC2KgYA7DwEy8BF8jHaM12FIprPZhGM5WuYSl009IGI4FXQKvBV11qykYS3YzQZeTsNF5R5NJsauzpDUYdwJyBPBbTHN61/4f2QPeW0Pq7T1iVwPv//OO73zw7mP7PxRPxmUKIPfHCaK0UZKUfk5cBGUBM8ud2jJJqw3lIsvwvDLxCvD2JZvh2qmTwpuluGQTnne/cLbVa5dx8fHHmXOKbCErRgfZTne6WCmVcfToAeT27UNiehYR6nmjMawtLOCDf/YxBAIxpBIJoRskYUqAlpO5ankJOiIti2m9i89Yh3URaNLKLM9pMhusugFuM8UE2N70NtzKyG5mGXb4T+tQc/lZvZUemQJWFxeN9Ckk7jMqHoR7TyRkirOqBhsMzo0+wYXB9fw5Eoi5EJ2enxcqSPnh0WLNjUSUU+VmSWU7qRl2iLf0siws8Eo4jtIKYsP1Usls6pjV7RrQ5d8Lp9sXcw2nXJl0Ox2j2VWKwU68lWoFq6tLqFx4FtEgBFwjxhyh8jHL6dqJVzl/WbyZOyKhGopTCrwxAi8Dcsyk3W4B3T3gvT1Ivb1H7Wrgfe+PvOnbjh888Ggqk1T+NqBaXhocyI1JnbrNQTAfleM17jCx5pJLVY2oBV7heTsdbC0tYfPKZaTzOWmXSM7uEyDtVEq4+vQTQjekMynRCsuJ1Ob00kQ8ncLMgXnD804jmEihuraCP3zvBzEchJFLpZFk/bwA72gJKM3DBngJxry9tjpe8r0KvG7rsG2i4LLK9JnZSdfyvQaUxoDJvcWeWChNTsRyy+1+cpL/dCZfXR4pAFMKRtqBPxe+DgIzN/f8GXkZDA7w8Wt48RFdarcr/2YinR5lVriONVepYafXHTS73lN3p9ydHjsRQ3mDS02A11AMY/GPBoDFKqx0g1AwdonG6FDD7VrAtbXtXKptlSu49tLTCNQ3EDXcruV3ZYnGadcDXy7UeCGyNAPfF37E0mlZrDEnJMhISNrgJRKyi367yY//5OA/+cWP3x6s7D3qVkdgVwPv7//Qmw4eOTS3kC9kRU7Gk5q3/WyJ8LOJwnC80m1mXGHqDNMKdZVrEYQjXmaDUI5y0nTRadRx6dlnkM5mkMhlkZqZQ3x6DgMaNV46hSunz8jUwVtqfg0nmFqtIdKpmf37kNk3j2hhGuF0Fq1KBe/93T/CxlYf+woFZFOqbtAql1FKmdX1WkOF5DYYJ5utAaJZROp/rJONlmdpfJiw0m4TOu5Oh9veWu/0jnOmYVf/606H1kShLbuqCeY23lID/DpxahGETKKZpGzJoigs9IFM0eY5aIiZYxc2i0T7FHfkrSf4Xe8k2Y7r3ebCMz7xmgl3YuKV5ylB5+MqBs84YThvoRcMr2sldwTdbrctmQy1Sg1L1y+heulFRIJ+RGj/5dLMm3TNIs00kFiOV46ZmGvUih3PZBAvTCHCZLIogddngLeDfquFwaD7Awff8YufuxWg7P397R2BXQ28PEQf+bl3tGdnC2E78fKEkFzeAbW8tv46fEvgFX2pZDZwYBmKDKfXbuL62bNAr4MUK9+nZ5CcOyDLssr1BVx+6ml0mi1kp/JSdcMTql5roNPrY3b/LHLz84hPKd3Qa7fwN3/8Pnzl1DXMFmYwWyggLeoGjYcUvbGRk3HajTDDQTImbD6vnXjJ9xplgKRVGeedZPLaeMgRCLv85w2JZRPUgjeJyph744rtBovxRL6DLXS0X2sXgLLoMb8sONt/i8/J0gj2+XkmDQ9hDfi6wDlR33PT0+V21Aw7TLte1KPQDsbBxomW02+fQT6G2zWpZJpEpq41XmRk4uwY8BWJnC7UmLnbqDdRKpewePIxBNo1RLhUCwYRjZDDVZuwp2KwwCsXKYKu8rySZBcMIp7NIp5jVRWBl1m8LvA2MRi0f+DgO355D3hvD1dv+ag94P25t5+ani7cK7IaCQoHyqUK6PMXyZaAmfKlEkQj0rOwMSZoWpnqeVVWZjFHT5g2yisrKF27qjxvoYDU/CEJzGmV1nH9+eewsbgkRgtqhWVh0u5grVTBvvkZ5JnbMDOHaH5Gvu9n//wv8PCTL6IZymJfcQrFbA7JBDvYNEVNnqsklUXBSnr56IWjq73ZUg02T9jLP7CGAqNnHQuRmbg1dyfFMbA1L96dOMeohpsB9QQd4U3WNtzGdNR5GQaGP5V8XevEI1h4aoIR8O94wZicYPmPTtAo9nmMnUkTfPANE/wE5+1x2o5ZQgJonAhI61TTZDK1UAvwGlmcBuEwhcwoGRh0XqtidXEBlZdfFN2uAm9AjROklSSXwcRBGmWDAK4BXato4H/Hsjnhd6PprORPS+KeLD3b0nQ9GLa/6+Dbf/mhWyLK3gNu6wjseuD9q//trV+am536HqtsIN/FJc7G6qZMvPwtkySpBoKujV4Ujew48CrPqye/aC+7HTS2Slg6f05iIpPZHNL7DyCam0av1cD6S6exeO683PIJ3TAcysm1ul5CoZBFYd8cUnP7ECvOwR+O4PGPfxyf+8JDaCCMcGoKc4WiFBjaVgpZsjGpjL+5XBOqxLi+rNvO2WRrpnBQiyUnKt/HqAcLSLeaEiemvlu9AydB2114SfqBG+VouGLP5eWAuGeIMBcIPob5CTZB4YbZ237trXhd5wVsS0tMLNc8Ttdefc1zkM+7Gbyi26X8bRSCLtSJyWewEjvrTvOswQRdE4TDJL2tyhaWTz6KQLeJmEjI1CIsMjK5YPk8a7BahTWVTNxrZqchlEMkjDhD9vN5TSYTa7UxA3UVeHvt9p5z7VZv6L/F3+964H3fT3zffzi4b/rXaZjQPICA0Axrq+tyq+bRDZLVoIuesQWbnXg5BUsbhTCLZmLpoNdq4vqZMwhgKKE56bl5JGbn5baezcOLp0+iWa0jmU2LKoHVLSwprDU7OHj0oPC8sZl5uf279Pgj+IsPfhThYAD9RAHBSAbT+YIs2sQ+zJAT8tFhDcvRqVendTnRLNCa2ncvtYxpX169jt6We00NBnTHwmRuMvEp5myr5L3F3byNnrSV805OrgFUXUyp28v9NRlubqkKO4luN5X/FgD3CQAAIABJREFULc6R0UMnF2yTTrUJwB2jGUxe8+g1jCZe2yCs065ayMUs4U68lMvRAt1sotVsiD14+cJJtJZeRiwcUgmZCcQh8EqAvF9pGPnvsYnXFKEamoHvaRazcuINJ1Kyv2BMqLgwO21Zru0B7zf0jtnxi3Y98P7RA9/1j+bnpj+dzaaDwvNy4QQfqpWayL3UOqzToxgtzMTrLdg8NxuphhHPK7eO0gzQRmV1FRtXFpAp5CQmMrXvgATgdKtlrJ05hfVr12QBxtYKLlyYqVoqVzE3T553P5L7DiAYT2P13Gm8/w8+ICEyuXwBG0gglcggw410IikdcRTCiwSOU6/oerXK2wNek1YmXWwm51YnS2p6R8u1m1INkxbiSTmZO1Ha4JxbvG89ba51yjkuOk/KZu3BlmYw33OkQVaw9oDWffw2VMYtLw/O69hpwSbf1ppDXKrFNYx4oKuuNW3JMPyuU/Mj/WqOrM4u1iTgXC7IDaHAms0WNtdXsH76CYTRE+ANU6MrwDvKZxCrsAFcqfcxoeeeccJIyUKxqPQDRjLsWkvInRwNKgq8LaUaOv3XHHrwl06/svCze7/brgfe33/gTQf3ZfInZuemjoqonEDq96PVaouelzpZoRsMvyv2YpdusNIyUTmEJCJSFxMqCWK2bK/RwNLFCwj5fUjmckjOziI+NSdTb+XqJay8dBatekMWcJyqKZuqVutIJJMoHJhH+sARiYhsrK3gz3//D1BrtKSz7eCxozi11EIxl0cymUScvxnebqRvDM2RHAqhH2wzBacddseppMhqWz2udAd1gw6++nbZSdM7Jp+6RcDM5MTqft9J6oBUiOVe3ZYKl1v1ktXMsfcA0YLeBChue8pPBvw4F40bDBTb5VRMcrsT2RTe8XGaN3ShaFLJpGVCzTRS50OjBLN26U5rNtBqttBut8VufvW5hxBo1RClZpd3YuR4STUYt5qNgLQZvJZmUCWDVTOomSIST0iCXiSdRVDqpjSzQ+zCbTPxdup76WSv4HVi1wMvw3IOhuY/feTg3PcSsKygnB558rwE4Wjcqhu4XKO/PSJZCKMeNtX22gWbTl0qK6OBgoqE2sYGSkuLskhjHVBybh6hRAad6hbWXjqN8vKKLL4S2YzcYtaqNQGb6YP7kT10FOFMXiaPv/ov78XaZlluJe+56yiqiGKlBqSp7U2lBKxtCSYnXUn34ke7EDT8nkxANjjHyWtw2xlcd9eOubUOz2kNERb0JsNkhHu1EjVDYcgHS2fsUM8zioDUd/4N6gn7debC4Mm5TPWPa9iYVFvsdLFwtcLe83Oe83bPY7slm3dMvDCf8XwGq2qgimFUYKk5E2IL7pJioKa57pVYLpx8Cp2VBeV1Dc1Ablf5XdXlCtBKEh3LPXXaVcOEBuPohTcg72FGZrL1RPjdaMzUupv2CZ14m77ey4UDD/5e8xXEnl39rXY98PKn/wf/63f/m0P7Z/5jJpNSK6UJzCltbMktHquAVK5lFmzC9+rkq0E0XLIp+Gr5pVE32O10u4V2vY7VSy8jEgkhmcsjMT0jlUCEHXK9Gy9fEGojwecQCqNR1xMtPzOD/NHjiBamgKEPn/zDP8KFy9ekAp3c3bd+6z/AE5c34Q8lkU5nkEyxAl6ttbJoi3LiVSWG0iMqJSLIc/OtMZE6pXtW2m30vDeTlfFN5GpXLZjZM8vjWqW63XC4NgFtEnRl0Wcsvc7z2Ha55U6dExcADxgtL+xMvuM6W60isuDsTfX2yU9cKOS1TkLGNlSLqCuM1nhs0hWdt6UbRt1qttCS0y5r2vsdk7UrWQwNoZ/I8a5fvYTlFx9DNOATvW44pByu6nadEBzPHk2dswFZc5cToIHC0Ax8H8cyWQVeBqBToeMpGmhNlon3swd/5Jf+8a5Gylf4xe8BL4Dffdu3H5+fLp6dm5sKqNyGy4mA3Nptrm0iFifdwEWVghinBBuMTp2sZjZY4FWelyewnNCmKaDDhcjmBiorK8gUTUbvzJy40rqVLWxcPIfKyqpsk2m24LRTLpXF9TZ17LgE7BDkH/7QX+Ppp096U+KddxwRLvjLZ9al/j2dSgntIEWY5kLBj5zQg0E70Y9OPNtEbCddq8zwJl8rJduGZpgEQ3d6tOoDmfqdN62lEW6YrF2Qdf9sqQ8HoN1zwE7R7gQ6NsVOAq/D+3oKCdHVmthKM4G7ZpIb7MUTJ+EYp2woDZvY5uXtGtpBlAySpkbwtS0TZtEmoGuq2k1zcLvTFuqp3eqgVlrD5slHUNnaEoeaZjKoVldB1+h2bdtEcNQ6oUYJk89ggnF48ZXFWi6HCHN4zWJNrmHCNVPR0MKg2/q3B3/kX/5frzD27Opvtwe85sf/wX/2A48c2D/77UI3yCJCq3zWVqhu8GtuA6dIghjB2Uy8SjeMJl6Co5fPKyoiE27CE4i1LJcvaU4vp94pVgJNyzOoXVvA5pUFKcsk3cB/Y2NtQzrWpo4cQWr/Yelfe+bTn8KjDz3mgVkmncT999+LtVoXZ9e7yGXzSNHVxqlXqoCUblCKJIwAmzPMBCSuNvPbUwY4ulnLrbqhNIp/Dtdrb78dKZm9vbZaVIIJgcgaIkbRjupKGwNhs43XsJ7xZZ8ncXNOWdeUIe294hCjlEytuWJaMCWTFpClWNPkJXhuORvNCIzn9u7k3jMAu50LzwVdedhEnb1VMQj4mlQ1lZCpUUIiLU0wfKfVljufeqWM9sKLWLhwDiG+HwV0uVRTisFOuzo0qJrBW6x5E6+qHcTJaELl6XAU/S6twgzHkTQ4eM0T/Xar3293vv/QA//yS7saKV/hF78HvOaA/umPv+U3D87P/PtkiiEsCrz8VSlX0Kpr5bt1hxHESCso+FrgtUYKvY3n4kw0vRLtR797B13G921soFHakGJB3t6xaSKUTKNdLqF06Tyq6xvC0SUyWYn7a1RqmD58EPljdyEYS+Glr38VX/3Ml9Glp98HoUbuf/29Uhf/zMImqsMYilROpNISa0mwlYsFeV4+X0mlGjUPa0KVBgR5TbwWfN1F28TE6067wmnbSc+WTppIQxdIOPQRzOWuwhhWxsJr7L838e/zWMpFQCRvejdhanz13zUKAS8XWIB31OwgwTQex6q5CLb9QlocxJbLyXxotK5OZ90kJeJSDZZicF67KyEb43cN3zwCXXWsEXy1Ydku1Azwss6n25UC1nqthub189i6fAbVakNAV4HXTLnmozQHm4YRG3Y+usgqEFt1g7ZlBxBOJBDLFRDNZKWbjlOxBqBr80S/1drodNtvPvbgr774CmPPrv52e8Brfvx/8mPf8x0zxfznisVcUivF6WLzC7e2uV5CjIE5om4wsjIjI9M6dRM6bgJzCGQCvF7zbR8D6QBrodtoYOXSZcndZU5vvFCUIkxOPrXrV1BevCYKBwZ3E9Qrm4w2zKF45z2IZAu48sJz+PLf/A+0O31Ci/wbR44cxJEjByRY/JmrZbQCSQFfLtu4VBN5mVwouPXWZgptYzAnojkhXQfYWA36pHNtu4nXnULNbbUtsdQAoLYsifiUyTFyQSkyN5sX7PXAaSC76lA1/NziLGV+kn3M5CwBexolTB6vUBrGMiFAq8BrJ1u3Ykeny74AGzMPOFVysaVJdHqx0uWjybBwXq97gRkLgJ+Y+G8AYMe1ZifuEfBS/WInXS7WeCHoijWY6pbW0kWENq9g4doyAj6MGSVINdiadlfB4KkYpCpJKQe7ULMRmTz2UYbE58xizXTSyRTO59Bu0fZ+dtBrvnmvb+2VvU7sAa85nv/1ge+encqkKCu7mxGReium7RBry+uyEWbXmbrDzKJKAtT1Nt7yvGNLNipuDcco1s92S+Q5pdUVdKpVZKaLonDgko1RfJ1yCZVrC6KA4MmZyGZRrVZFozl1x52S57t0/ixOfPjjaLU76MnJDHleb/zW++UWsdUf4ulrdQTjGRQKBZGXcckWDnHiVS5a9MpsRjbAKyBjJl6ZQJ1gmlEPm0q6XJrBs+JuZ6hwbrF5iFk6WePtcrMpEz1bJXjRCtlAeWfJ54Xj8Pv2+vB1uvB1evL6ArEo/Mk4hiFdYKLTw7DWQL/ZkWvdMBzCMBLGMBjAwEfgNZQDYVmmSy0XpT273W6ia27to4kkUum0xEpaOkXKMA2V4k34NwnFsRda+zOXll6P29VkMmndMFJDmbzNnYGCLcGXCW1dWerW6nXU1xYR33gZa6trqFTrwuvSGiy6XXGhOSE4DD4ybRMWeL3wd3MhGfuZG6twNJdDKG6ME1ZGRscagbfZ/EptWPr+vYbhPeB9ZY+A+W4ffuCBQD1c/tjB/TNvZyuE1TryJNpc3ZQpJJYwEYyGMxUAM5SDppSZ1DKqG8zE7PGKnLJY1cKpt9XC+tUrUtHO/AZSDrH8tIB0Y3UR1aXraFYqCDNbNhRCq1ZH4dAhZA7fga3F6/jKhz6KqgnTUVYTQjdksmmZEpudPh5eqCGbLyKXz0l8pNieRVamgGdPSHv76XGtBF0n/0BAeJsFm6vl3VbfazWwjhaWYNeoVoSvRKWOYbkOP3zoVqvCOw6aLbkYBGNRmWR9jSaGrTZDuBEYGlkUL3KJGPzphDxmUKljUOMCqCMXK1nlRcMYxqMYxiJq3262pJXXF4tKs3qQuRi1BvzFNPyzBaTzRXH9cRIUJYJVSExapLcLwjE0wyTV4i3uHIpDFnh8H9jYR/PR1hSJfpfxl7Sa1+uobK4jvnxaeP/F1Q2EjVaXgCvcrmkNJr0g064BVzFOWAWDdSnK51S/LT9rys0iEcloiGSo3yW/GxJOXEo1qWZoNdBrtf7L4Xf+6r96VU66XfxN9yZe54f/Jw9+z8/OzxX/JJvPjkTmPh/oi99cKyGR0BQwLuAszyvyLKN0kJxeoRvUPqyhOYb/JCjQTEFBeqspJ1NlbQ3pYh7xbA7xKXK9GXTrVVSvX0FtbU24R94K1kpbyM7OIH/nvWhUKnjorz+MSqWGVrvr0Q3T00XcddcxXUgBWK21cXpzgFyuiEw2q/1xMvVaykHt0WPAu82iy07Ck5peq611dbkCwHZKdM0H1ulGoGQLc62GRrOG7kYZgZUNJJoD+FmZ5OvLBNcfArVSCUOGwrSaIq0a9vpodRRcmcCViEQx9PvQYkpXt6O320FdIDLQnY0KnVAQedYnYYhOt4d2p4d4IoGtTgOYKSJ6YBbJTEYucJLz6+YpmPfF2KRr5WsurTDBbY9xya6CYgJsLfiqisHkEPd7Qn8wY7dS2kBg8QyC7bqALh9HJUOU8jFpkBgt1JSfNws1r2NNtbvexOtJyQy/T/kZW0yyOdHvslOQzkvJi5CdRAu9Vp3Dwg8efuevfXoXY+Sr8tL3gNc5rP/1ge9OTmXT1bl90zIZ2qxSgsXy4orc2kXjGr/I35pzq7GLWqluTBUy8WoMo6Q8EXzlDU0nEHmzlgSlry5cEVdcipRAvoBocVYe39pcRfX6VTS2yvI9eTvK6Xr63vvQ6w3w6Ec/htJmCc12V+gGgjtVF6973T1CJ1h+ca3ew7mqH4XClCgdJL3MLtlsLOAk+LpmCqOpFe2t2zzsGBbGrL62Jn2nunRO5+Lm66FLDpMXoWYL/Y0t9M8vIFyqaiIcwTCdRjAVxyAYQE/CY4Zo8rhJWpdewFgcSc6ddxv2ZxKOsDtviCBTF9sddEpb8psXz95UFv5jBxDM5xAmBcOKIInz1Kne1R+PTbB2qnX1uo78bEzDPKFgsGlqwis74Gv5bxv83pOm6a5k7Fa2ShheOYlQuyra3c1SWds1PFuwmiGksNIqVEyAvYTeTNT6eNyuXaSa5TF1u5x2Rb8rYf5+ucCJjIzv00YNnUpj+o6f/o21VwV9dvE33QPeiR/+X77rrZ/cPz/zg+piU3cXlzZbG1tSnhjn1Gssud5m3gTluJOvAK+Ar5l6yfeZqEixYfa6qLNRd3UF+ekpxLlom5pBOJWV27za8jVUl5eFluDmuV4uY/6+1wPhGJ76xMdRWt9Eo81q756ulOhku+c4Mpm0vCKbbVtuD3C9G0csU0AikVCVgwFfe5LaW087/XrqBlIOjtrBcrxeatg2GttJgL7h3DILL5tJQE5TAKlWR+/ydQyX1hBsdUBNibRoJOLyOxhJKL8rRaMBmWrll+G5pYa80USv2ZDf3Tr/3EKvN0QvEYH/2DwC8+TS46YtWpUcssibcLy5ITs3aIIdEPb+zvmcqBacMB/7c7CyNQFcI2fzjoHR78oybW0Z3SunEWhV5ee6uVWWn6XbGqygeyPweqHwJhTHox6c1hFrFSeFFU1nEM5kEbI0Ay8+/a68/5gl3WvUv3r4wV/97l2Mj6/aS98D3olD++f/7Pt/Znaq8Kes5NHtr27XmwydXt+URZbIyiT1y4aMawWQAi8nYUM3mHB0GiqEi6VkiEsU8mfkJNnvtrIC36CvU2+hiFhxVnjdTrUsKgcu2ngBaLU6yO/fj9jULF783GexvryGerONFptnzRJnbm4G8/tnJeRH9Kwisxqg3R9iqRdHOD+nRhBJMNMlm4RhO1PvGPhOtje41lx36p0ItLkh3cwTf+nB9qZAbwLUinapvWl3MCxXMFjfBDa24K+1EBr4pHdOWp4FfA2NIw4rSp965CJF7N9vm1v3eAQoZhHYNwV/IQNfZMS7Wz7UWw5ud3pZRYST7+vRCBMZDN6FbgJwRVVh3YtUXZhlmgVjdakpvcDfmwvn0V04jWGvI8+ozRaTVlvCb2SZ5gGu2oEld8ENwbEcr00nE953lM1gXYr8eYeiMZ120xkEIzGlxcjv9vi+bKPbbKDTqv/U8R/71x981dBnF3/jPeCd+OH/8U+85b6pVOrE1HS+YGVFBF+eQKucxqhukMQyGzI+ohsUfJVyGPG8DtcryxVdXPBWmUqHdrOB0uKiBKXHxVQxK83CPGmb60uoLl5Du1ZDHz65rc4fvQPXnn0a1y4uoFJvoNHqoCcuqKGA6J13HhXlQUAaJXxeAEuflUb+FPy5ecSMucIu29xFm8v53mCqsBPwhKnAe9x2YGw5X3ucJ1O7ZNPfEy2uZzyQjVgfaHWArapQESg3hAe2ahM7pVq774Cvl/rpRBT+fAa+XEqXbGai9aZ0kalZLbB5UtskqLlT65g0bDL/YUKfa3liq9e1emH5aMCcjxFu14Auox6XzjyH+uUzCIn8m/8H+fsgW5MN4Ep3mmmWkA4125tmcxjMf1tZoCchsw3LpvCTxzCcSEqlFGkGDgvitJRskbZEmXabtdVuq/nmO37yN/YSyV6FC8Qe8E4cVIbmHIse+Njc7NQPMffA8mNcXlS2qqhVKuImi8Z1chyjG8a4Xs1x8PkVeHUZpUDISZccGukGgu/m0hLQ64rCIVHUqZf5u9wq1xavoLq6IjpYYhNjJduVLawvrWBlcU2Sytq8XTeANkWJWiwmOy6Ck72t5S09H9eNpBA6cA9iyZHBQvhsK653OV+by2uzHCz/OxFQbpdqrs3YBePJsJyxGEWdzQV4R4YDm5xjfjh84f0+fIOhUVj4GRerCVr8elFdMAjCrxSEm6/gxUya6Es3vPwmqoUx84M5tmOaYNeRZqgDF1gt5WC5XY9y4NTrTLq18hae/+rnUV25Ju0RkjZG1ULALw41TR3TyZbAaz8Kv2tUDVZCJh/NY3lx8cwSrk6b34d3PKQZkplxt5qhGbqNOmmGrwQD/rceePBX94Jx9oD3VTgC23zLP3nnd31LMZf/+vSM6WKjBEfogiGWri2JN57gKxykUQnIJCY5D2bBZiZfzehl1q1+FIyxXC+39L2uxPzVVpbFVME2YulZy+TpXUWnvImaLNpKKu6PxWUiqW+VcfXiFWmY5ZJN9KBmIpwq5oRuIGcoulHadQWX/KLX7QQjCB+4B6FUXiZ30g6emcE5ScXE4IKuDbDh97JBNhOLtkmbr6t+8IZew4naCde95XdzD+Rh5ovEq+bK2ox6Q7kLfZSbCTEpcXMnDGOz0O/shJu7nK3L7bqA6skDrT7bnWQdqsFzqBndrvx8uEAzumFGPbYrm3jp8a+ivrGGOq3BrHQfDuVndDifkvQx0iLkd/nRRj5amkH/2yoXdJKXhbBduNmqJ3n/GQUL1R/MbCbwMpvBuNVIM5D+4sW+26ih32z+3NGf/PU//fs543bfv7I38e7wM//v73rr+2dmCu9KJNVCbG/f6tW6hJSQ67VT76jXTLNuVd2glINP7LimUNJWwPMk5JuclkzTMtDY2kKjXEYqn5NsVOp6Q8mU8J7NNWp7F9FpNhFLZwTAmfuwubKKKy9fRYM5rbS8CtcLuSjw4kBzgL2LJkcouk+GnfO2PBBGI38YkeyUgK/IzYyl2Boq7NJtDHyd/ISxCdfleSc5XydPd1uQdX4GN6SQuSHjTlWPGxU59iaeiIi86SntGD/G2iq2C9JxXXDOgtA2IrsysjFnmgO8BFvpTGP9fL2EdH0Rg05LzBJr6yUsr29hZauCZDiIfdmE8rgMuvHrtCtqBaEa/HqnZeR/ni3YeZ+Kltek0NnkOW2cDinNQAlZPOHRDEKBddVZ2a1Xm/WN6vRrf+G3a7sPEv9+XvEe8O5wnN/3zu/5vmIx97HiVD6plUA6UZCrW11ek9tAGiDEyWaCc2zLg9XzSgmmvPlDpuHB8L2ydCHXOwJfysvYRBGJhpHIGStxfgqBcAz9Vh21pauora6K/TOaSgtwUwt87cJlrK5soCka1yH6w6FMthFOMpQY2YlR+FmfNs8aAGZ8ZS09j0B2VtuKOf2SPnEXbmbqvWHyHbP1blMNb8DXur8m9b5uuI33I3CA1TAJmnfh6Gc92sJcUSxQu7I2G2G5U8PEtks1o831JlobouM4zzze12Q9eJU9E5OulY3ZSZngLM3A7bbk64a6Vcz6K6LI6HV6aNbrqFXqWFnflKzlVNivrRJSWun38hcUiIOy1FXliZpK5L1pplzrOhRQNlVWnjJFTBNRhFMppRkYek7TBDgIULtL0K2jW6+979g//fWf+fuBoN35r+wB7w4/9997x3dnp7PxE7Ozxfs59cqbW26v/ahuVVCtVJCIs93XKhysc03txgq+EdNGTFG/nZpNISZBksoG0aaScuih02hg/dpVZIsFWbTFClMSgM6Tg5RD9foCmuUyoinaO0Py+OrGJi6duyThKdS7ctHWHwwVROUWVSVhJEEVpOBxhbyl5VTeTEyhGZ/S0kyjerDpVpOKB5dKcKVmNmfX41cdHviGlLPJY+7yru706wCxRw94Zgxa20b9bC4lcUNTsEMneK40h2bYThbmZjvYadYNuHGnWvfvPb2unXT7mglBfS5/F0NtTIXa8vPmv9HttNFutLRden0TKytrSEZGEY/eXYpQDVaFoqltNs9C20PoTDNda14WhypW5GdGoCZox2LaNJFIIhhmm3BA4ym58G3USDM0243mD9/1rt/cSyN7Fa8Je8B7k4P7Zz/+vT81nc99oDCV84owRWQ+BJavLcrtPHvOqDaw2beW63UpB1U4BHTJZrle00Tc71LdoNIyAnB9a0tUDEmmlxF881Oi7WXoS3PlOqrLizKdRDMZWZx1ajUsLVzD9StLcgtL4CXtQL5w33RepyXn1l94Xi+v1d6+BlEOpFALZxGOpxCLaq29F6Zj+UE7/Tra3m3zdY2uWLFN3WzyOAN2kxPnTvSDmwUhsZIOZWF/bDf7Xpb39f5d80XeBG0A36UZbnCe2ZoeJ2PBA93JSXdSo0vQZZC5KFhaKIQ6mE2onI5cL80KWuvTFFMJI0hLa2uiYrD9aQK8kj7GOyejyJgoJiV1pHy8kT86KgYv+Eim4pCoGNSpFpeLrihfuOSVabeGTr32UrvWe/O9//tvLr2KuLPrv/Ue8N7kLUCFw92pI1+bnSm+kfkNynkqiJDrLZe2EOcE4Uy9XK75ba+VdbPRyWa4XgFea6owKVDC95Lr5dTRaWPt6jXhaRlQLeBbmEYglpDFR52Uw9qqnDSRZFL0q61qFZfOXBCekIBL/edapYE7D+1DkrpXMxGprdb2bekkpHkTTGLzoesLodQPoxZghVBKuF/rgvImXwd8d4ySdKZdC75jxgoLwDsAsQfY20zGkxzwTlrcm2l0PeB1NbrmzzdMuk4/mgu4o2ZgE+vomCIkM6Lflwm33axjOtpFLuZDhNFi5t+hsoH8PSfdVr2OZq2OxavXRePNn5HkMUiG8khrbWt8FGhtS4fSPC6dIO9TlrYaZYNNmqMtmMAbSqR1qWazGbpt9Jp1dGpVoRmO/9S//Vmb9LnrEfJVOgB7wHuLA/sXP/kDb8vnUx/LFfNB71Yu4JcTa010vX69PXeqgXSpYa3EYa1TMcHT0k5hrcQ2NKXXxVByYbVqhRQCJWaMg4wxZ4EhLtmiaIO7lU1JMGtXqzL18iTjQqS8voHTL5xFo9FCs9PFlc0K7tg/iwMzeSNBYtsA83jJD/qMHXrk25fwFEYwBgNodIdYagbQDSYQiSXk9W1HPdygetghx1cUCY6d2J18x5QKozFWpmP+3bZKBYcmkC8xSzILqJOg66oY7GNc1QK/hReM7nK6ViY2+dHR41qQtbyuBdxmo4YoWjiYDSARNvGStI57Gc2q4+0ReGs1rK2sYWN5RYJwSClQK06lic1hsLQCL/yus9DSCPZz8jiJgjR3OlalYtQMBN0QA8+l4iegpp5OU6fdaqU/aDb+0fF//lsnXiW82fu25gjsAe8t3gqMi5zOpk5MTRXu5tQr2aYET9H1VlAtV5Bgs6/nZlMHm3axKddLU4VPgr+1hVgzHCzXq0Hp8ttSDp02ttbXJWsglc9KSHW8MC18r1AOq4uokXLo98X2yRwIqhwWzl/ChfOXBXgvb1Rw5/4Z3HlwTm5VNZ1MlzJ20pXAdpGG6bZbeEIG6TAdLBBEvdPH5ZUqNlsF8B8AAAAcAUlEQVR+FPIFs1U3Wb6mTHHScGEnr21NFZZrNbSDdbjJY53p1wVj9eBt33DsvXldysCRAI+BrI6aXmD7di40a8awmtsxGZmtB7Lt0cycMNSClzvc62FzcwORfg1Hp2JI06o8tjDUC4nW6hjgbbYkFOflcxeBblv6/ZJGSSPcrese5N2WNHOMLzPdiVeli0pJ6OSrICxqhngSwWRKnGp8f0qAU7+LPl1qtTI6tcqnnok+9/YHH/xIfw8hX90jsAe8t3F8P/BPv//3pgu5X87mM2bjzzc/MxiGWLpqud64Vw2k4ei2BFMDdJgxwBZil+uVtH92JfC209INYtnsoM1EtKUlxJNxxDMZRKl0mJqT+D7eFtZXrqO+tiogT3kQ8x9atSqefeJ5XF9Zx1KphqP7Z/GaY/Oey86jSkwGrq3SUeG9TujMhZCJnOYEM/2tlGq4utGBL5wUnbLKmjSMxZovtgNgAY6JSddbzk3SEQ4HrG0TpvZnQkK2LdXgZuTan+dkiM0k6O5QxzPmPLOTrbX+OqBr63kk5Ea43DZ69U3MRDqYzsQM4OlxNGEaOsGbKiLJaaC8rN3GwsI1NFZXkc4kpayUUjG1VWuFkU67lCTqMtHTUDuGFpmECcpWX22Wwcr7BhAgzZBIyftHnGpMIqOagc+hUUW7vNVs16pvvednf/srt3FK7D3k73gE9oD3Ng7gnz3w/flMNnx+emYqz3Qy4deMnMfjeuMaGakZDiZsnJOvp3AwZZgSnKOGCuHYfH5NLjPLtZHMjNvuBrZWVpHKZRFNpxDPT0loOikH1sLXFq+iVd6SqZe8crfewPrSMh557Fmslxt4/Z0HcWDfDEISY8m+NTMB2dtR8zpkAratyeyaGwy0hl0MH2rl5dJus97B5fWeaIAt6MokPeF8cykIO43JZG2ccJ5914DvDZ93QXcCvMf4X3eanEwOm8hYcN1yY0E2ziTrTroWgL1QGydzgYsxysOoViAA+7t15IZl5KKag2snTTtt6kmmFm77PLQFoyepaWefP4VEyA/mg/CuisDLRDyZyiXbzplw5aJkwotsL52heOTzctE0j7eSv1AIoURSyyxl2iWFQYtwTyJKO5USWuXS6WZr8ObX//z/sXobp8TeQ/6OR2APeG/zAP7VT/3gr+UL6d/J5jJ+4WtlyeSXrq7VpVWT4WCTy0xgjpkitZ3ChKSb1DIBXrEUU87DNmLt/lIhu1E5dNqobpUlsCSeSYt+N16cQjQ3LRNha3NF4iP5dazo5jRFyuGlF8/isRfO4TvuuwPpVNyUXZoGChPWLuYOAjH7zEyThvLPOskrT6oTmiaAMXSHetQuLq61UW374QtFEDGRjLq0M9OVAXbK1cams0mXmxM36YKv/bP3OZeacGiHMU2v+TmOuc9svbo73boqBTPJTjrT3EQxF3j5Zwu6rDEatOuI9mqY8teFm9WQcZc358XVOBeNa1EZD62TZ9/a4rVFnHvhFPKpODKZFJKZtLRZ22MvuQ2ea09zHEbAau4oJI9CPOKGxiLIm8eREmIaXTKNUCwpQUNCMzAjo9NCt1ZBa2uTO4Nfv/fd//4/3ebpsPewv+MR2APe2zyA73/XDxzOxWIn8lP5w9TIKo+mt3eVrbLH9doaeK1/V8pB23zV0SaidqocZOLlScqpl7yfSf4f43o76HVa2FxeFSE9q4A43Up8JPnefg+N1euoLS8JwEVSabl9bZa3cObFsyhkkpobLDK20Qmr3HPIWJBjsmzh8xPQFXCkZK4vt8gEW53SND3MhrnXGl2sN4G6L4FANOmlndklnCdFs5VCTs6vN/E6JosxTtj9/IQLbjKHwf3xTS7O3IWZp1bgpGmBz0rErCzMWaKN5eUaOsGCbq9RQay9ieSwiWhw6NWmK41kLjb2rsjqaOWCppOvRzn0Bzhz+v9v79xj5KruO/679857Zue9a2ODEwe3SLSqaANpTVKMJSqCCSCK1qIoFAI1jXiEJE1CpKYCt1JoRYGGFELSJqZpiBVbhEBSCkIB0rwa2j8cQSi4NthrbK+973nduXNf1e+ce8ezWwuz67WOlfO1hGzs2Tnz+5yZ7/zO7/weu2li337K8+TpfI6GSkPi5MQnCukkywo06dxHecsi5BDHcmVrS8lU/l0szvLvTUpks0J4OYUsTm3k945nt8SQVXtmetpzwvegUu1disEyPAzC+y4hcmrZOYX3Plyvlf9sqFyUk3qjiwyGeGiMY72WOCryUEzZw0GGFzhdK85yiIVXiq78+7gblRj3HXu8IubbE+li/N/c1JQQUeH58mXbyBkiLcjjFLNDY9ThSx3RaSolshzaMzPUmp2V6WLiJvxY+pEcxCnzBeL8z7itpfDQWHil6s6fyiB6CnuyoTtPTeBbee565qXJtgqU4N4P6Uy/3WQswvPSneJ0tCgnd9C7HRTf4+UH9wsmBrzewQq4efm4Cz1b9n5PkJ0w2F9BxGAjD1eEFHpdMp0mGc0JSnUmZe8EjnPHvTqiHNq4L0ecjSC4iy8d2dFnYSrbW3v20cwh7v9hUSadEjF9USgR99QVYSA5rmneZWQkquKiTXi7sYcbXazx+4vnAWay8jItyqyRnjA3iWdvd4693dCenb3vt2+79653+VHAw5aBAIR3ERC3jV68cqhS+tXIilo1LTqAHUvt6bTaNDs9IzuXRbHeeV6vyBqQnq8IMYhwRVTWmeAPFR/rpYcpQg3s+YoZbQ65Xb517lBzdpbypSJli0OUKVcpN7JKeDG9Ble1jZFr2yLFjL27XrtFc0cmhHjGl2jSgxIRw+hDLJt6Sdcq8seiW/P4eBvf/osjcnzhw8dU3yPHdqjValMQGlSq1yhdqlAzzFAjzFM6nvM2ULYap0T1L4iOV3b8Tl7wwsKMOLwgz+/i/+YVQERCK4ZOxt7tgt/jJkJxzwUhuFxRxi07mb3dpoI3RwWyKRH2xN5wpZndkU274owR9lJF1gjva5yJwF5uZE8fcJwgF31jHBo7SNPjR4TwcrEEl6Hzc8o9khdpzE2kK2az0WingYkgfcGN8rL5iy+Xl/2LuTItCovJL6XoizRqTcpd7uyZ6cOdTvOS3/vE/Wj/uAgtONmHQngXSfBf/3TTnXUR6y2nxAckSu3hp+FYL3/IeUoFhxxE3mw0Bl4c5aMYYJznKz4UoqaeL+FS/SMoiy439+YPOY8Jkv1RbXLabeq0OjLFrFgUKWZ82cZhi+7kODUOHRDPwZ4ve8uc6ztx8LCoXpMO5sCk4IVltP2DsPxD7D2KJuuilaFMgfJcr9V1etNBEKzO5XNWfaQ+L4zBItELLZrlQgzKkZniE4D04gab78Qlr/PyT+Mb+ePlAy/IcohzdRemjA32WujHUmNP93hhhrjwISp6kJVkbQqdNhWDJuVDm8zwmIfvum7X63k/8V3nr2y+WAutjxmm8YFUKnl2JpcpZPI5g22VebQy7TDuN9HPyJBwBee56VmaOnJUDO4U433E5JNIvPunAim0mXxeiC/fLbDnKk9c8subhTbJ6WJx/wVem88tIkQkTyniHoGb8DvcD5pHUDktp9N+6vUf7b1h806kkC1SCk7q4RDeReLbduPF5Xyi+GJ9uHJefigvvdboKMnzsSYOH6VsJi1KiUWsTmQ4xOGGOK4b/R6NBhLCK8SXcyu5BzhXNR1rosPjf3i6Qq9rU6fZEp5ngTMd+LJtZCWlK8OicXh7/AC1j4xTMp8XzVA826bm1JQorlhYNhv5t8ccsb73yM3aQzn2nBt191xyPb5U8vf4QbjdNMOnO11n+swzVqwvFHJbyDA2xIUl8eWaiDOaJvmhQd0wQc0wSw6XI/PRl0Uiyq6Iu2sNpkjFGRHHCzXEseHYGx/8gogFuB/XHegK1h+nvsDzlV8o0k7OTnAdm/LuDKWDDiWDHhmc4+qy7Zy94PV8z3vZC+herxv8ZNOXH29E6xtP3nZ11fDDs61kYmPCsj6WzWXXFYoFS0wiiT9h0WVlfOroXwyKfg0edTsdsbdihhpXnZHsv9DP5Y1iuOl8Tgzy5JAQV6JxfD6RK0jvdmAckgwJyXBVEAstZzDY3V7guy8HQfgvYRjs6hK9eeGnH5xe5McADz9JAhDeJQD8xnWXXFqrlp+uD1dT3KMhzk1lsZibmaN2oymOjPKiTaZycZwurl6TWRED3aM4BMElnJxfyeNsWDTYO4sq2Vh0Odzgdmwhvtykh8eRF/iyrVQS8V6eWiEapx/cT91mQ4gyf2i529Thffv9bqezl4gKYRiWDaJsvxEtkROG1AqCoOEHQct1vY7v+dNeELwWhOGewA/G3K6z9+adL75xPFTP33X9mkw6eZNlWpcZlrXWtMzhwTaa8YVQQAY1jCHqJgoUJnOysCTOhIhDDtGxeqHoLsxyiHOD49cjeC1oTD6YqdCfcRZx5VBCLLiB65DltinjNynvt8QXHjeNlyPX3Z7v+Yd8z3uBAnr0kvsf/68TvV12jI5a4VDnIt+gNSuGh7PFcuH8kML3G4a50jCMYcMwxPFj0PuV8XQZymEB5tNFfEIRF3ZRiCWOgbPnm62UKT1UllVoUZaCiL0Lj1YOVOX/eh1blCO3Wu1gamrmtVbD/sxN3372uRPZgX8/tQQgvEvk+/iNl28bGa7cWKyUZNZAFNfj2WFHDo6LZtaD89nkJGKZ13uspDPqWCYEKCWOixx+4I8lx3p5QoWYVBGFGzhVjHN7RX2/3aV8aYjyZVlWnFuxihK5IXLnZmju7bdEqIK7ULF42805f3Ls4JZ2o/HTwEyUfbe3OgyNM8mkPWFgzHph0HJ9t+G5Titrdzqbd/580VMH/vueW3JdP1wbWuH7LdO8yTStDbHnFhdSCI/MSpBnpqhNOWpZRUokjzXj6XvOcbnrQA+Chbm//VCDOCIsEN64X+5Ah7DYu40LHrg5UdKeoLLZo4TfFTFrj2Pq7OH3XBa/F8gPH3QD/9X/LJ0ztnXrVh7nvOhf3EPtpU/eWEqXUyvdkNYkKNxEprEhkUyeYxpGNowLLAZ6APe/FDzfNkwjy5dnoqowLv/lC7d0itI8wqmQFwU6nBXDJyMeUslFGe25JjXmmmTbtpjX13N6D7lh8MUt2394ZNFG4AeWnQCEd4lIH7vhsrNLucyLtXr1LA4rDNbPdzo2TR+dEiEHDjfMz3KILmD6t+Ayd1YcHdNZ4QmKC5noAkuOCbJFZoPTbomGODwAkScec11ndaROuWKJstW68Hw5ZGFPHKbW+EERbuDhkBxy6MzMvDo1M7dx4z1fm1yiyYv6sR/ffcuaRMK8iYg2mYZxrmGa+fiiKO4jYAcGOVaBOmaejAS3zpSVfeISMh7cGF0O/b+KtyhGLYsMpLcoLtGi1DBRkhtlJrCocmkshw54phh7tgm3QSmDW3NyOIUblLue57pjLLiu7T58+SM7dy3K4EU+eMfdo6mzrOIFZCQ/QAGtDsPA4i9tft2BJ/J8n59sd/+jPpT5YBCEnyeDziWiYcMwDTGskxukWxbfl3m5obzl9DxDeLaNprj0lNkOopfxPs8L/vrabT/YtsiXiIefQgIQ3iXCvftuMs9+88N31aulL1bqFRlKGLgAmjwyKT7QwuvlWFw0lVg0VY9ye2XLvmP9UvnPCZHgLsMX4rjM4Qb2eNlzaTbIFh+sLjndLjfEsXPFwnR95cjqLIcc6iOUra0UFyqcYmZPT4rcXn6uXrsVTB8e/9v1X/jKXy7R5CX92HOfuT5fKGbONcj6Y8MwbjdNoyAF2Og3cmEvOCCOCZvkk0kdSlPPzJKfZG8uqrgbKJUVceBIePs5uXFuLn9hiZhtj5JehzIhP5snLsjMwCWTs0aEd+uKyQ+O44jYrR8E97mev+vKh3aOLcnQU/hDL946WuikU2stw/toGBh3GAZlyaA9RLQ9lU7+MJFIbeo5zh2TE9NZLjO2uJiDs1PIeNYwrDt/uep39izVYz+FZmn91BDek9z+b99w+dZqvfh5znKIj8p8tGZvi0ewc+GDSC/j0lrOcohGwov83bjpSdQZjF+KvKWWF3L8Z1HWyeO2Ox3qNuaoM9cQZaaO09vt9pw7yEo6tXrliaFqpcbVa/nosi3o2jQ3tlfE+bjogp/Hnp2lw3sPXHjJ33/z5ydp9pJ+/Nm7b64WTetmwzCuJ8Nca1mmFOGoWu7YZb+88ec0tQ4lybVyfs/MNCiRbhlWImkYpmVaVsoIw1QYepbh+ym2zwh6QlyzXNhguFKchTssB2nyoFEpuE7PddxDbs99IQzDRy/70ndOGLtdksGn4Id23DpayHhUvfJr878gvv/xj6zOlyu3tRrtq3s9t+S67tetztjfbN75mpwVj1+nFQEI70lux1evuCJXqPkP1Wvlm4tcWMGJ71EaUK/bEz17+Rafww1yKjGLatwNLAozRGlB4solihXHo+JZMPrC22pSe3rWt9udJ3ue/1mOPf7Wa68ZmRXBJ+oj9QeKPKutUqH8ilWiebozO0XNt/eLUla+hHG7NrUmJn/RmZ3ZdOHWryu5yeaY58/u+fhwEHrnWqb1UcM0rjNNM9vvHGaQTyHtIYPeMALjFZ+CAwYl3jBDY8YyqNX0w6RjJq0gWUhZoZdKBI6Vs4KUbbdKgRdmvV53pZg2LNLE5OZyfDeZSIzL/+MeCcF4l2jfrpOI3Z7k2+aU/fi/3Tq60gud0lVfefq4l6GnbGE88aIIQHgXhev4D35gdH12JF9+crhW+aOh0pAZe76iQigIaHZqVggB52iKsEPk9cqJsAO9U6MRPSy+ouSWww5WQvbobbUCu9kYc9rNew4Eje2bt+6c58n8+yf/5P7qitqdQ5WKla3WhPhyQ5QOdzE7ejgqC06Q02n1Zg6Of+oPvvDII8tg+kk/xY/vumWNmQ4vNS1z3O329l507zYk8p80VTzB6U4AwrtMO/Tlaz+4qpIpbR+uli7iMe0snHGRAJ922602ddsdMVJHVDnxgEyRs3msqUrcDYyHVoqsBu4SRoaIWbpO92G35z30h1v/affxXvJ3b7u6lk9nnhg+Y8WGHGc51IcpO7JKpCI1D+4jZ3aW0sWiOHZ35manX9n1qw3XPvrkq8tkPp4GBEBgEQQgvIuAdaKHPjC6vjqSr3y/Vh5aXygOGcKjNUxWz2nDMHZPHp3aFQTeJel0Zl02lzFFA5toFI84BEeNcnzPtwPf3+/73ht+L3je6fnPffjBb/Flyjv+eur2K1fl86WXayuGV+fKHHI4gzLVEQq9HjUOvCUu6Xj0C2dKNCeOPjM9M3nNxq2PdU/0vPh3EACB5SUA4V1envTI6MZzCtn03w3XyulCIWcHZPwgsOjliaONfZsf2dn63q1XnUWh9WA6k7yGiyzioZJ8GWfb3Wnf9b5jJGi75SX+d2Jfe2KxpZzfu+2q3y9XKjvK9eE13EC9cMZqSpXr5NttauzfK6dPZLN8WdednZy85oK/eOCZZUaApwMBEDgBAQivorfId//86k+n0onPZrOZXhCGu5qN9lPe1Pj2pRQvLDThiS1XXFAdqX+1XK+cl69UjaHV76XkUIm85iw1DuwTub0cW24cnXzl9Zd2n7955/x4sSIkWBYEtCEA4VW01S9efHFi6jeH1pGV7NX+Z3ps40svecv5Up6+fXRtoZj9VrlWu7AwPEKls9aKBirdmSlqjx+kZC4ncoQbh97+0O9+7h9/upxr47lAAATemQCE99f4HbLj5kurtfqKJ8v1yodKq840i2e+R/SDsI8cElMHuOarcfToP5//uYe2/BpjgGkgcNoRgPCedluyvC+IL9xyudI3KvXqpbW17xNpZoaVFJOKO5NHeLT4S+d96v6Ny7sqng0EQOCdCEB4NXh/7Bhdn62sXfcP5Wrluvq63yjkuIcvhdQ+eogO7979s+d++aONW1HhpME7ASaeLgQgvKfLTpzi1/HMHZelKVHcUKpUHy4O19cV6jVymg1689XXv/mLA7u2QHhP8Qbg6UFggACEV7O3AzdcmbBb2XPXFOYmOvnqxvsei0ppNQMBc0FAIQEIr0L4WBoEQEBPAhBePfcdVoMACCgkAOFVCB9LgwAI6EkAwqvnvsNqEAABhQQgvArhY2kQAAE9CUB49dx3WA0CIKCQAIRXIXwsDQIgoCcBCK+e+w6rQQAEFBKA8CqEj6VBAAT0JADh1XPfYTUIgIBCAhBehfCxNAiAgJ4EILx67jusBgEQUEgAwqsQPpYGARDQkwCEV899h9UgAAIKCUB4FcLH0iAAAnoSgPDque+wGgRAQCEBCK9C+FgaBEBATwIQXj33HVaDAAgoJADhVQgfS4MACOhJAMKr577DahAAAYUEILwK4WNpEAABPQlAePXcd1gNAiCgkACEVyF8LA0CIKAnAQivnvsOq0EABBQSgPAqhI+lQQAE9CQA4dVz32E1CICAQgIQXoXwsTQIgICeBCC8eu47rAYBEFBIAMKrED6WBgEQ0JMAhFfPfYfVIAACCglAeBXCx9IgAAJ6EoDw6rnvsBoEQEAhAQivQvhYGgRAQE8CEF499x1WgwAIKCQA4VUIH0uDAAjoSQDCq+e+w2oQAAGFBCC8CuFjaRAAAT0JQHj13HdYDQIgoJAAhFchfCwNAiCgJwEIr577DqtBAAQUEoDwKoSPpUEABPQkAOHVc99hNQiAgEICEF6F8LE0CICAngQgvHruO6wGARBQSADCqxA+lgYBENCTAIRXz32H1SAAAgoJQHgVwsfSIAACehKA8Oq577AaBEBAIQEIr0L4WBoEQEBPAhBePfcdVoMACCgkAOFVCB9LgwAI6EkAwqvnvsNqEAABhQQgvArhY2kQAAE9CUB49dx3WA0CIKCQAIRXIXwsDQIgoCcBCK+e+w6rQQAEFBKA8CqEj6VBAAT0JADh1XPfYTUIgIBCAhBehfCxNAiAgJ4EILx67jusBgEQUEgAwqsQPpYGARDQkwCEV899h9UgAAIKCUB4FcLH0iAAAnoSgPDque+wGgRAQCEBCK9C+FgaBEBATwIQXj33HVaDAAgoJADhVQgfS4MACOhJAMKr577DahAAAYUEILwK4WNpEAABPQlAePXcd1gNAiCgkACEVyF8LA0CIKAnAQivnvsOq0EABBQSgPAqhI+lQQAE9CQA4dVz32E1CICAQgIQXoXwsTQIgICeBCC8eu47rAYBEFBIAMKrED6WBgEQ0JMAhFfPfYfVIAACCglAeBXCx9IgAAJ6EoDw6rnvsBoEQEAhAQivQvhYGgRAQE8CEF499x1WgwAIKCQA4VUIH0uDAAjoSQDCq+e+w2oQAAGFBCC8CuFjaRAAAT0JQHj13HdYDQIgoJAAhFchfCwNAiCgJwEIr577DqtBAAQUEoDwKoSPpUEABPQkAOHVc99hNQiAgEICEF6F8LE0CICAngQgvHruO6wGARBQSADCqxA+lgYBENCTAIRXz32H1SAAAgoJQHgVwsfSIAACehKA8Oq577AaBEBAIQEIr0L4WBoEQEBPAhBePfcdVoMACCgkAOFVCB9LgwAI6EkAwqvnvsNqEAABhQQgvArhY2kQAAE9CfwfPuxqBBc/t9wAAAAASUVORK5CYII="}]


function Auto_test(){
    if(test_id==1){
        //FRS_func(get_json)
        // MP3_func();TTS_func(1,0,'我是您的语音小助手，可以帮您导航，查天气，读新闻哟！',5)
        //

        //
        //Face_func_new("none",0)
       // Face_func_new(get_json,0)
        //Face_func_new(get_json[0],1) // TTS_func(1,0,0,0)
        //Face_func_new(test_json,0)

        //Theme_func(0)
        //Theme_func(0)
        // Theme_func(1)
        //callout_func(1)
    }


    switch (test_id) {
        case "1":
            //Face_func_new(test_json,0)  // test_json
            Face_func_new(get_json,0)  // get_json
            break;
        case "2":
            Face_func_new(test_json[5],1)
            break;
    }
}
