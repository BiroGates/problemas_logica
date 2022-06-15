using Internal;
class NumeroFofo
{
    int valor1;
    int valor2; 

    public void SetValues(int valor1, int valor2)
    {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    public static bool operator == (NumeroFofo a, NumeroFofo b)
    {
        if(a.valor1 == b.valor1 && a.valor2 == b.valor2)
            return true;
        else
            return false;
    }

    public static bool operator != (NumeroFofo a, NumeroFofo b)
    {
        if(a.valor1 != b.valor1 && a.valor2 != b.valor2)
            return true;
        else
            return false;
    }
    
}

NumeroFofo n1 = new NumeroFofo();
NumeroFofo n2 = new NumeroFofo();

n1.SetValues(10,10);
n2.SetValues(10,10);

bool check = n1 != n2;
Console.WriteLine(check.ToString());