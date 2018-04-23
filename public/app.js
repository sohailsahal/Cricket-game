var runId=document.getElementById('run');
var wicketId=document.getElementById('wicket');
var headingId=document.getElementById('heading');
var dummyId=document.getElementById('dummy');
var btnDis=document.getElementById('btnId');
var run=0;
var wicket=0;
var teamFlag=false;
var balls=12;
var result,tVar;

function played(){
    if(teamFlag=== false)
    {
        headingId.innerHTML='First inning Started...';
    }
   else if(teamFlag=== true)
    {
        headingId.innerHTML='second inning Started...';
    }


        
    var randomNum=Math.floor(Math.random()*7);
    balls--;

    if(randomNum===0)
    {
        wicket++;

    }

    else{
        run+=randomNum;
    }
    if(teamFlag===false){
        dummyId.innerHTML='Remaining balls '+ balls; 
    }

    if((balls<=0 || wicket==2) && teamFlag===false)
    {
        result=run;
        tVar=run+1;
        teamFlag=true;
        run=0;
        wicket=0;
        balls=12;     
        dummyId.innerHTML='First Team has score: '+result + '  And target is : '+tVar;
        headingId.innerHTML="first Team batting has completed now click on played button to second inning start...";
    }

    else if(teamFlag==true && tVar>0 && wicket!=2 && balls!=0)
    {
        tVar-=randomNum;
        dummyId.innerHTML='first Team need '+tVar+ ' Run off '+ balls+ ' ball';     
    }

    
    // if(teamFlag=== true && result===1 && (wicket==2 || balls<=0))


        
       if((balls<=0 || wicket==2 || tVar<0 ) && teamFlag==true)
        {
        if(tVar===1){
            dummyId.innerHTML='Draw Game';
        }
        else if(wicket===2 &&  tVar>0)
        {
            dummyId.innerHTML='First Team Won the match';
        }
        else{
            
            dummyId.innerHTML='second Team Won the match';
        }

        btnDis.disabled=true;
        headingId.innerHTML='Game Finish';
        
    }
        
    


    runId.innerHTML=" "+run;
    runId.style.fontSize='22px';
    runId.style.color='#0f4157';
    wicketId.innerHTML=" "+wicket;
    wicketId.style.fontSize='22px';
    wicketId.style.color='#0f4157';
    // dummyId.innerHTML=balls;
}