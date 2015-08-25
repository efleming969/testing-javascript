# Ten-pin Bowling

Ten-pin bowling is a sport in which a player, or "bowler" rolls a bowling ball down a wooden lane with the objective of scoring points by knocking down as many pins as possible.

## Standard scoring

There are 10 frames in a game and the total score is the sum of all points from each frame plus any bonuses.  In general, one point is scored for each pin that is knocked down.  So if a player knocks down three pins with the first shot, then six with the second, the player would receive a total of nine points for that frame.  If a player knocks down nine pins with the first shot, but misses with the second, the player would also receive nine points for the frame.
Scenario:

    Frame 1, ball 1: 3 pins
    Frame 1, ball 2: 5 pins
    Frame 2, ball 1: 3 pins
    Frame 2, ball 2: 1 pin

Current score: (3 + 5) + (3 + 1) = 12

![Starndard Score](images/score-standard.png)

# Bonuses

In the event that all ten pins are knocked over by a player in a single frame, bonuses are awarded.  There are two types of bonuses: Strike and Spare

## Spare

When all ten pins are knocked down with two rolls in a single frame,  a player is awarded ten points, plus a bonus of whatever is scored with the next roll.  This is called a “spare” and is typically depicted as a slash on scoresheets.

Scenario: 

    Frame 1, ball 1: 7 pins
    Frame 1, ball 2: 3 pins (spare)
    Frame 2, ball 1: 4 pins
    Frame 2, ball 2: 2 pins

Current score: (7 + 3 + (4) ) + ( 4 + 2 ) = 20

![Spare Score](images/score-spare.png)

## Strike

When all ten pins are knocked down with the first ball of a frame, a player is awarded ten points, plus a bonus of whatever is scored with the next two rolls.  This is called a “strike” and is typically depicted as an “x” on scoresheets.  Note: the points scored for the next two rolls after the strike are counted twice.

Scenario:

    Frame 1, ball 1: 10 pins (strike)
    Frame 2, ball 1: 3 pins
    Frame 2, ball 2: 6 pins

Current score: = (10 + (3 + 6)) + (3 + 6) = 28

![Strike Score](images/score-strike.png)

# Additional Notes

1. The most points that can be scored in a single frame is 30 points (10 for the original strike, plus strikes in the two subsequent frames).

2. A player who bowls a spare in the tenth (final) frame is awarded one extra ball to allow for the bonus points.

![Tenth Spare](images/score-tenth-spare.png)

3. A player who bowls a strike in the tenth (final) frame is awarded two extra balls so as to allow the awarding of bonus points. If both these balls also result in strikes, a total of 30 points (10 + 10 + 10) is awarded for the frame. 

![Tenth Stike](images/score-tenth-strike.png)

![Tenth Perfect](images/score-tenth-perfect.png)

