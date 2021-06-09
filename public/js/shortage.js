var attachmentArray = [];


/*Attachment Upload via ajax start*/
$("#shoratgeFileUpload").on('submit', (function (e) {
    showLoader();
    e.preventDefault();
    var querystring = $("#shoratgeFileUpload").serialize();
    var filedata = new FormData(this);
    $.ajax({
        url: BASE_URL+'/eta/upload-excel?' + querystring,
        type: "POST",
        data: filedata,
        contentType: false,
        cache: false,
        processData: false,
        success: function (data) {
            toastr.options = {
                "timeOut": 10000
            }
            if(data.status==true){
                hideLoader();
                toastr.remove();
                toastr.success(data.message, 'Success');
                window.location.href = BASE_URL+"/eta/shortage-lists";
                return false;
            }else{
                hideLoader();
                toastr.remove();
                toastr.error(data.message, 'Failed');
                return false;
            }
        },
        error: function () {
            hideLoader();
        }
    });

    $(this).trigger('reset');
}));


/*Attachment Upload via ajax start*/
$("#geFileUpload").on('submit', (function (e) {
    showLoader();
    e.preventDefault();
    var querystring = $("#geFileUpload").serialize();
    var filedata = new FormData(this);
    $.ajax({
        url: BASE_URL+'/eta/upload-excel?' + querystring,
        type: "POST",
        data: filedata,
        contentType: false,
        cache: false,
        processData: false,
        success: function (data) {
            if(data.status==true){
                hideLoader();
                toastr.remove();
                toastr.success(data.message, 'Success');
                window.location.href = BASE_URL+"/eta/shortage-lists";
                return false;
            }else{
                hideLoader();
                toastr.remove();
                toastr.error(data.message, 'Failed');
                return false;
            }
        },
        error: function () {
            hideLoader();
        }
    });

    $(this).trigger('reset');
}));

function updateEda(id){
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('#csrf_token_'+id).val()
        }
    });

    var obj = {
      'eda':$("#eda_"+id).val(),
      'id' : id
    };
    if($("#eda_remark_"+id)){
        obj.remark = $("#eda_remark_"+id).val();
    }
    showLoader();
    $.ajax({
        url: BASE_URL+'/eta/update-eda',
        type: "POST",
        data:obj,
        success: function (data) {
            $("#myModal_"+id).modal('hide');
            $(".modal-backdrop").hide();
            if(data.status==true){
                $("#edaDate_"+id).html(data.data.edaDate);
                $("#oldEda_"+id).html(data.data.oldEda);
                $("#pending_days_"+id).html(data.data.pending_days);
                if(data.data.remark!='')
                $("#edaremark_"+id).html(data.data.remark);
                if(data.data.is_buyer){
                    $("#eda_status_"+id).html('<p>EDA Confirmed</p>');
                }else{
                    $("#eda_status_"+id).html('<p>EDA Confirmed</p><a class="eda_status_'+id+'" onclick="updateStatus('+id+');" href="javascript:;"><button class="btn btn-sm btn-success">Mark as close?</button></a>');
                }
                var htmltr = '';
                for (var i = 0; i < data.data.changelog.length; i++) {
                    htmltr += "<tr>";
                    htmltr += "<td>"+parseInt(i+1)+"</td>";
                    htmltr += "<td>"+data.data.changelog[i].eda+"</td>";
                    htmltr += "<td>"+data.data.changelog[i].remarks+"</td>";
                    htmltr += "<td>"+data.data.changelog[i].user.username+"</td>";
                    htmltr += "<td>"+data.data.changelog[i].created_at+"</td>";
                    htmltr += "</tr>";
                }
                $("#changelog_"+id).html(htmltr);
                hideLoader();
                toastr.remove();
                toastr.success(data.message, 'Success');
                return false;
            }else{
                hideLoader();
                toastr.remove();
                toastr.error(data.message, 'Failed');
                return false;
            }
        },
        error: function () {
            hideLoader();
        }
    });
}


function updateStatus(id){
    var c = confirm("Are you sure? You want to close this order");
    if(c){
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('#csrf_token_'+id).val()
            }
        });

        var obj = {
          'id' : id
        };
        showLoader();
        $.ajax({
            url: BASE_URL+'/eta/mark-close',
            type: "POST",
            data:obj,
            success: function (data) {
                if(data.status==true){
                    $("#eda_status_"+id).html(data.data.status);
                    $(".eda_status_"+id).remove();
                    hideLoader();
                    toastr.remove();
                    toastr.success(data.message, 'Success');
                    return false;
                }else{
                    hideLoader();
                    toastr.remove();
                    toastr.error(data.message, 'Failed');
                    return false;
                }
            },
            error: function () {
                hideLoader();
            }
        });
    }
}
/*Attachment Upload via ajax end*/


/* Reset all the data which came from API end */

$(document).ready(function(){

    /* function for case listing filters validations */
   $('.date-validation').on('change', function () {
        if($('#datefrom').val() == '' || $('#dateto').val() == '')
        {
            var hasError = 0;
            $('#datefrom').attr('data-parsley-required', 'true');
            $('#datefrom').parsley().validate();
            if ($('#datefrom').parsley().isValid()) {
                $('#datefrom').parsley().destroy();
            } else {
                hasError++;
            }
            $('#dateto').attr('data-parsley-required', 'true');
            $('#dateto').parsley().validate();
            if ($('#dateto').parsley().isValid()) {
                $('#dateto').parsley().destroy();
            } else {
                hasError++;
            }
        } else {
            $("#btnSave").attr("disabled", false); 
            $("#reset").attr("disabled", false); 
        }
    })
    /* function for reset search parameters from case listing */
    $('#reset').on('click', function () {
        var newURL = location.href.split("?")[0];
        window.history.pushState('object', document.title, newURL);
        location.reload();
    });
     /* function for disabled and enable search button*/
    $('#status').on('change', function () {
        $("#btnSave").attr("disabled", false);
        $("#reset").attr("disabled", false);
    });
    $('#buyerkeyword').on('change', function () {
        $("#btnSave").attr("disabled", false);
        $("#reset").attr("disabled", false);
    });

    $('#orderkeyword').on('keyup', function () {
        if($('#datefrom').val() == '' && $('#dateto').val() == '' && $('#status').val() == '' && $('#buyerkeyword').val() == '' && $('#orderkeyword').val() == '' && $('#partkeyword').val() == '')
        {
            $("#btnSave").attr("disabled", true);
            $("#reset").attr("disabled", true);
        }
        else {
            $("#btnSave").attr("disabled", false);
            $("#reset").attr("disabled", false);
        }
    });

    $('#partkeyword').on('keyup', function () {
        if($('#datefrom').val() == '' && $('#dateto').val() == '' && $('#status').val() == '' && $('#buyerkeyword').val() == '' && $('#orderkeyword').val() == '' && $('#partkeyword').val() == '')
        {
            $("#btnSave").attr("disabled", true);
            $("#reset").attr("disabled", true);
        }
        else {
            $("#btnSave").attr("disabled", false);
            $("#reset").attr("disabled", false);
        }
    });
    
});