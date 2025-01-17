# soccer-challenge

## Installation
First, make sure you have **NodeJS** installed

Next, `cd` into this project, and run `npm i -g`

## Usage

Open a terminal and run `get-scores`

If no scores have been entered, it will return nothing

If scores have been previously entered, the scores will be displayed

## Parameters

`--file` or `-f /path/to/file.txt`: *String*, specifies a filepath to a text file containing the games/matches

`--string` or `-s <simple string>`: *String* the literal entry of one game at a time.
___

### Using '-s' or '--string'

If using `-s` or `--string`, you must enter your string in the following format, and in quotes:

`<team1 name> <team1 score>, <team2 name> <team2 score>`

I.e: 

`San Jose Earthquakes 3, Santa Cruz Slugs 3`
___

### Using '-f' or '--file'

If using `-f` or `--file`, specify the `path` of the text file. 

Within the text file, you must enter **each game in each line**. You should enter them in **ascending chronological order**, meaning game 1 will be on line 1.

Each line should match the following syntax:

`<team1 name> <team1 score>, <team2 name> <team2 score>`

I.e, your text file could look like: 

```
San Jose Earthquakes 3, Santa Cruz Slugs 3
Capitola Seahorses 1, Aptos FC 0
Felton Lumberjacks 2, Monterey United 0
Felton Lumberjacks 1, Aptos FC 2
Santa Cruz Slugs 0, Capitola Seahorses 0
Monterey United 4, San Jose Earthquakes 2
Santa Cruz Slugs 2, Aptos FC 3
San Jose Earthquakes 1, Felton Lumberjacks 4
Monterey United 1, Capitola Seahorses 0
Aptos FC 2, Monterey United 0
```
## Expected output

You will get a list of the latest 10 matchedays with the top 3 teams of each Matcheday, assuming there are at least 3 teams in a match day. If there is only one game in a matchday, only one game will return for that matchday.

Sample output:

```
Matchday 1
Capitola Seahorses, 3 pts
Felton Lumberjacks, 3 pts
San Jose Earthquakes, 1 pt

Matchday 2
Capitola Seahorses, 4 pts
Aptos FC, 3 pts
Felton Lumberjacks, 3 pts

Matchday 3
Aptos FC, 6 pts
Felton Lumberjacks, 6 pts
Monterey United, 6 pts

Matchday 4
Aptos FC, 9 pts
Felton Lumberjacks, 7 pts
Monterey United, 6 pts
```

