function ipToNumber(ip = '127.0.0.1') {
  return ip
    .split('.')            
    .map(Number)                
    .reduce((acc, part, i) => {
      return acc + (part << ((3 - i) * 8));
    }, 0);
}
console.log(ipToNumber('127.0.0.1'));       
console.log(ipToNumber('10.0.0.1'));        
console.log(ipToNumber('192.168.1.10'));    
console.log(ipToNumber('165.225.133.150')); 
console.log(ipToNumber('0.0.0.0'));         
console.log(ipToNumber('8.8.8.8'));         
