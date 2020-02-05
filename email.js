function getDummy(num) {
    
    var dummyEmail= '<div class="card">'+
                    '<div class="card-header" id="headingOne">'+
                        '<h2 class="mb-0">'+
                        '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse'+num+'" aria-expanded="true" aria-controls="collapse'+num+'">'+
                            'Email from random person '+num+
                        '</button>'+
                        '</h2>'+
                    '</div>'+

                    '<div id="collapse'+num+'" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">'+
                        '<div class="card-body">'+
                        'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven heard of them accusamus labore sustainable VHS.'+
                        '</div>'+
                    '</div>'+
                    '</div>';
    return dummyEmail;
}

var inboxContents = '<div class="accordion" id="accordionExample">';

for(var i=1; i<100;i++) {
    inboxContents = inboxContents.concat(getDummy(i));
}
inboxContents = inboxContents.concat('</div>');


function changeContents(folderName) {
    var content = document.getElementById('content');
    if(folderName=='inbox') {
        console.log(inboxContents);
        content.innerHTML = inboxContents;
    } else if(folderName=='outbox') {
        content.innerHTML = 'Outbox Folder';
    } else if(folderName=='sent') {
        content.innerHTML = 'Sent Folder';
    }
}