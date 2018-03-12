function pfcheck(){
    let pfh = '7b3d3f67568ec003663ff63f9f310fe923cca43ee4c366e9fad030d40205f0f6';
    var SHA256 = new Hashes.SHA256();
    var userinput = sessionStorage.getItem('pf');
    return pfh == SHA256.hex(userinput);
}
