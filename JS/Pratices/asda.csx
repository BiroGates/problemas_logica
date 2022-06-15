using Internal;

public int[] arr = {10,20,30,40,50,60,70,80};

public int[] newArr = arr;
newArr[0] = 550;

for(int i = 0; i < 8; i++)
{
    Console.WriteLine(newArr[i].ToString());
    Console.WriteLine(arr[i].ToString());
}