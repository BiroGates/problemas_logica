using Internal;
public class DataStore<T>
{
    public T valor {get; set;}

    public void MostrarTipo()
    {   
        Console.WriteLine($"{typeof(T)}");
    }
}

DataStore<String> instance = new DataStore<String>();
instance.valor = "Aloha";
instance.MostrarTipo();