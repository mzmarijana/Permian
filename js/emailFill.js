$(function () {
    
    var contactInfo = [{"value":"Email","data":"First Name","data3":"Last Name","data4":"Company","data5":"Title","data6":"Phone","data7":"Mobile Phone","data8":"City","data9":"State/Province","data10":"Account Manager ","data11":"Account Manager Phone"},
        {"value":"scott@summitpump.com","data":"Scott","data3":"Keller","data4":"Summit Pump, Inc","data5":"President","data6":"(920) 869-4800","data7":"(920) 362-7776","data8":"Green Bay","data9":"WI","data10":"Jason Griffin","data11":"432.202.8756"},
        {"value":"laura@summitpump.com","data":"Laura","data3":"Ruotsala","data4":"Summit Pump, Inc","data5":"Buyer","data6":"(920) 869-4800","data7":"","data8":"Green Bay","data9":"WI","data10":"Jason Griffin","data11":"432.202.8756"},
        {"value":"","data":"Ed","data3":"Lewis","data4":"Lewis Inc","data5":"Owner","data6":"4858758475487","data7":"","data8":"","data9":"","data10":"Kyle Dahlberg","data11":"210.718.5239"},
        {"value":"","data":"Rowdy","data3":"Spain","data4":"EOG Resources - Douglas, WY","data5":"","data6":"(307) 358-8344","data7":"","data8":"Douglas","data9":"Wyoming","data10":"James Covington","data11":"361.816.8487"},
        {"value":"todd_overson@eogresources.com","data":"Todd","data3":"Overson","data4":"EOG Resources - Douglas, WY","data5":"Production Manager","data6":"(307) 554-0174","data7":"","data8":"Douglas","data9":"WY","data10":"James Covington","data11":"361.816.8487"},
        {"value":"mitchell_gray@eogresources.com","data":"Mitchell","data3":"Gray","data4":"EOG Resources - Douglas, WY","data5":"Sr. Production Foreman","data6":"(307) 358-8344","data7":"(307) 251-1246","data8":"Douglas","data9":"WY","data10":"James Covington","data11":"361.816.8487"},
        {"value":"edward_taylor@eogresources.com","data":"Ed","data3":"Taylor","data4":"EOG Resources - Douglas, WY","data5":"Production Spt.","data6":"3072312480","data7":"(307) 231-9406","data8":"Douglas","data9":"WY","data10":"James Covington","data11":"361.816.8487"},
        {"value":"david_moore@eogresources.com","data":"Dave","data3":"Moore","data4":"EOG Resources - Douglas, WY","data5":"Production Foreman","data6":"(307) 358-8344","data7":"(307) 248-3116","data8":"Douglas","data9":"WY","data10":"James Covington","data11":"361.816.8487"},
        {"value":"kclifton@diamondbackenergy.com","data":"Kyle","data3":"Clifton","data4":"Diamondback Energy","data5":"Petroleum Geologist","data6":"","data7":"","data8":"Midland","data9":"TX","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"bnall@diamondbackenergy.com","data":"Bill","data3":"Nall","data4":"Diamondback Energy","data5":"Production superintendent","data6":"","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"asetiadarma@diamondback.com","data":"Auggie","data3":"Setiadarma","data4":"Diamondback Energy","data5":"Drilling Manager","data6":"(432) 221-7429","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"kwinstead@diamondbackenergy.com","data":"Kyle","data3":"Winsted","data4":"Diamondback Energy","data5":"","data6":"(432) 556-4509","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"rallen@diamondbackenergy.com","data":"Rudy","data3":"Allen","data4":"Diamondback Energy","data5":"","data6":"(432) 269-4128","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"ccolwell@diamondbackenergy.com","data":"Carla","data3":"Colwell","data4":"Diamondback Energy","data5":"","data6":"","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"dlowther@diamondbackenergy.com","data":"Deanna","data3":"Lowther","data4":"Diamondback Energy","data5":"","data6":"","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"lbernard@diamondbackenergy.com","data":"LEONARD","data3":"BERNARD","data4":"Diamondback Energy","data5":"","data6":"(432) 557-4439","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"pwelford@diamondbackenergy.com","data":"PAUL","data3":"WELFORD","data4":"Diamondback Energy","data5":"","data6":"(432) 557-0171","data7":"","data8":"","data9":"","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"jvillasana@diamondbackenergy.com","data":"JESUS","data3":"VILLASANA","data4":"Diamondback Energy","data5":"","data6":"(432) 557-0708","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"sgreen@diamondbackenergy.com","data":"SHANE","data3":"GREEN","data4":"Diamondback Energy","data5":"","data6":"(432) 425-0607","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"csanders@diamondbackernergy.com","data":"CHRIS","data3":"SANDERS","data4":"Diamondback Energy","data5":"","data6":"(432) 557-0708","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"dhaws@diamondbackenergy.com","data":"WES","data3":"HAWS","data4":"Diamondback Energy","data5":"","data6":"(435) 828-7857","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"jtaylor@diamondbackenergy.com","data":"JEREMY","data3":"TAYLOR","data4":"Diamondback Energy","data5":"","data6":"(432) 557-0524","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"michael.dean@integrity.com","data":"MICHAEL","data3":"DEAN","data4":"Diamondback Energy","data5":"","data6":"(325) 812-6781","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"ranwar@diamondbackenergy.com","data":"Ryan","data3":"Anwar","data4":"Diamondback Energy","data5":"Production Engineer","data6":"(432) 221-7423","data7":"(432) 349-5776","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"dmuensterman@diamondback.com","data":"DWAYNE","data3":"MUENSTERMAN","data4":"Diamondback Energy","data5":"","data6":"(432) 557-0524","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"jwhite@diamondbackenergy.com","data":"Jeff","data3":"White","data4":"Diamondback Energy","data5":"VP Operations","data6":"(432) 221-7400","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"tstice@diamondbackenergy.com","data":"Travis","data3":"Stice","data4":"Diamondback Energy","data5":"","data6":"","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"gfitzgerald@diamondbackenergy.com","data":"Greg","data3":"Fitzgerald","data4":"Diamondback Energy","data5":"","data6":"","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"jcantu@diamondback.com","data":"JESSIE","data3":"CANTU","data4":"Diamondback Energy","data5":"","data6":"(325) 812-7007","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"diamondbackenergy@diamondbackenergy.com","data":"BRANDON","data3":"CHERIOR","data4":"Diamondback Energy","data5":"","data6":"(432) 425-3875","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"diamondbackhp652@diamondbackenergy.com","data":"Eric","data3":"Foster","data4":"Diamondback Energy","data5":"","data6":"4325570524","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"rsavage@diamonback.com","data":"Ron","data3":"Savage","data4":"Diamondback Energy","data5":"","data6":"(432) 557-0524","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"ryancy@diamondbackenergy.com","data":"Robert","data3":"Yancy","data4":"Diamondback Energy","data5":"Completion Engineer","data6":"","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"kcliffton@diamondbackenergy.com","data":"Kyle","data3":"Cliffton","data4":"Diamondback Energy","data5":"Petrphysicist","data6":"","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"jwesson@diamondbackenergy.com","data":"Janie","data3":"Wesson","data4":"Diamondback Energy","data5":"Completions Engineer","data6":"","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
        {"value":"bfutch@diamondbackenergy.com","data":"Bradley","data3":"Futch","data4":"Diamondback Energy","data5":"","data6":"","data7":"","data8":"Midland","data9":"Texas","data10":"Mikel Hill","data11":"432.215.8309"},
 {"value":"jmohamed@qarun.net","data":"Jwanda","data3":"Mohamed","data4":"Qarun Petroleum (Apache)","data5":"Contracts Manager","data6":"","data7":"","data8":"Cairo","data9":"","data10":"","data11":""},
        {"value":"mmahmoud@qarun.net","data":"Mohamed","data3":"Mahmoud","data4":"Qarun Petroleum (Apache)","data5":"Drilling Manager","data6":"","data7":"","data8":"Cairo","data9":"","data10":"","data11":""},
        {"value":"ielrawy@qarun.net","data":"Ibrahim","data3":"Elrawy","data4":"Qarun Petroleum (Apache)","data5":"Senior Drilling Engineer","data6":"","data7":"","data8":"Cairo","data9":"","data10":"","data11":""},
        {"value":"hreda@qarun.net","data":"Hesham","data3":"Reda","data4":"Qarun Petroleum (Apache)","data5":"Senior Drilling Engineer","data6":"","data7":"","data8":"Cairo","data9":"","data10":"","data11":""},
        {"value":"mkahla@qarun.net","data":"Mohamed","data3":"Aboukahla","data4":"Qarun Petroleum (Apache)","data5":"Senior Drilling Engineer","data6":"","data7":"","data8":"Cairo","data9":"","data10":"","data11":""},
        {"value":"mantar@qarun.net","data":"Mohamed","data3":"Antar","data4":"Qarun Petroleum (Apache)","data5":"Senior Drilling Engineer","data6":"","data7":"","data8":"Cairo","data9":"","data10":"","data11":""}];

    $('#email').autocomplete({
        source: contactInfo,
        select: function (event, ui) {
            /*var thehtml = ' <strong style="color:#ce1141">Step 2: Validate Contact Info</strong><br><strong>Contact Status:</strong> Current Contact<br><strong>First Name:</strong> ' + info.value + ' <br> <strong>Last Name:</strong> ' + info.data + ' <br> <strong>Company:</strong> ' + info.data3 + ' <br> <strong>Job Title:</strong> ' + info.data4  + ' <br> <strong>Phone Number:</strong> ' + info.data5 + ' <br> <strong>Job Title:</strong> ' + info.data6 + ' <br> <strong>Account Manager:</strong> ' + info.data7;
            $('#outputcontent').html(thehtml);*/

            $('#first-name').val(ui.item.data);
            $('#last-name').val(ui.item.data3);
            $('#tags').val(ui.item.data4);
            $('#job-title').val(ui.item.data5);
            $('#phone-number').val(ui.item.data6);

            var acc = "<b>Account Manager</b><br>" + ui.item.data10 + "<br>" + ui.item.data11;

            $("#accountFound").show();
            $("#accountFound #accountManager").html(acc);

        }
    });

});
