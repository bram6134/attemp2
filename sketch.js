var database,e;
var e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15,e16,e17,e18,e19,e20,e21,e22,e23,e24,e25,e26;
var r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26
var ep=[ ];
var ea=[ ];
var table;
var i,o,k;

function preload(){
    table = loadImage('Table.png')
}

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    
}

function draw(){
    background(table)
    for(i=0;i<27;i++){
        var listRef  = database.ref('List/'+i+'/'+'Name');
        listRef.on("value",function(data){
            ep[i]=data.val()
        })
    }

    for(o=0;o<27;o++){
        var releaseRef  = database.ref('List/'+o+'/'+'ReleaseDate');
        releaseRef.on("value",function(data){
            ea[o]=data.val()
        })
    }

    textSize(16);
    fill('blue');
    textAlign('center');

    text(ep[1],155,39);
    text(ea[1],375,39);

    text(ep[2],155,57);
    text(ea[2],375,57);

    text(ep[3],155,75);
    text(ea[3],375,75);

    text(ep[4],155,94);
    text(ea[4],375,94);

    text(ep[5],155,112);
    text(ea[5],375,112);

    text(ep[6],155,131);
    text(ea[6],375,131);

    text(ep[7],155,149);
    text(ea[7],375,149);

    text(ep[8],155,167);
    text(ea[8],375,167);

    text(ep[9],155,185);
    text(ea[9],375,185);

    text(ep[10],155,203);
    text(ea[10],375,203);

    text(ep[11],155,222);
    text(ea[11],375,222);

    text(ep[12],155,240);
    text(ea[12],375,240);

    text(ep[13],155,258);
    text(ea[13],375,258);

    text(ep[14],155,276);
    text(ea[14],375,276);

    text(ep[15],155,295);
    text(ea[15],375,295);

    text(ep[16],155,313);
    text(ea[16],375,313);

    text(ep[17],155,331);
    text(ea[17],375,331);

    text(ep[18],155,350);
    text(ea[18],375,350);

    text(ep[19],155,368);
    text(ea[19],375,368);

    text(ep[20],155,385);
    text(ea[20],375,385);

    text(ep[21],155,404);
    text(ea[21],375,404);

    text(ep[22],155,421);
    text(ea[22],375,421);

    text(ep[23],155,440);
    text(ea[23],375,440);

    text(ep[24],155,459);
    text(ea[24],375,459);

    text(ep[25],155,477);
    text(ea[25],375,477);
    
    text(ep[26],155,496);
    text(ea[26],375,496);    
}