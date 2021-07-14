// default behaviour

let HomeMain = document.getElementById('HomeMain');
let TeamMain = document.getElementById('TeamMain');
let AchievementsMain = document.getElementById('AchievementsMain');

let navbarHomeMain = document.getElementById('navbarHomeMain');
let navbarTeamMain = document.getElementById('navbarTeamMain');
let navbarAchievementsMain = document.getElementById('navbarAchievementsMain');

TeamMain.style.display = 'none';
AchievementsMain.style.display = 'none';

let homeTopRide = document.getElementById('homeTopRide');
homeTopRide.style.display = 'none';
let teamTopRide = document.getElementById('teamTopRide');
teamTopRide.style.display = 'none';
let achievementsTopRide = document.getElementById('achievementsTopRide');
achievementsTopRide.style.display = 'none';

// home click
function homeClick(){
    homeTopRide.style.display = 'block';
    HomeMain.style.display = 'block';
    TeamMain.style.display = 'none';
    AchievementsMain.style.display = 'none';
    homeTopRide.click();
    homeTopRide.style.display = 'none';

    navbarHomeMain.classList.add('navbarHome');
    navbarHomeMain.classList.remove('navbarTeam');
    navbarHomeMain.classList.remove('navbarAchievement');
    
    navbarTeamMain.classList.remove('navbarHome');
    navbarTeamMain.classList.add('navbarTeam');
    
    navbarAchievementsMain.classList.remove('navbarHomeAchievement');
    navbarAchievementsMain.classList.add('navbarAchievement');
}

// team click
function teamClick(){
    teamTopRide.style.display = 'block';
    HomeMain.style.display = 'none';
    TeamMain.style.display = 'block';
    AchievementsMain.style.display = 'none';
    teamTopRide.click();
    teamTopRide.style.display = 'none';

    navbarTeamMain.classList.add('navbarHome');
    navbarTeamMain.classList.remove('navbarTeam');
    navbarTeamMain.classList.remove('navbarAchievement');
    
    navbarHomeMain.classList.remove('navbarHome');
    navbarHomeMain.classList.add('navbarTeam');
    
    navbarAchievementsMain.classList.remove('navbarHomeAchievement');
    navbarAchievementsMain.classList.add('navbarAchievement');
}

// Achievements click
function achievementsClick(){
    achievementsTopRide.style.display = 'block';
    HomeMain.style.display = 'none';
    TeamMain.style.display = 'none';
    AchievementsMain.style.display = 'block';
    achievementsTopRide.click();
    achievementsTopRide.style.display = 'none';
    
    navbarAchievementsMain.classList.add('navbarHomeAchievement');
    navbarAchievementsMain.classList.remove('navbarTeam');
    navbarAchievementsMain.classList.remove('navbarAchievement');
    
    navbarHomeMain.classList.remove('navbarHome');
    navbarHomeMain.classList.add('navbarTeam');
    
    navbarTeamMain.classList.remove('navbarHome');
    navbarTeamMain.classList.add('navbarTeam');
}
