var indexDropped = 0;

function dropdownIndex() {
    if (indexDropped == 0) {
        document.getElementById("dropdownIndexContent").style.display = "block";
        indexDropped = 1;
    }
    else if (indexDropped == 1) {
        document.getElementById("dropdownIndexContent").style.display = "none";
        indexDropped = 0;
    }
}

function openRef1() {
    document.getElementById("references1").style.display = "block";
}

function closeRef1() {
    document.getElementById("references1").style.display = "none";
}


function openRef2() {
    document.getElementById("references2").style.display = "block";
}

function closeRef2() {
    document.getElementById("references2").style.display = "none";
}


function openRef3() {
    document.getElementById("references3").style.display = "block";
}

function closeRef3() {
    document.getElementById("references3").style.display = "none";
}


function openRef4() {
    document.getElementById("references4").style.display = "block";
}

function closeRef4() {
    document.getElementById("references4").style.display = "none";
}


function openRef5() {
    document.getElementById("references5").style.display = "block";
}

function closeRef5() {
    document.getElementById("references5").style.display = "none";
}


function openRef6() {
    document.getElementById("references6").style.display = "block";
}

function closeRef6() {
    document.getElementById("references6").style.display = "none";
}


function openRef7() {
    document.getElementById("references7").style.display = "block";
}

function closeRef7() {
    document.getElementById("references7").style.display = "none";
}


function openRef8() {
    document.getElementById("references8").style.display = "block";
}

function closeRef8() {
    document.getElementById("references8").style.display = "none";
}


function openRef9() {
    document.getElementById("references9").style.display = "block";
}

function closeRef9() {
    document.getElementById("references9").style.display = "none";
}


function openRef10() {
    document.getElementById("references10").style.display = "block";
}

function closeRef10() {
    document.getElementById("references10").style.display = "none";
}


function openRef11() {
    document.getElementById("references11").style.display = "block";
    
}

function closeRef11() {
    document.getElementById("references11").style.display = "none";
}

function openRef12() {
    document.getElementById("references12").style.display = "block";
    
}

function closeRef12() {
    document.getElementById("references12").style.display = "none";
}

var shapeshift = 0;

document.getElementById("wizard").onclick = function() {
    if (shapeshift == 0) {
        document.getElementById("shapeshifter").style.backgroundColor = "green";
        document.getElementById("shapeshifter").style.borderRadius = "50%";
        shapeshift = 1;
    }
    else {
        document.getElementById("shapeshifter").style.backgroundColor = "blue";
        document.getElementById("shapeshifter").style.borderRadius = "0";
        shapeshift = 0;
    }
}
