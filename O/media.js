let values = [];

function Add(val)
{
    values.push(val);
}

function Message()
{
    const init = parseInt(prompt("¿cuantas ventas registrarás?"));
    Cycle(init);
    const value = prompt("¿Quieres registrar más ventas? yes|no");

    /*switch(value)
    {
        case "yes":
            break;
        case "no":
            break;
        default:
            alert("YES OR NO");
            
            break;
    }
    */
    Calculate(init);
}

function Cycle(loop)
{
    for(let i = 0; i < loop; i++)
    {
        Add(parseInt(prompt((i + 1) + "a venta:")));
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
        if(values[i] > la) la = values[i];
    }
    return la;
}

function Min(length, max)
{
    let lc = max;
    for(let i = 0; i < length; i++)
    {
        if(values[i] > lc) lc = values[i];
    }
    return lc;
}

function Media(length)
{
    let a = 0;

    for(let i = 0; i < length; i++)
    {
        a += values[i];
    }
    return a / values.length;
}

Message();