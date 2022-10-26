// Interfaces são usadas pra definir a assinatura da função
// estão precupadas em saber o "O que" e não "como"
using Internal;

interface ILooger
{
    void Logar(string message);
}

class terminal : ILooger
{

    public void Logar(string message)
    {   
        Console.WriteLine($"LOGGER : {message}");        
    }

}

terminal obj = new terminal();

obj.Logar("Essa e uma mensage bem dahora!");





