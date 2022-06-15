using Internal;

class Box
{
    int altura;
    int largura;

    int comprimento;
    public void SetValues(int altura, int largura, int comprimento)
    {   
        this.altura = altura;
        this.largura = largura;
        this.comprimento = comprimento;
    }

    public static Box operator+ (Box b, Box c)
    {
        Box box = new Box();
        box.altura = b.altura + c.altura;
        box.largura = b.largura + c.largura;
        box.comprimento = b.comprimento + c.comprimento;
        return box;
    }

    public void ShowData()
    {
        Console.WriteLine(this.altura.ToString() + "x" + this.largura.ToString()+ "x" + this.comprimento.ToString());
    }
}


// Defining the boxes
Box box1 = new Box();
Box box2 = new Box(); 
Box box3 = box1 + box2;

// Setting their values
box1.SetValues(10, 5, 3);
box2.SetValues(15,7,8);


// Logging them 
box3.ShowData();