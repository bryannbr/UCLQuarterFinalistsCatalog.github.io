//class for Club Objects
class Club
{
    constructor(name, country, goalsScored, goalsConceded, xGperGame, 
    wins, losses, avgSquadAge, trophiesWon, avgPossession, shotsOnTarget,
    shotConversionRate, leaguePos)
    {
        this.name = name;
        this.country = country;
        this.goalsScored = goalsScored;
        this.goalsConceded = goalsConceded;
        this.xGperGame = xGperGame;
        this.wins = wins;
        this.losses = losses;
        this.avgSquadAge = avgSquadAge;
        this.trophiesWon = trophiesWon;
        this.avgPossession = avgPossession;
        this.shotsOnTarget = shotsOnTarget;
        this.shotConversionRate = shotConversionRate;
        this.leaguePos = leaguePos;
    }
    getName() {
        return this.name;
    }
    getCountry() {
        return this.country;
    }
    getGoalsScored() {
        return this.goalsScored;
    }
    getGoalsConceded(){
        return this.goalsConceded;
    }
    getXGperGame() {
        return this.xGperGame;
    }
    getWins() {
        return this.wins;
    }
    getLosses() {
        return this.losses;
    }
    getAvgSquadAge() {
        return this.avgSquadAge;
    }
    getTrophiesWon() {
        return this.trophiesWon;
    }
    getAvgPossession() {
        return this.avgPossession;
    }
    getShotsOnTarget() {
        return this.shotsOnTarget;
    }
    getShotConversionRate() {
        return this.shotConversionRate;
    }
    getLeaguePosition(){
        return this.leaguePos;
    }
}

let clubs = [
    new Club("FC Barcelona", "Spain", 16, 8, 1.98, 5, 2, 25.4, 5, 58.25, 45, 12.03, 2),
    new Club("Paris Saint Germain", "France", 13, 9, 1.82, 4, 2, 25.2, 0, 60.75, 42, 10.0, 1),
    new Club("Atletico Madrid", "Spain", 19, 8, 1.55, 5, 1, 28.6, 0, 50.13, 41, 16.96, 4),
    new Club("Borussia Dortmund", "Germany", 10, 5, 1.36, 4, 1, 25.6, 1, 45.88, 40, 9.52, 5),
    new Club("Arsenal", "England", 17, 5, 1.47, 5, 2, 25.6, 0, 57, 36, 16.1, 1),
    new Club("Bayern Munich", "Germany", 15, 7, 1.55, 6, 1, 26.7, 6, 58.38, 36, 13.1, 2),
    new Club("Real Madrid","Spain", 18, 8, 1.91, 7, 0, 27.3, 14, 56.88, 49, 12.8, 1),
    new Club("Manchester City", "England", 24, 9, 2.5, 8, 0, 26.8, 1, 69.63, 67, 14.83, 3),
]
let infoCardContainers;

//Listener for Sorting
document.addEventListener("DOMContentLoaded", function() {

    eClubContainers = document.querySelectorAll(".info-card");

    // Listener for sortByGoal
    let sortByGoalsButton = document.querySelector(".sortOptions button:nth-child(1)");
    sortByGoalsButton.addEventListener("click", sortClubsByGoals);
    //Listener for sortByXG
    let sortClubsByxGButton = document.querySelector(".sortOptions button:nth-child(2)");
    sortClubsByxGButton.addEventListener("click", sortClubsByxG);
    //Listener for sortByLeastGoalsConceded
    let sortClubsByLeastGoalsCButton = document.querySelector(".sortOptions button:nth-child(3)");
    sortClubsByLeastGoalsCButton.addEventListener("click", sortClubsByLeastGoalsC);
    //Listener for sortByAvgSquadAge
    let sortClubsByAvgSquadAgeButton = document.querySelector(".sortOptions button:nth-child(4)");
    sortClubsByAvgSquadAgeButton.addEventListener("click", sortClubsBySquadAge);
    //Listener for sortClubsByTrophies
    let sortClubsByTrophiesButton = document.querySelector(".sortOptions button:nth-child(5)");
    sortClubsByTrophiesButton.addEventListener("click", sortClubsByTrophies);
    //Listener for sortClubsByPossession
    let sortClubsByPossessionButton = document.querySelector(".sortOptions button:nth-child(6)");
    sortClubsByPossessionButton.addEventListener("click", sortClubsByPossession);
    //Listener for sortClubsByShots
    let sortClubsByShotsButton = document.querySelector(".sortOptions button:nth-child(7)");
    sortClubsByShotsButton.addEventListener("click", sortClubsByShots);
    //Listener for sortClubsByConvRate
    let sortClubsByConvRateButton = document.querySelector(".sortOptions button:nth-child(8)");
    sortClubsByConvRateButton.addEventListener("click", sortClubsByConvRate);
    //Listener for sortClubsByLeaguePos
    let sortClubsByLeaguePosButton = document.querySelector(".sortOptions button:nth-child(9)");
    sortClubsByLeaguePosButton.addEventListener("click", sortClubsByLeaguePos);


    // Populating initial club data onto infocards
    clubs.forEach((club, index) => {
        let clubDataHTML = populateDataHTML(club);
        eClubContainers[index].querySelector(".info-card .club-data-container").innerHTML = clubDataHTML;
    });
});
//Listener for Filtering
document.addEventListener("DOMContentLoaded", function(){
    eClubContainers = document.querySelectorAll(".info-card");

    //Reset the page, or apply no filters
    let filterByNoneButton = document.querySelector(".filterOptions button:nth-child(1)");
    filterByNoneButton.addEventListener("click", filterByNone);
    //Listener for filtering by Spanish teams
    let filterBySpainButton = document.querySelector(".filterOptions button:nth-child(2)");
    filterBySpainButton.addEventListener("click", filterBySpain);
    //Listener for filtering by English Teams
    let filterByEnglandButton = document.querySelector(".filterOptions button:nth-child(3)");
    filterByEnglandButton.addEventListener("click", filterByEngland);
    //Listener for filtering by French Teams
    let filterByFranceButton = document.querySelector(".filterOptions button:nth-child(4)");
    filterByFranceButton.addEventListener("click", filterByFrance);
    //Listener for filtering by German Teams
    let filterByGermanButton = document.querySelector(".filterOptions button:nth-child(5)");
    filterByGermanButton.addEventListener("click", filterByGerman);
    //Listener for filtering teams that have won the competition
    let filterByWonUCLButton = document.querySelector(".filterOptions button:nth-child(6)");
    filterByWonUCLButton.addEventListener("click", filterByWonUCL);


    clubs.forEach((club, index) => {
        let clubDataHTML = populateDataHTML(club);
        eClubContainers[index].querySelector(".club-data-container").innerHTML = clubDataHTML;
    });
    
});



//Sorting Functions
function sortClubsByGoals() {
    //Version 4, Bayern is at top on webpage, but in console its perfectly arranged
    clubs.sort((a, b) => b.getGoalsScored() - a.getGoalsScored());
    let eContainer = document.querySelector('.econtainer');
    let eClubContainers = document.querySelectorAll('.eclub-container');
    eClubContainers = Array.from(eClubContainers);


    // Sort eclub-container elements based on the sorted clubs array
    eClubContainers.sort((a, b) => {
        let clubAName = a.querySelector('.ecard h2').textContent;
        let clubBName = b.querySelector('.ecard h2').textContent;

        // Find index of club in sorted array
        let clubAIndex = clubs.findIndex(club => club.getName() === clubAName);
        let clubBIndex = clubs.findIndex(club => club.getName() === clubBName);

        return clubAIndex - clubBIndex;
    });

    // Rearrange eclub-container elements in the DOM
    eClubContainers.forEach(container => {
        eContainer.appendChild(container); // Appends each container in the new order
    });
    
}
function sortClubsByxG(){
    clubs.sort((a, b) => b.getXGperGame() - a.getXGperGame());
    let eContainer = document.querySelector('.econtainer');
    let eClubContainers = document.querySelectorAll('.eclub-container');
    eClubContainers = Array.from(eClubContainers);


    // Sort eclub-container elements based on the sorted clubs array
    eClubContainers.sort((a, b) => {
        let clubAName = a.querySelector('.ecard h2').textContent;
        let clubBName = b.querySelector('.ecard h2').textContent;

        // Find index of club in sorted array
        let clubAIndex = clubs.findIndex(club => club.getName() === clubAName);
        let clubBIndex = clubs.findIndex(club => club.getName() === clubBName);

        return clubAIndex - clubBIndex;
    });

    // Rearrange eclub-container elements in the DOM
    eClubContainers.forEach(container => {
        eContainer.appendChild(container); // Appends each container in the new order
    });

}
function sortClubsByLeastGoalsC(){
    clubs.sort((a, b) => a.getGoalsConceded() - b.getGoalsConceded());
    let eContainer = document.querySelector('.econtainer');
    let eClubContainers = document.querySelectorAll('.eclub-container');
    eClubContainers = Array.from(eClubContainers);


    // Sort eclub-container elements based on the sorted clubs array
    eClubContainers.sort((a, b) => {
        let clubAName = a.querySelector('.ecard h2').textContent;
        let clubBName = b.querySelector('.ecard h2').textContent;

        // Find index of club in sorted array
        let clubAIndex = clubs.findIndex(club => club.getName() === clubAName);
        let clubBIndex = clubs.findIndex(club => club.getName() === clubBName);

        return clubAIndex - clubBIndex;
    });

    // Rearrange eclub-container elements in the DOM
    eClubContainers.forEach(container => {
        eContainer.appendChild(container); // Appends each container in the new order
    });

}
function sortClubsBySquadAge(){
    clubs.sort((a, b) => b.getAvgSquadAge() - a.getAvgSquadAge());
    let eContainer = document.querySelector('.econtainer');
    let eClubContainers = document.querySelectorAll('.eclub-container');
    eClubContainers = Array.from(eClubContainers);


    // Sort eclub-container elements based on the sorted clubs array
    eClubContainers.sort((a, b) => {
        let clubAName = a.querySelector('.ecard h2').textContent;
        let clubBName = b.querySelector('.ecard h2').textContent;

        // Find index of club in sorted array
        let clubAIndex = clubs.findIndex(club => club.getName() === clubAName);
        let clubBIndex = clubs.findIndex(club => club.getName() === clubBName);

        return clubAIndex - clubBIndex;
    });

    // Rearrange eclub-container elements in the DOM
    eClubContainers.forEach(container => {
        eContainer.appendChild(container); // Appends each container in the new order
    });

}
function sortClubsByTrophies(){
    clubs.sort((a, b) => b.getTrophiesWon() - a.getTrophiesWon());
    let eContainer = document.querySelector('.econtainer');
    let eClubContainers = document.querySelectorAll('.eclub-container');
    eClubContainers = Array.from(eClubContainers);


    // Sort eclub-container elements based on the sorted clubs array
    eClubContainers.sort((a, b) => {
        let clubAName = a.querySelector('.ecard h2').textContent;
        let clubBName = b.querySelector('.ecard h2').textContent;

        // Find index of club in sorted array
        let clubAIndex = clubs.findIndex(club => club.getName() === clubAName);
        let clubBIndex = clubs.findIndex(club => club.getName() === clubBName);

        return clubAIndex - clubBIndex;
    });

    // Rearrange eclub-container elements in the DOM
    eClubContainers.forEach(container => {
        eContainer.appendChild(container); // Appends each container in the new order
    });

}
function sortClubsByPossession(){
    clubs.sort((a, b) => b.getAvgPossession() - a.getAvgPossession());
    let eContainer = document.querySelector('.econtainer');
    let eClubContainers = document.querySelectorAll('.eclub-container');
    eClubContainers = Array.from(eClubContainers);


    // Sort eclub-container elements based on the sorted clubs array
    eClubContainers.sort((a, b) => {
        let clubAName = a.querySelector('.ecard h2').textContent;
        let clubBName = b.querySelector('.ecard h2').textContent;

        // Find index of club in sorted array
        let clubAIndex = clubs.findIndex(club => club.getName() === clubAName);
        let clubBIndex = clubs.findIndex(club => club.getName() === clubBName);

        return clubAIndex - clubBIndex;
    });

    // Rearrange eclub-container elements in the DOM
    eClubContainers.forEach(container => {
        eContainer.appendChild(container); // Appends each container in the new order
    });

}
function sortClubsByShots(){
    clubs.sort((a, b) => b.getShotsOnTarget() - a.getShotsOnTarget());
    let eContainer = document.querySelector('.econtainer');
    let eClubContainers = document.querySelectorAll('.eclub-container');
    eClubContainers = Array.from(eClubContainers);


    // Sort eclub-container elements based on the sorted clubs array
    eClubContainers.sort((a, b) => {
        let clubAName = a.querySelector('.ecard h2').textContent;
        let clubBName = b.querySelector('.ecard h2').textContent;

        // Find index of club in sorted array
        let clubAIndex = clubs.findIndex(club => club.getName() === clubAName);
        let clubBIndex = clubs.findIndex(club => club.getName() === clubBName);

        return clubAIndex - clubBIndex;
    });

    // Rearrange eclub-container elements in the DOM
    eClubContainers.forEach(container => {
        eContainer.appendChild(container); // Appends each container in the new order
    });

}
function sortClubsByConvRate(){
    clubs.sort((a, b) => b.getShotConversionRate() - a.getShotConversionRate());
    let eContainer = document.querySelector('.econtainer');
    let eClubContainers = document.querySelectorAll('.eclub-container');
    eClubContainers = Array.from(eClubContainers);


    // Sort eclub-container elements based on the sorted clubs array
    eClubContainers.sort((a, b) => {
        let clubAName = a.querySelector('.ecard h2').textContent;
        let clubBName = b.querySelector('.ecard h2').textContent;

        // Find index of club in sorted array
        let clubAIndex = clubs.findIndex(club => club.getName() === clubAName);
        let clubBIndex = clubs.findIndex(club => club.getName() === clubBName);

        return clubAIndex - clubBIndex;
    });

    // Rearrange eclub-container elements in the DOM
    eClubContainers.forEach(container => {
        eContainer.appendChild(container); // Appends each container in the new order
    });

}
function sortClubsByLeaguePos(){
    clubs.sort((a, b) => b.getLeaguePosition() - a.getLeaguePosition());
    let eContainer = document.querySelector('.econtainer');
    let eClubContainers = document.querySelectorAll('.eclub-container');
    eClubContainers = Array.from(eClubContainers);


    // Sort eclub-container elements based on the sorted clubs array
    eClubContainers.sort((a, b) => {
        let clubAName = a.querySelector('.ecard h2').textContent;
        let clubBName = b.querySelector('.ecard h2').textContent;

        // Find index of club in sorted array
        let clubAIndex = clubs.findIndex(club => club.getName() === clubAName);
        let clubBIndex = clubs.findIndex(club => club.getName() === clubBName);

        return clubBIndex - clubAIndex;
    });

    // Rearrange eclub-container elements in the DOM
    eClubContainers.forEach(container => {
        eContainer.appendChild(container); // Appends each container in the new order
    });

    // clubs.forEach(club => {
    //     console.log(`${club.getName()}: ${club.getLeaguePosition()}`);
    // });
}
//Filtering Functions
function filterBySpain(){
    let eContainer = document.querySelector('.econtainer');
    let eClubContainers = document.querySelectorAll('.eclub-container');
    eClubContainers = Array.from(eClubContainers);

    eClubContainers.forEach(container => {
        let clubName = container.querySelector('.ecard h2').textContent; // Get the club name
        let club = clubs.find(club => club.getName() === clubName); // Find the corresponding club object

        if (club.getCountry() === "Spain") {
            container.style.display = "grid"; // Display the container if the club is from Spain
        } else {
            container.style.display = "none"; // Hide the container if the club is not from Spain or not found
        }
    });

    // Rearrange eclub-container elements in the DOM (optional, depending on your layout)
    eClubContainers.forEach(container => {
        eContainer.appendChild(container); // Appends each container in the new order
    });
}
function filterByEngland(){
    let eContainer = document.querySelector('.econtainer');
    let eClubContainers = document.querySelectorAll('.eclub-container');
    eClubContainers = Array.from(eClubContainers);

    eClubContainers.forEach(container => {
        let clubName = container.querySelector('.ecard h2').textContent; // Get the club name
        let club = clubs.find(club => club.getName() === clubName); // Find the corresponding club object

        if (club.getCountry() === "England") {
            container.style.display = "grid"; // Display the container if the club is from Spain
        } else {
            container.style.display = "none"; // Hide the container if the club is not from Spain or not found
        }
    });

    // Rearrange eclub-container elements in the DOM (optional, depending on your layout)
    eClubContainers.forEach(container => {
        eContainer.appendChild(container); // Appends each container in the new order
    });
}
function filterByFrance(){
    let eContainer = document.querySelector('.econtainer');
    let eClubContainers = document.querySelectorAll('.eclub-container');
    eClubContainers = Array.from(eClubContainers);

    eClubContainers.forEach(container => {
        let clubName = container.querySelector('.ecard h2').textContent; // Get the club name
        let club = clubs.find(club => club.getName() === clubName); // Find the corresponding club object

        if (club.getCountry() === "France") {
            container.style.display = "grid"; // Display the container if the club is from Spain
        } else {
            container.style.display = "none"; // Hide the container if the club is not from Spain or not found
        }
    });

    // Rearrange eclub-container elements in the DOM (optional, depending on your layout)
    eClubContainers.forEach(container => {
        eContainer.appendChild(container); // Appends each container in the new order
    });
}
function filterByGerman(){
    let eContainer = document.querySelector('.econtainer');
    let eClubContainers = document.querySelectorAll('.eclub-container');
    eClubContainers = Array.from(eClubContainers);

    eClubContainers.forEach(container => {
        let clubName = container.querySelector('.ecard h2').textContent; // Get the club name
        let club = clubs.find(club => club.getName() === clubName); // Find the corresponding club object

        if (club.getCountry() === "Germany") {
            container.style.display = "grid"; // Display the container if the club is from Spain
        } else {
            container.style.display = "none"; // Hide the container if the club is not from Spain or not found
        }
    });

    // Rearrange eclub-container elements in the DOM (optional, depending on your layout)
    eClubContainers.forEach(container => {
        eContainer.appendChild(container); // Appends each container in the new order
    });
}
function filterByWonUCL(){
    let eContainer = document.querySelector('.econtainer');
    let eClubContainers = document.querySelectorAll('.eclub-container');
    eClubContainers = Array.from(eClubContainers);

    eClubContainers.forEach(container => {
        let clubName = container.querySelector('.ecard h2').textContent; // Get the club name
        let club = clubs.find(club => club.getName() === clubName); // Find the corresponding club object

        if (club.getTrophiesWon() > 0) {
            container.style.display = "grid"; // Display the container if the club is from Spain
        } else {
            container.style.display = "none"; // Hide the container if the club is not from Spain or not found
        }
    });

    // Rearrange eclub-container elements in the DOM (optional, depending on your layout)
    eClubContainers.forEach(container => {
        eContainer.appendChild(container); // Appends each container in the new order
    });
}
function filterByNone(){
    location.reload();
}


function populateDataHTML(club)
{
    return `
        <div class="club-data">
            <h3>${club.getName()}</h3>
            <p>Country: ${club.getCountry()}</p>
            <p>Goals Scored: ${club.getGoalsScored()}</p>
            <p>Goals Conceded: ${club.getGoalsConceded()}</p>
            <p>xG per Game: ${club.getXGperGame()}</p>
            <p>Wins: ${club.getWins()}</p>
            <p>Losses: ${club.getLosses()}</p>
            <p>Avg Squad Age: ${club.getAvgSquadAge()}</p>
            <p>UCL Trophies: ${club.getTrophiesWon()}</p>
            <p>Average Possession: ${club.getAvgPossession()}</p>
            <p>Shots on Target: ${club.getShotsOnTarget()}</p>
            <p>Conversion Rate: ${club.getShotConversionRate()}</p>
            <p>Domestic League Position: ${club.getLeaguePosition()}</p>
        </div>
    `;
}
//simulation function
document.addEventListener("DOMContentLoaded", function() {
    // Get all team cards in the quarter-finals matchups
    let quarterFinalTeamCards = document.querySelectorAll('.matchup .team');
    // Add click event listener to each team card
    quarterFinalTeamCards.forEach(teamCard => {
        teamCard.addEventListener('click', function() {
            // Get the clicked team's name and image source
            let qTeamName = teamCard.querySelector('h2').textContent;
            let qTeamImageSrc = teamCard.querySelector('img').src;

            // Populate the corresponding team card in the semi-finals with the same data
            let semiFinalTeam1 = document.querySelector('.semimatchup:nth-child(1) .team:nth-child(1)');
            let semiFinalTeam2 = document.querySelector('.semimatchup:nth-child(1) .team:nth-child(2)');
            let semiFinalTeam3 = document.querySelector('.semimatchup:nth-child(2) .team:nth-child(1)');
            let semiFinalTeam4 = document.querySelector('.semimatchup:nth-child(2) .team:nth-child(2)');

            if (qTeamName === "FC Barcelona" || qTeamName == "Paris Saint Germain")
            {
                semiFinalTeam1.querySelector('h2').textContent = qTeamName;
                semiFinalTeam1.querySelector('img').src = qTeamImageSrc;
            }
            if (qTeamName === "Atletico Madrid" || qTeamName == "Borussia Dortmund")
            {
                semiFinalTeam2.querySelector('h2').textContent = qTeamName;
                semiFinalTeam2.querySelector('img').src = qTeamImageSrc;
            }
            if (qTeamName === "Arsenal" || qTeamName == "Bayern Munich")
            {
                semiFinalTeam3.querySelector('h2').textContent = qTeamName;
                semiFinalTeam3.querySelector('img').src = qTeamImageSrc;
            }
            if (qTeamName === "Real Madrid" || qTeamName == "Manchester City")
            {
                semiFinalTeam4.querySelector('h2').textContent = qTeamName;
                semiFinalTeam4.querySelector('img').src = qTeamImageSrc;
            }

        });
    });
    // Get all team cards in the semi-finals matchups
    let semiFinalTeamCards = document.querySelectorAll('.semimatchup .team');
    semiFinalTeamCards.forEach(teamCard => {
        teamCard.addEventListener('click', function() {
            // Get the clicked team's name and image source
            let sTeamName = teamCard.querySelector('h2').textContent;
            let sTeamImageSrc = teamCard.querySelector('img').src;

            // Populate the corresponding team card in the semi-finals with the same data
            let finalTeam1 = document.querySelector('.finalmatchup .team:nth-child(1)');
            let finalTeam2 = document.querySelector('.finalmatchup .team:nth-child(2)');

            if (sTeamName === "FC Barcelona" || sTeamName === "Atletico Madrid" ||
            sTeamName === "Paris Saint Germain" || sTeamName === "Borussia Dortmund")
            {
                finalTeam1.querySelector('h2').textContent = sTeamName;
                finalTeam1.querySelector('img').src = sTeamImageSrc;
            }
            if (sTeamName === "Arsenal" || sTeamName == "Bayern Munich" ||
            sTeamName === "Real Madrid" || sTeamName == "Manchester City")
            {
                finalTeam2.querySelector('h2').textContent = sTeamName;
                finalTeam2.querySelector('img').src = sTeamImageSrc;
            }

        });
    });
    //Get cards in final matchup
    let finalTeamCards = document.querySelectorAll('.finalmatchup .team');
    finalTeamCards.forEach(teamCard => {
        teamCard.addEventListener('click', function() {
            // Get the clicked team's name and image source
            let fTeamName = teamCard.querySelector('h2').textContent;
            let fTeamImageSrc = teamCard.querySelector('img').src;

            // Populate the corresponding team card in the semi-finals with the same data
            let winnerTeam = document.querySelector('.finalwinner .team:nth-child(1)');

            if (fTeamName === "FC Barcelona" || fTeamName === "Atletico Madrid" ||
            fTeamName === "Paris Saint Germain" || fTeamName === "Borussia Dortmund")
            {
                winnerTeam.querySelector('h2').textContent = fTeamName;
                winnerTeam.querySelector('img').src = fTeamImageSrc;
            }
            if (fTeamName === "Arsenal" || fTeamName === "Bayern Munich" ||
            fTeamName === "Real Madrid" || fTeamName === "Manchester City")
            {
                winnerTeam.querySelector('h2').textContent = fTeamName;
                winnerTeam.querySelector('img').src = fTeamImageSrc;
            }

        });
    });

});

//to display the data of each club object onto the infocard
document.addEventListener("DOMContentLoaded", function() {
    infoCardContainers = document.querySelectorAll(".info-card");

    clubs.forEach((club, index) => {
        let clubDataHTML = populateDataHTML(club);
        infoCardContainers[index].querySelector(".club-data-container").innerHTML = clubDataHTML;
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Find the reset button element
    var resetButton = document.getElementById("resetButton");

    // Add click event listener to the reset button
    resetButton.addEventListener("click", function() {
        // Reload the page when the button is clicked
        location.reload();
    });
});













