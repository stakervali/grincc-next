# GrinCC Website 

GrinCC website is built on react/next framework. 

## How to build/run

Just follow this 3 steps. More info can be found on official [doc](https://nextjs.org/docs/deployment).

```npm install```
```npm run build```
```npm fun start```

## Adding new CC funded projects.

A project info has a JSON type data. All project infos stored in /pages/projects/index.js file as an array. 

```
 {
        id: "project-id", // for referencing
        name: "project name",
        owner: "project's owner",
        status: PROJECTSTATUS.INPROGRESS or PROJECTSTATUS.FINISHED,
        description: "Project's short description",
        milestones: [
            { description : "Milestone 1 description",status: MILESTONESTATUS.COMPLETED or MILESTONESTATUS.ONGOING or MILESTONESTATUS.NOTSTARTED},
            { description : "Milestone 2 description", status:MILESTONESTATUS.COMPLETED or MILESTONESTATUS.ONGOING or MILESTONESTATUS.NOTSTARTED},
            { description : "Milestone 3 description",status: MILESTONESTATUS.COMPLETED or MILESTONESTATUS.ONGOING or MILESTONESTATUS.NOTSTARTED},
        ],
        githubLink: "https://github.com/project link",
        forumLink : "https://forum.grin.mw",
        approveDate: "22 February 2022",
        approveLink : "",
        fundingAmount : "£50,000"
    }
```

## Adding new meeting notes.

1) You need to create a javascript file in /pages/meetings folder for each file.
File format is month_name-day-year such as february-15-2022.js or march-01-2022.js
2) You can use template in __/components/example-meeting-note.js. Copy and update content.
    You need following info to form meeting note's page.
    - Attendance list
    - Short summary
    - Voting results
    - Agenda Points
    - Discussion text (This is wrapped in <ReactMarkdown> component)
    - Action Points

4) Create a new item in main meeting list page which can be reached at /meetings. Each meeting's info is stored in JSON format like this
```
{
    date:"March 1, 2022",
    agendaPoints : [
        "Provide more exposure to Bisq and other exchanges.",
        "Overview on Grin CC github page and web site.",
        "Bounties for training videos on Bisq and Tradeogre.",
        "Discuss request for funding Groundskeeper @jankie / Mar-May 2022.",
    ],
    link: "/meetings/march-01-2022"
}

```



## Searching notes

You need to run 
```npm run build```
to create html files which will be parsed for content.

Then to update cached notes
```npm run cache-notes```
This will update cached data file at /cache/data.js
This data is being served at __/api/search?q=querytext__






