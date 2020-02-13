/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//list length = prime number 43.
const​ ​ graphColors​ = [
	'#FF3232​' , '#7FFF32' , '#E5FF32​' , '#FFB232'​ , '#FF32B4'​ ,​ '#D632FF​' ,
	'#3281FF​' , '#32DCFF​' , '#32FF84​' , '#B20000​' , '#42B200'​ , '#9CB200' ,
	'#B26F00​' , '#B20071'​ ,​ '#8E00B2'​ , '#0044B2'​ , '#0094B2'​ , '#00B247​' ,
	'#660000​' , '#266600' , '#596600​' ,​ '#663F00'​ ,​ '#660040' , '#510066' ,
	'#002766​' , '#005466' , '#006628​'​ ,​ '#EAFF59' , '#0661FF​' , '#00D4FF​' ,
	'#FFC059​' , '#FF59C2​' , '#DD59FF​' , '#5998FF'​ , '#59E3FF'​ , '#59FF9B​' ,
	'#FF0000​' , '#5FFF00​' , '#DFFF00​' , '#FF9F00'​ , '#FF00A1'​ ,​ '#CC00FF​' ,
	'#00FF66​' 
	];

	const colorsReversed = graphColors.reverse();

	/**
	 * Chooses meter or group color based on their
	 * @param {number} label Graph ID number to use as index
	 * @param {boolean} meter true if graphing a meter, false if graphing a group.
	 * @returns {String} Hex color code
	 */
	export default function getGraphColor(graphID: number, meter: boolean): string {
		if (meter) { //if meter is being graphed
			return graphColors[(graphID - 1) % graphColors.length];
		} else{ //if group is being graphed
			return colorsReversed[(graphID - 1) % colorsReversed.length]
		}
	}

