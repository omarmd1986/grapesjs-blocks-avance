import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';

export default grapesjs.plugins.add('gjs-blocks-avance', (editor, opts = {}) => {
    const options = {...{
                blocks: ['grid-items', 'list-items', 'header', 'section', 'footer', 'iframe'],

                gridsCategory: `Marketing`,

                containerCategory: `Containers`
        }, ...opts};

    // Add components
    loadComponents(editor, options);

    // Add blocks
    loadBlocks(editor, options);
});
