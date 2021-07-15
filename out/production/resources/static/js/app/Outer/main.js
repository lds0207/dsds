$(function(){
    var $searchBtn = $('.shopping_nav .search_btn'),
        $searchForm = $('header form');

        $searchBtn.click(function () {
            $searchForm.toggleClass('active');
        });
    $('.main_slides ul ').bxSlider({
            controls:false,
            mode:'vertical'
    });

    //상품상세 이미지 변경
    var $productPictures = $('.product_pictures'),
        $bigImg = $productPictures.find('.big_img'),
        $thumbImgList = $productPictures.find('.thumb_img li');

    $thumbImgList.click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var targetImgPath ='/img/' + $(this).find('img').attr('data-target');

        $bigImg.attr('src',targetImgPath);
    });

    //상품 수량 가격 변경하기
    var $quantity = $('.quantity'),
        $unitprice = $quantity.attr('data-unitprice'),
        $qtyBtn = $quantity.find('span'),
        $qytInput = $quantity.find('input'),
        $tagetTotal = $('.total_price  .price');

    $qtyBtn.click(function () {
        var currentCount = $qytInput.val();

        if($(this).hasClass('plus')){
            $qytInput.val(++currentCount);
        }else{
            if(currentCount > 1){
                $qytInput.val(--currentCount);
            }
        }

        //수량*단가 변수 total에 저장하고 price값으로 변경
        var total = (currentCount * $unitprice).toLocaleString('en');
        $tagetTotal.text(total + '$');

    });

/*    var sizeFilter = $('.size_filter input');
    var targetList = $('.new_arrivals_list li');

    sizeFilter.click(function () {
        var targetValue =[];
        sizeFilter.filter(':checked').each(function () {
            targetValue.push('.' + $(this).val());
        });//each
        var targetClass = targetValue.join(', ');

        targetList.hide();
        $(targetClass).fadeIn();
        /!*console.log(targetValue);*!/

    });//sizeFilter.click*/

    //isotope filtering
    //init
    var $filters = $('.combi_filters input');
    var filters ={};
    var $grid = $('.new_arrivals_list').isotope({
        itemSelector: '.new_arrivals_list > li'
    });

    $filters.click(function () {
        var $button =$(this);

        //get grupt key
        var $buttonGroup = $button.parent('div');
        var filterGroup = $buttonGroup.attr('data-filter-group');

        //set filter for group
        filters[ filterGroup ] = $button.val();
        //combine filters
        var filterValue = concatValues( filters );
        //set filter for Isotope
        $grid.isotope({filter: filterValue});

        if($button.val() =='*'){
            $button.parent('div').find('input').prop('checked', false);
            $button.prop('checked', true);
        } else{
            $button.parent('div').find('input').eq(0).prop('checked', false);
        }
    });//filter click

    //flatten object by concatting values
    function concatValues(obj) {
        var value ='';
        for (var list in obj){
            value += obj[ list ];
        }
        /*
        for(var i =0, i < obj.length; i++){
            value += obj[i];
        }
         */
        return value;
    }





});//document ready function