
class Player
{
    constructor(PosX, PosY, Speed)
    {
        this.PosX=PosX;
        this.PosY=PosY;
        this.Speed=Speed;
        this.HP= 100;
        this.level=1;
        this.exp=0;
        this.Weapon=new Array()
        this.Invincibility=false
        this.invCounter=0
    }
    Weapon = new weapon()

    Movement()
    {
        let x = this.PosX+=vx;
        let y = this.PosY+=vy;
        document.getElementById("Player").style.left = x+"px";
        document.getElementById("Player").style.top = y+"px";
    }
    addXP(xp)
    {
        this.exp+=xp
    }
    Damaged()
    {
        for (let i = 0; i < Enemies.length; i++) 
        {
            if(Math.abs(Enemies[i].PosX-this.PosX)<50 && Math.abs(Enemies[i].PosY-this.PosY)<50 && !this.Invincibility) 
            {
                this.HP-=10;
                this.Invincibility=true;
                document.getElementById("bar").style.width = (Player1.HP -=1)+"%";
            }
        }
        if(this.HP<1) alert("YO DIED")
    }
}
class weapon
{
    constructor()
    {
        this.ProjectileCount=3;
        this.WeaponType=0;
        this.ShotInAction=false;
        this.PosX=0;
        this.PosY=0;
    }
    Shoot()
    {

        if(!this.ShotInAction)
        {
            this.PosX=Player1.PosX+20;
            this.PosY=Player1.PosY+20;
            document.getElementById("Projectile").style.top = this.PosY+"px";
            document.getElementById("Projectile").style.left = this.PosX+"px";
            this.ShotInAction=true;
            
        }
        else
        {
            
            document.getElementById("Projectile").style.top = (this.PosY-=10)+"px";
            if(this.PosY<1) this.ShotInAction=false;
        }

        
    }
    
    Attack()
    {
        for (let i = 0; i < Enemies.length; i++) 
        {
            if(Math.abs(Enemies[i].PosX-this.PosX)<50 && Math.abs(Enemies[i].PosY-this.PosY)<50) Enemies[i].Kill()
            
        }
    }
}
class Buffs
{
    constructor(PosX, PosY)
    {
        this.PosX=PosX;
        this.PosY=PosY;
    }
}
class Enemy
{
    constructor(PosX, PosY, Speed)
    {
        this.PosX=PosX;
        this.PosY=PosY;
        this.Speed=Speed;
        this.HP=1
    }
    Kill()
    {
        this.HP=0
        Player1.addXP(10)
    }
    Respawn()
    {
        this.HP=1
        this.PosX=(Math.random()*1920)
        this.PosY=(Math.random()*1080)
    }
}

let Player1 = new Player(500,500,15);

let Enemies = new Array()
let Projectile= new Array()
Weapons = new weapon()

Player1.Weapon.push(Weapons)
let Buff = new Buffs();
let BuffArray= new Array()
vx=0;
vy=0;
AddEnemy()

function AddEnemy()
{
    
    let img = document.createElement("img");
    img.src="IMG/Enemy.png";
    img.id="Enemy"+Enemies.length;
    img.className="Enemy";
    let x=(Math.random()*1920);
    let y=(Math.random()*1080);
    img.style.left = x+"px";
    img.style.top = y+"px";
    let Enemys = new Enemy(x,y,5);
    Enemies.push(Enemys);
    document.getElementById('body').appendChild(img);
}
function InvCounterTick()
{
    
    if(Player1.Invincibility)
    {    
        Player1.invCounter+=1;
    }
    if(Player1.invCounter>=200) 
    {
        Player1.invCounter=0;    
        Player1.Invincibility=false;
            
    }
}
function EnemyMovement()
{
    let Xslow;
    let Yslow;
    for (let i = 0; i < Enemies.length; i++) 
    {
        if(Enemies[i].HP> 0)
        {
            Xslow=1;
            Yslow=1;
            let Xdiff= Math.abs(Enemies[i].PosX - Player1.PosX);
            let Ydiff= Math.abs(Enemies[i].PosY - Player1.PosY);
            //if(Xdiff -Ydiff >0) Yslow=Ydiff/Xdiff;
            //else  Xslow=Xdiff/Ydiff;

            Xslow = Xdiff / (Xdiff + Ydiff);
            Yslow = Ydiff / (Xdiff + Ydiff);
            if (Enemies[i].PosX < Player1.PosX)
            {
                document.getElementById("Enemy"+i).style.left=(Enemies[i].PosX += Enemies[i].Speed *Xslow)+"px";
            }
            else document.getElementById("Enemy"+i).style.left=(Enemies[i].PosX -= Enemies[i].Speed *Xslow)+"px";

            if (Enemies[i].PosY < Player1.PosY)
            {
                document.getElementById("Enemy"+i).style.top=(Enemies[i].PosY += Enemies[i].Speed *Yslow)+"px";
            }
            else document.getElementById("Enemy"+i).style.top=(Enemies[i].PosY -= Enemies[i].Speed *Yslow)+"px";
   
        }
    }
}
function update()
{
    if(Player1.Weapon.length<Player1.ProjectileCount)Player1.Weapon.push(Weapons)
    for (let i = 0; i < Player1.Weapon.length; i++) 
    {
        Player1.Weapon[i].Shoot()
        Player1.Weapon[i].Attack()
    }
    for (let i = 0; i < Enemies.length; i++)
    {
        if(Enemies[i].HP==0)
        {
            if(Player1.exp%100==0) AddEnemy()


            Enemies[i].Respawn()
        }
    }
    InvCounterTick() 
    Player1.Movement();
    EnemyMovement();
    Player1.Damaged()
    requestAnimationFrame(update);
}
update();