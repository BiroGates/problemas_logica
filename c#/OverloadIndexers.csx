using Internal;
class frutas
{
    public string[] _frutas = new string[10];

    public string this[int index]
    {
        get { return _frutas[index]; }
        set { _frutas[index] = value; }
    }
}

frutas Frutas = new frutas();
Frutas[0] = "banana";
Frutas[1] = "Abacaxi";
Console.WriteLine(Frutas[0]);