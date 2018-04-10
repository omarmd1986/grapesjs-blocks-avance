export default (editor, config = {}) => {
    const domc = editor.DomComponents;

    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    var traits = [];
    traits.push({
        type: 'text',
        placeholder: '//url.to.page.com',
        label: 'Src',
        name: 'src'
    });
    traits.push({
        type: 'checkbox',
        label: 'Allow full screen',
        name: 'allowfullscreen'
    });
    traits.push({
        type: 'number',
        label: 'Border',
        name: 'frameborder'
    });

    var randomID = function () {
        return Math.random().toString(36).substr(2, 9);
    };

    domc.addType('iframe', {
        // Define the Model
        model: defaultModel.extend({
            // Extend default properties
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                // Can't drop other elements inside it
                droppable: false,
                // Traits (Settings)
                traits: traits
            }),
            init: function () {
                this.set('attributes', {
                    id: randomID(),
                    width: '100%',
                    height: '350',
                    frameborder: 0,
                    allowfullscreen: true
                });
            }
        }, {
            isComponent: function (el) {
                if (el.tagName === 'IFRAME' && el.className === 'iframe') {
                    return {type: 'iframe'};
                }
            }
        }),

        // Define the View
        view: defaultType.view
    });
}
