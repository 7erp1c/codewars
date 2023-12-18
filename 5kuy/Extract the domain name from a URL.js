//Консологи должен показывать только названия сайта,

function domainName(url){
     url = url.replace('http://', '');
     url = url.replace('www.', '');
     url = url.replace('https://','');
     //your code here
    return url.split('.')[0];
}
console.log (domainName("http://www.zombie-bites.com"));
console.log (domainName("https://www.cnet.com" ));
console.log (domainName("http://github.com/carbonfive/raygun"));