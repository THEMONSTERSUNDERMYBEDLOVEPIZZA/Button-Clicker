var clicks = 10;
var money = 0;
var rebirthmult = 1;
var rebirthcost = 1000000;
var tradetimes = 0;
var buttonclicked = 0;
var upgrade1cost = 10;
var upgrade2cost = 40;
var upgrade3cost = 100;
var upgrade4cost = 4000;
var upgrade5cost = 20000;
var upgrade6cost = 50000;
var upgrade8cost = 80000;
var clickValue = 1;
var perSecondValue = 0;
var interval = 1000;
var perMillisecondValue = 0;
var rebirths = 0;
var everySecond = window.setInterval(function everysecond() {
  if (perSecondValue != 0) {
    clicks = Math.ceil(clicks + (perSecondValue * (rebirthmult)));
  }
  document.getElementById("clicknumber").textContent = clicks;
  document.getElementById("clickstrength").textContent = clickValue;
},interval);
var everyMillisecond = window.setInterval(function everysecond() {
  clicks += perMillisecondValue;
  document.getElementById("clicknumber").textContent = clicks;
},1);

function updatenumber() {
  document.getElementById("clicknumber").textContent = clicks;
  document.getElementById("clicktimes").textContent = buttonclicked;
  document.getElementById("money").textContent = money;
}

function perMillisecondUpgrade_clicked(cost, value) {
  if (perMillisecondValue == 0) {  
    if (clicks >= cost) {
      perMillisecondValue = value;
      clicks -= cost;
      updatenumber()
      document.getElementById("upgrade7").textContent = "";
    }
  }
}

function whenClick() {
  clicks = Math.ceil(clicks + (clickValue * rebirthmult));
  buttonclicked += 1;
  document.getElementById("babysteps").textContent = "Baby Steps (Click the button) - Unlocked"
  if (buttonclicked >= 20)
  {
    document.getElementById("grind").textContent = "Grind  (Click the button 20 times or more) - Unlocked"
  }
  updatenumber()
}

function perClickUpgrade_clicked(cost, value, id) {
  if (clicks >= cost) {
    clicks -= cost;
    clickValue += value;
    updatenumber()
    document.getElementById("clickstrength").textContent = clickValue;
    if (id == 1)
    {
    upgrade1cost = Math.ceil(upgrade1cost * 1.5)
    document.getElementById("upgrade1").textContent = "Stronger click: +1 per click (cost: " + upgrade1cost + " points)"
    }
    else if (id == 2)
    {
    upgrade2cost = Math.ceil(upgrade2cost * 1.5)
    document.getElementById("upgrade2").textContent = "Even stronger click: +5 per click (cost: " + upgrade2cost + " points)"
    }
    else if (id == 6)
    {
    upgrade6cost = Math.ceil(upgrade6cost * 1.5)
    document.getElementById("upgrade6").textContent = "Strongman click: +8,000 per click (cost: " + upgrade6cost + " points)"
    }
    else if (id == 8)
    {
      upgrade8cost = Math.ceil(upgrade8cost * 1.5)
      document.getElementById("upgrade8").textContent = "John click: +85,000 per click (cost: " + upgrade8cost + " points)"
    }
  }
if (clickValue >= 7)
{
  document.getElementById("minimumwage").textContent = "Minimum Wage (Get a clickstrength of 7.25 or more) - Unlocked";
}
if (clickValue >= 50000) {
  document.getElementById("strongman").textContent = "Strongman (Get a clickstrength of 50,000 or more) - Unlocked";
  document.getElementById("strongman").id = "unlocked"
}
}


function perSecondUpgrade_clicked(cost,value,id) {
  if (clicks >= cost) {
    clicks -= cost;
    perSecondValue += value;
    if (id == 3)
    {
    upgrade3cost = Math.ceil(upgrade3cost * 1.5)
    document.getElementById("upgrade3").textContent = "Weak robot: +5 per second (cost:" + upgrade3cost + " points)"
    }
    else if (id == 4)
    {
    upgrade4cost = Math.ceil(upgrade4cost * 1.5)
    document.getElementById("upgrade4").textContent = "Strong robot: +1,000 per second (cost:" + upgrade4cost + " points)"
    }
    else if (id == 5)
    {
      upgrade5cost = Math.ceil(upgrade5cost * 1.5)
      document.getElementById("upgrade5").textContent = "Stronger robot: +9,000 per second (cost:" + upgrade5cost + " points)"
    }
  }
  updatenumber()
  document.getElementById("persecondnumber").textContent = perSecondValue;
if (perSecondValue >= 50000) {
  document.getElementById("datacenter").textContent = "Data Center (Get 50,000 clicks per second or more)- Unlocked"
}
}

function shoptrade_clicked(price,pricetype,buy,buytype)
{
  var afford = false;
  if (pricetype == "points")
  {
    if (clicks >= price)
    {
      clicks -= price;
      afford = true;
    }
  }
  else if (pricetype == "money")
  {
    if (money >= price)
    {
      money -= price;
      afford = true;
    }
  }
  if (afford == true)
  {
    tradetimes += 1;
    if (buytype == "money")
    {
      money += buy;
    }
    else if (buytype == "points")
    {
      clicks += buy;
    }
    else if (buytype == "persecond")
    {
      perSecondValue += buy;
    }
    else if (buytype == "perclick")
    {
      clickValue += buy;
    }
  }
  if (tradetimes >= 4)
  {
    document.getElementById("entrepreneur").textContent = "Entrepreneur (Trade 4 times) - Unlocked";
  }
  updatenumber();
}
function rebirthfunction(){
  if (rebirthcost <= clicks) {
    if (confirm("Are you sure you want to rebirth? (This will add more to your multiplier, but you will lose everything else.)")) {
    rebirth += 1;
    rebirthmult += 0.6;
    document.getElementById("rebirthmultiplier").textContent = rebirthmult;
    clicks = 0;
    money = 0;
    tradetimes = 0;
    upgrade1cost = 10;
    upgrade2cost = 40;
    upgrade3cost = 100;
    upgrade4cost = 4000;
    upgrade5cost = 20000;
    upgrade6cost = 50000;
    upgrade8cost = 80000;
    clickValue = 1;
    perSecondValue = 0;
    perMillisecondValue = 0;
    buttonclicked = 0;
    document.getElementById("upgrade1").textContent = "Stronger click: +1 per click (cost: " + upgrade1cost + " points)"
    document.getElementById("upgrade2").textContent = "Even stronger click: +5 per click (cost: " + upgrade2cost + " points)"
    document.getElementById("upgrade3").textContent = "Weak robot: +5 per second (cost:" + upgrade3cost + " points)"
    document.getElementById("upgrade4").textContent = "Strong robot: +1,000 per second (cost:" + upgrade4cost + " points)"
    document.getElementById("upgrade5").textContent = "Stronger robot: +9,000 per second (cost:" + upgrade5cost + " points)"
    document.getElementById("upgrade6").textContent = "Strongman click: +8,000 per click (cost: " + upgrade6cost + " points)"
    document.getElementById("upgrade8").textContent = "John click: +85,000 per click (cost: " + upgrade8cost + " points)"
    }
  }
}