import { signal, Component, tag } from "omi";
import "../components/omiu/button";


// 数据接口
interface FoodPost {
    foodname:string,
    imgUrl:string,
    description:string,

}

// 标签
const tags = signal([
    
])


const foodPosts: FoodPost[] = [
    {
        foodname: "萝卜炖羊肉",
        imgUrl: "https://ts1.cn.mm.bing.net/th/id/R-C.d2ee809e06eb47ea44759cfa68c2a5b1?rik=4nnxV60GD9zhtA&riu=http%3a%2f%2fs2.cdn.xiachufang.com%2fd59424727d9511e59955b82a72e00100.jpg%3fimageView2%2f2%2fw%2f620%2finterlace%2f1%2fq%2f90%2fformat%2fjpg%2f.jpg&ehk=6e09etaLLCwHzASBNZWo8%2bFe%2bC2%2fxLhjnInIAoUZaq0%3d&risl=&pid=ImgRaw&r=0",
        description:"萝卜炖羊肉是用白萝卜、羊肉制作的一道家常菜。萝卜软烂，清香味淡，具有清痰止咳，温中益气之功效。 增强机体免疫功能:有助于增强机体的免疫功能，提高抗病能力。",
    },
    {
        foodname: "银耳莲子羹",
        imgUrl: "https://ts1.cn.mm.bing.net/th/id/R-C.51c61107f25bdf17d768f4aaebc7377d?rik=%2f5sD%2fbG0pElTJA&riu=http%3a%2f%2fcp1.douguo.net%2fupload%2fcaiku%2f2%2f6%2f6%2fyuan_264684bed6cca46e135d95a98d9a8386.jpg&ehk=ULH24g%2bBWQwWSYsETXSoBO0PHRJ6wZDgYX4Th7%2fZJso%3d&risl=&pid=ImgRaw&r=0",
        description:"羹浓味甜，口感浓甜润滑，美味可口。此汤具养阴润肺，生津整肠之效，有润肺养胃、美容养颜的功能，适用于伴有涕中带血的鼻咽癌病人和女性朋友。",
    },
    {
        foodname: "乌鸡汤",
        imgUrl: "https://cp1.douguo.com/upload/caiku/3/4/d/yuan_346e8af84af9d03bd819d4ea245cdbed.jpg",
        description:"乌鸡汤属于粤菜，有着悠久的历史，以特有的菜式和韵味，独树一帜，粤菜是中国著名八大菜系之一，在国内外享有盛誉。粤菜的主要性格为:取之自然，烹之自由 ，食之自在!",
    }
]

@tag('food-template')
export class FoodTemplate extends Component {
    
    static css = [
        `
        .box01{ width:1140px; height:300px; padding:30px;} 
        .box01 .ner{ height:300px;}
        .box01 .ner img{ float:left}
        .box01 .wenz{width:645px;height: 206px;background: #eeeeee;padding: 20px 30px;float: left;margin-top: 25px;}
        .box01 .wenz .tex{ font-size:30px; color:#da251c; height:45px; line-height:45px; margin-bottom:10px;}
        .box01 .wenz p{ font-size:14px; line-height:25px;}
        .box02{ height:305px; padding:30px;}
        .box02 .wenzi{ width:550px; height:170px; float: left; margin-top:60px;}
        .box02 .wenzi p{line-height:30px; font-size:16px; text-indent:2em;}
        .box02{ height:305px;}
        .box02 img{ float:left; margin-left:50px;}
        .box3{ width:1140px; height:750px; padding:30px; }
        .box3-tit{ 
        height: 90px;
        font-size: 50px;
        font-weight: bolder;
        width: 100%;
        text-align: center;
        line-height: 40px;
        font-family:Verdana, Geneva, sans-serif;}
        .box3-tit span{ color:#8aaa3d; font-size:16px; font-family: Arial, Helvetica, sans-serif; line-height:60px;}
        `,
    ]
    
    render() {
        return (
          <>
             <header class="shadow-sm dark:shadow-gray-700 mt-4">
                <div class="flex max-w-7xl mx-auto pt-2 pb-3 lg:justify-normal justify-between px-1 lg:px-0 sm:px-3">
                    <div class="flex items-center cursor-pointer">
                        <img class=" w-8 h-8" src="https://omi.cdn-go.cn/admin/latest/home/omi.svg" alt="OMI Logo" />
                        <div class="ml-1 text-xl font-semibold text-green-500">OMI Food</div>
                    </div>
                    <i class="t-icon t-icon-bulletpoint text-xl sm:text-2xl lg:hidden"></i>
                    <div class="flex-1 lg:pl-16 lg:flex hidden">
                        <div class="lg:flex items-center justify-end flex-1">
                            <div class="ml-6 cursor-pointer hover:text-blue-600">联系我们</div>
                            <div class="ml-6 cursor-pointer hover:text-blue-600">登录/注册</div>
                            <div class="ml-6 cursor-pointer rounded-md bg-blue-600 hover:bg-blue-600/90 text-white px-5 py-2">下载中心</div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="box01">
            <div class="ner">
            <img src="https://img.ixintu.com/upload/jpg/20210526/02a3fc8066d8599fff03d1607672f1f7_67627_800_800.jpg!con">
            <div class="wenz">
            <div class="tex">饮食文化</div>
                <p>民以食为天，世界上任何一个国家都有一个传统的饮食文明与其它文明共同在历史中轮回。每个地区都有与众不同的饮食习惯和味觉倾向，而各自将这些精妙的技艺发展成了一种习俗，一种文化，这使得无数食客流连在世界的每一个角落。</p>
            </div>
            </div>
            </div>


            <div class="box02">
            <div class="wenzi">
            <p>在亚洲的东方有一个拥有悠久文明历史的国度，那里有令人垂涎的山珍，也有令人回肠的美味。来自五湖四海的食材和调味品正在无时无刻的触动着亿万人的神经和味蕾。</p>
            </div>
            </div>
            <div class="box3">
                <div class="box3-tit">健康养生<br>  
                <span>—— Health preservation ——</span>
            </div>


            <div class="w-full py-12 overflow-hidden flex justify-center">
            <div class="grid grid-cols-1 xl:grid-cols-3 gap-20 2xl:gap-40">
            {
              foodPosts.value.map((food, index) => (
                <div class="w-[320px] md:w-[600px] xl:w-[320px] flex flex-none flex-col items-center" 
                  key={index}>
                  <div class="mar30 mart30" >
                    <img class="w-[320px] h-[260px] object-cover rounded-lg" src={food.imgUrl} />
                    <div class="tit coh">{food.foodname} </div>
                    <p>{food.description}</p>
                  </div>
              ))
            }
            </div>
            </div>
            </div>
            </div>
          </>
        )
      }


}



export function Food() {
    return <food-template />
}