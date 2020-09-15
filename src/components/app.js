import { h } from 'preact';

import ButtonRow from './button-row';

const statPockets = [
	['+250 muscle substats', '', 161, '/images/itemimages/strboost.gif'],
	['+250 myst substats', '', 37, '/images/itemimages/eyelashes.gif'],
	['+250 moxie substats', '', 277, '/images/itemimages/buttrock.gif'],
];

const fightPockets = [
	['Smut Orc Pervert', '10 bridge parts', 666, '/images/adventureimages/smutorc_pervert.gif'],
	['Modern Zmobie', '-5 Evil (Alcove)', 235, '/images/adventureimages/modernzombie.gif'],
	['Harem Girl', 'YR for outfit', 299, '/images/adventureimages/kg_haremgirl.gif'],
	['Camel\'s Toe', '2 stars/lines, olfact even', 317, '/images/adventureimages/cameltoe.gif'],
	['Skinflute', '2 stars/lines, olfact odd', 383, '/images/adventureimages/skinflute.gif'],
	['Mountain Man', 'YR for 2 of each ore', 565, '/images/adventureimages/mountainman.gif'],
	['Green Ops Soldier', 'Smoke bomb, olfact', 589, '/images/adventureimages/warhipgr.gif'],
];

const bellPockets = [
	['Sizzling desk bell', 'YR source', 517, '/images/adventureimages/ccs_daughter.gif'],
	['Uncanny desk bell', '3 eldritch effluvium', 590, '/images/adventureimages/ccs_tentacle.gif'],
	['Nasty desk bell', 'Goat cheese, milk', 653, '/images/adventureimages/ccs_disciple.gif'],
	['Greasy desk bell', 'Star chart, 2 stars/lines', 533, '/images/adventureimages/ccs_astrologer.gif'],
];

const buffPockets = [
	['Filthworm Drone Stench', 'Skip 2 worms', 343, '/images/itemimages/stench.gif'],
	['Alarm clock', 'Tomorrow, +666% stats', 121, '/images/itemimages/yeg_blessing.gif'],
	['Hand soap', '+200% spell damage', 177, '/images/itemimages/yeg_sigils.gif'],
	['Medieval Mage Mayhem', '+100% weapon/spell damage', 177, '/images/itemimages/swords.gif'],
	['Barely Visible', '-10% combat', 347, '/images/itemimages/pocket.gif'],
	['Very Attractive', '+10% combat', 53, '/images/itemimages/louder.gif'],
];

const itemPockets = [
	['Tangerine', 'Hawking\'s elixir', 396, '/images/itemimages/tangerine.gif'],
];

const App = () => (
	<div id="preact_root">
		<ButtonRow title="Stats" buttons={statPockets} />
		<ButtonRow title="Fights" buttons={fightPockets} />
		<ButtonRow title="Bell Fights" buttons={bellPockets} />
		<ButtonRow title="Buffs" buttons={buffPockets} />
		<ButtonRow title="Items" buttons={itemPockets} />
	</div>
)

export default App;
