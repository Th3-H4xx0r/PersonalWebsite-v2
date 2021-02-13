function getGithubContributions() {
    //var xmlHttp = new XMLHttpRequest();
    //xmlHttp.open("GET", "https://github-contributions-api.now.sh/v1/Th3-H4xx0r", true);
    //xmlHttp.send();



    /*
    xmlHttp.onreadystatechange = (e) => {
        var total = 0;

            var response = xmlHttp.responseText;

            var years = JSON.parse(response)["years"];

            for (var i = 0; i <= years.length; i++) {
                if (years[i] != undefined || years[i] != null) {
                    total = total + years[i]["total"];
                }

            }
            */
    $("#commits").html("2700");
            

    //}

}

function getGitHubRepos(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://api.github.com/users/Th3-H4xx0r/repos", true);
    xmlHttp.send();

    xmlHttp.onreadystatechange = (e) => {
        var totalRepos = 0;

            var response = xmlHttp.responseText;

            var repos = JSON.parse(response);

            totalRepos = repos.length;

            $("#repos").html(totalRepos);
            

    }

    $("#stats-main").html(5);
}

