let sells = new Array();

function Add(val)
{
    sells.push(val);
}

function Message()
{
    const init = parseInt(prompt("¿cuantas ventas registrarás?"));
    Cycle(init);

    do
    {
        const value = prompt("¿Quieres registrar más ventas? yes|no");

        if(value == "yes")
        {
            const linit = parseInt(prompt("¿Cuantas más?"));
            Cycle(linit);
        }
        else
            break;
    }while(true);
    
    Calculate(init);
}

function Cycle(loop)
{
    for(let i = 0; i < loop; i++)
    {
        Add(parseInt(prompt((sells.length + 1) + "a venta:")));
    }
}

function Calculate(length)
{
    let a = Max(length);
    let b = Media(length);
    let c = Min(length, a);

    alert("La venta más alta fue: " + a + "\nLa media de ventas fue: " + b + "\nLa venta menor fue: " + c);
}

function Max(length)
{
    let la = 0;
    for(let i = 0; i < length; i++)
    {
        if(sells[i] > la) la = sells[i];
    }
    return la;
}

function Min(length, max)
{
    let lc = max;
    for(let i = 0; i < length; i++)
    {
        if(sells[i] > lc) lc = sells[i];
    }
    return lc;
}

function Media(length)
{
    let a = 0;

    for(let i = 0; i < length; i++)
    {
        a += sells[i];
    }
    return a / sells.length;
}

Message();