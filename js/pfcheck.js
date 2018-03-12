function pfcheck(){
    let pfh = 'd01c0c96d980baa4213ad787baed2bdc7876d071deb1667bc8ce36f0e44a1716';
    var SHA256 = new Hashes.SHA256();
    var userinput = sessionStorage.getItem('pf');
    return pfh == SHA256.hex(userinput);
}
