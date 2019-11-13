$(function(){
    $.ajax({
        url:"http://localhost:5050/index",
        type:"get",
        dataType:"json",
        success:function(result){
           var resc=result;
           for(var item of resc){
            html+=`<div class="col-md-12 col-sm-12">
                <div class="media border p-3">
                        <input type="checkbox" id="check"/>
                        <img class="w-4" src="${item.img}" alt=""/>
                   <div class="media-body">
                    <p class="mb-0">
                        <a class="text-muted font_small ml-3" href="">${item.product}</a>
                    </p>
                    <p class="font_small text-muted mb-0 ml-3">￥${item.Price}</p>
                    <div class="d-flex justify-content-left align-items-center mb-3">
                        <button class="my_btn ml-3">-</button>
                        <input class="w-60" type="text" value="${item.count}"/>
                        <button class="my_btn">+</button>
                    </div>
                   </div>
                </div>
            </div>`;
            }
            
            $(html).appendTo("#d1")
        }
    })
})