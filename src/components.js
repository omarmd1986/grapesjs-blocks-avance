export default (editor, config = {}) => {
    const domc = editor.DomComponents;

    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    const videoType = domc.getType('video');
    const videoView = videoType.view;
    const videoModel = videoType.model;

    var traits = [];
    traits.push({
        type: 'text',
        placeholder: '//url.to.page.com',
        label: 'Source',
        changeProp: 1,
        name: 'src'
    });

    var randomID = function () {
        return Math.random().toString(36).substr(2, 9);
    };

    let model = defaultModel.extend({
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
                src: '',
                frameborder: 0,
                allowfullscreen: true
            });
        }
    }, {
        isComponent: function (el) {
            var result = {};
            if (el.tagName === 'IFRAME' && el.className === 'iframe') {
                result = {type: 'iframe'};
                result.src = el.src;
            }
            return result;
        }
    });

    domc.addType('iframe', {
        // Define the Model
        model: model,

        // Define the View
        view: videoView.extend({
            renderSource: function () {
                var el = document.createElement('iframe');
                el.src = this.attr.src;
                el.frameBorder = 0;
                el.setAttribute('allowfullscreen', false);
                this.initVideoEl(el);
                setTimeout(function () {
                    el.parentElement.setAttribute('style', 'position: relative; height:0; padding-bottom:56.25%;');
                }, 100)
                return el;
            }
        })
    });
}
