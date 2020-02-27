import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import safetyMapBlank from './assets/map-blank.png';
import safetyMapFull from './assets/map-full.png';

const view = ({properties}, dispatch) => {
	return (
		<div>
			{(!properties.table || properties.table === "" || properties.table === true)?
				<div>
					<img src={safetyMapBlank} />
				</div>
				:
				<div>
					<img src={safetyMapFull} />
				</div>
			}
		</div>
	);
};

createCustomElement('safety-map', {
	renderer: {type: snabbdom},
	view,
	styles,
	properties: {
		table: {default: ""}
	}
});
