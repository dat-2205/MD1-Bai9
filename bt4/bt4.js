function anh(value){
    check()
    if (value==1){
            if (document.getElementById('anh1').src=='http://localhost:63342/MD1-Bai9/bt4/img/anhmeo11.png'){
                document.getElementById("anh1").src = "img/anhmeo21.png"
            } else if(document.getElementById('anh1').src=="http://localhost:63342/MD1-Bai9/bt4/img/anhmeo21.png") {
                document.getElementById("anh1").src = "img/anhmeo31.png"
            }else if(document.getElementById('anh1').src=="http://localhost:63342/MD1-Bai9/bt4/img/anhmeo31.png") {
                document.getElementById("anh1").src = "img/anhmeo11.png"
            }
        check()
    } else if (value==2){
        if (document.getElementById('anh2').src=='http://localhost:63342/MD1-Bai9/bt4/img/anhmeo12.png'){
            document.getElementById("anh2").src = "img/anhmeo22.png"
        } else if(document.getElementById('anh2').src=="http://localhost:63342/MD1-Bai9/bt4/img/anhmeo22.png") {
            document.getElementById("anh2").src = "img/anhmeo32.png"
        }else if(document.getElementById('anh2').src=="http://localhost:63342/MD1-Bai9/bt4/img/anhmeo32.png") {
            document.getElementById("anh2").src = "img/anhmeo12.png"
        }
        check()

    } else if (value==3){
        if (document.getElementById('anh3').src=='http://localhost:63342/MD1-Bai9/bt4/img/anhmeo13.png'){
            document.getElementById("anh3").src = "img/anhmeo23.png"
        } else if(document.getElementById('anh3').src=="http://localhost:63342/MD1-Bai9/bt4/img/anhmeo23.png") {
            document.getElementById("anh3").src = "img/anhmeo33.png"
        }else if(document.getElementById('anh3').src=="http://localhost:63342/MD1-Bai9/bt4/img/anhmeo33.png") {
            document.getElementById("anh3").src = "img/anhmeo13.png"
        }
        check()
    }

}
function check() {
    let check = false;
    if (document.getElementById("anh1").src == 'http://localhost:63342/MD1-Bai9/bt4/img/anhmeo21.png'){
        if(document.getElementById("anh2").src == 'http://localhost:63342/MD1-Bai9/bt4/img/anhmeo22.png'){
            if(document.getElementById("anh3").src == 'http://localhost:63342/MD1-Bai9/bt4/img/anhmeo23.png'){
               document.getElementById("container").style.background = "red";
               check =true;
            }
        }
    } else if (document.getElementById("anh1").src == 'http://localhost:63342/MD1-Bai9/bt4/img/anhmeo31.png'){
        if(document.getElementById("anh2").src == 'http://localhost:63342/MD1-Bai9/bt4/img/anhmeo32.png'){
            if(document.getElementById("anh3").src == 'http://localhost:63342/MD1-Bai9/bt4/img/anhmeo33.png'){
                document.getElementById("container").style.background = "blue";
                check =true;
            }
        }
    } else if (document.getElementById("anh1").src == 'http://localhost:63342/MD1-Bai9/bt4/img/anhmeo11.png'){
        if(document.getElementById("anh2").src == 'http://localhost:63342/MD1-Bai9/bt4/img/anhmeo12.png'){
            if(document.getElementById("anh3").src == 'http://localhost:63342/MD1-Bai9/bt4/img/anhmeo13.png'){
                document.getElementById("container").style.background = "orange";
                check =true;
            }
        }
    }
    if (!check){
        document.getElementById("container").style.background = "white";
    }
}