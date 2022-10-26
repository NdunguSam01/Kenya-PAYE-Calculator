//Input fields
const period=document.getElementById('period');
const employment=document.getElementById('employment');
const basic=document.getElementById('basic');
const benefits=document.getElementById('benefits');
const nssfDed=document.getElementById('nssfDed');
const nssfRate=document.getElementById('nssfRate');
const nhifDed=document.getElementById('nhif');

//Output fields
const income=document.getElementById('income');
const nscontrib=document.getElementById('nscontrib');
const incdect=document.getElementById('incdect');
const benefitsK=document.getElementById('benefitsK');
const tax=document.getElementById('tax');
const relief=document.getElementById('relief');
const taxOff=document.getElementById('taxOff');
const paye=document.getElementById('paye');
const nhcontrib=document.getElementById('nhcontrib');
const net=document.getElementById('net');

const calculate=()=>
{
    income.innerHTML='Kshs '+basic.value;
    nsscalc()
    reliefCalc()
}


const monthly=()=>
{

}

const nsscalc=()=>
{
    let nsvalue=0;
    if(nssfDed.value=='no')
    {
        nsvalue=0;
        nssfDed.innerHTML='Kshs '+nsvalue;
    }
    else
    {
        if(nssfDed.value=='yes')
        {
            if(nssfRate.value=='old')
            {
                nsvalue=200;
                nscontrib.innerHTML='Kshs ' +nsvalue;
            }
            else
            {
                if(basic.value>18000)
                {
                    nsvalue=2160;
                    nscontrib.innerHTML='Kshs '+nsvalue;
                }
                else
                {
                    nsvalue=basic.value*0.12;
                    nscontrib.innerHTML='Kshs '+nsvalue;
                }
            }
        }
    }
}
const reliefCalc=()=>
{
    let reliefAmount=0;
    if(employment.value=='month')
    {
        reliefAmount=2400;
        relief.innerHTML='Kshs '+reliefAmount;
    }
    else if(employment.value=='year')
    {
        reliefAmount=28800;
        relief.innerHTML='Kshs '+reliefAmount;
    }
}