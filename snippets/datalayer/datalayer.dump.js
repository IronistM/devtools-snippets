var buffer="\n"; 
for (var i in dataLayer){
	for (var j in dataLayer[i]){
		buffer += j+":"+dataLayer[i][j]+"\n";
	}
}
console.trace(buffer)
