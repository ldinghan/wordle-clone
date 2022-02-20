const currentInput = document.querySelector("#currentInput");
const printedText = document.querySelector("#printedText");
const spans = document.querySelectorAll("span");
const guessedRows = document.querySelectorAll(".guess-row");
const guessList = ['AARGH', 'ABACK', 'ABASH', 'ABATE', 'ABBEY', 'ABBOT', 'ABHOR', 'ABIDE', 'ABODE', 'ABORT', 'ABOUT', 'ABOVE', 'ABUSE', 'ABYSS', 'ACETA', 'ACHOO', 'ACING', 'ACORN', 'ACRID', 'ACTED', 'ACTOR', 'ACUTE', 'ADAGE', 'ADAPT', 'ADEPT', 'ADIEU', 'ADIOS', 'ADMIN', 'ADMIT', 'ADOBE', 'ADOPT', 'ADORE', 'ADORN', 'ADULT', 'AEDES', 'AEGIS', 'AFFIX', 'AFOOT', 'AFTER', 'AGAIN', 'AGAPE', 'AGAST', 'AGATE', 'AGAZE', 'AGENT', 'AGGRO', 'AGILE', 'AGING', 'AGISM', 'AGIST', 'AGLET', 'AGLOW', 'AGONY', 'AGREE', 'AHEAD', 'AHOLD', 'AILED', 'AIMED', 'AIMER', 'AISLE', 'ALARM', 'ALBUM', 'ALECK', 'ALEPH', 'ALERT', 'ALGAE', 'ALGAL', 'ALIAS', 'ALIBI', 'ALIEN', 'ALIGN', 'ALIKE', 'ALIVE', 'ALLAY', 'ALLEY', 'ALLOW', 'ALLOY', 'ALOFT', 'ALOHA', 'ALONE', 'ALONG', 'ALOOF', 'ALOUD', 'ALPHA', 'ALTAR', 'ALTER', 'AMASS', 'AMAZE', 'AMBER', 'AMBIT', 'AMEND', 'AMIDE', 'AMIGO', 'AMINE', 'AMINO', 'AMONG', 'AMOUR', 'AMPLE', 'AMUSE', 'ANGEL', 'ANGER', 'ANGLE', 'ANGLO', 'ANGRY', 'ANGST', 'ANIME', 'ANION', 'ANKER', 'ANKHS', 'ANKLE', 'ANNEX', 'ANNOY', 'ANTIC', 'ANVIL', 'AORTA', 'APART', 'APHID', 'APNEA', 'APPLE', 'APPLY', 'APRON', 'APTLY', 'ARBOR', 'ARENE', 'ARGON', 'ARGUE', 'ARISE', 'ARMED', 'ARMOR', 'AROMA', 'AROSE', 'ARRAY', 'ARROW', 'ARSON', 'ARTSY', 'ASHEN', 'ASIDE', 'ASKED', 'ASKEW', 'ASPEN', 'ASPER', 'ASSET', 'ATLAS', 'ATONE', 'ATRIA', 'ATTIC', 'AUDIO', 'AUDIT', 'AUNTY', 'AURAL', 'AVAIL', 'AVERT', 'AVIAN', 'AVOID', 'AWAIT', 'AWAKE', 'AWARD', 'AWARE', 'AWFUL', 'AWING', 'AWOKE', 'AXIAL', 'AXING', 'AZURE', 'BACON', 'BADDY', 'BADGE', 'BADLY', 'BAGEL', 'BAGGY', 'BANJO', 'BARGE', 'BARIC', 'BARON', 'BASAL', 'BASIC', 'BASIL', 'BASIN', 'BASIS', 'BATCH', 'BATHE', 'BATIK', 'BATON', 'BAYOU', 'BEACH', 'BEARD', 'BEAST', 'BEAUT', 'BEAUX', 'BEECH', 'BEFIT', 'BEGAN', 'BEGIN', 'BEGUN', 'BEIGE', 'BEING', 'BELAY', 'BELCH', 'BELLE', 'BELLY', 'BELOW', 'BENCH', 'BENTO', 'BERET', 'BERRY', 'BERTH', 'BERYL', 'BIBLE', 'BICEP', 'BIDET', 'BILLS', 'BILLY', 'BIMBO', 'BINGE', 'BINGO', 'BIOME', 'BIPOD', 'BIRCH', 'BIRTH', 'BISON', 'BLACK', 'BLADE', 'BLAME', 'BLAND', 'BLANK', 'BLAST', 'BLAZE', 'BLEAK', 'BLEAT', 'BLEED', 'BLEEP', 'BLEND', 'BLESS', 'BLIMP', 'BLIND', 'BLING', 'BLINK', 'BLISS', 'BLOAT', 'BLOCK', 'BLOKE', 'BLOND', 'BLOOD', 'BLOOM', 'BLUFF', 'BLUNT', 'BLURB', 'BLURT', 'BLUSH', 'BOARD', 'BOAST', 'BOGGY', 'BOING', 'BOINK', 'BONGO', 'BONUS', 'BOOGY', 'BOOST', 'BOOTH', 'BOOZE', 'BORAX', 'BORIC', 'BORNE', 'BORON', 'BOSON', 'BOSSY', 'BOTCH', 'BOUND', 'BOWEL', 'BOXER', 'BRACE', 'BRAID', 'BRAIN', 'BRAKE', 'BRAND', 'BRASS', 'BRAVE', 'BRAVO', 'BRAWL', 'BRAWN', 'BREAD', 'BREAK', 'BREED', 'BRIBE', 'BRICK', 'BRIDE', 'BRIEF', 'BRINE', 'BRING', 'BRINK', 'BRISK', 'BROAD', 'BROCK', 'BROIL', 'BROKE', 'BROOD', 'BROOK', 'BROOM', 'BROTH', 'BROWN', 'BRUNT', 'BRUSH', 'BRUTE', 'BUDDY', 'BUDGE', 'BUGGY', 'BUILD', 'BUILT', 'BULGE', 'BULGY', 'BULKY', 'BULLY', 'BUNCH', 'BUNNY', 'BURLY', 'BURST', 'BUSHY', 'BUTCH', 'BUYER', 'CABIN', 'CABLE', 'CACAO', 'CACHE', 'CACTI', 'CADET', 'CADRE', 'CAJUN', 'CAMEL', 'CAMEO', 'CANAL', 'CANDY', 'CANOE', 'CANON', 'CARGO', 'CAROL', 'CARRY', 'CARTE', 'CARVE', 'CASTE', 'CATCH', 'CATER', 'CAULK', 'CAUSE', 'CAVED', 'CAVER', 'CEASE', 'CECUM', 'CEDAR', 'CELLO', 'CHAIN', 'CHAIR', 'CHALK', 'CHAMP', 'CHANT', 'CHAOS', 'CHARM', 'CHART', 'CHASE', 'CHASM', 'CHEAP', 'CHEAT', 'CHECK', 'CHEEK', 'CHEER', 'CHEMO', 'CHESS', 'CHEST', 'CHICK', 'CHIDE', 'CHIEF', 'CHILD', 'CHILE', 'CHILL', 'CHIME', 'CHIMP', 'CHINA', 'CHIRO', 'CHIRP', 'CHIVE', 'CHOIR', 'CHOKE', 'CHOMP', 'CHORD', 'CHORE', 'CHOSE', 'CHUCK', 'CHUNK', 'CHURL', 'CHURN', 'CHUTE', 'CHYLE', 'CHYME', 'CIDER', 'CIGAR', 'CITED', 'CITER', 'CIVIC', 'CIVIL', 'CLADE', 'CLAIM', 'CLAMP', 'CLANK', 'CLASH', 'CLASP', 'CLASS', 'CLEAN', 'CLEAR', 'CLEFT', 'CLERK', 'CLICK', 'CLIFF', 'CLIMB', 'CLING', 'CLINK', 'CLINT', 'CLOAK', 'CLOCK', 'CLONE', 'CLONK', 'CLOSE', 'CLOTH', 'CLOUD', 'CLOUT', 'CLOVE', 'CLOWN', 'CLOZE', 'CLUCK', 'CLUMP', 'CLUNG', 'CLUNK', 'COACH', 'COAST', 'COBRA', 'COCKY', 'COCOA', 'CODEX', 'CODON', 'COLON', 'COLOR', 'COMBO', 'COMBY', 'COMET', 'COMFY', 'COMIC', 'COMMA', 'CONCH', 'CONDO', 'CONGO', 'CONIC', 'COPAY', 'CORAL', 'CORGI', 'CORNY', 'COUCH', 'COUGH', 'COULD', 'COUNT', 'COURT', 'COVER', 'COWER', 'CRACK', 'CRAFT', 'CRAMP', 'CRANE', 'CRANK', 'CRASH', 'CRATE', 'CRAVE', 'CRAWL', 'CRAZE', 'CRAZY', 'CREAK', 'CREAM', 'CREED', 'CREEK', 'CREEP', 'CREPE', 'CREST', 'CRIES', 'CRIME', 'CRIMP', 'CRISP', 'CROAK', 'CROWD', 'CROWN', 'CRUDE', 'CRUEL', 'CRUMB', 'CRUSH', 'CRUST', 'CRYPT', 'CUBIC', 'CUMIN', 'CUPID', 'CURRY', 'CURSE', 'CURVE', 'CURVY', 'CUTER', 'CYBER', 'CYCLE', 'CYNIC', 'DADDY', 'DAILY', 'DAIRY', 'DAISY', 'DASHY', 'DATED', 'DAZED', 'DEATH', 'DEBIT', 'DEBUG', 'DEBUS', 'DEBUT', 'DECAL', 'DECAY', 'DECOR', 'DECOY', 'DECRY', 'DEFER', 'DEITY', 'DELAY', 'DELTA', 'DELVE', 'DEMON', 'DENIM', 'DENSE', 'DEOXY', 'DEPOT', 'DEPTH', 'DERBY', 'DETOX', 'DEUCE', 'DIARY', 'DIMLY', 'DIRTY', 'DISCO', 'DITCH', 'DITTO', 'DIZZY', 'DJINN', 'DODGE', 'DODGY', 'DONOR', 'DONUT', 'DOTTY', 'DOUBT', 'DOUGH', 'DOVER', 'DOWRY', 'DRACO', 'DRAFT', 'DRAIN', 'DRAKE', 'DRAMA', 'DRANK', 'DRAPE', 'DREAD', 'DREAM', 'DREAR', 'DRESS', 'DRIFT', 'DRILL', 'DRINK', 'DRIVE', 'DROID', 'DRONE', 'DROOL', 'DROOP', 'DROVE', 'DROWN', 'DRUID', 'DRUNK', 'DRYAD', 'DRYER', 'DRYLY', 'DUMMY', 'DUSKY', 'DUSTY', 'DUTCH', 'DWARF', 'DWELL', 'DYING', 'EAGER', 'EAGLE', 'EARLY', 'EARNS', 'EARTH', 'EASEL', 'EATEN', 'EATER', 'EBONY', 'EDICT', 'EERIE', 'EGGED', 'EGRET', 'EIGHT', 'EJECT', 'ELATE', 'ELBOW', 'ELDER', 'ELECT', 'ELEGY', 'ELITE', 'ELOPE', 'ELUDE', 'ELVES', 'EMAIL', 'EMBED', 'EMBER', 'EMCEE', 'EMOTE', 'EMPTY', 'ENACT', 'ENDED', 'ENDER', 'ENDOW', 'ENEMY', 'ENJOY', 'ENROL', 'ENSUE', 'ENTER', 'ENTRY', 'EPOCH', 'EPOXY', 'EQUAL', 'EQUIP', 'ERASE', 'ERECT', 'ERODE', 'ERROR', 'ERUPT', 'ESSAY', 'ESTER', 'ETHER', 'ETHIC', 'ETHOS', 'ETHYL', 'EUROS', 'EVADE', 'EVENT', 'EVERY', 'EVICT', 'EVOKE', 'EXACT', 'EXALT', 'EXCEL', 'EXERT', 'EXILE', 'EXIST', 'EXPAT', 'EXPEL', 'EXTRA', 'EXUDE', 'FABLE', 'FACED', 'FACER', 'FACET', 'FAINT', 'FAIRY', 'FAITH', 'FALSE', 'FANCY', 'FANGS', 'FATAL', 'FAULT', 'FAUNA', 'FAVOR', 'FEAST', 'FECAL', 'FECES', 'FEIGN', 'FEINT', 'FEIST', 'FELLA', 'FELON', 'FEMUR', 'FENCE', 'FERAL', 'FERNS', 'FERNY', 'FERRY', 'FETAL', 'FETCH', 'FETID', 'FETUS', 'FEVER', 'FEWER', 'FIBER', 'FIBRE', 'FIELD', 'FIEND', 'FIERY', 'FIFTH', 'FIFTY', 'FIGHT', 'FILTH', 'FINAL', 'FIRST', 'FISHY', 'FIZZY', 'FLAIL', 'FLAIR', 'FLAKE', 'FLAKY', 'FLAME', 'FLANK', 'FLARE', 'FLASH', 'FLASK', 'FLAWS', 'FLEET', 'FLESH', 'FLICK', 'FLIES', 'FLING', 'FLINT', 'FLIPS', 'FLIRT', 'FLOAT', 'FLOCK', 'FLOOD', 'FLOOR', 'FLORA', 'FLOSS', 'FLOUR', 'FLOUT', 'FLOWN', 'FLUFF', 'FLUID', 'FLUKE', 'FLUNG', 'FLUNK', 'FLUSH', 'FLUTE', 'FLYER', 'FOCAL', 'FOCUS', 'FOGGY', 'FOLIC', 'FORCE', 'FOREX', 'FORGE', 'FORGO', 'FORTE', 'FORTH', 'FORTY', 'FORUM', 'FOUND', 'FOVEA', 'FOYER', 'FRAIL', 'FRAME', 'FRANK', 'FRAUD', 'FREAK', 'FRESH', 'FRIED', 'FRIES', 'FRILL', 'FRISK', 'FROND', 'FRONT', 'FROST', 'FROTH', 'FROWN', 'FROZE', 'FRUIT', 'FRYER', 'FUDGE', 'FULLY', 'FUNGI', 'FUNNY', 'FURRY', 'FUSSY', 'FUTON', 'FUZZY', 'GAMMA', 'GAMUT', 'GASSY', 'GAUGE', 'GAUSS', 'GAUZE', 'GECKO', 'GEEKY', 'GEESE', 'GENIC', 'GENIE', 'GENRE', 'GENUS', 'GEODE', 'GETUP', 'GHAST', 'GHOST', 'GHOUL', 'GIANT', 'GIDDY', 'GIRTH', 'GLAND', 'GLASS', 'GLAZE', 'GLEAM', 'GLIDE', 'GLOAT', 'GLOBE', 'GLOOM', 'GLORY', 'GLOSS', 'GLOVE', 'GLUTE', 'GLYPH', 'GNARL', 'GNOME', 'GODLY', 'GOFER', 'GOING', 'GOLEM', 'GONAD', 'GONER', 'GOOSE', 'GORGE', 'GOUGE', 'GOURD', 'GRACE', 'GRADE', 'GRAFT', 'GRAIL', 'GRAIN', 'GRAND', 'GRAPE', 'GRAPH', 'GRASP', 'GRASS', 'GRATE', 'GRAVE', 'GRAVY', 'GRAZE', 'GREAT', 'GREED', 'GREEK', 'GREEN', 'GREET', 'GRIEF', 'GRIFF', 'GRILL', 'GRIME', 'GRIMY', 'GRIND', 'GROIN', 'GROOM', 'GROPE', 'GROSS', 'GROUP', 'GROVE', 'GROWL', 'GRUEL', 'GRUNT', 'GUARD', 'GUAVA', 'GUESS', 'GUEST', 'GUIDE', 'GUILD', 'GUILT', 'GUISE', 'GUMMY', 'GUPPY', 'GUSHY', 'GUSTO', 'GUTSY', 'GYNAE', 'GYOZA', 'GYPSY', 'HABIT', 'HADES', 'HAIKU', 'HAIRY', 'HALAL', 'HALVE', 'HANDS', 'HANDY', 'HAPPY', 'HARDY', 'HAREM', 'HARPY', 'HASTE', 'HASTY', 'HATCH', 'HAUNT', 'HAVEN', 'HAVOC', 'HAZEL', 'HEARD', 'HEART', 'HEATH', 'HEAVE', 'HEAVY', 'HEDGE', 'HEFTY', 'HEIST', 'HELIO', 'HELIX', 'HELLO', 'HENCE', 'HERON', 'HERTZ', 'HEXED', 'HIJAB', 'HINGE', 'HIPPO', 'HIPPY', 'HITCH', 'HOARD', 'HOBBY', 'HOCUS', 'HOIST', 'HOMIE', 'HONEY', 'HONOR', 'HOOCH', 'HORDE', 'HORSE', 'HOTEL', 'HOUND', 'HOUSE', 'HOVER', 'HOWDY', 'HUBBY', 'HUMAN', 'HUMID', 'HUMOR', 'HUNCH', 'HURRY', 'HUSKY', 'HUTCH', 'HYDRA', 'HYDRO', 'HYENA', 'HYPED', 'HYPER', 'ICING', 'ICONS', 'IDEAL', 'IDIOM', 'IDIOT', 'IGLOO', 'IMAGE', 'IMBUE', 'IMPLY', 'INANE', 'INAPT', 'INCUR', 'INDEX', 'INDIE', 'INEPT', 'INERT', 'INFER', 'INGOT', 'INLET', 'INNER', 'INPUT', 'INTEL', 'INTER', 'INTRA', 'INTRO', 'IONIC', 'IRONY', 'ISSUE', 'ITCHY', 'IVORY', 'IXORA', 'JADED', 'JAPAN', 'JAUNT', 'JAZZY', 'JELLO', 'JELLY', 'JERKY', 'JEWEL', 'JOLLY', 'JOUST', 'JUDGE', 'JUICE', 'JUICY', 'JUMBO', 'KANJI', 'KAPPA', 'KARAT', 'KARMA', 'KAYAK', 'KAZOO', 'KEBAB', 'KENDO', 'KHAKI', 'KIDDY', 'KIOSK', 'KITTY', 'KLUTZ', 'KNACK', 'KNEAD', 'KNIFE', 'KNOCK', 'KNOWN', 'KNOWS', 'KOALA', 'KRILL', 'KUDOS', 'LABEL', 'LABOR', 'LACKS', 'LADLE', 'LAKSA', 'LANCE', 'LANKY', 'LAPIS', 'LAPSE', 'LARGE', 'LARVA', 'LASER', 'LASSO', 'LATCH', 'LATER', 'LATEX', 'LATTE', 'LAUGH', 'LAYER', 'LAYUP', 'LEACH', 'LEADS', 'LEAFY', 'LEAKY', 'LEARN', 'LEASE', 'LEASH', 'LEAST', 'LEAVE', 'LEDGE', 'LEECH', 'LEGAL', 'LEGIT', 'LEMON', 'LEMUR', 'LEVEE', 'LEVEL', 'LEVER', 'LIBRA', 'LIGER', 'LIGHT', 'LILAC', 'LIMBO', 'LIMBS', 'LIMIT', 'LINEN', 'LINER', 'LINGO', 'LINUX', 'LIPID', 'LIVER', 'LIVID', 'LLAMA', 'LOBBY', 'LOCAL', 'LOCUM', 'LOCUS', 'LODGE', 'LOGIC', 'LOGOS', 'LONER', 'LOOSE', 'LORAL', 'LORRY', 'LOTUS', 'LOUSY', 'LOWER', 'LOWLY', 'LOYAL', 'LUCID', 'LUCKY', 'LUMEN', 'LUNAR', 'LUNCH', 'LUNGE', 'LURCH', 'LYING', 'LYMPH', 'LYNCH', 'LYRIC', 'LYSIN', 'LYSIS', 'LYSOL', 'MACHE', 'MACHO', 'MACRO', 'MADAM', 'MADLY', 'MAFIA', 'MAGIC', 'MAGMA', 'MAGUS', 'MAIZE', 'MAJOR', 'MALIC', 'MAMBA', 'MAMBO', 'MANGA', 'MANGO', 'MANIA', 'MANIC', 'MANLY', 'MANOR', 'MANTA', 'MAPLE', 'MARCH', 'MARRY', 'MARSH', 'MASON', 'MATCH', 'MATHS', 'MATTE', 'MAURI', 'MAYAN', 'MAYBE', 'MAYOR', 'MECCA', 'MEDAL', 'MEDIA', 'MEDIC', 'MELEE', 'MELON', 'MERCH', 'MERCY', 'MERGE', 'MERIT', 'MERRY', 'MESHY', 'MESSY', 'METAL', 'METER', 'METRO', 'MICRO', 'MIDGE', 'MIDGY', 'MIDST', 'MIGHT', 'MIMIC', 'MINCE', 'MINOR', 'MINUS', 'MISER', 'MISSY', 'MIXER', 'MIXUP', 'MOCHA', 'MODAL', 'MODEL', 'MODEM', 'MODUS', 'MOGUL', 'MOIST', 'MOLAR', 'MOMMY', 'MONEY', 'MONTH', 'MOOSE', 'MORAL', 'MORON', 'MORPH', 'MORSE', 'MOSSY', 'MOTIF', 'MOTOR', 'MOTTO', 'MOULD', 'MOULT', 'MOUND', 'MOUNT', 'MOURN', 'MOUSE', 'MOUTH', 'MOVIE', 'MUCUS', 'MUDDY', 'MUMMY', 'MURAL', 'MURKY', 'MUSIC', 'MYNAH', 'NACHO', 'NAGGY', 'NAIVE', 'NAKED', 'NASAL', 'NASTY', 'NATAL', 'NAVAL', 'NAVEL', 'NEIGH', 'NERVE', 'NEVER', 'NEWER', 'NEWLY', 'NEXUS', 'NICHE', 'NIECE', 'NIFTY', 'NIGHT', 'NINJA', 'NINTH', 'NIPPY', 'NITRO', 'NOBLE', 'NODAL', 'NOISE', 'NOISY', 'NOMAD', 'NOOSE', 'NORTH', 'NOTCH', 'NOUNS', 'NOVEL', 'NUDGE', 'NURSE', 'NUTTY', 'NYLON', 'NYMPH', 'OAKEN', 'OASIS', 'OBESE', 'OCCUR', 'OCEAN', 'OCTET', 'OCULI', 'ODDER', 'ODDLY', 'ODOUR', 'OFFER', 'OFTEN', 'OHMIC', 'OLDEN', 'OLDER', 'OLDIE', 'OLIVE', 'OMEGA', 'ONION', 'ONSET', 'OOMPH', 'OPERA', 'OPINE', 'OPIUM', 'OPTIC', 'ORBED', 'ORBIT', 'ORDER', 'ORGAN', 'ORTHO', 'OSCAR', 'OTHER', 'OTTER', 'OUGHT', 'OUIJA', 'OUNCE', 'OUTDO', 'OUTER', 'OVARY', 'OVERT', 'OWLET', 'OWNER', 'OXIDE', 'OZONE', 'PADDY', 'PAINT', 'PALSY', 'PANDA', 'PANEL', 'PANIC', 'PANTY', 'PAPER', 'PARCH', 'PARED', 'PARIS', 'PARRY', 'PARSE', 'PARTY', 'PASTA', 'PATCH', 'PATTY', 'PAYER', 'PEACE', 'PEACH', 'PEARL', 'PEDAL', 'PEDRO', 'PEEVE', 'PENAL', 'PENCE', 'PENNY', 'PEONY', 'PERCH', 'PERIL', 'PESKY', 'PETAL', 'PETTY', 'PHASE', 'PHONE', 'PHONY', 'PHOTO', 'PIANO', 'PIECE', 'PIGGY', 'PILOT', 'PINCH', 'PINKY', 'PIQUE', 'PITCH', 'PIVOT', 'PIXEL', 'PIXIE', 'PIZZA', 'PLACE', 'PLAIN', 'PLAIT', 'PLANE', 'PLANK', 'PLANT', 'PLAST', 'PLATE', 'PLAYA', 'PLAZA', 'PLEAD', 'PLEAT', 'PLIER', 'PLUCK', 'PLUMB', 'PLUME', 'PLUMP', 'PLUSH', 'POACH', 'PODGE', 'POINT', 'POISE', 'POLAR', 'POLIO', 'POLYP', 'POOCH', 'POPPY', 'PORCH', 'PORKY', 'POTTY', 'POUCH', 'POUND', 'POWER', 'PRANK', 'PRAWN', 'PRESS', 'PRICE', 'PRICK', 'PRICY', 'PRIDE', 'PRIME', 'PRINT', 'PRIOR', 'PRISM', 'PRIVY', 'PRIZE', 'PROBE', 'PROMO', 'PRONE', 'PRONG', 'PROOF', 'PROUD', 'PROVE', 'PROWL', 'PROXY', 'PRUNE', 'PSION', 'PSYCH', 'PUDGE', 'PUDGY', 'PULSE', 'PUNCH', 'PUPIL', 'PUPPY', 'PUREE', 'PURGE', 'PURSE', 'PUSHY', 'PYGMY', 'PYREX', 'QUACK', 'QUAIL', 'QUAKE', 'QUAKY', 'QUALM', 'QUANT', 'QUARK', 'QUART', 'QUEEN', 'QUEER', 'QUELL', 'QUERY', 'QUEST', 'QUEUE', 'QUICK', 'QUIET', 'QUILL', 'QUIRK', 'QUITE', 'QUOTA', 'QUOTE', 'RABID', 'RADAR', 'RADII', 'RADIO', 'RADIX', 'RAGGY', 'RAISE', 'RALLY', 'RALPH', 'RAMEN', 'RANCH', 'RANGE', 'RAPID', 'RASPY', 'RAVEL', 'RAVEN', 'RAZOR', 'REACH', 'REACT', 'REALM', 'REARM', 'REBUS', 'RECAP', 'RECCE', 'RECON', 'RECUR', 'REDID', 'REDOX', 'REFER', 'REGAL', 'REHAB', 'REIGN', 'RELAX', 'RELAY', 'RELIC', 'REMIT', 'REMIX', 'RENAL', 'RENEW', 'REPAY', 'REPEL', 'REPLY', 'RESET', 'RESIN', 'RETRO', 'RETRY', 'REUSE', 'RHINO', 'RHYME', 'RIDGE', 'RIFLE', 'RIGHT', 'RIGID', 'RIGOR', 'RINSE', 'RIVAL', 'RIVER', 'RIVET', 'ROACH', 'ROAST', 'ROBIN', 'ROBOT', 'RODEO', 'ROGER', 'ROMAN', 'ROMEO', 'ROOST', 'ROTOR', 'ROUGE', 'ROUGH', 'ROUND', 'ROUSE', 'ROUTE', 'ROVER', 'ROWDY', 'ROYAL', 'RUBLE', 'RUGBY', 'RUINS', 'RUMOR', 'RUNIC', 'RUNNY', 'RURAL', 'RUSHY', 'SABER', 'SADLY', 'SAFER', 'SAGGY', 'SAINT', 'SALAD', 'SALTY', 'SALVE', 'SANDY', 'SASSY', 'SATAY', 'SATIN', 'SATYR', 'SAUCE', 'SAUCY', 'SAUNA', 'SAUTE', 'SAVOR', 'SAVVY', 'SCABS', 'SCALD', 'SCALE', 'SCALP', 'SCALY', 'SCANT', 'SCARE', 'SCARF', 'SCARY', 'SCENE', 'SCENT', 'SCION', 'SCOFF', 'SCOLD', 'SCONE', 'SCOOP', 'SCOOT', 'SCOPE', 'SCORE', 'SCORN', 'SCOUR', 'SCOUT', 'SCRAM', 'SCRAP', 'SCREW', 'SCRUB', 'SCUBA', 'SCUMS', 'SEBUM', 'SEDAN', 'SEGUE', 'SEIZE', 'SENSE', 'SEPAL', 'SEPIA', 'SERUM', 'SERVE', 'SETUP', 'SEVEN', 'SEVER', 'SEWER', 'SEXES', 'SHACK', 'SHADE', 'SHADY', 'SHAFT', 'SHAKE', 'SHAKY', 'SHALL', 'SHAME', 'SHANK', 'SHAPE', 'SHARD', 'SHARE', 'SHARK', 'SHARP', 'SHAVE', 'SHAWL', 'SHEAR', 'SHEEP', 'SHEER', 'SHEET', 'SHELF', 'SHELL', 'SHIFT', 'SHILL', 'SHINE', 'SHINY', 'SHIRK', 'SHIRT', 'SHOCK', 'SHONE', 'SHOOK', 'SHOOT', 'SHORE', 'SHORT', 'SHOUT', 'SHOVE', 'SHRED', 'SHREW', 'SHRUB', 'SHRUG', 'SHUCK', 'SHUSH', 'SHYLY', 'SICKO', 'SIEGE', 'SIEVE', 'SIGHT', 'SIGIL', 'SIGMA', 'SILLY', 'SINCE', 'SINUS', 'SIREN', 'SISSY', 'SIXER', 'SIXTH', 'SIXTY', 'SKATE', 'SKIES', 'SKILL', 'SKINK', 'SKIRT', 'SKIVE', 'SKULL', 'SKUNK', 'SLACK', 'SLAIN', 'SLANT', 'SLASH', 'SLATE', 'SLAVE', 'SLEEP', 'SLEPT', 'SLICE', 'SLICK', 'SLIDE', 'SLIME', 'SLIMY', 'SLOPE', 'SLOPY', 'SLOTH', 'SLUMP', 'SLUNG', 'SLURP', 'SLUSH', 'SLYLY', 'SMACK', 'SMALL', 'SMART', 'SMASH', 'SMEAR', 'SMELL', 'SMELT', 'SMILE', 'SMIRK', 'SMITE', 'SMITH', 'SMOKE', 'SMOKY', 'SNACK', 'SNAIL', 'SNAKE', 'SNARE', 'SNARL', 'SNEAK', 'SNIDE', 'SNIFF', 'SNIPE', 'SNOOP', 'SNORE', 'SNORT', 'SNOUT', 'SNUCK', 'SOBER', 'SOGGY', 'SOLAR', 'SOLID', 'SOLVE', 'SONAR', 'SONIC', 'SORRY', 'SOUND', 'SOUTH', 'SPACE', 'SPADE', 'SPAIN', 'SPANK', 'SPARE', 'SPARK', 'SPASM', 'SPATE', 'SPAWN', 'SPEAK', 'SPEAR', 'SPECK', 'SPEED', 'SPELL', 'SPEND', 'SPENT', 'SPICE', 'SPICK', 'SPICY', 'SPIED', 'SPIEL', 'SPIES', 'SPIKE', 'SPIKY', 'SPILL', 'SPINE', 'SPINY', 'SPIRE', 'SPITE', 'SPLIT', 'SPOIL', 'SPOKE', 'SPOOF', 'SPOOK', 'SPOON', 'SPORE', 'SPORT', 'SPOUT', 'SPRAY', 'SPREE', 'SPURT', 'SQUAD', 'SQUAT', 'SQUID', 'STACK', 'STAFF', 'STAGE', 'STAIN', 'STAKE', 'STALE', 'STALK', 'STALL', 'STAMP', 'STAND', 'STARE', 'STARK', 'START', 'STASH', 'STATE', 'STAVE', 'STEAD', 'STEAK', 'STEAL', 'STEAM', 'STEED', 'STEEL', 'STEEP', 'STEER', 'STENT', 'STERN', 'STICK', 'STIFF', 'STILL', 'STILT', 'STING', 'STINK', 'STINT', 'STOCK', 'STOIC', 'STOKE', 'STOLE', 'STOMP', 'STONE', 'STOOD', 'STOOL', 'STOOP', 'STORE', 'STORK', 'STORM', 'STORY', 'STOUT', 'STOVE', 'STOWS', 'STRAP', 'STRAW', 'STRAY', 'STREW', 'STRUT', 'STUCK', 'STUDY', 'STUFF', 'STUMP', 'STUNG', 'STUNK', 'STUNT', 'STYLE', 'SUAVE', 'SUGAR', 'SUING', 'SUITE', 'SUNNY', 'SUPER', 'SURGE', 'SUSHI', 'SWAMP', 'SWARM', 'SWEAR', 'SWEAT', 'SWEEP', 'SWEET', 'SWELL', 'SWEPT', 'SWIFT', 'SWILL', 'SWINE', 'SWING', 'SWIPE', 'SWIRL', 'SWISH', 'SWISS', 'SWORD', 'SWORE', 'SWORN', 'SYLPH', 'SYRUP', 'TABLE', 'TABOO', 'TACIT', 'TACKY', 'TAINT', 'TANGO', 'TAPER', 'TAPIR', 'TAROT', 'TASER', 'TASTE', 'TASTY', 'TAUNT', 'TAXED', 'TEACH', 'TEARY', 'TEASE', 'TEETH', 'TEMPO', 'TEMPT', 'TENET', 'TENOR', 'TENSE', 'TENTH', 'TEPID', 'TERRA', 'TESLA', 'TETRA', 'TEXAS', 'THANK', 'THEFT', 'THEIR', 'THEMA', 'THEME', 'THERE', 'THESE', 'THETA', 'THICK', 'THIEF', 'THIGH', 'THING', 'THINK', 'THIRD', 'THONG', 'THORN', 'THOSE', 'THREE', 'THREW', 'THROB', 'THROW', 'THUMB', 'THUMP', 'THYME', 'TIDAL', 'TIGER', 'TIGHT', 'TILDE', 'TIMID', 'TINGE', 'TIPSY', 'TITAN', 'TITLE', 'TITRE', 'TOAST', 'TODAY', 'TOKEN', 'TONAL', 'TONGA', 'TONIC', 'TONNE', 'TOOTH', 'TOPAZ', 'TOPIC', 'TORCH', 'TORSO', 'TOTAL', 'TOTEM', 'TOUCH', 'TOUGH', 'TOWEL', 'TOWER', 'TOXIC', 'TOXIN', 'TRACE', 'TRACK', 'TRACT', 'TRADE', 'TRAIL', 'TRAIN', 'TRAMP', 'TRASH', 'TREAD', 'TREAT', 'TREND', 'TRIAD', 'TRIAL', 'TRIBE', 'TRICK', 'TRIED', 'TROLL', 'TROOP', 'TROPE', 'TROUT', 'TRUCE', 'TRUCK', 'TRULY', 'TRUMP', 'TRUNK', 'TRUST', 'TRUTH', 'TULIP', 'TUMMY', 'TUMOR', 'TUNIC', 'TUPLE', 'TURBO', 'TUSHY', 'TUTEE', 'TUTOR', 'TWEAK', 'TWEET', 'TWERP', 'TWICE', 'TWINK', 'TWINS', 'TWIRL', 'TWIST', 'TYPIC', 'UDDER', 'ULCER', 'ULTRA', 'UNARM', 'UNBOX', 'UNCAP', 'UNCLE', 'UNCUT', 'UNDER', 'UNDID', 'UNFED', 'UNFIT', 'UNIFY', 'UNION', 'UNITE', 'UNITY', 'UNLIT', 'UNMIX', 'UNPIN', 'UNSAY', 'UNTIE', 'UNTIL', 'UNWED', 'UNZIP', 'UPEND', 'UPPED', 'UPPER', 'UPSET', 'URBAN', 'URIAL', 'URINE', 'URNAL', 'USAGE', 'USERS', 'USHER', 'USING', 'USUAL', 'UTTER', 'VAGUE', 'VALET', 'VALID', 'VALOR', 'VALUE', 'VALVE', 'VAPOR', 'VAULT', 'VEGAN', 'VEGAS', 'VEINY', 'VENGE', 'VENOM', 'VENUE', 'VENUS', 'VERGE', 'VERSE', 'VEXED', 'VIDEO', 'VIGOR', 'VILLA', 'VINYL', 'VIOLA', 'VIPER', 'VIRAL', 'VIRUS', 'VISOR', 'VITAL', 'VIVID', 'VIXEN', 'VOCAL', 'VODKA', 'VOICE', 'VOILA', 'VOMIT', 'VOUCH', 'VOWEL', 'WACKY', 'WAFER', 'WAGER', 'WAGON', 'WAIST', 'WAIVE', 'WALTZ', 'WASHY', 'WATCH', 'WATER', 'WAXED', 'WEARY', 'WEAVE', 'WEDGE', 'WEIGH', 'WEIRD', 'WELSH', 'WHACK', 'WHALE', 'WHARF', 'WHEAT', 'WHEEL', 'WHERE', 'WHICH', 'WHIFF', 'WHILE', 'WHINE', 'WHINY', 'WHIRL', 'WHIRR', 'WHISK', 'WHITE', 'WHOLE', 'WHORL', 'WHOSE', 'WIDOW', 'WIDTH', 'WIELD', 'WILCO', 'WINCE', 'WITCH', 'WITTY', 'WOLVE', 'WOMAN', 'WOMEN', 'WORLD', 'WORRY', 'WORSE', 'WORST', 'WORTH', 'WOULD', 'WOUND', 'WOVEN', 'WOWED', 'WRATH', 'WRECK', 'WRING', 'WRIST', 'WRITE', 'WRONG', 'WRUNG', 'WRYLY', 'XENON', 'XYLEM', 'YACHT', 'YAHOO', 'YEARN', 'YEAST', 'YIELD', 'YODLE', 'YOUNG', 'YOUTH', 'YUMMY', 'ZEBRA', 'ZYGON', 'ZYMIC'];
const currentScore = document.querySelector("#currentScore");

let random = Math.floor(Math.random()*guessList.length);
let correctAnswer = guessList[random];
let guessCount = 0;
let guessed_chars = [];
let streak = 0;
const first_keyboard = document.querySelector('#firstKeyboard');
const second_keyboard = document.querySelector('#secondKeyboard');
const third_keyboard = document.querySelector('#thirdKeyboard');
const keyboards = [first_keyboard,second_keyboard,third_keyboard];

for (let i=0; i <5; i++) {
	for (let j=0; j<5; j++) {
		const createBox = document.createElement("span");
		createBox.classList.add(`row${i}`);
		guessedRows[i].appendChild(createBox);
	}
}

function reset() {
	random = Math.floor(Math.random()*guessList.length);
	correctAnswer = guessList[random];
	const allSpans = document.querySelectorAll("span");
	guessed_chars = [];
	guessCount = 0;
	currentInput.disabled = false;
	currentInput.focus();
	first_keyboard.innerText = 'QWERTYUIOP';
	second_keyboard.innerText = 'ASDFGHJKL';
	third_keyboard.innerText = 'ZXCVBNM';
	currentScore.innerText = `Current streak: ${streak}`

	allSpans.forEach(function(span) {
		span.classList.remove('correct-placing','correct-letter','wrong','guessed');
		span.innerText = ''
	})
}
function checkAns(input) {
	return (correctAnswer === input);
}

function submitInput() {
	let tempAns = correctAnswer;
	let yellow_chars = []
	let green_chars = []
	lastGuessed = currentInput.value.toUpperCase();
	currentInput.value = '';
	const guessRow = document.querySelectorAll(`.row${4-guessCount}`)


	//check if answer
	if (checkAns(lastGuessed)) {
		spans.forEach(function(span) {
			span.classList.add('correct-placing')
		})
		currentInput.disabled = true;
		currentInput.placeholder = '';
		streak += 1
		alert(`congratulations! you guessed the word ${correctAnswer}`)
		reset()
		return
	}
	if (!guessList.includes(lastGuessed)) {
		alert('Word not found in dictionary!')
		for (let i=0; i<5;i++) {
			spans[i].innerText = ''
			spans[i].classList.remove('guessed');
		}
		return
	}

	if (guessCount === 5) {
		alert('You have LOST! The word is ' + correctAnswer)
		streak = 0
		reset()
		return
	}

	spans.forEach( function(span) {
		span.innerText = '';
		span.classList.remove('guessed');
	});


	//proofreading check green
	for (let i=0;i<lastGuessed.length;i++) {
		
		guessRow[i].innerText = lastGuessed[i].toUpperCase();
		if (guessRow[i].innerText === correctAnswer[i]) {
			tempAns = tempAns.replace(correctAnswer[i],'.')
			green_chars.push(i)
		}
	}
	for (let i=0;i<lastGuessed.length;i++) {
		if (tempAns.includes(guessRow[i].innerText) && !green_chars.includes(i)) {
			tempAns = tempAns.replace(guessRow[i].innerText,',')
			yellow_chars.push(i)
		}
	}
	for (let i=0;i<lastGuessed.length;i++) {
		if (green_chars.includes(i)) {
			guessRow[i].classList.add('correct-placing')
		} else if (yellow_chars.includes(i)) {
			guessRow[i].classList.add('correct-letter')
		} else {
			guessRow[i].classList.add('wrong')
			guessed_chars.push(guessRow[i].innerText)
		}
	}
	guessCount+=1

	//update mini keyboard
	for (let char of guessed_chars) {
		for (let keyboard of keyboards) {
			if (keyboard.innerText.includes(char)) {
				keyboard.innerText = keyboard.innerText.replace(char, '-')

			}
		}
	}

};

currentInput.addEventListener("input", function(e) {
	e.preventDefault();
	for (let i=0; i<5;i++) {
		spans[i].innerText = ''
		spans[i].classList.remove('guessed')
	}
	for (let i=0; i<currentInput.value.length;i++) {
		spans[i].innerText = currentInput.value[i].toUpperCase()
		
		if (guessed_chars.includes(spans[i].innerText) && !correctAnswer.includes(spans[i].innerText)) {
			spans[i].classList.add('guessed')
		}
	}
	
});
currentInput.addEventListener("keyup", function(e) {
	if (event.keyCode === 13 && currentInput.value.length === 5) {
		e.preventDefault();
		submitInput();
	};
});
