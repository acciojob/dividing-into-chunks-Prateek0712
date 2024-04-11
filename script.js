const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let ans=[];
	let i=0;
	while(i<arr.length)
		{
			let temp=[];
			let sum=0;
			let j=i;
			while(j<arr.length)
				{
					sum+=arr[j];
					if(sum<=n)
					{
						temp.push(arr[j]);
					}
					else
					{
						break;
					}
					j++;
				}
			if(temp.length>0)
			{
				ans.push(temp);
			}
			i=j;
		}
	return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
