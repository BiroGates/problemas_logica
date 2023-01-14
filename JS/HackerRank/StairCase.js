// https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
function stair(n){ 
	for(let i = 0; i < n; i++) {
		for(let j = n; j > 0; j--) {
			if(j < n - i) process.stdout.write('#'); 
			else process.stdout.write(' ');
		}
		console.log(); 
	}
}
stair(6);