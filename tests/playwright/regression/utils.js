
const { expect } = require( '@playwright/test' );
module.exports = {
	addWidget: async ( editor, widgetsName ) => {
		const widgetId = await editor.addWidget( widgetsName );
		const element = await editor.getPreviewFrame().locator( `.elementor-element-${ widgetId }` );
		await editor.page.waitForTimeout( 800 );
		expect( await element.screenshot( {
			type: 'jpeg',
			quality: 70,
		} ) ).toMatchSnapshot( `test-screenshots/${ widgetsName }.jpeg` );
		return element;
	},
};
