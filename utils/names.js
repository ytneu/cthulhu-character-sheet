///////////////////////////////
// The Characteristics
///////////////////////////////

export const NAME_STRENGTH = "Strength";
export const SH_STRENGTH = "STR";
export const EXPL_STRENGTH =
  "measures the raw physical power your investigator can bring to bear.";

export const NAME_CONSTITUTION = "Constitution";
export const SH_CONSTITUTION = "CON";
export const EXPL_CONSTITUTION =
  "is a measure of the health and hardiness of your investigator.";

export const NAME_POWER = "Power";
export const SH_POWER = "POW";
export const EXPL_POWER =
  "is a combination of force of will, spirit, and mental stability";

export const NAME_DEXTERITY = "Dexterity";
export const SH_DEXTERITY = "DEX";
export const EXPL_DEXTERITY =
  "is a measure of your investigator’s physical agility and speed.";

export const NAME_APPEARANCE = "Appearance";
export const SH_APPEARANCE = "APP";
export const EXPL_APPEARANCE =
  "measures the physical appeal of your character.";

export const NAME_SIZE = "Size";
export const SH_SIZE = "SIZ";
export const EXPL_SIZE =
  "reflects your investigator’s combined height and weight.";

export const NAME_INTELLIGENCE = "Intelligence";
export const SH_INTELLIGENCE = "INT";
export const EXPL_INTELLIGENCE =
  "is a rough measure of your investigator’s cunning and ability to make leaps of logic and intuition.";

export const NAME_EDUCATION = "Education";
export const SH_EDUCATION = "EDU";
export const EXPL_EDUCATION =
  "is a measure of the knowledge that your investigator has accumulated through formal education, or the venerated “School of Hard Knocks.”";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
Secondary Attributes

There are a number of attributes that are determined after
you have worked out the characteristics above.  
These are:
    Luck, 
    Damage Bonus, 
    Hit Points, and 
    Sanity.
*/

///////////////////////////////
// Luck
///////////////////////////////
/* 
begins at 3D6 multiplied by 5. Circle this value
on the investigator sheet. A Luck roll is often used to
determine whether external circumstances are in your
favour or against you.
*/

export const NAME_LUCK = "Luck";
export const EXPL_LUCK = "Todo";

///////////////////////////////
// Magic Points
///////////////////////////////
/* 
Magic Points (MP) are equal to one- fth POW,
and are used when casting spells, powering arcane
devices, and magical e ects. Magic points that are spent
regenerate naturally at a rate of 1 point per hour. Once an
individual is out of magic points, any further expenditure
is deducted directly from hit points—any such loss
manifesting as physical damage in a form chosen by the
Keeper
*/

export const NAME_MAGIC_POINTS = "Magic Points";
export const SH_MAGIC_POINTS = "MP";
export const EXPL_MAGIC_POINTS = "Todo";

///////////////////////////////
// Damage Bonus and Build:
///////////////////////////////
/* 
Damage Bonus is how
much extra damage your investigator does with a
successful close-combat (melee) attack. Build is a scale
of combined size and strength. Add your STR and SIZ
together and consult the following table. 


Build table:

    /STR+SIZ/ Damage Bonus/ Build
    --------------------------------
    2-64 /       -2      /    -2
    --------------------------------
    65-84 /      -1      /    -1
    --------------------------------
    85-124 /   None :'(  /    0
    --------------------------------
    125-164 /  +1D4      /    +1      
    --------------------------------
    165-204 /  +1D6     /     +2    



Example: Brian set his STR to 60 and his SIZ to 70,
totaling 130. When he makes a successful physical attack,
he will deal an extra 1D4 points of damage (Damage
Bonus). His Build is +1.

*/

export const NAME_DAMAGE_BONUS = "Damage Bonus";
export const EXPL_DAMAGE_BONUS = "Todo";

///////////////////////////////
// Hit Points
///////////////////////////////
/* 
.. are figured by adding SIZ and CON
together, then dividing the total by ten and rounding
down to the nearest whole number. As your investigator
takes damage from combat or other events, your HPs
will drop.
*/

export const NAME_HP = "Hit Points";
export const SH_HP = "HP";
export const EXPL_HP = "Todo";

///////////////////////////////
// Sanity Points
///////////////////////////////
/* 
.. begins at a level equal to your POW
score. Circle the value that corresponds to this number
on the investigator sheet.  is score is used as a percentile
roll that presents your investigator’s ability to remain stoic
in the face of horrors. As you encounter the monstrosities
of the Cthulhu Mythos your SAN score fluctuates.
*/

export const NAME_SANITY = "Sanity Points";
export const SH_SANITY = "SAN";
export const EXPL_SANITY = "Todo";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////
// Credit Rating
///////////////////////////////
/* 
Credit Rating 0
...Penniless, living on the streets.
n Credit Rating 1-9
...Poor, possessing the bare minimum.
n Credit Rating 10-49
...Average, a reasonable level of comfort.
n Credit Rating 50-89
...Wealthy, some degree of luxury.
n Credit Rating 90-98
...Rich, great wealth and luxury.
n Credit Rating 99
...Super rich, money is no object.
*/

export const NAME_CREDIT_RATING = "Credit Rating";
export const EXPL_CREDIT_RATING = "Todo";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////
// Skills
///////////////////////////////

//!!!! Note I chose only few skills (essentials) that fit to my own stories
// Feel free to add your own :)

export const NAME_ACTING = "Acting";
export const NAME_ANTHROPOLOGY = "Anthropology";
export const NAME_ART_AND_CRAFT = "Art and Craft";
export const NAME_ASTRONOMY = "Astronomy";
export const NAME_BIOLOGY = "Biology";
export const NAME_CLIMB = "Climb";
export const NAME_CTHULHU_MYTHOS = "Cthulhu Mythos";
export const NAME_DISGUISE = "Disguise";
export const NAME_FIGHTING = "Fighting";
export const NAME_FIRST_AID = "First Aid";
export const NAME_HANDGUN = "Handgun";
export const NAME_LANGUAGE = "Language";
export const NAME_LIBRARY_USE = "Library Use";
export const NAME_LOCKSMITH = "Locksmith";
export const NAME_NAVIGATE = "Navigate";
export const NAME_OCCULT = "Occult";
export const NAME_PERSUADE = "Persuade";
export const NAME_PSYCHOLOGY = "Psychology";
export const NAME_RIDE = "Ride";
export const NAME_SCIENCE = "Science";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////
// General Names
///////////////////////////////

export const NAME = "Name";
export const PROFFESION = "Proffesion";
export const CHARACTERISTICS = "Characteristics";
export const CHANGE = "Change";
export const SKILLS = "Skills";
export const STATS = "Stats";
export const EQ = "Equipment";
export const WEAPON = "Weapons";
export const CASH = "Cash";
export const PROFILE = "Profile";
export const DICES = "Dices";
export const INVENTORY = "Inventory";

// Dices
export const K4 = "1K4";
export const K6 = "1K6";
export const K8 = "1K8";
export const K10 = "1K10";
export const K12 = "1K12";
export const K16 = "1K16";
export const K20 = "1K20";
export const K100 = "1K100";
